import { motion } from 'framer-motion';
import { Truck, Shield, RotateCcw, Headphones, CreditCard, Award } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Truck size={28} />, title: 'ارسال سریع', desc: 'ارسال به سراسر کشور' },
    { icon: <Shield size={28} />, title: 'ضمانت اصالت', desc: 'تضمین ۱۰۰٪ اصل بودن' },
    { icon: <RotateCcw size={28} />, title: 'بازگشت آسان', desc: '۷ روز ضمانت بازگشت' },
    { icon: <Headphones size={28} />, title: 'پشتیبانی ۲۴/۷', desc: 'همیشه در کنار شما' },
    { icon: <CreditCard size={28} />, title: 'پرداخت امن', desc: 'درگاه معتبر بانکی' },
    { icon: <Award size={28} />, title: 'کیفیت برتر', desc: 'بهترین متریال روز دنیا' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-400 text-sm tracking-wider uppercase">چرا ما؟</span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark-100 mt-2">
            مزایای خرید از <span className="text-gold-gradient">LUXE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center p-6 bg-dark-800/40 border border-dark-700 rounded-2xl hover:border-gold-500/30 hover:bg-dark-700/40 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-dark-100 mb-1">{feature.title}</h3>
              <p className="text-xs text-dark-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
