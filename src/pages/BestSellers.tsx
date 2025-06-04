
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

const BestSellers = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("bestsellers");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => {}}
        onWishlistClick={() => {}}
        onSearchChange={setSearchQuery}
        onCategoryChange={() => {}}
        wishlistItemsCount={wishlistItems.length}
      />
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-4">
            Best Sellers
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Discover our most loved jewelry pieces, chosen by customers worldwide
          </p>
        </div>
      </div>
      
      <ProductGrid 
        searchQuery={searchQuery}
        selectedCategory="bestsellers"
        sortBy={sortBy}
        onSortChange={setSortBy}
        onProductClick={setSelectedProduct}
      />
      
      <Footer />
    </div>
  );
};

export default BestSellers;
