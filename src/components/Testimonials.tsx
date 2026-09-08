import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'سارا محمدی',
    role: 'مشتری وفادار',
    text: 'کیفیت محصولات فوق‌العاده است. گردنبندی که خریدم دقیقاً مثل عکسش بود و حتی بهتر!',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'علی رضایی',
    role: 'خریدار',
    text: 'بسته‌بندی بسیار شیک و حرفه‌ای بود. ساعتی که هدیه دادم خیلی مورد پسند قرار گرفت.',
    rating: 5,
    avatar: '👨',
  },
  {
    name: 'مریم احمدی',
    role: 'مشتری VIP',
    text: 'ارسال سریع و پشتیبانی عالی. از خریدم کاملاً راضی هستم و حتماً دوباره خرید می‌کنم.',
    rating: 5,
    avatar: '👩‍💼',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-400 text-sm tracking-wider uppercase">نظرات</span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark-100 mt-2">
            مشتریان ما <span className="text-gold-gradient">چه می‌گویند</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-dark-800/40 border border-dark-700 rounded-2xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <Quote size={32} className="text-gold-500/20 absolute top-4 left-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-dark-300 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-dark-100">{testimonial.name}</h4>
                  <p className="text-xs text-dark-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
