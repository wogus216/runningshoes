type SimilarShoesProps = {
  similarShoes?: string[];
};

type SimilarShoeData = {
  brand: string;
  name: string;
  rating: number;
  comment: string;
};

const shoeDataMap: Record<string, SimilarShoeData> = {
  "adidas-supernova-rise-2": {
    brand: "Adidas",
    name: "슈퍼노바 라이즈2",
    rating: 4,
    comment: "비슷한 가격, 더 넓은 토박스",
  },
  "asics-cumulus-27": {
    brand: "Asics",
    name: "쿠무루스 27",
    rating: 4,
    comment: "더 가벼움, 일본 기술력",
  },
  "newbalance-880-v14": {
    brand: "New Balance",
    name: "880 V14",
    rating: 4,
    comment: "비슷한 성능, 더 저렴",
  },
  "hoka-clifton-10": {
    brand: "Hoka",
    name: "클리프턴 10",
    rating: 5,
    comment: "더 쿠셔닝, 더 가벼움, 약간 비쌈",
  },
};

export function SimilarShoes({ similarShoes = [] }: SimilarShoesProps) {
  if (similarShoes.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">👟</span>
        비슷한 신발 추천
      </h2>
      <p className="text-gray-600">같은 카테고리(입문/데일리) 대안</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {similarShoes.map((shoeId) => {
          const shoe = shoeDataMap[shoeId];
          if (!shoe) return null;

          return (
            <div
              key={shoeId}
              className="bg-white rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-3"
            >
              <div className="text-6xl mb-4">🏃</div>
              <div className="text-sm font-semibold text-[#667eea] mb-2">{shoe.brand}</div>
              <div className="font-bold text-gray-900 mb-2">{shoe.name}</div>
              <div className="text-yellow-500 text-sm mb-2">
                {"★".repeat(shoe.rating)}
                {"☆".repeat(5 - shoe.rating)}
              </div>
              <p className="text-xs text-gray-600">{shoe.comment}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
