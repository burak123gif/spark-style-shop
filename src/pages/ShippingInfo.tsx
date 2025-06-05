
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePersistentState } from "../hooks/usePersistentState";

const ShippingInfo = () => {
  const [cartItems] = usePersistentState("luxe-cart", []);
  const [wishlistItems] = usePersistentState("luxe-wishlist", []);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => {}}
        onWishlistClick={() => {}}
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
        wishlistItemsCount={wishlistItems.length}
      />
      
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="container-responsive text-center">
          <h1 className="heading-responsive font-light tracking-wide text-gray-900 mb-4">
            Shipping Information
          </h1>
          <p className="text-responsive text-gray-600 font-light max-w-2xl mx-auto">
            Everything you need to know about our shipping policies and delivery options
          </p>
        </div>
      </div>
      
      <div className="container-responsive py-12 sm:py-16">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">Domestic Shipping</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Standard Shipping</h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base">5-7 business days • Free on orders over $500</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Express Shipping</h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base">2-3 business days • $25</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Overnight Shipping</h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base">Next business day • $50</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">International Shipping</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Standard International</h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base">7-14 business days • $45</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Express International</h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base">3-5 business days • $95</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">Important Notes</h2>
            <ul className="space-y-2 text-gray-700 font-light text-sm sm:text-base">
              <li>• All orders are processed within 1-2 business days</li>
              <li>• Shipping times are estimates and may vary during peak seasons</li>
              <li>• Signature confirmation is required for all orders over $1,000</li>
              <li>• International orders may be subject to customs duties and taxes</li>
              <li>• We ship to most countries worldwide (restrictions apply)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShippingInfo;
