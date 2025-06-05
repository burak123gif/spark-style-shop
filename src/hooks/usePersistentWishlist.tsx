
import { useState, useEffect } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
}

export const usePersistentWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [showWishlistPopup, setShowWishlistPopup] = useState(false);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sparkWishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setWishlistItems(parsed);
        }
      }
    } catch (error) {
      console.warn('Error loading wishlist from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('sparkWishlist');
    }
  }, []);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    try {
      localStorage.setItem('sparkWishlist', JSON.stringify(wishlistItems));
    } catch (error) {
      console.warn('Storage full! Try removing older items ❤️', error);
      // Show friendly toast notification
      setShowWishlistPopup(true);
      setTimeout(() => setShowWishlistPopup(false), 3000);
    }
  }, [wishlistItems]);

  // Listen for storage events (for cross-tab sync)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'sparkWishlist' && e.newValue) {
        try {
          const newWishlist = JSON.parse(e.newValue);
          if (Array.isArray(newWishlist)) {
            setWishlistItems(newWishlist);
          }
        } catch (error) {
          console.warn('Error syncing wishlist across tabs:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addToWishlist = (product: WishlistItem) => {
    setWishlistItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (!existing) {
        setShowWishlistPopup(true);
        setTimeout(() => setShowWishlistPopup(false), 2000);
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    showWishlistPopup
  };
};
