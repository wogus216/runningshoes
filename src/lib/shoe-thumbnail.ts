import { img } from './image';
import sources from './data/shoe-thumbnails.json';
import { thumbnailPath } from './shoe-thumbnail-path';

const available = new Set(sources);

/** A new model uses its original until its centered thumbnail is generated. */
export function shoeThumbnail(source: string): string {
  return available.has(source) ? thumbnailPath(source) : img(source);
}
