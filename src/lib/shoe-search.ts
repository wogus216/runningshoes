export const brandLabelMap: Record<string, string> = {
    'Nike': '나이키', 'Adidas': '아디다스', 'Asics': '아식스', 'Hoka': '호카',
    'Brooks': '브룩스', 'Saucony': '써코니', 'Mizuno': '미즈노', 'New Balance': '뉴발란스',
    'On': '온러닝', 'Puma': '푸마', 'Li-Ning': '라이닝', 'Salomon': '살로몬',
    'Diadora': '디아도라',
    'Merrell': '머렐',
    'Kiprun': '킵런',
    'Under Armour': '언더아머',
    'Prospecs': '프로스펙스',
  };

export function compactSearch(text: string): string {
  return text.normalize('NFKC').toLowerCase().replace(/[\s-]+/g, '');
}

export function shoeSearchNames(brand: string, model: string): string[] {
  const aliases = [brand, brandLabelMap[brand]];
  if (brand === 'Saucony') aliases.push('사코니');
  if (brand === 'On') aliases.push('온');
  return aliases.filter(Boolean).map(alias => compactSearch(alias + model));
}
