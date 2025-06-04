
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedCollections from "../components/FeaturedCollections";

const Collections = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
        onWishlistClick={() => {}}
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
      />
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Discover curated collections of fine jewelry for every occasion
          </p>
        </div>
      </div>
      
      <FeaturedCollections />
      
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Signature Collection</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Our signature pieces represent the pinnacle of craftsmanship and design. 
                Each item is meticulously crafted using the finest materials and traditional techniques.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Seasonal Collection</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Discover pieces inspired by the beauty of each season. From delicate spring florals 
                to bold winter statements, find jewelry that captures the essence of every moment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Collections;
