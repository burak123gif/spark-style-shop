import { ChevronDown } from "lucide-react";

interface ProductGridFiltersProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  productCount: number;
}

const ProductGridFilters = ({
  showFilters,
  setShowFilters,
  sortBy,
  onSortChange,
  productCount,
}: ProductGridFiltersProps) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0">
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
      >
        <span>Filters</span>
        <ChevronDown
          className={`h-4 w-4 transform transition-transform duration-200 ${
            showFilters ? "rotate-180" : ""
          }`}
        />
      </button>
      <span className="text-gray-500 hidden sm:inline">|</span>
      <span className="text-gray-600 text-sm sm:text-base">{productCount} products</span>
    </div>
    <div className="flex items-center space-x-4 w-full sm:w-auto">
      <span className="text-gray-600 font-light text-sm sm:text-base">Sort by:</span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-200 rounded px-3 py-2 bg-white text-gray-700 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 text-sm sm:text-base w-full sm:w-auto"
      >
        <option value="newest">Newest</option>
        <option value="bestsellers">Best Sellers</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  </div>
);

export default ProductGridFilters;
