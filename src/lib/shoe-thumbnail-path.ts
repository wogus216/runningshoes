export function thumbnailPath(source: string): string {
  return source.replace('/images/shoes/', '/shoe-thumbs/').replace(/\.[^/.]+$/, '.webp');
}

export function cutoutPath(source: string): string {
  return thumbnailPath(source).replace('/shoe-thumbs/', '/shoe-cutouts/');
}
