#!/bin/bash
#
# 인기 데이터 2주 주기 자동 갱신 (launchd에서 호출)
#
# 하는 일: GA4에서 인기 순위를 뽑아 popular.ts 가 바뀌었을 때만 origin/main 에
# 커밋·푸시한다. 푸시하면 Cloudflare Workers가 알아서 배포한다.
#
# ⚠️ 설계상 중요한 점 — 워킹트리를 절대 건드리지 않는다.
#    운영자가 다른 브랜치에서 작업 중일 수 있다(실제로 오늘 다른 세션 커밋이
#    작업 브랜치에 섞이는 사고가 있었다). 그래서:
#    - 결과를 임시 파일에 쓰고(POPULAR_OUT)
#    - git 밑단 명령(hash-object/read-tree/commit-tree)으로 origin/main 위에만 커밋을 만들고
#    - 로컬 브랜치·인덱스·체크아웃을 일절 수정하지 않는다
#
# 수동 실행(테스트): bash scripts/popular-cron.sh --dry-run
# 로그: ~/Library/Logs/allrunabout-popular.log
# 해제: launchctl bootout gui/$(id -u)/com.allrunabout.popular

set -euo pipefail

REPO="/Users/kwonjaehyeon/Programming/sancho/runningshoes"
TARGET_PATH="src/lib/data/popular.ts"
BRANCH="main"
DRY_RUN="${1:-}"

cd "$REPO"

# launchd 는 로그인 셸 PATH를 안 물려받는다 — node/npm 경로를 직접 잡아준다
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

log "── 인기 데이터 갱신 시작 ──"

TMP_OUT="$(mktemp -t popular).ts"
TMP_INDEX="$(mktemp -t popidx)"
cleanup() { rm -f "$TMP_OUT" "$TMP_INDEX"; }
trap cleanup EXIT

# 1) GA에서 생성 (임시 파일로 — 워킹트리 안 건드림)
#    ga-popular.ts 가 결과가 빈약하면 스스로 exit 1 한다
if ! POPULAR_OUT="$TMP_OUT" npm run --silent popular > /tmp/popular-run.log 2>&1; then
  log "❌ 생성 실패 — 푸시하지 않고 중단합니다"
  tail -5 /tmp/popular-run.log | sed 's/^/    /'
  exit 1
fi
log "생성 완료"

# 2) 원격 최신 상태 확보 (로컬 브랜치는 안 건드림)
git fetch --quiet origin "$BRANCH"
BASE="$(git rev-parse "origin/$BRANCH")"

# 3) 내용이 실제로 바뀌었는지 확인 — 안 바뀌었으면 커밋하지 않는다
NEW_BLOB="$(git hash-object -w "$TMP_OUT")"
OLD_BLOB="$(git rev-parse "$BASE:$TARGET_PATH" 2>/dev/null || echo "none")"

if [ "$NEW_BLOB" = "$OLD_BLOB" ]; then
  log "변화 없음 — 커밋 생략"
  exit 0
fi

if [ "$DRY_RUN" = "--dry-run" ]; then
  log "[dry-run] 변경 감지됨. 실제로는 아래 차이를 커밋·푸시합니다:"
  git --no-pager diff --stat "$OLD_BLOB" "$NEW_BLOB" 2>/dev/null | sed 's/^/    /' || true
  git --no-pager diff "$OLD_BLOB" "$NEW_BLOB" 2>/dev/null | head -40 | sed 's/^/    /' || true
  exit 0
fi

# 4) origin/main 위에 커밋을 "만들기만" 한다 — 체크아웃·인덱스 무관
export GIT_INDEX_FILE="$TMP_INDEX"
git read-tree "$BASE"
git update-index --add --cacheinfo "100644,$NEW_BLOB,$TARGET_PATH"
TREE="$(git write-tree)"
unset GIT_INDEX_FILE

# [0-9]+ 로 최소 1자리를 강제한다 — [0-9]* 로 두면 파일 위쪽 인터페이스 선언의
# `windowDays: number;` 가 빈 문자열로 먼저 매치돼 커밋 메시지가 "최근 일"이 된다
WINDOW="$(grep -oE 'windowDays: [0-9]+' "$TMP_OUT" | head -1 | grep -oE '[0-9]+')"
COMMIT="$(git commit-tree "$TREE" -p "$BASE" -m "chore(popular): 인기 데이터 자동 갱신 (최근 ${WINDOW}일 GA4 실측)

scripts/popular-cron.sh 가 2주 주기로 생성. 순위 배열만 바뀝니다.")"

# 5) 원격에만 반영 (로컬 refs/heads/main 은 그대로 둔다)
git push --quiet origin "$COMMIT:refs/heads/$BRANCH"
log "✅ 푸시 완료 — ${COMMIT:0:7} → origin/$BRANCH (Cloudflare 자동 배포)"
