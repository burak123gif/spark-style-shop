
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-700 font-light">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Product Information</h2>
            <p className="mb-4">We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
            <p>All jewelry pieces are handcrafted and may have slight variations from the images shown.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Returns and Exchanges</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>30-day return policy for unworn items</li>
              <li>Items must be in original condition with tags</li>
              <li>Custom or personalized items are final sale</li>
              <li>Return shipping costs may apply</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Limitation of Liability</h2>
            <p>In no event shall LUXE Jewelry be liable for any direct, indirect, punitive, incidental, special, or consequential damages.</p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
