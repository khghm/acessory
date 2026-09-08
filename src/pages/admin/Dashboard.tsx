import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const stats = [
  {
    title: 'فروش کل',
    value: '۱۲۵,۴۰۰,۰۰۰',
    unit: 'تومان',
    change: '+۱۲.۵%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'سفارشات',
    value: '۳۴۲',
    unit: 'سفارش',
    change: '+۸.۲%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'مشتریان',
    value: '۱,۲۸۵',
    unit: 'نفر',
    change: '+۱۵.۳%',
    trend: 'up',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'محصولات',
    value: '۲۴',
    unit: 'محصول',
    change: '+۲',
    trend: 'up',
    icon: Package,
    color: 'from-gold-500 to-gold-600',
  },
];

const salesData = [
  { name: 'فروردین', sales: 4000, orders: 24 },
  { name: 'اردیبهشت', sales: 3000, orders: 13 },
  { name: 'خرداد', sales: 5000, orders: 28 },
  { name: 'تیر', sales: 4500, orders: 22 },
  { name: 'مرداد', sales: 6000, orders: 35 },
  { name: 'شهریور', sales: 5500, orders: 30 },
  { name: 'مهر', sales: 7000, orders: 42 },
];

const categoryData = [
  { name: 'گردنبند', value: 35 },
  { name: 'دستبند', value: 25 },
  { name: 'گوشواره', value: 20 },
  { name: 'انگشتر', value: 12 },
  { name: 'ساعت', value: 8 },
];

const recentOrders = [
  { id: '#۱۲۳۴', customer: 'سارا احمدی', product: 'گردنبند الماس', amount: '۱۲,۵۰۰,۰۰۰', status: 'تکمیل شده' },
  { id: '#۱۲۳۳', customer: 'محمد رضایی', product: 'ساعت طلایی', amount: '۲۵,۰۰۰,۰۰۰', status: 'در حال ارسال' },
  { id: '#۱۲۳۲', customer: 'نیلوفر کریمی', product: 'گوشواره مروارید', amount: '۶,۷۰۰,۰۰۰', status: 'تکمیل شده' },
  { id: '#۱۲۳۱', customer: 'علی محمدی', product: 'انگشتر یاقوت', amount: '۱۸,۵۰۰,۰۰۰', status: 'در انتظار پرداخت' },
  { id: '#۱۲۳۰', customer: 'فاطمه حسینی', product: 'دستبند طلا', amount: '۸,۹۰۰,۰۰۰', status: 'تکمیل شده' },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-100">داشبورد</h1>
        <p className="text-dark-400 mt-1">خلاصه وضعیت فروشگاه</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-6 hover:border-gold-500/30 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-dark-400 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-dark-100">
              {stat.value}
              <span className="text-sm font-normal text-dark-400 mr-1">{stat.unit}</span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales chart */}
        <div className="lg:col-span-2 bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-dark-100">نمودار فروش</h3>
              <p className="text-sm text-dark-400">۷ ماه اخیر</p>
            </div>
            <select className="bg-dark-700 border border-dark-600 rounded-lg px-3 py-1.5 text-sm text-dark-200 focus:outline-none focus:border-gold-500">
              <option>ماهانه</option>
              <option>هفتگی</option>
              <option>روزانه</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis dataKey="name" stroke="#666" style={{ fontSize: '12px' }} />
              <YAxis stroke="#666" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area type="monotone" dataKey="sales" stroke="#D4AF37" fillOpacity={1} fill="url(#colorSales)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category chart */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-dark-100 mb-6">فروش دسته‌بندی‌ها</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis type="number" stroke="#666" style={{ fontSize: '12px' }} />
              <YAxis dataKey="name" type="category" stroke="#666" style={{ fontSize: '12px' }} width={80} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="value" fill="#D4AF37" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-dark-100">سفارشات اخیر</h3>
          <button className="flex items-center gap-1 text-sm text-gold-400 hover:text-gold-300 transition-colors">
            <span>مشاهده همه</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-right py-3 px-4 text-sm font-medium text-dark-400">شماره سفارش</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-dark-400">مشتری</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-dark-400">محصول</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-dark-400">مبلغ</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-dark-400">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors">
                  <td className="py-3 px-4 text-sm text-dark-200">{order.id}</td>
                  <td className="py-3 px-4 text-sm text-dark-200">{order.customer}</td>
                  <td className="py-3 px-4 text-sm text-dark-200">{order.product}</td>
                  <td className="py-3 px-4 text-sm text-dark-200">{order.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'تکمیل شده' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : order.status === 'در حال ارسال'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
