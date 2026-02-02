import type { Gel } from "@/types/gel";

type NutritionSpecsProps = {
  gel: Gel;
};

export function NutritionSpecs({ gel }: NutritionSpecsProps) {
  const nutrition = gel.nutritionFacts;

  const specs = [
    { label: '열량', value: `${nutrition.calories} kcal` },
    { label: '탄수화물', value: `${nutrition.totalCarbs} g`, highlight: true },
    { label: '탄수화물 원료', value: nutrition.carbSource, highlight: true },
    ...(nutrition.glucoseFructoseRatio ? [{ label: '포도당:과당 비율', value: nutrition.glucoseFructoseRatio, highlight: true }] : []),
    { label: '카페인', value: `${nutrition.caffeine} mg`, highlight: nutrition.caffeine > 0 },
    { label: '나트륨', value: `${nutrition.sodium} mg` },
    ...(nutrition.potassium ? [{ label: '칼륨', value: `${nutrition.potassium} mg` }] : []),
    ...(nutrition.magnesium ? [{ label: '마그네슘', value: `${nutrition.magnesium} mg` }] : []),
    ...(nutrition.fiber ? [{ label: '식이섬유', value: `${nutrition.fiber} g` }] : []),
    ...(nutrition.fat ? [{ label: '지방', value: `${nutrition.fat} g` }] : []),
    ...(nutrition.protein ? [{ label: '단백질', value: `${nutrition.protein} g` }] : []),
    { label: '1회 제공량', value: `${nutrition.servingSize} ${nutrition.servingUnit}` },
  ];

  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-primary">영양성분</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {specs.map((spec, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-3 rounded-lg ${
              spec.highlight ? 'bg-accent/10 border border-accent/20' : 'bg-surface'
            }`}
          >
            <span className="text-sm text-secondary">{spec.label}</span>
            <span className={`text-sm font-medium ${spec.highlight ? 'text-accent' : 'text-primary'}`}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* 주요 영양소 하이라이트 */}
      <div className="mt-6 p-4 bg-surface rounded-xl">
        <h3 className="text-sm font-bold text-primary mb-3">주요 영양소</h3>
        <div className="space-y-2 text-sm text-secondary">
          <p>
            <span className="text-accent font-medium">탄수화물:</span>{' '}
            {nutrition.carbSource}
          </p>
          {nutrition.glucoseFructoseRatio && (
            <p>
              <span className="text-accent font-medium">비율:</span>{' '}
              {nutrition.glucoseFructoseRatio} (포도당:과당)
            </p>
          )}
          {nutrition.caffeine > 0 && (
            <p>
              <span className="text-warning font-medium">카페인:</span>{' '}
              {nutrition.caffeine}mg (커피 약 {Math.round(nutrition.caffeine / 100)}잔)
            </p>
          )}
          <p>
            <span className="text-primary font-medium">전해질:</span>{' '}
            나트륨 {nutrition.sodium}mg
            {nutrition.potassium && `, 칼륨 ${nutrition.potassium}mg`}
            {nutrition.magnesium && `, 마그네슘 ${nutrition.magnesium}mg`}
          </p>
        </div>
      </div>
    </div>
  );
}
