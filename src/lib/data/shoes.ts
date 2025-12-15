// 브랜드별로 분리된 데이터를 re-export
// 실제 데이터는 ./shoes/ 폴더에 있습니다
export {
  shoes,
  categoryOrder,
  getShoes,
  groupShoesByCategory,
  groupShoesByBrand,
  getBrandsFromShoes,
  getShoeBySlug,
  getSimilarShoesData,
} from './shoes/index';

export type { SimilarShoeInfo } from './shoes/index';
