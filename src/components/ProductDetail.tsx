import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '../data/products';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  isWishlisted: boolean;
}

export default function ProductDetail({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }: ProductDetailProps) {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-900/90 backdrop-blur-md z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-4 sm:inset-8 lg:inset-16 bg-dark-800 border border-dark-600 rounded-3xl z-50 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-10 w-10 h-10 bg-dark-700/80 backdrop-blur rounded-full flex items-center justify-center text-dark-300 hover:text-gold-400 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="h-full overflow-y-auto">
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative bg-dark-700 flex items-center justify-center p-8 lg:p-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-[400px] lg:max-h-full object-contain rounded-2xl"
                  />
                  {product.badge && (
                    <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-sm font-bold ${
                      product.badge === 'تخفیف' ? 'bg-red-500 text-white' :
                      product.badge === 'جدید' ? 'bg-emerald-500 text-white' :
                      product.badge === 'لوکس' ? 'bg-purple-500 text-white' :
                      'bg-gold-500 text-dark-900'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 lg:p-10 flex flex-col">
                  <div className="flex-1">
                    <p className="text-gold-400/70 text-sm mb-2">{product.nameEn}</p>
                    <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-dark-100 mb-4">
                      {product.name}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-dark-600'}
                          />
                        ))}
                      </div>
                      <span className="text-dark-300 text-sm">{product.rating}</span>
                      <span className="text-dark-500 text-sm">({product.reviews} نظر)</span>
                    </div>

                    {/* Description */}
                    <p className="text-dark-300 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Colors */}
                    <div className="mb-6">
                      <h4 className="text-sm text-dark-200 mb-3">رنگ‌بندی:</h4>
                      <div className="flex items-center gap-3">
                        {product.colors.map((color, i) => (
                          <button
                            key={i}
                            className="w-8 h-8 rounded-full border-2 border-dark-500 hover:border-gold-400 transition-colors ring-offset-2 ring-offset-dark-800 hover:ring-2 ring-gold-400"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { icon: <Truck size={18} />, text: 'ارسال رایگان' },
                        { icon: <Shield size={18} />, text: 'ضمانت اصالت' },
                        { icon: <RotateCcw size={18} />, text: '۷ روز بازگشت' },
                      ].map((feature) => (
                        <div key={feature.text} className="flex flex-col items-center gap-1 p-3 bg-dark-700/50 rounded-xl border border-dark-600">
                          <span className="text-gold-400">{feature.icon}</span>
                          <span className="text-xs text-dark-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="border-t border-dark-600 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-gold-400">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-sm text-dark-400">تومان</span>
                        </div>
                        {product.originalPrice && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-dark-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                              {discount}% تخفیف
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 btn-gold py-4 rounded-xl flex items-center justify-center gap-2 font-bold"
                      >
                        <ShoppingBag size={20} />
                        افزودن به سبد
                      </button>
                      <button
                        onClick={() => onToggleWishlist(product.id)}
                        className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all ${
                          isWishlisted
                            ? 'bg-red-500/20 border-red-500/50 text-red-400'
                            : 'bg-dark-700 border-dark-600 text-dark-300 hover:text-red-400 hover:border-red-500/30'
                        }`}
                      >
                        <Heart size={22} fill={isWishlisted ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
