
import { useState } from "react";
import { Search, ShoppingCart, Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = ({ cartItemsCount, onCartClick, onSearchChange, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All" },
    { id: "new", name: "New Arrivals" },
    { id: "necklaces", name: "Necklaces" },
    { id: "bracelets", name: "Bracelets" },
    { id: "earrings", name: "Earrings" },
    { id: "rings", name: "Rings" },
    { id: "about", name: "About Us" }
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-light tracking-wide text-gray-900">
              LUX<span className="text-yellow-600">E</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-light tracking-wide"
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Search, Cart, and Login */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jewelry..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border-gray-200 focus:border-yellow-600 focus:ring-yellow-600"
              />
            </div>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Login */}
            <Button variant="outline" className="hidden lg:flex items-center space-x-2 border-gray-200 hover:border-yellow-600 hover:text-yellow-600">
              <LogIn className="h-4 w-4" />
              <span>Log In</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
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
                      onCategoryChange(category.id);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                  >
                    {category.name}
                  </button>
                ))}
              </nav>

              {/* Mobile Login */}
              <Button variant="outline" className="w-full border-gray-200 hover:border-yellow-600 hover:text-yellow-600">
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
