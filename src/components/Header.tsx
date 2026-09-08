import { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

export default function Header({ cartCount, wishlistCount, onCartClick, onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-dark-900 text-center py-1.5 text-xs font-medium tracking-wide">
        ✨ ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان | ضمانت اصالت کالا ✨
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gold-400 hover:text-gold-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-dark-900 font-bold text-lg font-playfair">L</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-playfair font-bold text-gold-gradient">LUXE</h1>
              <p className="text-[10px] text-dark-300 -mt-1 tracking-[0.2em] uppercase">Accessories</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {['صفحه اصلی', 'محصولات', 'دسته‌بندی', 'تخفیف‌ها', 'درباره ما'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-dark-200 hover:text-gold-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-dark-300 hover:text-gold-400 transition-colors"
            >
              <Search size={20} />
            </button>
            <button className="p-2 text-dark-300 hover:text-gold-400 transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <button className="p-2 text-dark-300 hover:text-gold-400 transition-colors relative">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-dark-900 text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={onCartClick}
              className="p-2 text-dark-300 hover:text-gold-400 transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold-500 text-dark-900 text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-xl border-b border-gold-500/20 p-4"
          >
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="جستجوی محصول..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-700 border border-dark-500 rounded-full px-6 py-3 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
                autoFocus
              />
              <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400">
                <Search size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-800/95 backdrop-blur-xl border-t border-dark-600"
          >
            <nav className="flex flex-col p-4 gap-3">
              {['صفحه اصلی', 'محصولات', 'دسته‌بندی', 'تخفیف‌ها', 'درباره ما'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-dark-200 hover:text-gold-400 transition-colors py-2 border-b border-dark-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
