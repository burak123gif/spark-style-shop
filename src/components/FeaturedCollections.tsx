
const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: "Signature Collection",
      description: "Our most coveted pieces, handcrafted with exceptional attention to detail",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      itemCount: 24
    },
    {
      id: 2,
      name: "Bridal Elegance",
      description: "Timeless pieces for your most precious moments",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      itemCount: 18
    },
    {
      id: 3,
      name: "Everyday Luxury",
      description: "Sophisticated pieces perfect for daily wear",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      itemCount: 32
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Discover our carefully curated collections, each telling a unique story of craftsmanship and beauty
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-gray-900 px-6 py-3 font-light tracking-wide hover:bg-gray-100 transition-colors duration-200">
                    EXPLORE
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-light tracking-wide text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                  {collection.name}
                </h3>
                <p className="text-gray-600 font-light mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <p className="text-sm text-gray-500 font-light">
                  {collection.itemCount} pieces
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Promotion Banner */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light tracking-wide text-gray-900 mb-4">
            Limited Time Offer
          </h3>
          <p className="text-gray-600 font-light mb-6 max-w-2xl mx-auto">
            Get 10% off your first purchase when you sign up for our newsletter. 
            Plus, be the first to know about new arrivals and exclusive events.
          </p>
          <button className="bg-yellow-600 text-white px-8 py-3 font-light tracking-wide hover:bg-yellow-700 transition-colors duration-200">
            CLAIM OFFER
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
