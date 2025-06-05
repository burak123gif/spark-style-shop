interface ProductGridHeaderProps {
  searchQuery: string;
  selectedCategory: string;
  productCount: number;
}

const getCategoryDisplayName = (category: string) => {
  const categoryMap: Record<string, string> = {
    all: "All Products",
    new: "New Arrivals",
    bestsellers: "Best Sellers",
    necklaces: "Necklaces",
    rings: "Rings",
    earrings: "Earrings",
    bracelets: "Bracelets",
  };
  return categoryMap[category] || category;
};

const ProductGridHeader = ({
  searchQuery,
  selectedCategory,
  productCount,
}: ProductGridHeaderProps) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="heading-responsive font-light tracking-wide text-gray-900 mb-4">
      {searchQuery
        ? `Search Results for "${searchQuery}"`
        : getCategoryDisplayName(selectedCategory)}
    </h2>
    <p className="text-gray-600 font-light max-w-2xl mx-auto text-responsive">
      {searchQuery
        ? `Found ${productCount} result${productCount !== 1 ? "s" : ""} matching your search`
        : "Each piece in our collection is carefully curated to bring you the finest in luxury jewelry"}
    </p>
  </div>
);

export default ProductGridHeader;
