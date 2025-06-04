
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReturnsExchanges = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
        onWishlistClick={() => {}}
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Returns & Exchanges</h1>
        
        <div className="space-y-8 text-gray-700 font-light">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Our Return Policy</h2>
            <p className="mb-4">
              We want you to be completely satisfied with your purchase. If for any reason you're not happy 
              with your jewelry, we offer a hassle-free return policy.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>30-day return window from the date of delivery</li>
              <li>Items must be in original condition with all packaging</li>
              <li>Free return shipping on all orders</li>
              <li>Full refund processed within 5-7 business days</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Exchange Process</h2>
            <p className="mb-4">Need a different size or style? We make exchanges simple:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Contact our customer service team</li>
              <li>Receive your prepaid return label</li>
              <li>Ship your item back to us</li>
              <li>Receive your new item within 3-5 business days</li>
            </ol>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">How to Return</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">To initiate a return or exchange:</p>
              <ul className="space-y-2">
                <li>• Email us at returns@luxe-jewelry.com</li>
                <li>• Include your order number and reason for return</li>
                <li>• We'll send you a prepaid return label within 24 hours</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Exceptions</h2>
            <p>For hygiene and safety reasons, earrings cannot be returned unless defective.</p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReturnsExchanges;
