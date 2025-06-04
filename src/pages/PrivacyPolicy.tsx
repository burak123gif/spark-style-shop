
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-700 font-light">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
            <p>This may include your name, email address, shipping address, and payment information.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Process your orders and payments</li>
              <li>Send you order confirmations and updates</li>
              <li>Provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties without your consent, except as described in this policy.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@luxe-jewelry.com</p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
