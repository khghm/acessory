import { motion } from 'framer-motion';
import { categories } from '../data/products';

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function Categories({ selectedCategory, onCategoryChange }: CategoriesProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-400 text-sm tracking-wider uppercase">دسته‌بندی‌ها</span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark-100 mt-2">
            محصولات ما را <span className="text-gold-gradient">کاوش کنید</span>
          </h2>
          <p className="text-dark-400 mt-3 max-w-md mx-auto">
            مجموعه‌ای متنوع از اکسسوری‌های لوکس برای هر سلیقه و نیازی
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              onClick={() => onCategoryChange(category.id)}
              className={`group relative overflow-hidden rounded-2xl aspect-square ${
                selectedCategory === category.id
                  ? 'ring-2 ring-gold-500 shadow-lg shadow-gold-500/20'
                  : ''
              }`}
            >
              {/* Background image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/60 to-transparent group-hover:from-dark-900/90 transition-all"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-end p-4">
                <h3 className="text-dark-100 font-medium text-sm lg:text-base text-center mb-1 group-hover:text-gold-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-dark-400 text-xs">
                  {category.count} محصول
                </p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/50 rounded-2xl transition-all"></div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
