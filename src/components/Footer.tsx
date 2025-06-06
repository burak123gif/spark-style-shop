import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hello@luxe-jewelry.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+15551234567";
  };

  const handleReturnsExchangesClick = () => {
    navigate("/returns-exchanges");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleShippingInfoClick = () => {
    navigate("/shipping-info");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-responsive py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-light tracking-wide">
              LUX<span className="text-yellow-600">E</span>
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base">
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
                  onClick={() => handleLinkClick("/new-arrivals")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/best-sellers")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/collections")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/size-guide")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/care-instructions")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Care Instructions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/about-us")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
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
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={handleShippingInfoClick}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button 
                  onClick={handleReturnsExchangesClick}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/size-guide")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/faq")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("/track-order")}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  Track Your Order
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-light tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <p className="text-gray-300 font-light text-sm sm:text-base">
                  123 Fifth Avenue<br />
                  New York, NY 10003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <button 
                  onClick={handlePhoneClick}
                  className="text-gray-300 font-light hover:text-yellow-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  +1 (555) 123-4567
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-300 font-light hover:text-yellow-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  hello@luxe-jewelry.com
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
          <div className="text-center space-y-6">
            <h4 className="text-xl font-light tracking-wide">Stay Connected</h4>
            <p className="text-gray-300 font-light max-w-2xl mx-auto text-sm sm:text-base">
              Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 text-sm sm:text-base"
              />
              <button className="bg-yellow-600 text-white px-6 py-3 rounded font-light tracking-wide hover:bg-yellow-700 transition-colors duration-200 text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 font-light text-sm">
            © 2024 LUXE Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
            <button 
              onClick={() => handleLinkClick("/privacy-policy")}
              className="text-gray-400 text-sm font-light hover:text-yellow-600 transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLinkClick("/terms-of-service")}
              className="text-gray-400 text-sm font-light hover:text-yellow-600 transition-colors duration-200"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleLinkClick("/cookie-policy")}
              className="text-gray-400 text-sm font-light hover:text-yellow-600 transition-colors duration-200"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
