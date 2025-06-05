import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const getStockStatus = (stock: number) => {
  if (stock === 0) return "Out of Stock";
  if (stock <= 3) return "Low Stock";
  return "In Stock";
};

const getStockColor = (stock: number) => {
  if (stock === 0) return "text-red-600";
  if (stock <= 3) return "text-orange-600";
  return "text-green-600";
};

interface ProductCardProps {
  product: any;
  onExplore: (product: any, e: React.MouseEvent) => void;
}

const ProductCard = ({ product, onExplore }: ProductCardProps) => (
  <div
    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    onClick={(e) => onExplore(product, e)}
  >
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {product.isNew && (
        <span className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 text-xs sm:text-sm font-light tracking-wide">
          NEW
        </span>
      )}
      {product.isBestSeller && (
        <span className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-xs sm:text-sm font-light tracking-wide">
          BESTSELLER
        </span>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <Button
          onClick={(e) => onExplore(product, e)}
          className="explore-btn opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 hover:bg-yellow-600 hover:text-white text-sm sm:text-base focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
          aria-label={`Explore ${product.name}`}
        >
          <Eye className="h-4 w-4 mr-2" />
          Explore
        </Button>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-light tracking-wide text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
        {product.name}
      </h3>
      <p className="text-gray-600 font-light mb-2 line-clamp-2 text-sm sm:text-base">
        {product.description}
      </p>
      <div className="flex justify-between items-center mb-2">
        <p className="text-xl sm:text-2xl font-light text-gray-900">
          ${product.price.toLocaleString()}
        </p>
        <span className={`text-xs sm:text-sm font-light ${getStockColor(product.stock)}`}>
          {getStockStatus(product.stock)}
        </span>
      </div>
      <p className="text-gray-500 text-xs sm:text-sm font-light capitalize">
        Material: {product.material}
      </p>
    </div>
  </div>
);

export default ProductCard;
