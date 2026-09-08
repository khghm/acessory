import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  onViewDetail: (product: Product) => void;
  isWishlisted: boolean;
}

export default function ProductCard({ product, index, onAddToCart, onToggleWishlist, onViewDetail, isWishlisted }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="product-card group bg-dark-800/60 border border-dark-700 rounded-2xl overflow-hidden hover:border-gold-500/30"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-dark-700">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onViewDetail(product)}
            className="w-11 h-11 bg-gold-500/90 rounded-full flex items-center justify-center text-dark-900 hover:bg-gold-400 transition-colors"
          >
            <Eye size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onAddToCart(product)}
            className="w-11 h-11 bg-gold-500/90 rounded-full flex items-center justify-center text-dark-900 hover:bg-gold-400 transition-colors"
          >
            <ShoppingBag size={18} />
          </motion.button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
            product.badge === 'تخفیف' ? 'bg-red-500 text-white' :
            product.badge === 'جدید' ? 'bg-emerald-500 text-white' :
            product.badge === 'لوکس' ? 'bg-purple-500 text-white' :
            'bg-gold-500 text-dark-900'
          }`}>
            {product.badge}
          </div>
        )}

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}%−
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute bottom-3 left-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-dark-800/80 text-dark-300 hover:text-red-400'
          }`}
        >
          <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gold-400/70 mb-1">{product.nameEn}</p>
        <h3 className="font-medium text-dark-100 text-sm mb-2 line-clamp-1">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-dark-600'}
              />
            ))}
          </div>
          <span className="text-xs text-dark-400">({product.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1.5 mb-3">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-dark-500"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gold-400 font-bold text-lg">
              {formatPrice(product.price)}
              <span className="text-xs text-dark-400 font-normal mr-1">تومان</span>
            </div>
            {product.originalPrice && (
              <div className="text-xs text-dark-500 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
          >
            <ShoppingBag size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
