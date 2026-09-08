import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-dark-900 font-bold text-lg font-playfair">L</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-gold-gradient">LUXE</h3>
                <p className="text-[10px] text-dark-400 tracking-[0.2em] uppercase">Accessories</p>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              فروشگاه آنلاین اکسسوری لوکس با بیش از ۱۰ سال تجربه در ارائه بهترین و باکیفیت‌ترین محصولات.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-dark-800 border border-dark-600 rounded-full flex items-center justify-center text-dark-400 hover:text-gold-400 hover:border-gold-500/30 transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-dark-800 border border-dark-600 rounded-full flex items-center justify-center text-dark-400 hover:text-gold-400 hover:border-gold-500/30 transition-all">
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-100 font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2.5">
              {['صفحه اصلی', 'فروشگاه', 'درباره ما', 'تماس با ما', 'بلاگ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-dark-100 font-bold mb-4">دسته‌بندی‌ها</h4>
            <ul className="space-y-2.5">
              {['گردنبند', 'دستبند', 'گوشواره', 'انگشتر', 'ساعت مچی'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark-100 font-bold mb-4">تماس با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-dark-400">
                <MapPin size={16} className="text-gold-400 shrink-0" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-dark-400">
                <Phone size={16} className="text-gold-400 shrink-0" />
                <span dir="ltr">021-1234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-dark-400">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <span dir="ltr">info@luxe-acc.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © ۱۴۰۴ LUXE Accessories. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
}
