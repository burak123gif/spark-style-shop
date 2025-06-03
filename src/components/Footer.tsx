
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const handleLinkClick = (path) => {
    window.location.href = path;
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hello@luxe-jewelry.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+15551234567";
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wide">
              LUX<span className="text-yellow-600">E</span>
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
              A modern test platform for jewelry enthusiasts – crafting quality since 2024. 
              Each piece represents the perfect harmony of traditional craftsmanship and modern design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-light tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick("/")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/size-guide")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/care-instructions")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  Care Instructions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/about-us")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-light tracking-wide">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <span className="text-gray-300 font-light cursor-default">Shipping Info</span>
              </li>
              <li>
                <span className="text-gray-300 font-light cursor-default">Returns & Exchanges</span>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/size-guide")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <span className="text-gray-300 font-light cursor-default">FAQ</span>
              </li>
              <li>
                <span className="text-gray-300 font-light cursor-default">Track Your Order</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-light tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <p className="text-gray-300 font-light">
                  123 Fifth Avenue<br />
                  New York, NY 10003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <button 
                  onClick={handlePhoneClick}
                  className="text-gray-300 font-light hover:text-yellow-600 transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-300 font-light hover:text-yellow-600 transition-colors duration-200"
                >
                  hello@luxe-jewelry.com
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center space-y-6">
            <h4 className="text-xl font-light tracking-wide">Stay Connected</h4>
            <p className="text-gray-300 font-light max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              />
              <button className="bg-yellow-600 text-white px-6 py-3 rounded font-light tracking-wide hover:bg-yellow-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 font-light text-sm">
            © 2024 LUXE Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-gray-400 text-sm font-light cursor-default">
              Privacy Policy
            </span>
            <span className="text-gray-400 text-sm font-light cursor-default">
              Terms of Service
            </span>
            <span className="text-gray-400 text-sm font-light cursor-default">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
