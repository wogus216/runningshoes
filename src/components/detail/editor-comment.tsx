import { Quote, CheckCircle2, AlertCircle } from 'lucide-react';

interface EditorCommentProps {
  comment: string;
  recommendFor: string[];
  notRecommendFor: string[];
}

export function EditorComment({ comment, recommendFor, notRecommendFor }: EditorCommentProps) {
  return (
    <div className="rounded-[26px] border border-sky-200 bg-[linear-gradient(135deg,rgba(239,246,255,0.96),rgba(255,255,255,0.94))] p-6">
      <div className="flex items-start gap-3 mb-4">
        <Quote className="mt-1 h-6 w-6 flex-shrink-0 text-sky-700" />
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            에디터의 한마디
          </h3>
          <p className="text-base text-foreground/90 leading-relaxed">
            {comment}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {recommendFor.length > 0 && (
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5 text-sky-700" />
              <h4 className="font-semibold text-sky-800">
                추천 대상
              </h4>
            </div>
            <ul className="space-y-1.5">
              {recommendFor.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-sky-700">
                  <span className="mt-0.5 text-sky-700">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {notRecommendFor.length > 0 && (
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
              <h4 className="font-semibold text-amber-800 dark:text-amber-300">
                주의 사항
              </h4>
            </div>
            <ul className="space-y-1.5">
              {notRecommendFor.map((item, index) => (
                <li key={index} className="text-sm text-amber-700 dark:text-amber-400 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
