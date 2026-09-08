import { motion } from 'framer-motion';
import { categories } from '../data/products';

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Categories({ selectedCategory, onCategoryChange }: CategoriesProps) {
  return (
    <section id="categories" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-400 text-sm tracking-wider uppercase">دسته‌بندی</span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark-100 mt-2">
            مجموعه‌های <span className="text-gold-gradient">ما</span>
          </h2>
          <p className="text-dark-400 mt-3 max-w-md mx-auto">
            از میان دسته‌بندی‌های متنوع ما، اکسسوری مورد علاقه خود را پیدا کنید
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onCategoryChange(category.id)}
              className={`group relative p-6 rounded-2xl transition-all duration-300 text-center ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-2 border-gold-500/50 shadow-lg shadow-gold-500/10'
                  : 'bg-dark-800/50 border border-dark-700 hover:border-gold-500/30 hover:bg-dark-700/50'
              }`}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className={`font-medium text-sm ${
                selectedCategory === category.id ? 'text-gold-300' : 'text-dark-200'
              }`}>
                {category.name}
              </h3>
              <p className="text-xs text-dark-500 mt-1">{category.count} محصول</p>
              
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="category-indicator"
                  className="absolute inset-0 rounded-2xl border-2 border-gold-400/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
