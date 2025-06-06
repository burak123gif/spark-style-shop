
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { usePersistentState } from "../hooks/usePersistentState";
import { usePersistentWishlist } from "../hooks/usePersistentWishlist";
import jewelryData from "../data/jewelry.json";

const ProductPage = () => {
  const { id } = useParams();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [cartItems, setCartItems] = usePersistentState("luxe-cart", []);
  
  const { 
    wishlistItems, 
    addToWishlist, 
    removeFromWishlist, 
    showWishlistPopup 
  } = usePersistentWishlist();

  // Find the product by ID
  const product = jewelryData.products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

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

  const handleBack = () => {
    window.history.back();
  };

  // Dummy handlers for search and category since they're not used on product pages
  const handleSearchChange = () => {
    // Not used on product page, but required by Header component
  };

  const handleCategoryChange = () => {
    // Not used on product page, but required by Header component
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        wishlistItemsCount={wishlistItems.length}
      />
      
      <ProductDetail 
        product={product}
        onBack={handleBack}
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
};

export default ProductPage;
