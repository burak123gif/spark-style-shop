
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedCollections from "../components/FeaturedCollections";
import ProductGrid from "../components/ProductGrid";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { usePersistentState } from "../hooks/usePersistentState";
import { usePersistentWishlist } from "../hooks/usePersistentWishlist";

const Collections = () => {
  const [cartItems, setCartItems] = usePersistentState("luxe-cart", []);
  const { 
    wishlistItems, 
    addToWishlist, 
    removeFromWishlist, 
    showWishlistPopup 
  } = usePersistentWishlist();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleCheckout = () => {
    window.location.href = '/checkout';
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
          onWishlistClick={() => setIsWishlistOpen(true)}
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          wishlistItemsCount={wishlistItems.length}
        />
        <ProductDetail 
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
        />
        <Footer />
        {isCartOpen && (
          <Cart 
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onCheckout={handleCheckout}
          />
        )}
        {isWishlistOpen && (
          <Wishlist 
            items={wishlistItems}
            onClose={() => setIsWishlistOpen(false)}
            onRemoveItem={removeFromWishlist}
            onAddToCart={addToCart}
          />
        )}
        {showWishlistPopup && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            Added to wishlist! ❤️
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        wishlistItemsCount={wishlistItems.length}
      />
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Discover curated collections of fine jewelry for every occasion
          </p>
        </div>
      </div>
      
      <FeaturedCollections />
      
      <ProductGrid 
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onProductClick={setSelectedProduct}
      />
      
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Signature Collection</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Our signature pieces represent the pinnacle of craftsmanship and design. 
                Each item is meticulously crafted using the finest materials and traditional techniques.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Seasonal Collection</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Discover pieces inspired by the beauty of each season. From delicate spring florals 
                to bold winter statements, find jewelry that captures the essence of every moment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {isCartOpen && (
        <Cart 
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onCheckout={handleCheckout}
        />
      )}

      {isWishlistOpen && (
        <Wishlist 
          items={wishlistItems}
          onClose={() => setIsWishlistOpen(false)}
          onRemoveItem={removeFromWishlist}
          onAddToCart={addToCart}
        />
      )}

      {showWishlistPopup && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Added to wishlist! ❤️
        </div>
      )}
    </div>
  );
};

export default Collections;
