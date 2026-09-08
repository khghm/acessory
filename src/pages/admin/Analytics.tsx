import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, ShoppingCart, Users, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const monthlyData = [
  { name: 'فروردین', revenue: 45000, orders: 120, customers: 85 },
  { name: 'اردیبهشت', revenue: 52000, orders: 145, customers: 92 },
  { name: 'خرداد', revenue: 61000, orders: 168, customers: 110 },
  { name: 'تیر', revenue: 58000, orders: 155, customers: 98 },
  { name: 'مرداد', revenue: 72000, orders: 195, customers: 125 },
  { name: 'شهریور', revenue: 68000, orders: 180, customers: 115 },
  { name: 'مهر', revenue: 85000, orders: 220, customers: 145 },
  { name: 'آبان', revenue: 92000, orders: 245, customers: 160 },
  { name: 'آذر', revenue: 98000, orders: 260, customers: 175 },
  { name: 'دی', revenue: 105000, orders: 280, customers: 190 },
  { name: 'بهمن', revenue: 115000, orders: 310, customers: 210 },
  { name: 'اسفند', revenue: 125000, orders: 342, customers: 230 },
];

const categorySales = [
  { name: 'گردنبند', value: 35, color: '#D4AF37' },
  { name: 'دستبند', value: 25, color: '#B76E79' },
  { name: 'گوشواره', value: 20, color: '#C0C0C0' },
  { name: 'انگشتر', value: 12, color: '#8B7355' },
  { name: 'ساعت', value: 8, color: '#4A5568' },
];

const topProducts = [
  { name: 'گردنبند الماس سلطنتی', sales: 45, revenue: 562500000 },
  { name: 'ساعت مچی کلاسیک طلایی', sales: 38, revenue: 950000000 },
  { name: 'دستبند تنیسی الماس', sales: 32, revenue: 1024000000 },
  { name: 'انگشتر یاقوت سرخ', sales: 28, revenue: 518000000 },
  { name: 'گوشواره مروارید کلاسیک', sales: 25, revenue: 167500000 },
];

const weeklyData = [
  { day: 'شنبه', sales: 12 },
  { day: 'یکشنبه', sales: 18 },
  { day: 'دوشنبه', sales: 15 },
  { day: 'سه‌شنبه', sales: 22 },
  { day: 'چهارشنبه', sales: 28 },
  { day: 'پنج‌شنبه', sales: 35 },
  { day: 'جمعه', sales: 32 },
];

export default function AdminAnalytics() {
  const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-100">گزارشات و تحلیل</h1>
        <p className="text-dark-400 mt-1">آمار و عملکرد فروشگاه</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="text-emerald-400" size={20} />
            <span className="text-xs text-emerald-400 flex items-center gap-0.5">
              <TrendingUp size={12} />
              +۲۳%
            </span>
          </div>
          <p className="text-dark-400 text-xs">درآمد کل</p>
          <p className="text-xl font-bold text-dark-100 mt-1">۱,۲۵۰,۰۰۰,۰۰۰ ت</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <ShoppingCart className="text-blue-400" size={20} />
            <span className="text-xs text-blue-400 flex items-center gap-0.5">
              <TrendingUp size={12} />
              +۱۸%
            </span>
          </div>
          <p className="text-dark-400 text-xs">تعداد سفارشات</p>
          <p className="text-xl font-bold text-dark-100 mt-1">۲,۴۲۵</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Users className="text-purple-400" size={20} />
            <span className="text-xs text-purple-400 flex items-center gap-0.5">
              <TrendingUp size={12} />
              +۱۵%
            </span>
          </div>
          <p className="text-dark-400 text-xs">مشتریان جدید</p>
          <p className="text-xl font-bold text-dark-100 mt-1">۱,۲۸۵</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/20 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <ArrowUpRight className="text-gold-400" size={20} />
            <span className="text-xs text-gold-400 flex items-center gap-0.5">
              <TrendingUp size={12} />
              +۸%
            </span>
          </div>
          <p className="text-dark-400 text-xs">میانگین سبد خرید</p>
          <p className="text-xl font-bold text-dark-100 mt-1">۵,۱۵۰,۰۰۰ ت</p>
        </motion.div>
      </div>

      {/* Revenue chart */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-dark-100">نمودار درآمد</h3>
            <p className="text-sm text-dark-400">درآمد ۱۲ ماه اخیر (میلیون تومان)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
            <XAxis dataKey="name" stroke="#666" style={{ fontSize: '11px' }} />
            <YAxis stroke="#666" style={{ fontSize: '11px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1A1A', 
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area type="monotone" dataKey="revenue" stroke="#D4AF37" fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category distribution */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-dark-100 mb-6">سهم دسته‌بندی‌ها</h3>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie
                  data={categorySales}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categorySales.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1A1A', 
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {categorySales.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                    <span className="text-sm text-dark-300">{cat.name}</span>
                  </div>
                  <span className="text-sm font-medium text-dark-100">{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly sales */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-dark-100 mb-6">فروش هفتگی</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis dataKey="day" stroke="#666" style={{ fontSize: '11px' }} />
              <YAxis stroke="#666" style={{ fontSize: '11px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="sales" fill="#D4AF37" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top products */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-dark-100 mb-6">پرفروش‌ترین محصولات</h3>
        <div className="space-y-3">
          {topProducts.map((product, index) => (
            <div key={product.name} className="flex items-center gap-4 p-3 bg-dark-700/30 rounded-xl">
              <div className="w-8 h-8 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-400 font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-dark-100">{product.name}</p>
                <p className="text-xs text-dark-400">{product.sales} فروش</p>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gold-400">{formatPrice(product.revenue)}</p>
                <p className="text-xs text-dark-400">تومان</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
