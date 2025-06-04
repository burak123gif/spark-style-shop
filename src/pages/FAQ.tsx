
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "What materials are used in your jewelry?",
      answer: "We use only the finest materials including 14k and 18k gold, sterling silver, platinum, and ethically sourced gemstones. All our pieces are hypoallergenic and designed to last a lifetime."
    },
    {
      question: "Do you offer custom designs?",
      answer: "Yes! We offer custom design services. Contact our design team to discuss your vision and we'll create a unique piece just for you. Custom pieces typically take 4-6 weeks to complete."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in their original condition. Custom or personalized pieces are final sale. Return shipping costs may apply unless the item is defective."
    },
    {
      question: "How do I care for my jewelry?",
      answer: "Store pieces separately to prevent scratching, avoid exposure to chemicals and perfumes, and clean gently with a soft cloth. Visit our Care Instructions page for detailed guidance."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within the United States. We're working on expanding our international shipping options. Please check back soon or contact us for updates."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. All orders are processed within 1 business day."
    },
    {
      question: "Do you offer warranties?",
      answer: "Yes, all our jewelry comes with a lifetime warranty covering manufacturing defects. This includes free repairs and maintenance for the life of the piece."
    }
  ];

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
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-light text-gray-900">{item.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 font-light leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light mb-4">Still have questions?</p>
          <button 
            onClick={() => window.location.href = "mailto:support@luxe-jewelry.com"}
            className="bg-yellow-600 text-white px-6 py-3 rounded font-light tracking-wide hover:bg-yellow-700 transition-colors duration-200"
          >
            Contact Support
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
