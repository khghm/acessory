export interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  colors: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  count: number;
  description: string;
}

// Helper function to create SVG placeholder images
const createPlaceholderImage = (category: string, id: number): string => {
  const colors: Record<string, { bg: string; accent: string }> = {
    'necklace': { bg: '#1a1a2e', accent: '#D4AF37' },
    'bracelet': { bg: '#16213e', accent: '#C0C0C0' },
    'earring': { bg: '#0f3460', accent: '#FFD700' },
    'ring': { bg: '#1a1a2e', accent: '#B76E79' },
    'watch': { bg: '#16213e', accent: '#D4AF37' },
    'brooch': { bg: '#0f3460', accent: '#C0C0C0' },
    'hair-clip': { bg: '#1a1a2e', accent: '#FFD700' },
    'tiara': { bg: '#16213e', accent: '#B76E79' },
    'bangle': { bg: '#0f3460', accent: '#D4AF37' },
    'anklet': { bg: '#1a1a2e', accent: '#C0C0C0' },
    'cufflinks': { bg: '#16213e', accent: '#FFD700' },
    'tie': { bg: '#0f3460', accent: '#B76E79' },
    'belt': { bg: '#1a1a2e', accent: '#D4AF37' },
    'wallet': { bg: '#16213e', accent: '#C0C0C0' },
    'keychain': { bg: '#0f3460', accent: '#FFD700' },
    'sunglasses': { bg: '#1a1a2e', accent: '#B76E79' },
    'scarf': { bg: '#16213e', accent: '#D4AF37' },
    'gloves': { bg: '#0f3460', accent: '#C0C0C0' },
    'hat': { bg: '#1a1a2e', accent: '#FFD700' },
    'perfume': { bg: '#16213e', accent: '#B76E79' },
  };

  const color = colors[category] || colors['necklace'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
    <defs>
      <linearGradient id="bg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color.bg};stop-opacity:1" />
        <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
      </linearGradient>
      <radialGradient id="glow${id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:${color.accent};stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:${color.accent};stop-opacity:0" />
      </radialGradient>
    </defs>
    <rect width="500" height="500" fill="url(#bg${id})"/>
    <circle cx="250" cy="250" r="200" fill="url(#glow${id})"/>
    <circle cx="250" cy="250" r="80" fill="none" stroke="${color.accent}" stroke-width="2" opacity="0.6"/>
    <circle cx="250" cy="250" r="60" fill="${color.accent}" opacity="0.2"/>
    <text x="250" y="260" font-family="Arial" font-size="24" fill="${color.accent}" text-anchor="middle" opacity="0.8">${category.toUpperCase()}</text>
  </svg>`;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Helper function to get product image based on category and ID
const getProductImage = (category: string, id: number): string => {
  return createPlaceholderImage(category, id);
};

export const categories: Category[] = [
  { id: 'necklace', name: 'گردنبند', nameEn: 'Necklace', image: createPlaceholderImage('necklace', 100), count: 5, description: 'مجموعه‌ای از گردنبندهای لوکس' },
  { id: 'bracelet', name: 'دستبند', nameEn: 'Bracelet', image: createPlaceholderImage('bracelet', 101), count: 5, description: 'دستبندهای ظریف و شیک' },
  { id: 'earring', name: 'گوشواره', nameEn: 'Earring', image: createPlaceholderImage('earring', 102), count: 5, description: 'گوشواره‌های متنوع و زیبا' },
  { id: 'ring', name: 'انگشتر', nameEn: 'Ring', image: createPlaceholderImage('ring', 103), count: 4, description: 'انگشترهای لوکس و خاص' },
  { id: 'watch', name: 'ساعت مچی', nameEn: 'Watch', image: createPlaceholderImage('watch', 104), count: 4, description: 'ساعت‌های مچی کلاسیک و مدرن' },
  { id: 'brooch', name: 'سنجاق سینه', nameEn: 'Brooch', image: createPlaceholderImage('brooch', 105), count: 3, description: 'سنجاق‌های سینه لوکس' },
  { id: 'hair-clip', name: 'گیره مو', nameEn: 'Hair Clip', image: createPlaceholderImage('hair-clip', 106), count: 4, description: 'گیره‌های مو شیک' },
  { id: 'tiara', name: 'تاج و تل سر', nameEn: 'Tiara', image: createPlaceholderImage('tiara', 107), count: 3, description: 'تاج‌ها و تل‌های مجلسی' },
  { id: 'bangle', name: 'النگو', nameEn: 'Bangle', image: createPlaceholderImage('bangle', 108), count: 4, description: 'النگوهای طلا و نقره' },
  { id: 'anklet', name: 'پابند', nameEn: 'Anklet', image: createPlaceholderImage('anklet', 109), count: 3, description: 'پابندهای ظریف' },
  { id: 'cufflinks', name: 'دکمه سردست', nameEn: 'Cufflinks', image: createPlaceholderImage('cufflinks', 110), count: 3, description: 'دکمه‌های سردست مردانه' },
  { id: 'tie', name: 'کراوات', nameEn: 'Tie', image: createPlaceholderImage('tie', 111), count: 3, description: 'کراوات‌های لوکس' },
  { id: 'belt', name: 'کمربند', nameEn: 'Belt', image: createPlaceholderImage('belt', 112), count: 3, description: 'کمربندهای چرم لوکس' },
  { id: 'wallet', name: 'کیف پول', nameEn: 'Wallet', image: createPlaceholderImage('wallet', 113), count: 4, description: 'کیف پول‌های چرم' },
  { id: 'keychain', name: 'جاکلیدی', nameEn: 'Keychain', image: createPlaceholderImage('keychain', 114), count: 3, description: 'جاکلیدی‌های لوکس' },
  { id: 'sunglasses', name: 'عینک آفتابی', nameEn: 'Sunglasses', image: createPlaceholderImage('sunglasses', 115), count: 4, description: 'عینک‌های آفتابی برند' },
  { id: 'scarf', name: 'شال و روسری', nameEn: 'Scarf', image: createPlaceholderImage('scarf', 116), count: 4, description: 'شال‌ها و روسری‌های ابریشمی' },
  { id: 'gloves', name: 'دستکش', nameEn: 'Gloves', image: createPlaceholderImage('gloves', 117), count: 3, description: 'دستکش‌های چرم لوکس' },
  { id: 'hat', name: 'کلاه', nameEn: 'Hat', image: createPlaceholderImage('hat', 118), count: 3, description: 'کلاه‌های شیک و مدرن' },
  { id: 'perfume', name: 'عطر', nameEn: 'Perfume', image: createPlaceholderImage('perfume', 119), count: 4, description: 'عطرهای لوکس و خاص' },
];

export const products: Product[] = [
  // گردنبند
  { id: 1, name: 'گردنبند الماس سلطنتی', nameEn: 'Royal Diamond Necklace', price: 12500000, originalPrice: 15000000, category: 'necklace', image: getProductImage('necklace', 1), rating: 4.9, reviews: 128, badge: 'پرفروش', description: 'گردنبند الماس طبیعی با طراحی سلطنتی و زنجیر طلای ۱۸ عیار', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 2, name: 'گردنبند مروارید کلاسیک', nameEn: 'Classic Pearl Necklace', price: 8500000, category: 'necklace', image: getProductImage('necklace', 2), rating: 4.7, reviews: 89, badge: 'جدید', description: 'گردنبند مروارید طبیعی با طراحی کلاسیک و ظریف', colors: ['#FFD700', '#FFFFFF'], inStock: true },
  { id: 3, name: 'گردنبند زمرد', nameEn: 'Emerald Necklace', price: 18000000, category: 'necklace', image: getProductImage('necklace', 3), rating: 4.8, reviews: 67, badge: 'لوکس', description: 'گردنبند زمرد کلمبیایی با طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 4, name: 'گردنبند چوکر نقره', nameEn: 'Silver Choker', price: 3200000, originalPrice: 4000000, category: 'necklace', image: getProductImage('necklace', 4), rating: 4.6, reviews: 145, badge: 'تخفیف', description: 'چوکر نقره استرلینگ با طراحی مدرن', colors: ['#C0C0C0'], inStock: true },
  { id: 5, name: 'گردنبند قلب یاقوت', nameEn: 'Ruby Heart Necklace', price: 22000000, category: 'necklace', image: getProductImage('necklace', 5), rating: 5.0, reviews: 42, badge: 'ویژه', description: 'گردنبند قلب شکل با یاقوت سرخ طبیعی', colors: ['#FFD700', '#B76E79'], inStock: true },

  // دستبند
  { id: 6, name: 'دستبند طلا زنجیری', nameEn: 'Gold Chain Bracelet', price: 8900000, category: 'bracelet', image: getProductImage('bracelet', 6), rating: 4.8, reviews: 95, badge: 'پرفروش', description: 'دستبند طلای ۱۸ عیار با زنجیر ظریف', colors: ['#FFD700'], inStock: true },
  { id: 7, name: 'دستبند تنیسی الماس', nameEn: 'Tennis Diamond Bracelet', price: 32000000, category: 'bracelet', image: getProductImage('bracelet', 7), rating: 4.9, reviews: 78, badge: 'لوکس', description: 'دستبند تنیسی با الماس‌های طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 8, name: 'دستبند چرم و طلا', nameEn: 'Leather Gold Bracelet', price: 4500000, category: 'bracelet', image: getProductImage('bracelet', 8), rating: 4.5, reviews: 112, description: 'دستبند چرم طبیعی با قفل طلا', colors: ['#8B4513', '#FFD700'], inStock: true },
  { id: 9, name: 'دستبند کارتیر', nameEn: 'Cartier Bracelet', price: 15000000, originalPrice: 18000000, category: 'bracelet', image: getProductImage('bracelet', 9), rating: 4.7, reviews: 89, badge: 'تخفیف', description: 'دستبند کارتیر با طراحی کلاسیک', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 10, name: 'دستبند مهره‌ای', nameEn: 'Beaded Bracelet', price: 2800000, category: 'bracelet', image: getProductImage('bracelet', 10), rating: 4.4, reviews: 156, description: 'دستبند مهره‌ای سنگ طبیعی', colors: ['#000000', '#8B4513'], inStock: true },

  // گوشواره
  { id: 11, name: 'گوشواره مروارید کلاسیک', nameEn: 'Classic Pearl Earrings', price: 6700000, category: 'earring', image: getProductImage('earring', 11), rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'گوشواره مروارید طبیعی با پایه طلا', colors: ['#FFD700', '#FFFFFF'], inStock: true },
  { id: 12, name: 'گوشواره حلقه‌ای طلا', nameEn: 'Gold Hoop Earrings', price: 5200000, category: 'earring', image: getProductImage('earring', 12), rating: 4.6, reviews: 98, description: 'گوشواره حلقه‌ای طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 13, name: 'گوشواره الماس آویز', nameEn: 'Diamond Drop Earrings', price: 19500000, category: 'earring', image: getProductImage('earring', 13), rating: 4.9, reviews: 67, badge: 'لوکس', description: 'گوشواره آویز با الماس طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 14, name: 'گوشواره یاقوت', nameEn: 'Ruby Earrings', price: 14000000, originalPrice: 16500000, category: 'earring', image: getProductImage('earring', 14), rating: 4.7, reviews: 89, badge: 'تخفیف', description: 'گوشواره یاقوت سرخ با طلای ۱۸ عیار', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 15, name: 'گوشواره مینیمال نقره', nameEn: 'Minimal Silver Earrings', price: 2200000, category: 'earring', image: getProductImage('earring', 15), rating: 4.5, reviews: 178, badge: 'جدید', description: 'گوشواره مینیمال نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },

  // انگشتر
  { id: 16, name: 'انگشتر یاقوت سرخ', nameEn: 'Ruby Solitaire Ring', price: 18500000, category: 'ring', image: getProductImage('ring', 16), rating: 4.9, reviews: 89, badge: 'لوکس', description: 'انگشتر یاقوت سرخ با الماس‌های جانبی', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 17, name: 'انگشتر الماس تک‌نگین', nameEn: 'Diamond Solitaire Ring', price: 25000000, category: 'ring', image: getProductImage('ring', 17), rating: 5.0, reviews: 156, badge: 'پرفروش', description: 'انگشتر الماس تک‌نگین با طلای ۱۸ عیار', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 18, name: 'انگشتر زمرد', nameEn: 'Emerald Ring', price: 21000000, originalPrice: 24000000, category: 'ring', image: getProductImage('ring', 18), rating: 4.8, reviews: 67, badge: 'تخفیف', description: 'انگشتر زمرد کلمبیایی', colors: ['#FFD700'], inStock: true },
  { id: 19, name: 'انگشتر مینیمال', nameEn: 'Minimal Ring', price: 3800000, category: 'ring', image: getProductImage('ring', 19), rating: 4.6, reviews: 234, badge: 'جدید', description: 'انگشتر مینیمال نقره با الماس کوچک', colors: ['#C0C0C0'], inStock: true },

  // ساعت مچی
  { id: 20, name: 'ساعت مچی کلاسیک طلایی', nameEn: 'Classic Gold Watch', price: 25000000, category: 'watch', image: getProductImage('watch', 20), rating: 4.9, reviews: 145, badge: 'پرفروش', description: 'ساعت مچی کلاسیک با بند چرم و قاب طلا', colors: ['#FFD700', '#8B4513'], inStock: true },
  { id: 21, name: 'ساعت مچی نقره‌ای', nameEn: 'Silver Watch', price: 18000000, category: 'watch', image: getProductImage('watch', 21), rating: 4.7, reviews: 98, description: 'ساعت مچی نقره با صفحه مشکی', colors: ['#C0C0C0', '#000000'], inStock: true },
  { id: 22, name: 'ساعت هوشمند لوکس', nameEn: 'Luxury Smart Watch', price: 35000000, originalPrice: 40000000, category: 'watch', image: getProductImage('watch', 22), rating: 4.8, reviews: 234, badge: 'تخفیف', description: 'ساعت هوشمند با طراحی لوکس', colors: ['#000000', '#C0C0C0'], inStock: true },
  { id: 23, name: 'ساعت زنانه ظریف', nameEn: 'Delicate Women Watch', price: 12000000, category: 'watch', image: getProductImage('watch', 23), rating: 4.6, reviews: 167, badge: 'جدید', description: 'ساعت زنانه ظریف با نگین‌های الماس', colors: ['#FFD700', '#B76E79'], inStock: true },

  // سنجاق سینه
  { id: 24, name: 'سنجاق سینه الماس', nameEn: 'Diamond Brooch', price: 15000000, category: 'brooch', image: getProductImage('brooch', 24), rating: 4.8, reviews: 45, badge: 'لوکس', description: 'سنجاق سینه با الماس‌های طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 25, name: 'سنجاق سینه گل رز', nameEn: 'Rose Brooch', price: 8500000, category: 'brooch', image: getProductImage('brooch', 25), rating: 4.6, reviews: 78, description: 'سنجاق سینه طرح گل رز با یاقوت', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 26, name: 'سنجاق سینه پروانه', nameEn: 'Butterfly Brooch', price: 6200000, originalPrice: 7500000, category: 'brooch', image: getProductImage('brooch', 26), rating: 4.7, reviews: 92, badge: 'تخفیف', description: 'سنجاق سینه طرح پروانه با نگین', colors: ['#FFD700'], inStock: true },

  // گیره مو
  { id: 27, name: 'گیره مو کریستال', nameEn: 'Crystal Hair Clip', price: 3500000, category: 'hair-clip', image: getProductImage('hair-clip', 27), rating: 4.7, reviews: 134, badge: 'پرفروش', description: 'گیره مو با کریستال‌های سواروفسکی', colors: ['#C0C0C0', '#FFD700'], inStock: true },
  { id: 28, name: 'گیره مو مروارید', nameEn: 'Pearl Hair Clip', price: 2800000, category: 'hair-clip', image: getProductImage('hair-clip', 28), rating: 4.5, reviews: 89, description: 'گیره مو با مروارید طبیعی', colors: ['#FFFFFF', '#FFD700'], inStock: true },
  { id: 29, name: 'گیره مو طلایی', nameEn: 'Gold Hair Clip', price: 4200000, category: 'hair-clip', image: getProductImage('hair-clip', 29), rating: 4.6, reviews: 112, badge: 'جدید', description: 'گیره مو طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 30, name: 'گیره مو مینیمال', nameEn: 'Minimal Hair Clip', price: 1800000, category: 'hair-clip', image: getProductImage('hair-clip', 30), rating: 4.4, reviews: 156, description: 'گیره مو مینیمال نقره', colors: ['#C0C0C0'], inStock: true },

  // تاج و تل سر
  { id: 31, name: 'تاج عروس کریستال', nameEn: 'Crystal Bridal Tiara', price: 12000000, category: 'tiara', image: getProductImage('tiara', 31), rating: 4.9, reviews: 67, badge: 'لوکس', description: 'تاج عروس با کریستال‌های سواروفسکی', colors: ['#C0C0C0', '#FFFFFF'], inStock: true },
  { id: 32, name: 'تل سر مروارید', nameEn: 'Pearl Headband', price: 8500000, category: 'tiara', image: getProductImage('tiara', 32), rating: 4.7, reviews: 89, description: 'تل سر با مروارید طبیعی', colors: ['#FFFFFF', '#FFD700'], inStock: true },
  { id: 33, name: 'تاج مجلسی طلایی', nameEn: 'Golden Tiara', price: 15000000, originalPrice: 18000000, category: 'tiara', image: getProductImage('tiara', 33), rating: 4.8, reviews: 45, badge: 'تخفیف', description: 'تاج مجلسی طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },

  // النگو
  { id: 34, name: 'النگو طلا ظریف', nameEn: 'Delicate Gold Bangle', price: 9500000, category: 'bangle', image: getProductImage('bangle', 34), rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'النگو طلای ۱۸ عیار ظریف', colors: ['#FFD700'], inStock: true },
  { id: 35, name: 'النگو نقره', nameEn: 'Silver Bangle', price: 4200000, category: 'bangle', image: getProductImage('bangle', 35), rating: 4.6, reviews: 98, description: 'النگو نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 36, name: 'النگو الماس', nameEn: 'Diamond Bangle', price: 28000000, category: 'bangle', image: getProductImage('bangle', 36), rating: 4.9, reviews: 56, badge: 'لوکس', description: 'النگو با الماس‌های طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 37, name: 'النگو چرم و طلا', nameEn: 'Leather Gold Bangle', price: 6800000, originalPrice: 8000000, category: 'bangle', image: getProductImage('bangle', 37), rating: 4.5, reviews: 112, badge: 'تخفیف', description: 'النگو چرم طبیعی با طلا', colors: ['#8B4513', '#FFD700'], inStock: true },

  // پابند
  { id: 38, name: 'پابند طلا ظریف', nameEn: 'Delicate Gold Anklet', price: 5200000, category: 'anklet', image: getProductImage('anklet', 38), rating: 4.7, reviews: 89, badge: 'پرفروش', description: 'پابند طلای ۱۸ عیار ظریف', colors: ['#FFD700'], inStock: true },
  { id: 39, name: 'پابند نقره', nameEn: 'Silver Anklet', price: 2800000, category: 'anklet', image: getProductImage('anklet', 39), rating: 4.5, reviews: 134, description: 'پابند نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 40, name: 'پابند مروارید', nameEn: 'Pearl Anklet', price: 6500000, category: 'anklet', image: getProductImage('anklet', 40), rating: 4.8, reviews: 67, badge: 'جدید', description: 'پابند با مروارید طبیعی', colors: ['#FFFFFF', '#FFD700'], inStock: true },

  // دکمه سردست
  { id: 41, name: 'دکمه سردست طلا', nameEn: 'Gold Cufflinks', price: 8500000, category: 'cufflinks', image: getProductImage('cufflinks', 41), rating: 4.8, reviews: 78, badge: 'لوکس', description: 'دکمه سردست طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 42, name: 'دکمه سردست نقره', nameEn: 'Silver Cufflinks', price: 3200000, category: 'cufflinks', image: getProductImage('cufflinks', 42), rating: 4.6, reviews: 112, description: 'دکمه سردست نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 43, name: 'دکمه سردست الماس', nameEn: 'Diamond Cufflinks', price: 18000000, category: 'cufflinks', image: getProductImage('cufflinks', 43), rating: 4.9, reviews: 45, badge: 'ویژه', description: 'دکمه سردست با الماس طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },

  // کراوات
  { id: 44, name: 'کراوات ابریشم', nameEn: 'Silk Tie', price: 4500000, category: 'tie', image: getProductImage('tie', 44), rating: 4.7, reviews: 156, badge: 'پرفروش', description: 'کراوات ابریشم خالص ایتالیایی', colors: ['#000000', '#8B0000'], inStock: true },
  { id: 45, name: 'کراوات لوکس', nameEn: 'Luxury Tie', price: 8500000, category: 'tie', image: getProductImage('tie', 45), rating: 4.8, reviews: 89, badge: 'لوکس', description: 'کراوات لوکس با طراحی خاص', colors: ['#1a1a2e', '#FFD700'], inStock: true },
  { id: 46, name: 'کراوات کلاسیک', nameEn: 'Classic Tie', price: 3200000, originalPrice: 4000000, category: 'tie', image: getProductImage('tie', 46), rating: 4.5, reviews: 234, badge: 'تخفیف', description: 'کراوات کلاسیک با طرح راه راه', colors: ['#000080', '#C0C0C0'], inStock: true },

  // کمربند
  { id: 47, name: 'کمربند چرم لوکس', nameEn: 'Luxury Leather Belt', price: 6800000, category: 'belt', image: getProductImage('belt', 47), rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'کمربند چرم طبیعی با سگک طلا', colors: ['#8B4513', '#FFD700'], inStock: true },
  { id: 48, name: 'کمربند مشکی', nameEn: 'Black Belt', price: 4500000, category: 'belt', image: getProductImage('belt', 48), rating: 4.6, reviews: 178, description: 'کمربند چرم مشکی با سگک نقره', colors: ['#000000', '#C0C0C0'], inStock: true },
  { id: 49, name: 'کمربند زنانه', nameEn: 'Women Belt', price: 5200000, originalPrice: 6500000, category: 'belt', image: getProductImage('belt', 49), rating: 4.7, reviews: 98, badge: 'تخفیف', description: 'کمربند زنانه ظریف با سگک کریستال', colors: ['#B76E79', '#FFD700'], inStock: true },

  // کیف پول
  { id: 50, name: 'کیف پول چرم مردانه', nameEn: 'Men Leather Wallet', price: 5800000, category: 'wallet', image: getProductImage('wallet', 50), rating: 4.8, reviews: 234, badge: 'پرفروش', description: 'کیف پول چرم طبیعی مردانه', colors: ['#8B4513', '#000000'], inStock: true },
  { id: 51, name: 'کیف پول زنانه', nameEn: 'Women Wallet', price: 6500000, category: 'wallet', image: getProductImage('wallet', 51), rating: 4.7, reviews: 156, description: 'کیف پول زنانه چرم لوکس', colors: ['#B76E79', '#FFD700'], inStock: true },
  { id: 52, name: 'کیف پول مینیمال', nameEn: 'Minimal Wallet', price: 3800000, category: 'wallet', image: getProductImage('wallet', 52), rating: 4.5, reviews: 189, badge: 'جدید', description: 'کیف پول مینیمال چرم', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 53, name: 'کیف پول لوکس', nameEn: 'Luxury Wallet', price: 12000000, category: 'wallet', image: getProductImage('wallet', 53), rating: 4.9, reviews: 67, badge: 'لوکس', description: 'کیف پول لوکس چرم ایتالیایی', colors: ['#8B4513', '#FFD700'], inStock: true },

  // جاکلیدی
  { id: 54, name: 'جاکلیدی طلا', nameEn: 'Gold Keychain', price: 4200000, category: 'keychain', image: getProductImage('keychain', 54), rating: 4.7, reviews: 134, badge: 'پرفروش', description: 'جاکلیدی طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 55, name: 'جاکلیدی نقره', nameEn: 'Silver Keychain', price: 2200000, category: 'keychain', image: getProductImage('keychain', 55), rating: 4.5, reviews: 178, description: 'جاکلیدی نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 56, name: 'جاکلیدی چرم', nameEn: 'Leather Keychain', price: 1800000, originalPrice: 2500000, category: 'keychain', image: getProductImage('keychain', 56), rating: 4.4, reviews: 234, badge: 'تخفیف', description: 'جاکلیدی چرم طبیعی', colors: ['#8B4513', '#000000'], inStock: true },

  // عینک آفتابی
  { id: 57, name: 'عینک آفتابی لوکس', nameEn: 'Luxury Sunglasses', price: 15000000, category: 'sunglasses', image: getProductImage('sunglasses', 57), rating: 4.9, reviews: 156, badge: 'لوکس', description: 'عینک آفتابی لوکس با فریم طلا', colors: ['#FFD700', '#000000'], inStock: true },
  { id: 58, name: 'عینک آفتابی کلاسیک', nameEn: 'Classic Sunglasses', price: 8500000, category: 'sunglasses', image: getProductImage('sunglasses', 58), rating: 4.7, reviews: 234, badge: 'پرفروش', description: 'عینک آفتابی کلاسیک خلبانی', colors: ['#FFD700', '#8B4513'], inStock: true },
  { id: 59, name: 'عینک آفتابی زنانه', nameEn: 'Women Sunglasses', price: 6800000, category: 'sunglasses', image: getProductImage('sunglasses', 59), rating: 4.6, reviews: 178, description: 'عینک آفتابی زنانه با فریم صورتی', colors: ['#B76E79', '#FFD700'], inStock: true },
  { id: 60, name: 'عینک آفتابی اسپرت', nameEn: 'Sport Sunglasses', price: 5200000, originalPrice: 6500000, category: 'sunglasses', image: getProductImage('sunglasses', 60), rating: 4.5, reviews: 189, badge: 'تخفیف', description: 'عینک آفتابی اسپرت', colors: ['#000000', '#C0C0C0'], inStock: true },

  // شال و روسری
  { id: 61, name: 'شال ابریشم', nameEn: 'Silk Scarf', price: 8500000, category: 'scarf', image: getProductImage('scarf', 61), rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'شال ابریشم خالص با طرح خاص', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 62, name: 'روسری ابریشم', nameEn: 'Silk Shawl', price: 6500000, category: 'scarf', image: getProductImage('scarf', 62), rating: 4.7, reviews: 156, description: 'روسری ابریشم با حاشیه دستی', colors: ['#000000', '#FFD700'], inStock: true },
  { id: 63, name: 'شال لوکس', nameEn: 'Luxury Shawl', price: 15000000, category: 'scarf', image: getProductImage('scarf', 63), rating: 4.9, reviews: 67, badge: 'لوکس', description: 'شال لوکس کشمیر', colors: ['#8B4513', '#FFD700'], inStock: true },
  { id: 64, name: 'روسری مینیمال', nameEn: 'Minimal Shawl', price: 4200000, originalPrice: 5500000, category: 'scarf', image: getProductImage('scarf', 64), rating: 4.5, reviews: 189, badge: 'تخفیف', description: 'روسری مینیمال با طرح ساده', colors: ['#C0C0C0', '#000000'], inStock: true },

  // دستکش
  { id: 65, name: 'دستکش چرم مردانه', nameEn: 'Men Leather Gloves', price: 5800000, category: 'gloves', image: getProductImage('gloves', 65), rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'دستکش چرم طبیعی مردانه', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 66, name: 'دستکش چرم زنانه', nameEn: 'Women Leather Gloves', price: 6500000, category: 'gloves', image: getProductImage('gloves', 66), rating: 4.7, reviews: 98, description: 'دستکش چرم زنانه با آستر کشمیر', colors: ['#B76E79', '#000000'], inStock: true },
  { id: 67, name: 'دستکش لوکس', nameEn: 'Luxury Gloves', price: 12000000, category: 'gloves', image: getProductImage('gloves', 67), rating: 4.9, reviews: 45, badge: 'لوکس', description: 'دستکش لوکس چرم ایتالیایی', colors: ['#8B4513', '#FFD700'], inStock: true },

  // کلاه
  { id: 68, name: 'کلاه فدورا', nameEn: 'Fedora Hat', price: 6800000, category: 'hat', image: getProductImage('hat', 68), rating: 4.7, reviews: 134, badge: 'پرفروش', description: 'کلاه فدورا نمدی', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 69, name: 'کلاه بیسبال', nameEn: 'Baseball Cap', price: 3200000, category: 'hat', image: getProductImage('hat', 69), rating: 4.5, reviews: 234, description: 'کلاه بیسبال اسپرت', colors: ['#000000', '#000080'], inStock: true },
  { id: 70, name: 'کلاه لوکس', nameEn: 'Luxury Hat', price: 12000000, originalPrice: 15000000, category: 'hat', image: getProductImage('hat', 70), rating: 4.8, reviews: 67, badge: 'تخفیف', description: 'کلاه لوکس با نوار چرم', colors: ['#8B4513', '#FFD700'], inStock: true },

  // عطر
  { id: 71, name: 'عطر لوکس زنانه', nameEn: 'Luxury Women Perfume', price: 18000000, category: 'perfume', image: getProductImage('perfume', 71), rating: 4.9, reviews: 156, badge: 'لوکس', description: 'عطر لوکس زنانه با رایحه گل', colors: ['#B76E79', '#FFD700'], inStock: true },
  { id: 72, name: 'عطر مردانه', nameEn: 'Men Perfume', price: 12000000, category: 'perfume', image: getProductImage('perfume', 72), rating: 4.8, reviews: 234, badge: 'پرفروش', description: 'عطر مردانه با رایحه چوبی', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 73, name: 'عطر یونیسکس', nameEn: 'Unisex Perfume', price: 15000000, category: 'perfume', image: getProductImage('perfume', 73), rating: 4.7, reviews: 178, description: 'عطر یونیسکس با رایحه خاص', colors: ['#C0C0C0', '#FFD700'], inStock: true },
  { id: 74, name: 'عطر مینیاتوری', nameEn: 'Miniature Perfume', price: 4500000, originalPrice: 6000000, category: 'perfume', image: getProductImage('perfume', 74), rating: 4.5, reviews: 189, badge: 'تخفیف', description: 'ست عطر مینیاتوری', colors: ['#B76E79', '#C0C0C0'], inStock: true },
];
