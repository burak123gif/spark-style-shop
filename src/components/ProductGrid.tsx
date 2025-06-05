
import { useState, useMemo } from "react";
import { ChevronDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductGrid = ({ searchQuery, selectedCategory, sortBy, onSortChange, onProductClick }) => {
  const [showFilters, setShowFilters] = useState(false);

  // Updated product data with real jewelry images
  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 2499,
      category: "rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      description: "Classic diamond solitaire ring in 18k white gold",
      isNew: true,
      isBestSeller: false,
      stock: 5,
      material: "gold"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 899,
      category: "earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      description: "Elegant freshwater pearl drop earrings",
      isNew: false,
      isBestSeller: true,
      stock: 12,
      material: "silver"
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      price: 1299,
      category: "necklaces",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      description: "Delicate 14k gold chain necklace",
      isNew: true,
      isBestSeller: false,
      stock: 8,
      material: "gold"
    },
    {
      id: 4,
      name: "Tennis Bracelet",
      price: 3499,
      category: "bracelets",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      description: "Classic diamond tennis bracelet",
      isNew: false,
      isBestSeller: true,
      stock: 3,
      material: "gold"
    },
    {
      id: 5,
      name: "Emerald Pendant",
      price: 1899,
      category: "necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      description: "Stunning emerald pendant with gold chain",
      isNew: true,
      isBestSeller: false,
      stock: 6,
      material: "gold"
    },
    {
      id: 6,
      name: "Rose Gold Hoops",
      price: 699,
      category: "earrings",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
      description: "Modern rose gold hoop earrings",
      isNew: false,
      isBestSeller: true,
      stock: 15,
      material: "gold"
    },
    {
      id: 7,
      name: "Sapphire Eternity Ring",
      price: 2899,
      category: "rings",
      image: "https://images.unsplash.com/photo-1549388604-817d15aa0968?auto=format&fit=crop&w=800&q=80",
      description: "Blue sapphire eternity ring in platinum",
      isNew: true,
      isBestSeller: false,
      stock: 4,
      material: "platinum"
    },
    {
      id: 8,
      name: "Diamond Stud Earrings",
      price: 1599,
      category: "earrings",
      image: "https://images.unsplash.com/photo-1588444837495-c6c080964dd8?auto=format&fit=crop&w=800&q=80",
      description: "Classic diamond stud earrings",
      isNew: false,
      isBestSeller: true,
      stock: 10,
      material: "gold"
    },
    {
      id: 9,
      name: "Charm Bracelet",
      price: 899,
      category: "bracelets",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
      description: "Sterling silver charm bracelet",
      isNew: false,
      isBestSeller: false,
      stock: 7,
      material: "silver"
    }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      if (selectedCategory === "new") {
        filtered = filtered.filter(product => product.isNew);
      } else if (selectedCategory === "bestsellers") {
        filtered = filtered.filter(product => product.isBestSeller);
      } else {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "bestsellers":
        filtered.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
        break;
      default: // newest
        filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const getStockStatus = (stock) => {
    if (stock <= 3) return "Low Stock";
    if (stock === 0) return "Out of Stock";
    return "In Stock";
  };

  const getStockColor = (stock) => {
    if (stock <= 3) return "text-orange-600";
    if (stock === 0) return "text-red-600";
    return "text-green-600";
  };

  const handleExploreClick = (product, e) => {
    e.stopPropagation();
    // Scroll to top when viewing product details
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onProductClick(product);
  };

  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      "all": "All Products",
      "new": "New Arrivals", 
      "bestsellers": "Best Sellers",
      "necklaces": "Necklaces",
      "rings": "Rings",
      "earrings": "Earrings",
      "bracelets": "Bracelets"
    };
    return categoryMap[category] || category;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-responsive font-light tracking-wide text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : getCategoryDisplayName(selectedCategory)}
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto text-responsive">
            {searchQuery 
              ? `Found ${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} matching your search`
              : "Each piece in our collection is carefully curated to bring you the finest in luxury jewelry"
            }
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span className="text-gray-600 text-sm sm:text-base">{filteredProducts.length} products</span>
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

        {/* Search Results Feedback */}
        {searchQuery && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm sm:text-base">
              {filteredProducts.length > 0 
                ? `Found ${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} for "${searchQuery}"`
                : `No results found for "${searchQuery}". Try a different search term.`
              }
            </p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => handleExploreClick(product, { stopPropagation: () => {} })}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
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
                
                {/* Explore Button - appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Button
                    onClick={(e) => handleExploreClick(product, e)}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 hover:bg-yellow-600 hover:text-white text-sm sm:text-base"
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
