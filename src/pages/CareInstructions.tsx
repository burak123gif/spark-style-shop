
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Download } from "lucide-react";

const CareInstructions = () => {
  const handleDownloadPDF = () => {
    // In a real app, this would download an actual PDF
    alert("PDF download would start here - Care Instructions Guide");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-light tracking-wide text-gray-900">Care Instructions</h1>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center space-x-2 bg-yellow-600 text-white px-6 py-3 rounded font-light hover:bg-yellow-700 transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF Guide</span>
          </button>
        </div>
        
        {/* Gold Jewelry Care */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Gold Jewelry Care</h2>
          <div className="bg-yellow-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-light text-gray-900 mb-4">Daily Care</h3>
            <ul className="space-y-2 text-gray-700 font-light">
              <li>• Remove before swimming, showering, or exercising</li>
              <li>• Store in individual pouches to prevent scratching</li>
              <li>• Avoid contact with perfumes, lotions, and cleaning products</li>
              <li>• Put on jewelry last when getting dressed</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-light text-gray-900 mb-4">Cleaning</h3>
            <ul className="space-y-2 text-gray-700 font-light">
              <li>• Use warm soapy water and a soft brush</li>
              <li>• Rinse thoroughly and dry with a soft cloth</li>
              <li>• Professional cleaning recommended every 6 months</li>
              <li>• Avoid ultrasonic cleaners for pieces with gemstones</li>
            </ul>
          </div>
        </div>

        {/* Silver Jewelry Care */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Silver Jewelry Care</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-light text-gray-900 mb-4">Preventing Tarnish</h3>
            <ul className="space-y-2 text-gray-700 font-light">
              <li>• Store in anti-tarnish pouches or airtight containers</li>
              <li>• Include silica gel packets in storage</li>
              <li>• Wear regularly - oils from skin help prevent tarnish</li>
              <li>• Keep away from rubber and latex</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-light text-gray-900 mb-4">Cleaning Tarnished Silver</h3>
            <ul className="space-y-2 text-gray-700 font-light">
              <li>• Use a silver polishing cloth for light tarnish</li>
              <li>• For heavy tarnish, use silver cleaning solution</li>
              <li>• Rinse thoroughly after cleaning</li>
              <li>• Professional restoration for valuable pieces</li>
            </ul>
          </div>
        </div>

        {/* Gemstone Care */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Gemstone Care</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-light text-gray-900 mb-4">Diamonds</h3>
              <ul className="space-y-2 text-gray-700 font-light">
                <li>• Clean with ammonia solution (1:10 ratio)</li>
                <li>• Use soft toothbrush for settings</li>
                <li>• Professional inspection annually</li>
                <li>• Check prongs for security</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-light text-gray-900 mb-4">Pearls</h3>
              <ul className="space-y-2 text-gray-700 font-light">
                <li>• Wipe with damp cloth after wearing</li>
                <li>• Never use soap or chemicals</li>
                <li>• Store separately from other jewelry</li>
                <li>• Restring annually with regular wear</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CareInstructions;
