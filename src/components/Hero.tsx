
const Hero = () => {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl lg:text-6xl font-light tracking-wide mb-6 animate-fade-in">
            Timeless Elegance
          </h1>
          <p className="text-lg lg:text-xl font-light mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Discover our exquisite collection of handcrafted jewelry, 
            where each piece tells a story of sophistication and grace.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 lg:px-12 lg:py-4 font-light tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in">
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
