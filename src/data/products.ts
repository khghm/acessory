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

export const categories: Category[] = [
  { id: 'necklace', name: 'گردنبند', nameEn: 'Necklace', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop', count: 5, description: 'مجموعه‌ای از گردنبندهای لوکس' },
  { id: 'bracelet', name: 'دستبند', nameEn: 'Bracelet', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', count: 5, description: 'دستبندهای ظریف و شیک' },
  { id: 'earring', name: 'گوشواره', nameEn: 'Earring', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', count: 5, description: 'گوشواره‌های متنوع و زیبا' },
  { id: 'ring', name: 'انگشتر', nameEn: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', count: 4, description: 'انگشترهای لوکس و خاص' },
  { id: 'watch', name: 'ساعت مچی', nameEn: 'Watch', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', count: 4, description: 'ساعت‌های مچی کلاسیک و مدرن' },
  { id: 'brooch', name: 'سنجاق سینه', nameEn: 'Brooch', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop', count: 3, description: 'سنجاق‌های سینه لوکس' },
  { id: 'hair-clip', name: 'گیره مو', nameEn: 'Hair Clip', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop', count: 4, description: 'گیره‌های مو شیک' },
  { id: 'tiara', name: 'تاج و تل سر', nameEn: 'Tiara', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop', count: 3, description: 'تاج‌ها و تل‌های مجلسی' },
  { id: 'bangle', name: 'النگو', nameEn: 'Bangle', image: 'https://images.unsplash.com/photo-1573408301183-5f62b16f4f45?w=400&h=400&fit=crop', count: 4, description: 'النگوهای طلا و نقره' },
  { id: 'anklet', name: 'پابند', nameEn: 'Anklet', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop', count: 3, description: 'پابندهای ظریف' },
  { id: 'cufflinks', name: 'دکمه سردست', nameEn: 'Cufflinks', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop', count: 3, description: 'دکمه‌های سردست مردانه' },
  { id: 'tie', name: 'کراوات', nameEn: 'Tie', image: 'https://images.unsplash.com/photo-1606293926249-ed22a12cd2b5?w=400&h=400&fit=crop', count: 3, description: 'کراوات‌های لوکس' },
  { id: 'belt', name: 'کمربند', nameEn: 'Belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', count: 3, description: 'کمربندهای چرم لوکس' },
  { id: 'wallet', name: 'کیف پول', nameEn: 'Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop', count: 4, description: 'کیف پول‌های چرم' },
  { id: 'keychain', name: 'جاکلیدی', nameEn: 'Keychain', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop', count: 3, description: 'جاکلیدی‌های لوکس' },
  { id: 'sunglasses', name: 'عینک آفتابی', nameEn: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop', count: 4, description: 'عینک‌های آفتابی برند' },
  { id: 'scarf', name: 'شال و روسری', nameEn: 'Scarf', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop', count: 4, description: 'شال‌ها و روسری‌های ابریشمی' },
  { id: 'gloves', name: 'دستکش', nameEn: 'Gloves', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=400&fit=crop', count: 3, description: 'دستکش‌های چرم لوکس' },
  { id: 'hat', name: 'کلاه', nameEn: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop', count: 3, description: 'کلاه‌های شیک و مدرن' },
  { id: 'perfume', name: 'عطر', nameEn: 'Perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop', count: 4, description: 'عطرهای لوکس و خاص' },
];

export const products: Product[] = [
  // گردنبند
  { id: 1, name: 'گردنبند الماس سلطنتی', nameEn: 'Royal Diamond Necklace', price: 12500000, originalPrice: 15000000, category: 'necklace', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop', rating: 4.9, reviews: 128, badge: 'پرفروش', description: 'گردنبند الماس طبیعی با طراحی سلطنتی و زنجیر طلای ۱۸ عیار', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 2, name: 'گردنبند مروارید کلاسیک', nameEn: 'Classic Pearl Necklace', price: 8500000, category: 'necklace', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop', rating: 4.7, reviews: 89, badge: 'جدید', description: 'گردنبند مروارید طبیعی با طراحی کلاسیک و ظریف', colors: ['#FFD700', '#FFFFFF'], inStock: true },
  { id: 3, name: 'گردنبند زمرد', nameEn: 'Emerald Necklace', price: 18000000, category: 'necklace', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop', rating: 4.8, reviews: 67, badge: 'لوکس', description: 'گردنبند زمرد کلمبیایی با طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 4, name: 'گردنبند چوکر نقره', nameEn: 'Silver Choker', price: 3200000, originalPrice: 4000000, category: 'necklace', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop', rating: 4.6, reviews: 145, badge: 'تخفیف', description: 'چوکر نقره استرلینگ با طراحی مدرن', colors: ['#C0C0C0'], inStock: true },
  { id: 5, name: 'گردنبند قلب یاقوت', nameEn: 'Ruby Heart Necklace', price: 22000000, category: 'necklace', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop', rating: 5.0, reviews: 42, badge: 'ویژه', description: 'گردنبند قلب شکل با یاقوت سرخ طبیعی', colors: ['#FFD700', '#B76E79'], inStock: true },

  // دستبند
  { id: 6, name: 'دستبند طلا زنجیری', nameEn: 'Gold Chain Bracelet', price: 8900000, category: 'bracelet', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop', rating: 4.8, reviews: 95, badge: 'پرفروش', description: 'دستبند طلای ۱۸ عیار با زنجیر ظریف', colors: ['#FFD700'], inStock: true },
  { id: 7, name: 'دستبند تنیسی الماس', nameEn: 'Tennis Diamond Bracelet', price: 32000000, category: 'bracelet', image: 'https://images.unsplash.com/photo-1573408301183-5f62b16f4f45?w=600&h=600&fit=crop', rating: 4.9, reviews: 78, badge: 'لوکس', description: 'دستبند تنیسی با الماس‌های طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 8, name: 'دستبند چرم و طلا', nameEn: 'Leather Gold Bracelet', price: 4500000, category: 'bracelet', image: 'https://images.unsplash.com/photo-1609794951268-d13e86a0ed41?w=600&h=600&fit=crop', rating: 4.5, reviews: 112, description: 'دستبند چرم طبیعی با قفل طلا', colors: ['#8B4513', '#FFD700'], inStock: true },
  { id: 9, name: 'دستبند کارتیر', nameEn: 'Cartier Bracelet', price: 15000000, originalPrice: 18000000, category: 'bracelet', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop', rating: 4.7, reviews: 89, badge: 'تخفیف', description: 'دستبند کارتیر با طراحی کلاسیک', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 10, name: 'دستبند مهره‌ای', nameEn: 'Beaded Bracelet', price: 2800000, category: 'bracelet', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop', rating: 4.4, reviews: 156, description: 'دستبند مهره‌ای سنگ طبیعی', colors: ['#000000', '#8B4513'], inStock: true },

  // گوشواره
  { id: 11, name: 'گوشواره مروارید کلاسیک', nameEn: 'Classic Pearl Earrings', price: 6700000, category: 'earring', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop', rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'گوشواره مروارید طبیعی با پایه طلا', colors: ['#FFD700', '#FFFFFF'], inStock: true },
  { id: 12, name: 'گوشواره حلقه‌ای طلا', nameEn: 'Gold Hoop Earrings', price: 5200000, category: 'earring', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop', rating: 4.6, reviews: 98, description: 'گوشواره حلقه‌ای طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 13, name: 'گوشواره الماس آویز', nameEn: 'Diamond Drop Earrings', price: 19500000, category: 'earring', image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop', rating: 4.9, reviews: 67, badge: 'لوکس', description: 'گوشواره آویز با الماس طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 14, name: 'گوشواره یاقوت', nameEn: 'Ruby Earrings', price: 14000000, originalPrice: 16500000, category: 'earring', image: 'https://images.unsplash.com/photo-1561172497-0c3b5d532c1b?w=600&h=600&fit=crop', rating: 4.7, reviews: 89, badge: 'تخفیف', description: 'گوشواره یاقوت سرخ با طلای ۱۸ عیار', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 15, name: 'گوشواره مینیمال نقره', nameEn: 'Minimal Silver Earrings', price: 2200000, category: 'earring', image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=600&fit=crop', rating: 4.5, reviews: 178, badge: 'جدید', description: 'گوشواره مینیمال نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },

  // انگشتر
  { id: 16, name: 'انگشتر یاقوت سرخ', nameEn: 'Ruby Solitaire Ring', price: 18500000, category: 'ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop', rating: 4.9, reviews: 89, badge: 'لوکس', description: 'انگشتر یاقوت سرخ با الماس‌های جانبی', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 17, name: 'انگشتر الماس تک‌نگین', nameEn: 'Diamond Solitaire Ring', price: 25000000, category: 'ring', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop', rating: 5.0, reviews: 156, badge: 'پرفروش', description: 'انگشتر الماس تک‌نگین با طلای ۱۸ عیار', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 18, name: 'انگشتر زمرد', nameEn: 'Emerald Ring', price: 21000000, originalPrice: 24000000, category: 'ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop', rating: 4.8, reviews: 67, badge: 'تخفیف', description: 'انگشتر زمرد کلمبیایی', colors: ['#FFD700'], inStock: true },
  { id: 19, name: 'انگشتر مینیمال', nameEn: 'Minimal Ring', price: 3800000, category: 'ring', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop', rating: 4.6, reviews: 234, badge: 'جدید', description: 'انگشتر مینیمال نقره با الماس کوچک', colors: ['#C0C0C0'], inStock: true },

  // ساعت مچی
  { id: 20, name: 'ساعت مچی کلاسیک طلایی', nameEn: 'Classic Gold Watch', price: 25000000, category: 'watch', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop', rating: 4.9, reviews: 145, badge: 'پرفروش', description: 'ساعت مچی کلاسیک با بند چرم و قاب طلا', colors: ['#FFD700', '#8B4513'], inStock: true },
  { id: 21, name: 'ساعت مچی نقره‌ای', nameEn: 'Silver Watch', price: 18000000, category: 'watch', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop', rating: 4.7, reviews: 98, description: 'ساعت مچی نقره با صفحه مشکی', colors: ['#C0C0C0', '#000000'], inStock: true },
  { id: 22, name: 'ساعت هوشمند لوکس', nameEn: 'Luxury Smart Watch', price: 35000000, originalPrice: 40000000, category: 'watch', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop', rating: 4.8, reviews: 234, badge: 'تخفیف', description: 'ساعت هوشمند با طراحی لوکس', colors: ['#000000', '#C0C0C0'], inStock: true },
  { id: 23, name: 'ساعت زنانه ظریف', nameEn: 'Delicate Women Watch', price: 12000000, category: 'watch', image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=600&fit=crop', rating: 4.6, reviews: 167, badge: 'جدید', description: 'ساعت زنانه ظریف با نگین‌های الماس', colors: ['#FFD700', '#B76E79'], inStock: true },

  // سنجاق سینه
  { id: 24, name: 'سنجاق سینه الماس', nameEn: 'Diamond Brooch', price: 15000000, category: 'brooch', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop', rating: 4.8, reviews: 45, badge: 'لوکس', description: 'سنجاق سینه با الماس‌های طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 25, name: 'سنجاق سینه گل رز', nameEn: 'Rose Brooch', price: 8500000, category: 'brooch', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop', rating: 4.6, reviews: 78, description: 'سنجاق سینه طرح گل رز با یاقوت', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 26, name: 'سنجاق سینه پروانه', nameEn: 'Butterfly Brooch', price: 6200000, originalPrice: 7500000, category: 'brooch', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop', rating: 4.7, reviews: 92, badge: 'تخفیف', description: 'سنجاق سینه طرح پروانه با نگین', colors: ['#FFD700'], inStock: true },

  // گیره مو
  { id: 27, name: 'گیره مو کریستال', nameEn: 'Crystal Hair Clip', price: 3500000, category: 'hair-clip', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop', rating: 4.7, reviews: 134, badge: 'پرفروش', description: 'گیره مو با کریستال‌های سواروفسکی', colors: ['#C0C0C0', '#FFD700'], inStock: true },
  { id: 28, name: 'گیره مو مروارید', nameEn: 'Pearl Hair Clip', price: 2800000, category: 'hair-clip', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop', rating: 4.5, reviews: 89, description: 'گیره مو با مروارید طبیعی', colors: ['#FFFFFF', '#FFD700'], inStock: true },
  { id: 29, name: 'گیره مو طلایی', nameEn: 'Gold Hair Clip', price: 4200000, category: 'hair-clip', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop', rating: 4.6, reviews: 112, badge: 'جدید', description: 'گیره مو طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 30, name: 'گیره مو مینیمال', nameEn: 'Minimal Hair Clip', price: 1800000, category: 'hair-clip', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop', rating: 4.4, reviews: 156, description: 'گیره مو مینیمال نقره', colors: ['#C0C0C0'], inStock: true },

  // تاج و تل سر
  { id: 31, name: 'تاج عروس کریستال', nameEn: 'Crystal Bridal Tiara', price: 12000000, category: 'tiara', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop', rating: 4.9, reviews: 67, badge: 'لوکس', description: 'تاج عروس با کریستال‌های سواروفسکی', colors: ['#C0C0C0', '#FFFFFF'], inStock: true },
  { id: 32, name: 'تل سر مروارید', nameEn: 'Pearl Headband', price: 8500000, category: 'tiara', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop', rating: 4.7, reviews: 89, description: 'تل سر با مروارید طبیعی', colors: ['#FFFFFF', '#FFD700'], inStock: true },
  { id: 33, name: 'تاج مجلسی طلایی', nameEn: 'Golden Tiara', price: 15000000, originalPrice: 18000000, category: 'tiara', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop', rating: 4.8, reviews: 45, badge: 'تخفیف', description: 'تاج مجلسی طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },

  // النگو
  { id: 34, name: 'النگو طلا ظریف', nameEn: 'Delicate Gold Bangle', price: 9500000, category: 'bangle', image: 'https://images.unsplash.com/photo-1573408301183-5f62b16f4f45?w=600&h=600&fit=crop', rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'النگو طلای ۱۸ عیار ظریف', colors: ['#FFD700'], inStock: true },
  { id: 35, name: 'النگو نقره', nameEn: 'Silver Bangle', price: 4200000, category: 'bangle', image: 'https://images.unsplash.com/photo-1573408301183-5f62b16f4f45?w=600&h=600&fit=crop', rating: 4.6, reviews: 98, description: 'النگو نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 36, name: 'النگو الماس', nameEn: 'Diamond Bangle', price: 28000000, category: 'bangle', image: 'https://images.unsplash.com/photo-1573408301183-5f62b16f4f45?w=600&h=600&fit=crop', rating: 4.9, reviews: 56, badge: 'لوکس', description: 'النگو با الماس‌های طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },
  { id: 37, name: 'النگو چرم و طلا', nameEn: 'Leather Gold Bangle', price: 6800000, originalPrice: 8000000, category: 'bangle', image: 'https://images.unsplash.com/photo-1573408301183-5f62b16f4f45?w=600&h=600&fit=crop', rating: 4.5, reviews: 112, badge: 'تخفیف', description: 'النگو چرم طبیعی با طلا', colors: ['#8B4513', '#FFD700'], inStock: true },

  // پابند
  { id: 38, name: 'پابند طلا ظریف', nameEn: 'Delicate Gold Anklet', price: 5200000, category: 'anklet', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop', rating: 4.7, reviews: 89, badge: 'پرفروش', description: 'پابند طلای ۱۸ عیار ظریف', colors: ['#FFD700'], inStock: true },
  { id: 39, name: 'پابند نقره', nameEn: 'Silver Anklet', price: 2800000, category: 'anklet', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop', rating: 4.5, reviews: 134, description: 'پابند نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 40, name: 'پابند مروارید', nameEn: 'Pearl Anklet', price: 6500000, category: 'anklet', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop', rating: 4.8, reviews: 67, badge: 'جدید', description: 'پابند با مروارید طبیعی', colors: ['#FFFFFF', '#FFD700'], inStock: true },

  // دکمه سردست
  { id: 41, name: 'دکمه سردست طلا', nameEn: 'Gold Cufflinks', price: 8500000, category: 'cufflinks', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=600&fit=crop', rating: 4.8, reviews: 78, badge: 'لوکس', description: 'دکمه سردست طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 42, name: 'دکمه سردست نقره', nameEn: 'Silver Cufflinks', price: 3200000, category: 'cufflinks', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=600&fit=crop', rating: 4.6, reviews: 112, description: 'دکمه سردست نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 43, name: 'دکمه سردست الماس', nameEn: 'Diamond Cufflinks', price: 18000000, category: 'cufflinks', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=600&fit=crop', rating: 4.9, reviews: 45, badge: 'ویژه', description: 'دکمه سردست با الماس طبیعی', colors: ['#FFD700', '#C0C0C0'], inStock: true },

  // کراوات
  { id: 44, name: 'کراوات ابریشم', nameEn: 'Silk Tie', price: 4500000, category: 'tie', image: 'https://images.unsplash.com/photo-1606293926249-ed22a12cd2b5?w=600&h=600&fit=crop', rating: 4.7, reviews: 156, badge: 'پرفروش', description: 'کراوات ابریشم خالص ایتالیایی', colors: ['#000000', '#8B0000'], inStock: true },
  { id: 45, name: 'کراوات لوکس', nameEn: 'Luxury Tie', price: 8500000, category: 'tie', image: 'https://images.unsplash.com/photo-1606293926249-ed22a12cd2b5?w=600&h=600&fit=crop', rating: 4.8, reviews: 89, badge: 'لوکس', description: 'کراوات لوکس با طراحی خاص', colors: ['#1a1a2e', '#FFD700'], inStock: true },
  { id: 46, name: 'کراوات کلاسیک', nameEn: 'Classic Tie', price: 3200000, originalPrice: 4000000, category: 'tie', image: 'https://images.unsplash.com/photo-1606293926249-ed22a12cd2b5?w=600&h=600&fit=crop', rating: 4.5, reviews: 234, badge: 'تخفیف', description: 'کراوات کلاسیک با طرح راه راه', colors: ['#000080', '#C0C0C0'], inStock: true },

  // کمربند
  { id: 47, name: 'کمربند چرم لوکس', nameEn: 'Luxury Leather Belt', price: 6800000, category: 'belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop', rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'کمربند چرم طبیعی با سگک طلا', colors: ['#8B4513', '#FFD700'], inStock: true },
  { id: 48, name: 'کمربند مشکی', nameEn: 'Black Belt', price: 4500000, category: 'belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop', rating: 4.6, reviews: 178, description: 'کمربند چرم مشکی با سگک نقره', colors: ['#000000', '#C0C0C0'], inStock: true },
  { id: 49, name: 'کمربند زنانه', nameEn: 'Women Belt', price: 5200000, originalPrice: 6500000, category: 'belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop', rating: 4.7, reviews: 98, badge: 'تخفیف', description: 'کمربند زنانه ظریف با سگک کریستال', colors: ['#B76E79', '#FFD700'], inStock: true },

  // کیف پول
  { id: 50, name: 'کیف پول چرم مردانه', nameEn: 'Men Leather Wallet', price: 5800000, category: 'wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop', rating: 4.8, reviews: 234, badge: 'پرفروش', description: 'کیف پول چرم طبیعی مردانه', colors: ['#8B4513', '#000000'], inStock: true },
  { id: 51, name: 'کیف پول زنانه', nameEn: 'Women Wallet', price: 6500000, category: 'wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop', rating: 4.7, reviews: 156, description: 'کیف پول زنانه چرم لوکس', colors: ['#B76E79', '#FFD700'], inStock: true },
  { id: 52, name: 'کیف پول مینیمال', nameEn: 'Minimal Wallet', price: 3800000, category: 'wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop', rating: 4.5, reviews: 189, badge: 'جدید', description: 'کیف پول مینیمال چرم', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 53, name: 'کیف پول لوکس', nameEn: 'Luxury Wallet', price: 12000000, category: 'wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop', rating: 4.9, reviews: 67, badge: 'لوکس', description: 'کیف پول لوکس چرم ایتالیایی', colors: ['#8B4513', '#FFD700'], inStock: true },

  // جاکلیدی
  { id: 54, name: 'جاکلیدی طلا', nameEn: 'Gold Keychain', price: 4200000, category: 'keychain', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=600&fit=crop', rating: 4.7, reviews: 134, badge: 'پرفروش', description: 'جاکلیدی طلای ۱۸ عیار', colors: ['#FFD700'], inStock: true },
  { id: 55, name: 'جاکلیدی نقره', nameEn: 'Silver Keychain', price: 2200000, category: 'keychain', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=600&fit=crop', rating: 4.5, reviews: 178, description: 'جاکلیدی نقره استرلینگ', colors: ['#C0C0C0'], inStock: true },
  { id: 56, name: 'جاکلیدی چرم', nameEn: 'Leather Keychain', price: 1800000, originalPrice: 2500000, category: 'keychain', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=600&fit=crop', rating: 4.4, reviews: 234, badge: 'تخفیف', description: 'جاکلیدی چرم طبیعی', colors: ['#8B4513', '#000000'], inStock: true },

  // عینک آفتابی
  { id: 57, name: 'عینک آفتابی لوکس', nameEn: 'Luxury Sunglasses', price: 15000000, category: 'sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop', rating: 4.9, reviews: 156, badge: 'لوکس', description: 'عینک آفتابی لوکس با فریم طلا', colors: ['#FFD700', '#000000'], inStock: true },
  { id: 58, name: 'عینک آفتابی کلاسیک', nameEn: 'Classic Sunglasses', price: 8500000, category: 'sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop', rating: 4.7, reviews: 234, badge: 'پرفروش', description: 'عینک آفتابی کلاسیک خلبانی', colors: ['#FFD700', '#8B4513'], inStock: true },
  { id: 59, name: 'عینک آفتابی زنانه', nameEn: 'Women Sunglasses', price: 6800000, category: 'sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop', rating: 4.6, reviews: 178, description: 'عینک آفتابی زنانه با فریم صورتی', colors: ['#B76E79', '#FFD700'], inStock: true },
  { id: 60, name: 'عینک آفتابی اسپرت', nameEn: 'Sport Sunglasses', price: 5200000, originalPrice: 6500000, category: 'sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop', rating: 4.5, reviews: 189, badge: 'تخفیف', description: 'عینک آفتابی اسپرت', colors: ['#000000', '#C0C0C0'], inStock: true },

  // شال و روسری
  { id: 61, name: 'شال ابریشم', nameEn: 'Silk Scarf', price: 8500000, category: 'scarf', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop', rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'شال ابریشم خالص با طرح خاص', colors: ['#FFD700', '#B76E79'], inStock: true },
  { id: 62, name: 'روسری ابریشم', nameEn: 'Silk Shawl', price: 6500000, category: 'scarf', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop', rating: 4.7, reviews: 156, description: 'روسری ابریشم با حاشیه دستی', colors: ['#000000', '#FFD700'], inStock: true },
  { id: 63, name: 'شال لوکس', nameEn: 'Luxury Shawl', price: 15000000, category: 'scarf', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop', rating: 4.9, reviews: 67, badge: 'لوکس', description: 'شال لوکس کشمیر', colors: ['#8B4513', '#FFD700'], inStock: true },
  { id: 64, name: 'روسری مینیمال', nameEn: 'Minimal Shawl', price: 4200000, originalPrice: 5500000, category: 'scarf', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop', rating: 4.5, reviews: 189, badge: 'تخفیف', description: 'روسری مینیمال با طرح ساده', colors: ['#C0C0C0', '#000000'], inStock: true },

  // دستکش
  { id: 65, name: 'دستکش چرم مردانه', nameEn: 'Men Leather Gloves', price: 5800000, category: 'gloves', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&h=600&fit=crop', rating: 4.8, reviews: 134, badge: 'پرفروش', description: 'دستکش چرم طبیعی مردانه', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 66, name: 'دستکش چرم زنانه', nameEn: 'Women Leather Gloves', price: 6500000, category: 'gloves', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&h=600&fit=crop', rating: 4.7, reviews: 98, description: 'دستکش چرم زنانه با آستر کشمیر', colors: ['#B76E79', '#000000'], inStock: true },
  { id: 67, name: 'دستکش لوکس', nameEn: 'Luxury Gloves', price: 12000000, category: 'gloves', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&h=600&fit=crop', rating: 4.9, reviews: 45, badge: 'لوکس', description: 'دستکش لوکس چرم ایتالیایی', colors: ['#8B4513', '#FFD700'], inStock: true },

  // کلاه
  { id: 68, name: 'کلاه فدورا', nameEn: 'Fedora Hat', price: 6800000, category: 'hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=600&fit=crop', rating: 4.7, reviews: 134, badge: 'پرفروش', description: 'کلاه فدورا نمدی', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 69, name: 'کلاه بیسبال', nameEn: 'Baseball Cap', price: 3200000, category: 'hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=600&fit=crop', rating: 4.5, reviews: 234, description: 'کلاه بیسبال اسپرت', colors: ['#000000', '#000080'], inStock: true },
  { id: 70, name: 'کلاه لوکس', nameEn: 'Luxury Hat', price: 12000000, originalPrice: 15000000, category: 'hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=600&fit=crop', rating: 4.8, reviews: 67, badge: 'تخفیف', description: 'کلاه لوکس با نوار چرم', colors: ['#8B4513', '#FFD700'], inStock: true },

  // عطر
  { id: 71, name: 'عطر لوکس زنانه', nameEn: 'Luxury Women Perfume', price: 18000000, category: 'perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop', rating: 4.9, reviews: 156, badge: 'لوکس', description: 'عطر لوکس زنانه با رایحه گل', colors: ['#B76E79', '#FFD700'], inStock: true },
  { id: 72, name: 'عطر مردانه', nameEn: 'Men Perfume', price: 12000000, category: 'perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop', rating: 4.8, reviews: 234, badge: 'پرفروش', description: 'عطر مردانه با رایحه چوبی', colors: ['#000000', '#8B4513'], inStock: true },
  { id: 73, name: 'عطر یونیسکس', nameEn: 'Unisex Perfume', price: 15000000, category: 'perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop', rating: 4.7, reviews: 178, description: 'عطر یونیسکس با رایحه خاص', colors: ['#C0C0C0', '#FFD700'], inStock: true },
  { id: 74, name: 'عطر مینیاتوری', nameEn: 'Miniature Perfume', price: 4500000, originalPrice: 6000000, category: 'perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop', rating: 4.5, reviews: 189, badge: 'تخفیف', description: 'ست عطر مینیاتوری', colors: ['#B76E79', '#C0C0C0'], inStock: true },
];
