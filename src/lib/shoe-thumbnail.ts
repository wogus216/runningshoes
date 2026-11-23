import { img } from './image';

/** Representative photos only. Gallery views retain their original framing. */
export function shoeThumbnail(source: string): string {
  return source.startsWith('/images/shoes/')
    ? source.replace('/images/shoes/', '/shoe-thumbs/') + '.webp'
    : img(source);
}
