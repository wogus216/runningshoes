export function thumbnailPath(source: string): string {
  return source.replace('/images/shoes/', '/shoe-thumbs/').replace(/\.[^/.]+$/, '.webp');
}
