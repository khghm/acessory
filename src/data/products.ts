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
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: 'all', name: 'همه', nameEn: 'All', icon: '✨', count: 24 },
  { id: 'necklace', name: 'گردنبند', nameEn: 'Necklace', icon: '📿', count: 6 },
  { id: 'bracelet', name: 'دستبند', nameEn: 'Bracelet', icon: '⌚', count: 5 },
  { id: 'earring', name: 'گوشواره', nameEn: 'Earring', icon: '💎', count: 5 },
  { id: 'ring', name: 'انگشتر', nameEn: 'Ring', icon: '💍', count: 4 },
  { id: 'watch', name: 'ساعت', nameEn: 'Watch', icon: '⏰', count: 4 },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'گردنبند الماس سلطنتی',
    nameEn: 'Royal Diamond Necklace',
    price: 12500000,
    originalPrice: 15000000,
    category: 'necklace',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 128,
    badge: 'پرفروش',
    description: 'گردنبند الماس سلطنتی با طراحی منحصر به فرد و کیفیت بی‌نظیر. ساخته شده از طلای ۱۸ عیار با الماس‌های طبیعی.',
    colors: ['#FFD700', '#C0C0C0', '#B76E79'],
    inStock: true,
  },
  {
    id: 2,
    name: 'دستبند طلا زنجیری',
    nameEn: 'Gold Chain Bracelet',
    price: 8900000,
    category: 'bracelet',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 95,
    badge: 'جدید',
    description: 'دستبند زنجیری طلا با طراحی مدرن و شیک. مناسب برای استفاده روزانه و مجالس.',
    colors: ['#FFD700', '#B76E79'],
    inStock: true,
  },
  {
    id: 3,
    name: 'گوشواره مروارید کلاسیک',
    nameEn: 'Classic Pearl Earrings',
    price: 6700000,
    originalPrice: 7500000,
    category: 'earring',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 203,
    badge: 'تخفیف',
    description: 'گوشواره مروارید کلاسیک با طراحی ظریف و زیبا. مروارید‌های طبیعی آب شیرین.',
    colors: ['#FFD700', '#C0C0C0'],
    inStock: true,
  },
  {
    id: 4,
    name: 'انگشتر یاقوت سرخ',
    nameEn: 'Ruby Solitaire Ring',
    price: 18500000,
    category: 'ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
    rating: 5.0,
    reviews: 67,
    badge: 'لوکس',
    description: 'انگشتر یاقوت سرخ با برلیان‌های اطراف. طراحی لوکس و منحصر به فرد برای لحظات خاص.',
    colors: ['#FFD700', '#C0C0C0'],
    inStock: true,
  },
  {
    id: 5,
    name: 'ساعت مچی کلاسیک طلایی',
    nameEn: 'Classic Gold Watch',
    price: 25000000,
    originalPrice: 29000000,
    category: 'watch',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 156,
    badge: 'ویژه',
    description: 'ساعت مچی کلاسیک با بند طلایی و صفحه مشکی. موتور سوئیسی با گارانتی ۲ ساله.',
    colors: ['#FFD700', '#C0C0C0', '#333333'],
    inStock: true,
  },
  {
    id: 6,
    name: 'گردنبند چوکر نقره',
    nameEn: 'Silver Choker Necklace',
    price: 4200000,
    category: 'necklace',
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 89,
    description: 'گردنبند چوکر نقره با طراحی مینیمال و مدرن. مناسب برای استایل‌های روزمره.',
    colors: ['#C0C0C0', '#FFD700'],
    inStock: true,
  },
  {
    id: 7,
    name: 'دستبند چرم و طلا',
    nameEn: 'Leather & Gold Bracelet',
    price: 5600000,
    category: 'bracelet',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 72,
    badge: 'جدید',
    description: 'دستبند ترکیبی چرم طبیعی و طلا. ترکیبی از سبک کلاسیک و مدرن.',
    colors: ['#8B4513', '#333333'],
    inStock: true,
  },
  {
    id: 8,
    name: 'گوشواره حلقه‌ای طلا',
    nameEn: 'Gold Hoop Earrings',
    price: 7800000,
    originalPrice: 9000000,
    category: 'earring',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 134,
    description: 'گوشواره حلقه‌ای طلا با طراحی ساده و شیک. طلای ۱۸ عیار با آبکاری دو لایه.',
    colors: ['#FFD700', '#B76E79'],
    inStock: true,
  },
  {
    id: 9,
    name: 'انگشتر الماس مینیمال',
    nameEn: 'Minimal Diamond Ring',
    price: 14200000,
    category: 'ring',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 98,
    description: 'انگشتر الماس با طراحی مینیمال و ظریف. مناسب برای استفاده روزانه.',
    colors: ['#FFD700', '#C0C0C0', '#B76E79'],
    inStock: true,
  },
  {
    id: 10,
    name: 'ساعت مچی نقره‌ای',
    nameEn: 'Silver Luxury Watch',
    price: 19800000,
    category: 'watch',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 112,
    description: 'ساعت مچی نقره‌ای با طراحی لوکس. ضد آب تا عمق ۱۰۰ متر.',
    colors: ['#C0C0C0', '#333333'],
    inStock: true,
  },
  {
    id: 11,
    name: 'گردنبند آویز قلب',
    nameEn: 'Heart Pendant Necklace',
    price: 5400000,
    category: 'necklace',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop',
    rating: 4.4,
    reviews: 67,
    badge: 'تخفیف',
    description: 'گردنبند آویز قلب با زنجیر ظریف. هدیه‌ای عالی برای عزیزانتان.',
    colors: ['#FFD700', '#B76E79'],
    inStock: true,
  },
  {
    id: 12,
    name: 'دستبند تنیسی الماس',
    nameEn: 'Diamond Tennis Bracelet',
    price: 32000000,
    category: 'bracelet',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=500&h=500&fit=crop',
    rating: 5.0,
    reviews: 45,
    badge: 'لوکس',
    description: 'دستبند تنیسی الماس با ۳۶ عدد الماس طبیعی. شاهکاری از زیبایی و ظرافت.',
    colors: ['#FFD700', '#C0C0C0'],
    inStock: true,
  },
];
