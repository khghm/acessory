import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Diamond, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl"></div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-2 h-2 bg-gold-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-48 right-32 w-3 h-3 bg-gold-300 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-gold-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={16} className="text-gold-400" />
              <span className="text-gold-300 text-sm">کلکسیون جدید ۱۴۰۴</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold leading-tight mb-6"
            >
              <span className="text-dark-100">زیبایی را با</span>
              <br />
              <span className="text-gold-gradient">اکسسوری لوکس</span>
              <br />
              <span className="text-dark-100">تجربه کنید</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-dark-300 text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              مجموعه‌ای بی‌نظیر از لوکس‌ترین اکسسوری‌های دنیا، طراحی شده برای کسانی که بهترین‌ها را می‌خواهند.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#products" className="btn-gold px-8 py-4 rounded-full text-center inline-flex items-center justify-center gap-2">
                مشاهده محصولات
                <ArrowLeft size={18} />
              </a>
              <a href="#categories" className="px-8 py-4 rounded-full border border-dark-500 text-dark-200 hover:border-gold-500 hover:text-gold-400 transition-all duration-300 text-center">
                دسته‌بندی‌ها
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '۲۰۰+', label: 'محصول' },
                { value: '۱۵K+', label: 'مشتری' },
                { value: '۴.۹', label: 'امتیاز' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gold-400">{stat.value}</div>
                  <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[450px] h-[450px]">
              {/* Decorative ring */}
              <div className="absolute inset-0 border-2 border-gold-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-gold-400/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Main image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gold-500/30 shadow-2xl shadow-gold-500/20">
                <img
                  src="https://image.qwenlm.ai/generated-images/5d7fc761-e093-41ef-af84-bd308ffaa991/_result.png"
                  alt="Luxury Accessories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-12 -right-4 glass rounded-xl p-3 shadow-lg flex items-center gap-2"
              >
                <Diamond className="text-gold-400" size={24} />
                <div className="text-xs text-dark-300">الماس طبیعی</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-16 -left-4 glass rounded-xl p-3 shadow-lg flex items-center gap-2"
              >
                <Award className="text-gold-400" size={24} />
                <div className="text-xs text-dark-300">طلای ۱۸ عیار</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-500 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
