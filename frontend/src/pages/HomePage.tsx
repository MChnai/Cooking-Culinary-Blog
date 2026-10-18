import { type Recipe, RecipeStatus } from '@/types/recipe';

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Phở Bò Truyền Thống Hà Nội',
    slug: 'pho-bo-truyen-thong-ha-noi',
    summary: 'Món phở bò chuẩn vị Bắc với nước dùng trong, thơm ngọt từ xương ống.',
    content: 'Nội dung chi tiết cách nấu phở...',
    cookingTimeMinutes: 180,
    servings: 4,
    status: RecipeStatus.Published,
    authorId: 'u1',
    authorName: 'Đầu Bếp Như Ý',
    categoryId: 'c1',
    categoryName: 'Món Việt',
    ingredients: [
      { name: 'Xương ống bò', amount: '1', unit: 'kg' },
      { name: 'Bánh phở', amount: '500', unit: 'g' }
    ],
    createdAt: '2026-03-01T08:00:00Z'
  }
];

export const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Khám Phá Cẩm Nang Ẩm Thực
        </h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Chia sẻ và học hỏi hàng ngàn công thức nấu ăn ngon mỗi ngày từ cộng đồng đầu bếp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_RECIPES.map((recipe) => (
          <article key={recipe.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
            <div className="h-48 bg-gray-200 relative">
              <span className="absolute top-3 left-3 bg-white/90 text-orange-600 text-xs px-2.5 py-1 rounded-full font-medium">
                {recipe.categoryName}
              </span>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition">
                {recipe.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{recipe.summary}</p>
              <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs text-gray-500">
                <span>{recipe.authorName}</span>
                <span>{recipe.cookingTimeMinutes} phút</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};