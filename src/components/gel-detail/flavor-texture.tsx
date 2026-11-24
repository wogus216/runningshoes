import type { Gel } from '@/types/gel';

export function FlavorTexture({ gel }: { gel: Gel }) {
  const { flavors, texture, aftertaste } = gel.flavorProfile;
  if (flavors.length === 0 && !texture && !aftertaste) return null;

  return (
    <section className="space-y-4">
      <h2 className="font-bold text-primary">맛 옵션</h2>
      {flavors.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {flavors.map(flavor => (
            <li key={flavor} className="rounded border border-border bg-white px-3 py-2 text-sm text-secondary">{flavor}</li>
          ))}
        </ul>
      )}
      {texture && <p className="text-sm text-secondary">{texture}</p>}
      {aftertaste && <p className="text-sm text-secondary">{aftertaste}</p>}
    </section>
  );
}
