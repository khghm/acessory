import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import AdminSidebar from './components/admin/AdminSidebar';
import AdminHeader from './components/admin/AdminHeader';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminCustomers from './pages/admin/Customers';
import AdminAnalytics from './pages/admin/Analytics';
import AdminSettings from './pages/admin/Settings';
import { products, Product } from './data/products';
import type { CartItem } from './components/CartSidebar';

function Storefront() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', isVisible: false });

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.includes(searchQuery) || 
      product.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
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
        prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
      );
    }
  }, []);

  const removeItem = useCallback((productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const toggleWishlist = useCallback((productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const viewProductDetail = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query) {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => setToast({ message: '', isVisible: false }), 3000);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (isCartOpen || isProductDetailOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen, isProductDetailOpen]);

  return (
    <div className="min-h-screen bg-dark-900 text-dark-100">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />

      <main className="pt-[88px] lg:pt-[100px]">
        <Hero />
        <Categories selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <ProductsGrid
          products={filteredProducts}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          onViewDetail={viewProductDetail}
          wishlist={wishlist}
        />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <ProductDetail
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
      />

      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ message: '', isVisible: false })}
      />
    </div>
  );
}

function AdminLayout() {
  return (
    <div className="min-h-screen bg-dark-900">
      <AdminSidebar />
      <div className="mr-64">
        <AdminHeader />
        <main>
          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Storefront />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
