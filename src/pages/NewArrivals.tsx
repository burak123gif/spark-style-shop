
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { usePersistentState } from "../hooks/usePersistentState";
import { usePersistentWishlist } from "../hooks/usePersistentWishlist";

const NewArrivals = () => {
  const [cartItems, setCartItems] = usePersistentState("luxe-cart", []);
  const { 
    wishlistItems, 
    addToWishlist, 
    removeFromWishlist, 
    showWishlistPopup 
  } = usePersistentWishlist();
  const [searchQuery, setSearchQuery] = useState("");
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
          onCategoryChange={() => {}}
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
        onCategoryChange={() => {}}
        wishlistItemsCount={wishlistItems.length}
      />
      
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="container-responsive text-center">
          <h1 className="heading-responsive font-light tracking-wide text-gray-900 mb-4">
            New Arrivals
          </h1>
          <p className="text-responsive text-gray-600 font-light max-w-2xl mx-auto">
            Explore our latest collection of exquisite jewelry pieces
          </p>
        </div>
      </div>
      
      <ProductGrid 
        searchQuery={searchQuery}
        selectedCategory="new"
        sortBy={sortBy}
        onSortChange={setSortBy}
        onProductClick={setSelectedProduct}
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
};

export default NewArrivals;
