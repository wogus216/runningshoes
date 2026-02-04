import { Quote, CheckCircle2, AlertCircle } from 'lucide-react';

interface EditorCommentProps {
  comment: string;
  recommendFor: string[];
  notRecommendFor: string[];
}

export function EditorComment({ comment, recommendFor, notRecommendFor }: EditorCommentProps) {
  return (
    <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6">
      <div className="flex items-start gap-3 mb-4">
        <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
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
          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
              <h4 className="font-semibold text-green-800 dark:text-green-300">
                추천 대상
              </h4>
            </div>
            <ul className="space-y-1.5">
              {recommendFor.map((item, index) => (
                <li key={index} className="text-sm text-green-700 dark:text-green-400 flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-500 mt-0.5">•</span>
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
