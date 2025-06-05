import { useState, useMemo } from "react";
import jewelryData from "../data/jewelry.json";
import ProductCard from "./ProductCard";
import ProductGridHeader from "./ProductGridHeader";
import ProductGridFilters from "./ProductGridFilters";

const ProductGrid = ({
  searchQuery,
  selectedCategory,
  sortBy,
  onSortChange,
  onProductClick,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const products = jewelryData.products;

  const filteredProducts = useMemo(() => {
    let filtered = products;
    // ... (same filtering and sorting logic as before)
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((product) => {
        const nameStartsWith = product.name.toLowerCase().startsWith(query);
        const categoryStartsWith = product.category.toLowerCase().startsWith(query);
        const materialStartsWith = product.material.toLowerCase().startsWith(query);
        const nameIncludes = product.name.toLowerCase().includes(query);
        const descriptionIncludes = product.description.toLowerCase().includes(query);
        const categoryIncludes = product.category.toLowerCase().includes(query);
        const materialIncludes = product.material.toLowerCase().includes(query);
        return (
          nameStartsWith ||
          categoryStartsWith ||
          materialStartsWith ||
          nameIncludes ||
          descriptionIncludes ||
          categoryIncludes ||
          materialIncludes
        );
      });
      filtered.sort((a, b) => {
        const aNameStarts = a.name.toLowerCase().startsWith(query) ? 1 : 0;
        const bNameStarts = b.name.toLowerCase().startsWith(query) ? 1 : 0;
        const aCategoryStarts = a.category.toLowerCase().startsWith(query) ? 1 : 0;
        const bCategoryStarts = b.category.toLowerCase().startsWith(query) ? 1 : 0;
        const aScore = aNameStarts * 3 + aCategoryStarts * 2;
        const bScore = bNameStarts * 3 + bCategoryStarts * 2;
        return bScore - aScore;
      });
    }
    if (selectedCategory && selectedCategory !== "all") {
      if (selectedCategory === "new") {
        filtered = filtered.filter((product) => product.isNew);
      } else if (selectedCategory === "bestsellers") {
        filtered = filtered.filter((product) => product.isBestSeller);
      } else {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory
        );
      }
    }
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "bestsellers":
        filtered.sort(
          (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller)
        );
        break;
      default:
        filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    }
    return filtered;
  }, [searchQuery, selectedCategory, sortBy, products]);

  const handleExploreClick = (product, e) => {
    e.stopPropagation();
    if (onProductClick) {
      onProductClick(product);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.location.href = "/jewelry";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50" data-section="products">
      <div className="container-responsive">
        <ProductGridHeader
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          productCount={filteredProducts.length}
        />
        <ProductGridFilters
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          sortBy={sortBy}
          onSortChange={onSortChange}
          productCount={filteredProducts.length}
        />
        {searchQuery && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm sm:text-base">
              {filteredProducts.length > 0
                ? `Found ${filteredProducts.length} result${filteredProducts.length !== 1 ? "s" : ""} for "${searchQuery}"`
                : `No results found for "${searchQuery}". Try a different search term.`}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onExplore={handleExploreClick}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 font-light text-lg">
              No products found matching your criteria.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search or category selection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
