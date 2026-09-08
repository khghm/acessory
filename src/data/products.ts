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
  { id: 'all', name: 'همه', nameEn: 'All', icon: 'layers', count: 24 },
  { id: 'necklace', name: 'گردنبند', nameEn: 'Necklace', icon: 'necklace', count: 6 },
  { id: 'bracelet', name: 'دستبند', nameEn: 'Bracelet', icon: 'watch', count: 5 },
  { id: 'earring', name: 'گوشواره', nameEn: 'Earring', icon: 'gem', count: 5 },
  { id: 'ring', name: 'انگشتر', nameEn: 'Ring', icon: 'ring', count: 4 },
  { id: 'watch', name: 'ساعت', nameEn: 'Watch', icon: 'clock', count: 4 },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'گردنبند الماس سلطنتی',
    nameEn: 'Royal Diamond Necklace',
    price: 12500000,
    originalPrice: 15000000,
    category: 'necklace',
    image: 'https://image.qwenlm.ai/generated-images/3656d6da-a66f-457f-9511-c7f46c3b9643/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/9ab3ba28-8f76-45a2-a74e-2083b1585e7a/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/33332967-0dc7-4ab4-bc6a-b3fd6e55a800/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/264e3966-8c18-4454-a2b0-7527524a5b10/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/d569d278-87b1-4aa7-a1d2-ff4a0c45f531/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/f4ae9fd8-cbfe-49b3-8c7f-f5e5158e5c20/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/3988396f-4a83-47a5-9067-10a8ea4f9d3c/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/eaa10a9b-9cf0-4e7d-b0aa-c5e02fe7cd83/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/b72dbea9-42f9-44f3-91ba-c798829da712/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/2e91f917-f8db-4b4f-8866-bee03f04d789/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/3656d6da-a66f-457f-9511-c7f46c3b9643/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/9ab3ba28-8f76-45a2-a74e-2083b1585e7a/_result.png',
    rating: 5.0,
    reviews: 45,
    badge: 'لوکس',
    description: 'دستبند تنیسی الماس با ۳۶ عدد الماس طبیعی. شاهکاری از زیبایی و ظرافت.',
    colors: ['#FFD700', '#C0C0C0'],
    inStock: true,
  },
];
