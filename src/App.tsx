import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductsGrid from './components/ProductsGrid';
import CartSidebar from './components/CartSidebar';
import ProductDetail from './components/ProductDetail';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { products, Product } from './data/products';
import type { CartItem } from './components/CartSidebar';

function App() {
  // State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', isVisible: false });

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.includes(searchQuery) || 
      product.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart functions
  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`${product.name} به سبد خرید اضافه شد`);
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const removeItem = useCallback((productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  // Wishlist functions
  const toggleWishlist = useCallback((productId: number) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  }, []);

  // Product detail
  const viewProductDetail = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  }, []);

  // Search
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query) {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Toast
  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => setToast({ message: '', isVisible: false }), 3000);
  };

  // Cart count
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Prevent body scroll when modal/cart is open
  useEffect(() => {
    if (isCartOpen || isProductDetailOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen, isProductDetailOpen]);

  return (
    <div className="min-h-screen bg-dark-900 text-dark-100">
      {/* Header */}
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />

      {/* Main content */}
      <main className="pt-[88px] lg:pt-[100px]">
        {/* Hero */}
        <Hero />

        {/* Categories */}
        <Categories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Products */}
        <ProductsGrid
          products={filteredProducts}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          onViewDetail={viewProductDetail}
          wishlist={wishlist}
        />

        {/* Features */}
        <Features />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
      />

      {/* Toast */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ message: '', isVisible: false })}
      />
    </div>
  );
}

export default App;
