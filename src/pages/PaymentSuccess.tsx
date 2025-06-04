
import { CheckCircle, Download, Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const orderNumber = "LX" + Math.random().toString(36).substr(2, 9).toUpperCase();
  
  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
        onWishlistClick={() => {}}
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
      />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
        
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-xl text-gray-600 font-light mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Order Details</h2>
          <div className="space-y-2 text-gray-600">
            <p><strong>Order Number:</strong> {orderNumber}</p>
            <p><strong>Email:</strong> A confirmation has been sent to your email</p>
            <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={() => window.location.href = `/track-order`}
            className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3"
          >
            Track Your Order
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => window.print()}
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Receipt</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.location.href = "mailto:orders@luxe-jewelry.com"}
              className="flex items-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Support</span>
            </Button>
          </div>
        </div>
        
        <div className="mt-12">
          <Button
            onClick={() => window.location.href = "/"}
            variant="ghost"
            className="text-yellow-600 hover:text-yellow-700"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
