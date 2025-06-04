import { useState } from "react";
import { Search, Package, Truck, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackOrder = async () => {
    if (!orderNumber.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock order data - in a real app, this would come from your order system
      const mockOrders = {
        "LX12345": {
          orderNumber: "LX12345",
          status: "shipped",
          trackingNumber: "1Z999AA1234567890",
          estimatedDelivery: "Dec 15, 2024",
          items: [
            { name: "Diamond Solitaire Ring", quantity: 1, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=200&q=80" }
          ],
          timeline: [
            { status: "ordered", date: "Dec 10, 2024", completed: true },
            { status: "processing", date: "Dec 11, 2024", completed: true },
            { status: "shipped", date: "Dec 12, 2024", completed: true },
            { status: "delivered", date: "Dec 15, 2024", completed: false }
          ]
        },
        "LX12346": {
          orderNumber: "LX12346",
          status: "processing",
          trackingNumber: null,
          estimatedDelivery: "Dec 18, 2024",
          items: [
            { name: "Pearl Drop Earrings", quantity: 1, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80" }
          ],
          timeline: [
            { status: "ordered", date: "Dec 12, 2024", completed: true },
            { status: "processing", date: "Dec 13, 2024", completed: true },
            { status: "shipped", date: "Dec 16, 2024", completed: false },
            { status: "delivered", date: "Dec 18, 2024", completed: false }
          ]
        }
      };

      const result = mockOrders[orderNumber.toUpperCase()] || null;
      setTrackingResult(result);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (!completed) return <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />;
    
    switch (status) {
      case "ordered":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "processing":
        return <Package className="w-5 h-5 text-blue-600" />;
      case "shipped":
        return <Truck className="w-5 h-5 text-yellow-600" />;
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />;
    }
  };

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
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-8">Track Your Order</h1>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <p className="text-gray-600 font-light mb-6">
            Enter your order number to track your jewelry delivery. You can find this in your order confirmation email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter order number (e.g., LX12345)"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="h-12"
              />
            </div>
            <Button
              onClick={handleTrackOrder}
              disabled={isLoading || !orderNumber.trim()}
              className="h-12 bg-yellow-600 hover:bg-yellow-700 text-white px-8"
            >
              {isLoading ? (
                "Searching..."
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Track Order
                </>
              )}
            </Button>
          </div>
        </div>

        {trackingResult === null && orderNumber && !isLoading && (
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-red-800 font-light">
              Order not found. Please check your order number and try again. If you continue to have issues, please contact our support team.
            </p>
          </div>
        )}

        {trackingResult && (
          <div className="space-y-8">
            {/* Order Overview */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-light text-gray-900 mb-2">Order #{trackingResult.orderNumber}</h2>
                  <p className="text-gray-600 font-light">
                    Status: <span className="capitalize font-medium text-gray-900">{trackingResult.status}</span>
                  </p>
                  {trackingResult.trackingNumber && (
                    <p className="text-gray-600 font-light">
                      Tracking: <span className="font-medium">{trackingResult.trackingNumber}</span>
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-gray-600 font-light">Estimated Delivery</p>
                  <p className="text-lg font-light text-gray-900">{trackingResult.estimatedDelivery}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-light text-gray-900 mb-4">Items in this order</h3>
                {trackingResult.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="font-light text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-light text-gray-900 mb-6">Order Timeline</h3>
              <div className="space-y-6">
                {trackingResult.timeline.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    {getStatusIcon(step.status, step.completed)}
                    <div className="flex-1">
                      <p className={`font-light capitalize ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.status.replace('_', ' ')}
                      </p>
                      <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                        {step.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light mb-4">Need help with your order?</p>
          <button 
            onClick={() => window.location.href = "mailto:orders@luxe-jewelry.com"}
            className="bg-yellow-600 text-white px-6 py-3 rounded font-light tracking-wide hover:bg-yellow-700 transition-colors duration-200"
          >
            Contact Order Support
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrackOrder;
