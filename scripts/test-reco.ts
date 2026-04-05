import { recommendShoes } from '../src/lib/recommendation';
import { shoes } from '../src/lib/data/shoes/index';

const experiences = ['beginner', 'intermediate', 'advanced'] as const;
const purposes = ['training', 'racing', 'recovery', 'all'] as const;
const footWidths = ['narrow', 'standard', 'wide'] as const;
const footArches = ['flat', 'normal', 'high'] as const;
const budgets = ['low', 'mid', 'high'] as const;
const injurySets: string[][] = [[], ['kneeIssues'], ['plantarFasciitis'], ['achillesTendinopathy'], ['kneeIssues', 'plantarFasciitis']];
const paces = [undefined, 'slow', 'medium', 'fast'] as const;
const seasons = [undefined, 'summer', 'winter'] as const;

const allSlugs = new Set<string>();
let profileCount = 0;

for (const exp of experiences) {
  for (const purpose of purposes) {
    for (const budget of budgets) {
      for (const width of footWidths) {
        for (const arch of footArches) {
          for (const injuries of injurySets) {
            for (const pace of paces) {
              for (const season of seasons) {
                const profile = {
                  experience: exp,
                  weeklyDistance: exp === 'advanced' ? 'high' as const : exp === 'intermediate' ? 'medium' as const : 'low' as const,
                  purpose,
                  footArch: arch,
                  footWidth: width,
                  injuries,
                  budget,
                  preferredBrands: [] as string[],
                  targetPace: pace,
                  season,
                };
                const results = recommendShoes(shoes, profile);
                results.forEach(r => allSlugs.add(r.slug));
                profileCount++;
              }
            }
          }
        }
      }
    }
  }
}

console.log('Total shoes:', shoes.length);
console.log('Profiles tested:', profileCount);
console.log('Unique shoes recommended:', allSlugs.size);
console.log('Coverage:', Math.round(allSlugs.size / shoes.length * 100) + '%');

const missing = shoes.filter(s => allSlugs.has(s.slug) === false);
if (missing.length > 0) {
  console.log('\nNot recommended (' + missing.length + '):');
  missing.forEach(s => console.log('  -', s.slug, '|', s.category, '|', s.price, '|', s.brand));
} else {
  console.log('\n100% coverage achieved!');
}
