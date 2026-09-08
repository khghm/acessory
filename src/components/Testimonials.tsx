import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'سارا احمدی',
    role: 'مشتری وفادار',
    avatar: 'https://i.pravatar.cc/100?img=1',
    rating: 5,
    text: 'کیفیت محصولات فوق‌العاده است. گردنبندی که خریدم دقیقاً مطابق با عکس بود و بسته‌بندی بسیار لوکس و حرفه‌ای بود.',
  },
  {
    id: 2,
    name: 'محمد رضایی',
    role: 'خریدار جدید',
    avatar: 'https://i.pravatar.cc/100?img=3',
    rating: 5,
    text: 'ارسال سریع و پشتیبانی عالی. ساعتی که سفارش دادم دقیقاً مطابق توضیحات بود. قطعاً دوباره خرید خواهم کرد.',
  },
  {
    id: 3,
    name: 'نیلوفر کریمی',
    role: 'طراح مد',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
    text: 'به عنوان یک طراح مد، همیشه به دنبال اکسسوری‌های خاص و باکیفیت هستم. این فروشگاه بهترین انتخاب من است.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-400 text-sm tracking-wider uppercase">نظرات مشتریان</span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark-100 mt-2">
            مشتریان ما <span className="text-gold-gradient">چه می‌گویند</span>
          </h2>
          <p className="text-dark-400 mt-3 max-w-md mx-auto">
            رضایت مشتریان، افتخار ماست
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-dark-800/50 border border-dark-700 rounded-2xl p-6 hover:border-gold-500/30 transition-all group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 left-4 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" size={40} />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-dark-300 text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gold-500/30"
                />
                <div>
                  <h4 className="text-dark-100 font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-dark-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
