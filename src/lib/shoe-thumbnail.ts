import { img } from './image';
import sources from './data/shoe-thumbnails.json';
import cutouts from './data/shoe-cutouts.json';
import { cutoutPath, thumbnailPath } from './shoe-thumbnail-path';

const available = new Set(sources);
const galleryCutouts = new Set<string>(cutouts);

/** A new model uses its original until its centered thumbnail is generated. */
export function shoeThumbnail(source: string): string {
  return available.has(source) ? thumbnailPath(source) : img(source);
}

/** Retain the original gallery photograph for views without a processed cutout. */
export function shoeGalleryImage(source: string): string {
  return galleryCutouts.has(source) ? cutoutPath(source) : img(source);
}
