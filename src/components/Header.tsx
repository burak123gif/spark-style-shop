import { useState } from "react";
import { Search, ShoppingCart, Menu, X, LogIn, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = ({ cartItemsCount, wishlistItemsCount = 0, onCartClick, onWishlistClick, onSearchChange, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Mock search suggestions
  const searchSuggestions = [
    "Diamond Solitaire Ring",
    "Gold Chain Necklace", 
    "Pearl Drop Earrings",
    "Tennis Bracelet",
    "Rose Gold Hoops"
  ];

  const categories = [
    { id: "all", name: "All", path: "/" },
    { id: "new", name: "New Arrivals", path: "/" },
    { id: "necklaces", name: "Necklaces", path: "/" },
    { id: "bracelets", name: "Bracelets", path: "/" },
    { id: "earrings", name: "Earrings", path: "/" },
    { id: "rings", name: "Rings", path: "/" },
    { id: "size-guide", name: "Size Guide", path: "/size-guide" },
    { id: "care", name: "Care Instructions", path: "/care-instructions" },
    { id: "about", name: "About Us", path: "/about-us" }
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearchChange(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    onSearchChange(suggestion);
    setShowSuggestions(false);
  };

  const handleNavClick = (category) => {
    if (category.path && category.path !== "/") {
      window.location.href = category.path;
    } else {
      onCategoryChange(category.id);
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    }
  };

  const handleLoginClick = () => {
    // For now, redirect to a login page (placeholder)
    // In a real app, this would open a login modal or redirect to auth
    window.location.href = '/login';
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.location.href = "/"}
              className="text-2xl lg:text-3xl font-light tracking-wide text-gray-900 hover:text-yellow-600 transition-colors duration-200"
            >
              LUX<span className="text-yellow-600">E</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleNavClick(category)}
                className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-light tracking-wide"
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Search, Wishlist, Cart, and Login */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jewelry..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setShowSuggestions(searchTerm.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="pl-10 pr-4 py-2 w-64 border-gray-200 focus:border-yellow-600 focus:ring-yellow-600"
              />
              
              {/* Search Suggestions */}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg z-50">
                  {searchSuggestions
                    .filter(suggestion => 
                      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-gray-700"
                      >
                        {suggestion}
                      </button>
                    ))
                  }
                </div>
              )}
            </div>

            {/* Wishlist */}
            {onWishlistClick && (
              <button
                onClick={onWishlistClick}
                className="relative p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                aria-label="Open wishlist"
              >
                <Heart className="h-6 w-6" />
                {wishlistItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {wishlistItemsCount}
                  </span>
                )}
              </button>
            )}

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
              aria-label="Open shopping cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Login */}
            <Button 
              variant="outline" 
              onClick={handleLoginClick}
              className="hidden lg:flex items-center space-x-2 border-gray-200 hover:border-yellow-600 hover:text-yellow-600"
            >
              <LogIn className="h-4 w-4" />
              <span>Log In</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search jewelry..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-yellow-600 focus:ring-yellow-600"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      handleNavClick(category);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                  >
                    {category.name}
                  </button>
                ))}
              </nav>

              {/* Mobile Login */}
              <Button 
                variant="outline" 
                onClick={() => {
                  handleLoginClick();
                  setIsMenuOpen(false);
                }}
                className="w-full border-gray-200 hover:border-yellow-600 hover:text-yellow-600"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Log In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
