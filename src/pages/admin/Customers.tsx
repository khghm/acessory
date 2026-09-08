import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, Mail, Phone, ShoppingBag, MapPin, Download } from 'lucide-react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  orders: number;
  totalSpent: number;
  joinDate: string;
  avatar: string;
  status: 'active' | 'inactive';
}

const customers: Customer[] = [
  {
    id: 1,
    name: 'سارا احمدی',
    email: 'sara@example.com',
    phone: '09121234567',
    city: 'تهران',
    orders: 12,
    totalSpent: 85000000,
    joinDate: '۱۴۰۳/۰۶/۱۵',
    avatar: 'https://i.pravatar.cc/100?img=1',
    status: 'active',
  },
  {
    id: 2,
    name: 'محمد رضایی',
    email: 'mohammad@example.com',
    phone: '09131234567',
    city: 'اصفهان',
    orders: 8,
    totalSpent: 125000000,
    joinDate: '۱۴۰۳/۰۷/۲۰',
    avatar: 'https://i.pravatar.cc/100?img=3',
    status: 'active',
  },
  {
    id: 3,
    name: 'نیلوفر کریمی',
    email: 'niloofar@example.com',
    phone: '09141234567',
    city: 'شیراز',
    orders: 15,
    totalSpent: 92000000,
    joinDate: '۱۴۰۳/۰۴/۱۰',
    avatar: 'https://i.pravatar.cc/100?img=5',
    status: 'active',
  },
  {
    id: 4,
    name: 'علی محمدی',
    email: 'ali@example.com',
    phone: '09151234567',
    city: 'مشهد',
    orders: 5,
    totalSpent: 45000000,
    joinDate: '۱۴۰۳/۰۹/۰۵',
    avatar: 'https://i.pravatar.cc/100?img=7',
    status: 'active',
  },
  {
    id: 5,
    name: 'فاطمه حسینی',
    email: 'fatemeh@example.com',
    phone: '09161234567',
    city: 'تبریز',
    orders: 3,
    totalSpent: 28000000,
    joinDate: '۱۴۰۳/۱۱/۱۸',
    avatar: 'https://i.pravatar.cc/100?img=9',
    status: 'inactive',
  },
  {
    id: 6,
    name: 'رضا نوری',
    email: 'reza@example.com',
    phone: '09171234567',
    city: 'اهواز',
    orders: 7,
    totalSpent: 67000000,
    joinDate: '۱۴۰۳/۰۸/۲۲',
    avatar: 'https://i.pravatar.cc/100?img=11',
    status: 'active',
  },
];

export default function AdminCustomers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const filteredCustomers = customers.filter((c) =>
    c.name.includes(searchQuery) || c.email.includes(searchQuery) || c.phone.includes(searchQuery)
  );

  const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

  // Download CSV function
  const downloadCustomersCSV = () => {
    const headers = ['نام', 'ایمیل', 'تلفن', 'شهر', 'تعداد سفارشات', 'مجموع خرید', 'تاریخ عضویت', 'وضعیت'];
    const csvContent = [
      headers.join(','),
      ...filteredCustomers.map(customer => [
        customer.name,
        customer.email,
        customer.phone,
        customer.city,
        customer.orders,
        customer.totalSpent,
        customer.joinDate,
        customer.status === 'active' ? 'فعال' : 'غیرفعال'
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'customers-report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">مشتریان</h1>
          <p className="text-dark-400 mt-1">مدیریت و مشاهده اطلاعات مشتریان</p>
        </div>
        <button
          onClick={downloadCustomersCSV}
          className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all"
        >
          <Download size={16} />
          <span>دانلود گزارش</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5">
          <p className="text-dark-400 text-sm mb-1">کل مشتریان</p>
          <p className="text-2xl font-bold text-dark-100">{customers.length}</p>
        </div>
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5">
          <p className="text-dark-400 text-sm mb-1">مشتریان فعال</p>
          <p className="text-2xl font-bold text-emerald-400">{customers.filter(c => c.status === 'active').length}</p>
        </div>
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5">
          <p className="text-dark-400 text-sm mb-1">میانگین خرید</p>
          <p className="text-2xl font-bold text-gold-400">{formatPrice(Math.round(customers.reduce((a, c) => a + c.totalSpent, 0) / customers.length))} ت</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400" size={18} />
          <input
            type="text"
            placeholder="جستجوی نام، ایمیل یا شماره تلفن..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-dark-700 border border-dark-600 rounded-xl pr-10 pl-4 py-2.5 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
          />
        </div>
      </div>

      {/* Customers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCustomers.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-5 hover:border-gold-500/30 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/30"
                />
                <div>
                  <h3 className="text-sm font-medium text-dark-100">{customer.name}</h3>
                  <p className="text-xs text-dark-400 flex items-center gap-1">
                    <MapPin size={10} />
                    {customer.city}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                customer.status === 'active'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-dark-700 text-dark-400'
              }`}>
                {customer.status === 'active' ? 'فعال' : 'غیرفعال'}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-dark-300">
                <Mail size={14} className="text-dark-400" />
                <span dir="ltr" className="text-xs">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-300">
                <Phone size={14} className="text-dark-400" />
                <span dir="ltr" className="text-xs">{customer.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dark-700">
              <div>
                <p className="text-xs text-dark-400">تعداد سفارشات</p>
                <p className="text-sm font-medium text-dark-100 flex items-center gap-1">
                  <ShoppingBag size={12} className="text-gold-400" />
                  {customer.orders}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-400">مجموع خرید</p>
                <p className="text-sm font-medium text-gold-400">{formatPrice(customer.totalSpent)} ت</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCustomer(customer)}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-dark-700 text-dark-200 px-4 py-2 rounded-xl hover:bg-dark-600 transition-colors text-sm"
            >
              <Eye size={14} />
              مشاهده جزئیات
            </button>
          </motion.div>
        ))}
      </div>

      {/* Customer detail modal */}
      {selectedCustomer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCustomer(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedCustomer.avatar}
                alt={selectedCustomer.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/30"
              />
              <div>
                <h3 className="text-xl font-bold text-dark-100">{selectedCustomer.name}</h3>
                <p className="text-sm text-dark-400">عضو از {selectedCustomer.joinDate}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-dark-700/50 rounded-xl p-3 flex items-center gap-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-sm text-dark-200" dir="ltr">{selectedCustomer.email}</span>
              </div>
              <div className="bg-dark-700/50 rounded-xl p-3 flex items-center gap-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-sm text-dark-200" dir="ltr">{selectedCustomer.phone}</span>
              </div>
              <div className="bg-dark-700/50 rounded-xl p-3 flex items-center gap-3">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-sm text-dark-200">{selectedCustomer.city}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-dark-700/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-gold-400">{selectedCustomer.orders}</p>
                <p className="text-xs text-dark-400 mt-1">سفارش</p>
              </div>
              <div className="bg-dark-700/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-gold-400">{formatPrice(selectedCustomer.totalSpent)}</p>
                <p className="text-xs text-dark-400 mt-1">تومان خرید</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCustomer(null)}
              className="w-full mt-6 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
            >
              بستن
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
