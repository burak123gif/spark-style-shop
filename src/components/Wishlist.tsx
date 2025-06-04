
import { X, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistProps {
  items: WishlistItem[];
  onClose: () => void;
  onRemoveItem: (productId: number) => void;
  onAddToCart: (item: WishlistItem) => void;
}

const Wishlist = ({ items, onClose, onRemoveItem, onAddToCart }: WishlistProps) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-light tracking-wide">My Wishlist</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-light">Your wishlist is empty</p>
              <p className="text-gray-400 text-sm">Add items you love to save them for later</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-light text-gray-900">{item.name}</h3>
                    <p className="text-lg font-light text-gray-900">${item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => onAddToCart(item)}
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-light">Total Value:</span>
              <span className="text-2xl font-light">${total.toLocaleString()}</span>
            </div>
            <Button
              onClick={() => {
                items.forEach(item => onAddToCart(item));
                onClose();
              }}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3"
            >
              Add All to Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
