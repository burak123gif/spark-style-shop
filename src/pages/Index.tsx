
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import FeaturedCollections from "../components/FeaturedCollections";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { usePersistentState } from "../hooks/usePersistentState";
import { usePersistentWishlist } from "../hooks/usePersistentWishlist";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [cartItems, setCartItems] = usePersistentState("luxe-cart", []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Use the new persistent wishlist hook
  const { 
    wishlistItems, 
    addToWishlist, 
    removeFromWishlist, 
    showWishlistPopup 
  } = usePersistentWishlist();

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
      
      <Hero />
      
      <FeaturedCollections />
      
      <div data-section="products">
        <ProductGrid 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
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

export default Index;
