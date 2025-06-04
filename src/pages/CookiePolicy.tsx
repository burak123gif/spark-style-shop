import Header from "../components/Header";
import Footer from "../components/Footer";

const CookiePolicy = () => {
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
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="space-y-8 text-gray-700 font-light">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and how you use our site.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors and display relevant ads</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Managing Cookies</h2>
            <p className="mb-4">You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and some functionality may not work as intended.</p>
            <p>Most browsers allow you to refuse cookies or set preferences for specific websites.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at cookies@luxe-jewelry.com</p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
