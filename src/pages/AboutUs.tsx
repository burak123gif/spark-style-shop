
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
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
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">About LUXE</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl font-light text-gray-700 mb-8 leading-relaxed">
            A modern test platform for jewelry enthusiasts – crafting quality since 2024.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              LUXE was born from a passion for creating exceptional jewelry experiences in the digital age. 
              As a modern platform, we bridge the gap between traditional craftsmanship and contemporary design, 
              bringing you carefully curated pieces that speak to today's jewelry enthusiasts.
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              Our journey began with a simple belief: that luxury jewelry should be accessible, transparent, 
              and authentically crafted. Every piece in our collection is selected for its quality, artistry, 
              and timeless appeal.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Quality First</h3>
                <p className="text-gray-700 font-light">
                  We source only the finest materials and work with skilled artisans who share our 
                  commitment to excellence.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700 font-light">
                  We believe in honest pricing, clear product information, and ethical sourcing practices.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Customer Care</h3>
                <p className="text-gray-700 font-light">
                  Your satisfaction is our priority. We're here to help you find the perfect piece 
                  and care for it for years to come.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700 font-light">
                  We embrace modern technology to enhance your shopping experience while honoring 
                  traditional jewelry-making techniques.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Commitment</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="space-y-4 text-gray-700 font-light">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>Ethically sourced materials and responsible business practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>Expert craftsmanship with attention to every detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>Exceptional customer service and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>Secure shopping experience with easy returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>Lifetime warranty on all our jewelry pieces</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Have questions about our jewelry or need assistance? We're here to help. 
              Reach out to our customer care team at{" "}
              <a href="mailto:hello@luxe-jewelry.com" className="text-yellow-600 hover:underline">
                hello@luxe-jewelry.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+15551234567" className="text-yellow-600 hover:underline">
                +1 (555) 123-4567
              </a>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
