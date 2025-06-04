import Header from "../components/Header";
import Footer from "../components/Footer";

const CareInstructions = () => {
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
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Care Instructions</h1>
        
        <div className="space-y-8 text-gray-700 font-light">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">General Care Tips</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Store your jewelry in a clean, dry place away from direct sunlight.</li>
              <li>Avoid wearing jewelry during activities that may cause damage, such as sports or heavy lifting.</li>
              <li>Remove jewelry before showering, swimming, or using harsh chemicals.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Cleaning Your Jewelry</h2>
            <p className="mb-4">Regular cleaning can help maintain the shine and beauty of your jewelry.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use a soft cloth to gently wipe away dirt and oils.</li>
              <li>For more thorough cleaning, use a mild soap and warm water solution.</li>
              <li>Rinse thoroughly and pat dry with a soft cloth.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Specific Materials</h2>
            <p className="mb-4">Different materials require different care:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Gold:</strong> Use a gold-cleaning solution or a mix of mild soap and water.</li>
              <li><strong>Silver:</strong> Use a silver polish to remove tarnish.</li>
              <li><strong>Gemstones:</strong> Avoid harsh chemicals and extreme temperatures.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Professional Cleaning</h2>
            <p>For valuable or delicate pieces, consider professional cleaning to ensure the best care.</p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CareInstructions;
