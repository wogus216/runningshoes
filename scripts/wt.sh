#!/usr/bin/env bash
# 에이전트 작업 격리 — Codex·Claude 여러 세션이 같은 폴더(main 체크아웃)를 동시에 만지지 않게 한다.
#
#   scripts/wt.sh new <이름>   origin/main 기준 .worktrees/<이름> (브랜치 wt/<이름>) 생성 → 경로 출력
#   scripts/wt.sh ship         (worktree 안에서) origin/main 위로 rebase 후 main 에 push
#   scripts/wt.sh rm <이름>    worktree 삭제 + main 에 들어간 브랜치면 브랜치도 삭제
#   scripts/wt.sh list         worktree 목록
#   scripts/wt.sh check        지금 위치가 main 체크아웃인지 알려 준다 (세션 시작 훅용)
#
# 왜: 2026-09-27 GPT 2 세션 + Claude 1 세션이 main 체크아웃 하나에서 동시에 작업했다.
# pre-push 빌드가 남의 미커밋 작업까지 빌드하고, 누가 git add 한 파일이 남의 커밋에 섞일 수 있었다.
set -euo pipefail

COMMON="$(git rev-parse --path-format=absolute --git-common-dir)"
REPO="${COMMON%/.git}"
GITDIR="$(git rev-parse --absolute-git-dir)"
cmd="${1:-}"
name="${2:-}"

in_main_checkout() { [ "$GITDIR" = "$COMMON" ]; }

# git 에 없는 로컬 자산을 worktree 에 연결한다. 없으면 빌드·스크립트·지침이 깨진다.
# 링크는 디렉토리가 아니라서 `/.codex/` 같은 슬래시 끝 gitignore 에 안 걸린다 — 공용 info/exclude 에 등록해
# `git add -A` 로 링크가 커밋에 섞이지 않게 한다.
link() {
  local wt="$1" rel="$2"
  [ -e "$REPO/$rel" ] || [ -L "$REPO/$rel" ] || return 0
  if [ -e "$wt/$rel" ] || [ -L "$wt/$rel" ]; then return 0; fi
  mkdir -p "$(dirname "$wt/$rel")"
  ln -s "$REPO/$rel" "$wt/$rel"
  if ! git -C "$wt" check-ignore -q "$rel"; then
    grep -qxF "/$rel" "$COMMON/info/exclude" 2>/dev/null || echo "/$rel" >> "$COMMON/info/exclude"
  fi
}

link_private() {
  local wt="$1" d f
  ln -sfn "$REPO/node_modules" "$wt/node_modules"
  # 키·환경변수·Codex 지침
  for f in .ga-key.json .env .env.local AGENTS.md; do link "$wt" "$f"; done
  # CLAUDE.md 는 링크하지 않는다 — worktree 가 리포 안(.worktrees/)이라 Claude 가 상위에서 읽는다(링크하면 두 번 읽힘)
  # .claude·.codex·.omc 는 일부만 git 에 있다 — 통째 링크 대신 빠진 하위 항목만 채운다
  # (.omc 는 에이전트 공유 상태 — 플레이북·인스타 감시 산출물을 main 과 같은 것을 보게 한다)
  for d in .claude/skills .claude/commands .codex .codex/skills .omc; do
    [ -d "$REPO/$d" ] || continue
    for f in "$REPO/$d"/* "$REPO/$d"/.[!.]*; do
      [ -e "$f" ] || continue
      if [ "$d" = ".codex" ] && [ "$(basename "$f")" = "skills" ]; then continue; fi
      link "$wt" "$d/$(basename "$f")"
    done
  done
  for f in .claude/settings.json .claude/settings.local.json; do link "$wt" "$f"; done
  # husky 훅은 .husky/_ (gitignore)에 생성된다 — 없으면 pre-commit·pre-push 가 조용히 전부 건너뛴다
  (cd "$wt" && npx --no-install husky >/dev/null 2>&1) || echo "⚠️  husky 설치 실패 — $wt/.husky/_ 확인" >&2
}

case "$cmd" in
  new)
    [ -n "$name" ] || { echo "사용: scripts/wt.sh new <이름>" >&2; exit 1; }
    wt="$REPO/.worktrees/$name"
    [ -e "$wt" ] && { echo "이미 있음: $wt" >&2; exit 1; }
    git -C "$REPO" fetch -q origin main
    git -C "$REPO" worktree add -q -b "wt/$name" "$wt" origin/main
    link_private "$wt"
    echo "$wt"
    ;;
  ship)
    in_main_checkout && { echo "❌ main 체크아웃에서는 ship 하지 않는다 — worktree 안에서 실행" >&2; exit 1; }
    [ -z "$(git status --porcelain --untracked-files=no)" ] || { echo "❌ 커밋 안 된 변경이 있다" >&2; exit 1; }
    git fetch -q origin main
    git rebase -q origin/main
    git push origin HEAD:main
    ;;
  rm)
    [ -n "$name" ] || { echo "사용: scripts/wt.sh rm <이름>" >&2; exit 1; }
    git -C "$REPO" worktree remove "$REPO/.worktrees/$name"   # 미커밋 변경이 있으면 git 이 거부한다
    git -C "$REPO" fetch -q origin main
    # 강제 삭제(-D)는 쓰지 않는다 — 브랜치 upstream 이 origin/main 이라 main 에 들어갔으면 -d 로 지워진다
    git -C "$REPO" branch -d -q "wt/$name" 2>/dev/null \
      || echo "⚠️  wt/$name 에 origin/main 에 없는 커밋이 있어 브랜치를 남겼다 (ship 했는지 확인)" >&2
    ;;
  list)
    git -C "$REPO" worktree list
    ;;
  check)
    if in_main_checkout; then
      echo "⚠️  main 체크아웃($REPO)이다. 파일을 고치기 전에 격리 worktree 를 만든다:"
      echo "    scripts/wt.sh new <작업이름>   → 출력된 경로에서 작업 · 끝나면 그 안에서 scripts/wt.sh ship"
      echo "    (main 체크아웃 커밋은 pre-commit 이 막는다. 조회·분석만 할 거면 무시)"
    else
      echo "✅ worktree: $(git rev-parse --show-toplevel) ($(git branch --show-current))"
    fi
    ;;
  *)
    sed -n '2,10p' "$0" | sed 's/^# \{0,1\}//'
    exit 1
    ;;
esac
