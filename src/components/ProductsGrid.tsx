import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductsGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  onViewDetail: (product: Product) => void;
  wishlist: number[];
}

export default function ProductsGrid({ products, onAddToCart, onToggleWishlist, onViewDetail, wishlist }: ProductsGridProps) {
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'popular': return b.reviews - a.reviews;
      default: return 0;
    }
  });

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-gold-400 text-sm tracking-wider uppercase">فروشگاه</span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark-100 mt-2">
            محصولات <span className="text-gold-gradient">ویژه</span>
          </h2>
          <p className="text-dark-400 mt-3 max-w-md mx-auto">
            بهترین و لوکس‌ترین اکسسوری‌ها با تضمین اصالت و کیفیت
          </p>
        </motion.div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-4 bg-dark-800/40 rounded-xl border border-dark-700">
          <div className="flex items-center gap-2 text-dark-300 text-sm">
            <SlidersHorizontal size={16} />
            <span>{sortedProducts.length} محصول</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-700 border border-dark-600 text-dark-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-gold-500"
            >
              <option value="default">مرتب‌سازی پیش‌فرض</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
              <option value="rating">بالاترین امتیاز</option>
              <option value="popular">محبوب‌ترین</option>
            </select>

            {/* View mode */}
            <div className="hidden sm:flex items-center gap-1 bg-dark-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-gold-500/20 text-gold-400' : 'text-dark-400'}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode('large')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'large' ? 'bg-gold-500/20 text-gold-400' : 'text-dark-400'}`}
              >
                <LayoutGrid size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              onViewDetail={onViewDetail}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-dark-400 text-lg">محصولی یافت نشد</p>
          </div>
        )}
      </div>
    </section>
  );
}
