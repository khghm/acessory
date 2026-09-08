import { motion } from 'framer-motion';
import { 
  Gem, Watch, Circle, CircleDot, Clock, Award, Scissors, 
  Crown, Wallet, Key, Eye, Wind, Droplet, Minus
} from 'lucide-react';
import { categories } from '../data/products';

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const iconMap: Record<string, any> = {
  'necklace': Gem,
  'bracelet': Watch,
  'earring': Circle,
  'ring': CircleDot,
  'watch': Clock,
  'brooch': Award,
  'hair-clip': Scissors,
  'tiara': Crown,
  'bangle': Circle,
  'anklet': Circle,
  'cufflinks': CircleDot,
  'tie': Minus,
  'belt': Minus,
  'wallet': Wallet,
  'keychain': Key,
  'sunglasses': Eye,
  'scarf': Wind,
  'gloves': Circle,
  'hat': Circle,
  'perfume': Droplet,
};

export default function Categories({ selectedCategory, onCategoryChange }: CategoriesProps) {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-gold-400 text-sm tracking-wider uppercase">دسته‌بندی‌ها</span>
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-dark-100 mt-2">
            محصولات ما را <span className="text-gold-gradient">کاوش کنید</span>
          </h2>
        </motion.div>

        {/* Categories - Compact horizontal scroll */}
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((category, index) => {
              const Icon = iconMap[category.id] || Circle;
              const isSelected = selectedCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  onClick={() => onCategoryChange(category.id)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all min-w-[100px] ${
                    isSelected
                      ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-2 border-gold-500/50 shadow-lg shadow-gold-500/10'
                      : 'bg-dark-800/50 border border-dark-700 hover:border-gold-500/30 hover:bg-dark-700/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-gold-500/20' : 'bg-dark-700'
                  }`}>
                    <Icon size={24} className={isSelected ? 'text-gold-400' : 'text-dark-300'} />
                  </div>
                  <div className="text-center">
                    <h3 className={`text-xs font-medium whitespace-nowrap ${
                      isSelected ? 'text-gold-300' : 'text-dark-200'
                    }`}>
                      {category.name}
                    </h3>
                    <p className="text-[10px] text-dark-500 mt-0.5">{category.count} محصول</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
