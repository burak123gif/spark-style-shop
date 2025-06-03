
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import FeaturedCollections from "../components/FeaturedCollections";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

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

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
        />
        <ProductDetail 
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
        <Footer />
        {isCartOpen && (
          <Cart 
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
      />
      
      <Hero />
      
      <FeaturedCollections />
      
      <ProductGrid 
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
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
        />
      )}
    </div>
  );
};

export default Index;
