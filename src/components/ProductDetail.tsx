
import { useState } from "react";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = ({ product, onBack, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock additional images - in a real app, this would come from the product data
  const images = [
    product.image,
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-yellow-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-light">(47 reviews)</span>
              </div>

              <p className="text-4xl font-light text-gray-900 mb-8">
                ${product.price.toLocaleString()}
              </p>

              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {product.description}. Crafted with the finest materials and attention to detail, 
                this exquisite piece embodies timeless elegance and modern sophistication. 
                Perfect for special occasions or as a treasured addition to your jewelry collection.
              </p>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Materials & Care</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• 18k Gold or Platinum setting</li>
                  <li>• Ethically sourced gemstones</li>
                  <li>• Hypoallergenic materials</li>
                  <li>• Professional cleaning recommended</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Shipping & Returns</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Free shipping on orders over $500</li>
                  <li>• 30-day return policy</li>
                  <li>• Lifetime warranty included</li>
                  <li>• Complimentary gift packaging</li>
                </ul>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-light">Quantity:</label>
                <div className="flex items-center border border-gray-200 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-200">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 text-lg font-light tracking-wide transition-colors duration-200"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:border-yellow-600 hover:text-yellow-600 py-4 text-lg font-light tracking-wide transition-colors duration-200"
                >
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
