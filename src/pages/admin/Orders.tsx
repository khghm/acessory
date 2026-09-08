import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Package, Truck, CheckCircle, Clock, XCircle, X } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  products: { name: string; quantity: number; price: number }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  address: string;
}

const orders: Order[] = [
  {
    id: 'ORD-1234',
    customer: 'سارا احمدی',
    email: 'sara@example.com',
    phone: '09121234567',
    products: [{ name: 'گردنبند الماس سلطنتی', quantity: 1, price: 12500000 }],
    total: 12500000,
    status: 'delivered',
    date: '۱۴۰۴/۰۱/۱۵',
    address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
  },
  {
    id: 'ORD-1233',
    customer: 'محمد رضایی',
    email: 'mohammad@example.com',
    phone: '09131234567',
    products: [{ name: 'ساعت مچی کلاسیک طلایی', quantity: 1, price: 25000000 }],
    total: 25000000,
    status: 'shipped',
    date: '۱۴۰۴/۰۱/۱۴',
    address: 'اصفهان، خیابان چهارباغ، پلاک ۴۵',
  },
  {
    id: 'ORD-1232',
    customer: 'نیلوفر کریمی',
    email: 'niloofar@example.com',
    phone: '09141234567',
    products: [{ name: 'گوشواره مروارید کلاسیک', quantity: 1, price: 6700000 }],
    total: 6700000,
    status: 'delivered',
    date: '۱۴۰۴/۰۱/۱۳',
    address: 'شیراز، خیابان زند، پلاک ۷۸',
  },
  {
    id: 'ORD-1231',
    customer: 'علی محمدی',
    email: 'ali@example.com',
    phone: '09151234567',
    products: [{ name: 'انگشتر یاقوت سرخ', quantity: 1, price: 18500000 }],
    total: 18500000,
    status: 'pending',
    date: '۱۴۰۴/۰۱/۱۲',
    address: 'مشهد، بلوار وکیل‌آباد، پلاک ۲۳',
  },
  {
    id: 'ORD-1230',
    customer: 'فاطمه حسینی',
    email: 'fatemeh@example.com',
    phone: '09161234567',
    products: [{ name: 'دستبند طلا زنجیری', quantity: 1, price: 8900000 }],
    total: 8900000,
    status: 'processing',
    date: '۱۴۰۴/۰۱/۱۱',
    address: 'تبریز، خیابان آزادی، پلاک ۵۶',
  },
  {
    id: 'ORD-1229',
    customer: 'رضا نوری',
    email: 'reza@example.com',
    phone: '09171234567',
    products: [{ name: 'دستبند تنیسی الماس', quantity: 1, price: 32000000 }],
    total: 32000000,
    status: 'cancelled',
    date: '۱۴۰۴/۰۱/۱۰',
    address: 'اهواز، کیانپارس، پلاک ۸۹',
  },
];

const statusConfig = {
  pending: { label: 'در انتظار پرداخت', icon: Clock, color: 'yellow' },
  processing: { label: 'در حال پردازش', icon: Package, color: 'blue' },
  shipped: { label: 'ارسال شده', icon: Truck, color: 'indigo' },
  delivered: { label: 'تحویل داده شده', icon: CheckCircle, color: 'emerald' },
  cancelled: { label: 'لغو شده', icon: XCircle, color: 'red' },
};

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/30' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
};

export default function AdminOrders() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((o) => {
    const matchesSearch = o.id.includes(searchQuery) || o.customer.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-100">سفارشات</h1>
        <p className="text-dark-400 mt-1">مدیریت و پیگیری سفارشات</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(statusConfig).map(([key, config]) => {
          const count = orders.filter((o) => o.status === key).length;
          const colors = colorClasses[config.color];
          return (
            <button
              key={key}
              onClick={() => setStatusFilter(statusFilter === key ? 'all' : key)}
              className={`p-4 rounded-xl border transition-all ${
                statusFilter === key
                  ? `${colors.bg} ${colors.border}`
                  : 'bg-dark-800 border-dark-700 hover:border-dark-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <config.icon size={16} className={statusFilter === key ? colors.text : 'text-dark-400'} />
                <span className={`text-xs ${statusFilter === key ? colors.text : 'text-dark-400'}`}>{config.label}</span>
              </div>
              <p className="text-xl font-bold text-dark-100">{count}</p>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400" size={18} />
            <input
              type="text"
              placeholder="جستجوی شماره سفارش یا نام مشتری..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-700 border border-dark-600 rounded-xl pr-10 pl-4 py-2.5 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Orders table */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-700/50">
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">شماره سفارش</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">مشتری</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">تاریخ</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">مبلغ</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">وضعیت</th>
                <th className="text-center py-4 px-6 text-sm font-medium text-dark-400">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => {
                const config = statusConfig[order.status];
                const colors = colorClasses[config.color];
                return (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm text-gold-400 font-medium">{order.id}</td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-dark-100">{order.customer}</p>
                      <p className="text-xs text-dark-400">{order.phone}</p>
                    </td>
                    <td className="py-4 px-6 text-sm text-dark-300">{order.date}</td>
                    <td className="py-4 px-6 text-sm text-dark-200">{formatPrice(order.total)} تومان</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                        <config.icon size={12} />
                        {config.label}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="p-2 text-dark-400 hover:text-gold-400 transition-colors"
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order detail modal */}
      {selectedOrder && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-dark-100">جزئیات سفارش {selectedOrder.id}</h3>
              <button onClick={() => setSelectedOrder(null)} className="text-dark-400 hover:text-dark-200">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-dark-700/50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-gold-400 mb-2">اطلاعات مشتری</h4>
                <p className="text-sm text-dark-200">{selectedOrder.customer}</p>
                <p className="text-sm text-dark-400">{selectedOrder.email}</p>
                <p className="text-sm text-dark-400">{selectedOrder.phone}</p>
                <p className="text-sm text-dark-400 mt-1">{selectedOrder.address}</p>
              </div>

              <div className="bg-dark-700/50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-gold-400 mb-2">محصولات</h4>
                {selectedOrder.products.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm text-dark-200 py-1">
                    <span>{p.name} x {p.quantity}</span>
                    <span>{formatPrice(p.price * p.quantity)} تومان</span>
                  </div>
                ))}
                <div className="border-t border-dark-600 mt-2 pt-2 flex justify-between font-medium text-dark-100">
                  <span>مجموع</span>
                  <span>{formatPrice(selectedOrder.total)} تومان</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium">
                  تغییر وضعیت
                </button>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="flex-1 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl"
                >
                  بستن
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
