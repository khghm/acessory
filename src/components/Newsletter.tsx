import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-dark-800 to-dark-700 border border-dark-600 rounded-3xl p-8 lg:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-600/5 rounded-full blur-3xl"></div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-gold-400 text-sm tracking-wider uppercase">خبرنامه</span>
              <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-dark-100 mt-2 mb-3">
                از جدیدترین محصولات <span className="text-gold-gradient">باخبر شوید</span>
              </h2>
              <p className="text-dark-400">
                با عضویت در خبرنامه ما، از تخفیف‌های ویژه و محصولات جدید زودتر از همه مطلع شوید.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-dark-900/60 border border-dark-500 rounded-xl px-5 py-4 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-gold-500 transition-colors"
                dir="ltr"
              />
              <button
                type="submit"
                className="btn-gold px-6 py-4 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {subscribed ? (
                  <span>✓ عضو شدید!</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>عضویت</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
