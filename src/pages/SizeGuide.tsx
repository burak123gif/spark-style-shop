
import Header from "../components/Header";
import Footer from "../components/Footer";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Size Guide</h1>
        
        {/* Ring Sizes */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Ring Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-light">US Size</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-light">Diameter (mm)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-light">Circumference (mm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { us: "5", diameter: "15.7", circumference: "49.3" },
                  { us: "6", diameter: "16.5", circumference: "51.9" },
                  { us: "7", diameter: "17.3", circumference: "54.4" },
                  { us: "8", diameter: "18.1", circumference: "57.0" },
                  { us: "9", diameter: "18.9", circumference: "59.5" },
                  { us: "10", diameter: "19.8", circumference: "62.1" }
                ].map((size) => (
                  <tr key={size.us}>
                    <td className="border border-gray-200 px-4 py-3">{size.us}</td>
                    <td className="border border-gray-200 px-4 py-3">{size.diameter}</td>
                    <td className="border border-gray-200 px-4 py-3">{size.circumference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bracelet Sizes */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Bracelet Sizes</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700 font-light">
              <li><strong>Small:</strong> 6.5 - 7 inches (16.5 - 17.8 cm)</li>
              <li><strong>Medium:</strong> 7 - 7.5 inches (17.8 - 19.1 cm)</li>
              <li><strong>Large:</strong> 7.5 - 8 inches (19.1 - 20.3 cm)</li>
              <li><strong>Extra Large:</strong> 8 - 8.5 inches (20.3 - 21.6 cm)</li>
            </ul>
          </div>
        </div>

        {/* How to Measure */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">How to Measure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4">Ring Measurement</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 font-light">
                <li>Wrap a string around your finger</li>
                <li>Mark where the string overlaps</li>
                <li>Measure the string length in mm</li>
                <li>Compare to our circumference chart</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4">Bracelet Measurement</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 font-light">
                <li>Measure your wrist with a flexible tape</li>
                <li>Add 0.5-1 inch for comfort</li>
                <li>Choose the closest size from our guide</li>
                <li>Contact us for custom sizing</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;
