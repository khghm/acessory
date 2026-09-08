import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Copy, Check, Percent, Gift, Tag } from 'lucide-react';

interface Coupon {
  id: number;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrder: number;
  maxUses: number;
  usedCount: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'expired' | 'inactive';
}

const initialCoupons: Coupon[] = [
  { id: 1, code: 'WELCOME20', type: 'percentage', value: 20, minOrder: 5000000, maxUses: 100, usedCount: 45, startDate: '۱۴۰۴/۰۱/۰۱', endDate: '۱۴۰۴/۰۳/۳۱', status: 'active' },
  { id: 2, code: 'SUMMER30', type: 'percentage', value: 30, minOrder: 10000000, maxUses: 50, usedCount: 12, startDate: '۱۴۰۴/۰۴/۰۱', endDate: '۱۴۰۴/۰۶/۳۱', status: 'active' },
  { id: 3, code: 'GIFT500', type: 'fixed', value: 500000, minOrder: 3000000, maxUses: 200, usedCount: 180, startDate: '۱۴۰۳/۱۲/۰۱', endDate: '۱۴۰۴/۰۱/۳۱', status: 'expired' },
  { id: 4, code: 'VIP50', type: 'percentage', value: 50, minOrder: 20000000, maxUses: 20, usedCount: 5, startDate: '۱۴۰۴/۰۱/۰۱', endDate: '۱۴۰۴/۱۲/۲۹', status: 'active' },
  { id: 5, code: 'NEWYEAR15', type: 'percentage', value: 15, minOrder: 2000000, maxUses: 500, usedCount: 0, startDate: '۱۴۰۴/۰۱/۰۱', endDate: '۱۴۰۴/۰۱/۱۵', status: 'inactive' },
];

export default function AdminCoupons() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [couponForm, setCouponForm] = useState({
    code: '',
    type: 'percentage' as 'percentage' | 'fixed',
    value: '',
    minOrder: '',
    maxUses: '',
    startDate: '',
    endDate: '',
  });

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const deleteCoupon = (id: number) => {
    if (confirm('آیا از حذف این کوپن مطمئن هستید؟')) {
      setCoupons(coupons.filter(c => c.id !== id));
    }
  };

  const handleAddCoupon = () => {
    if (couponForm.code && couponForm.value) {
      const newCoupon: Coupon = {
        id: Math.max(...coupons.map(c => c.id)) + 1,
        code: couponForm.code.toUpperCase(),
        type: couponForm.type,
        value: Number(couponForm.value),
        minOrder: Number(couponForm.minOrder) || 0,
        maxUses: Number(couponForm.maxUses) || 100,
        usedCount: 0,
        startDate: couponForm.startDate || '۱۴۰۴/۰۱/۲۰',
        endDate: couponForm.endDate || '۱۴۰۴/۰۳/۳۱',
        status: 'active',
      };
      setCoupons([newCoupon, ...coupons]);
      setShowAddModal(false);
      setCouponForm({
        code: '',
        type: 'percentage',
        value: '',
        minOrder: '',
        maxUses: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  const stats = {
    total: coupons.length,
    active: coupons.filter(c => c.status === 'active').length,
    expired: coupons.filter(c => c.status === 'expired').length,
    totalUsed: coupons.reduce((sum, c) => sum + c.usedCount, 0),
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">تخفیف‌ها و کوپن‌ها</h1>
          <p className="text-dark-400 mt-1">مدیریت کدهای تخفیف و پیشنهادات ویژه</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-5 py-2.5 rounded-xl font-medium"
        >
          <Plus size={18} />
          <span>ایجاد کوپن جدید</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Tag className="text-blue-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">کل کوپن‌ها</p>
          <p className="text-2xl font-bold text-dark-100 mt-1">{stats.total}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Check className="text-emerald-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">کوپن‌های فعال</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">{stats.active}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Gift className="text-purple-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">کل استفاده‌ها</p>
          <p className="text-2xl font-bold text-dark-100 mt-1">{stats.totalUsed}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Percent className="text-gold-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">منقضی شده</p>
          <p className="text-2xl font-bold text-dark-100 mt-1">{stats.expired}</p>
        </motion.div>
      </div>

      {/* Coupons list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map((coupon, index) => (
          <motion.div
            key={coupon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-5 hover:border-gold-500/30 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    coupon.status === 'active'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : coupon.status === 'expired'
                      ? 'bg-red-500/10 text-red-400'
                      : 'bg-dark-700 text-dark-400'
                  }`}>
                    {coupon.status === 'active' ? 'فعال' : coupon.status === 'expired' ? 'منقضی' : 'غیرفعال'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-lg font-bold text-gold-400 font-mono">{coupon.code}</code>
                  <button
                    onClick={() => copyCode(coupon.code)}
                    className="p-1 text-dark-400 hover:text-gold-400 transition-colors"
                  >
                    {copiedCode === coupon.code ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-dark-400 hover:text-gold-400 transition-colors">
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => deleteCoupon(coupon.id)}
                  className="p-2 text-dark-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-dark-400">نوع تخفیف</span>
                <span className="text-dark-200">
                  {coupon.type === 'percentage' ? `${coupon.value}%` : `${(coupon.value / 1000).toFixed(0)} هزار تومان`}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-dark-400">حداقل سفارش</span>
                <span className="text-dark-200">{new Intl.NumberFormat('fa-IR').format(coupon.minOrder)} ت</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-dark-400">استفاده شده</span>
                <span className="text-dark-200">{coupon.usedCount} / {coupon.maxUses}</span>
              </div>
            </div>

            <div className="w-full bg-dark-700 rounded-full h-2 mb-3">
              <div
                className="bg-gradient-to-r from-gold-500 to-gold-600 h-2 rounded-full"
                style={{ width: `${(coupon.usedCount / coupon.maxUses) * 100}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs text-dark-400">
              <span>از {coupon.startDate}</span>
              <span>تا {coupon.endDate}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Coupon Modal */}
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAddModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-6 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-dark-100 mb-6">ایجاد کوپن جدید</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-dark-300 mb-1 block">کد تخفیف *</label>
                <input
                  type="text"
                  value={couponForm.code}
                  onChange={(e) => setCouponForm({ ...couponForm, code: e.target.value })}
                  className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="مثال: SUMMER30"
                  dir="ltr"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">نوع تخفیف</label>
                  <select
                    value={couponForm.type}
                    onChange={(e) => setCouponForm({ ...couponForm, type: e.target.value as 'percentage' | 'fixed' })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="percentage">درصدی</option>
                    <option value="fixed">مبلغ ثابت</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">مقدار تخفیف *</label>
                  <input
                    type="number"
                    value={couponForm.value}
                    onChange={(e) => setCouponForm({ ...couponForm, value: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="20"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-dark-300 mb-1 block">حداقل مبلغ سفارش (تومان)</label>
                <input
                  type="number"
                  value={couponForm.minOrder}
                  onChange={(e) => setCouponForm({ ...couponForm, minOrder: e.target.value })}
                  className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="0"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">تاریخ شروع</label>
                  <input
                    type="text"
                    value={couponForm.startDate}
                    onChange={(e) => setCouponForm({ ...couponForm, startDate: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="۱۴۰۴/۰۱/۰۱"
                  />
                </div>
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">تاریخ پایان</label>
                  <input
                    type="text"
                    value={couponForm.endDate}
                    onChange={(e) => setCouponForm({ ...couponForm, endDate: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="۱۴۰۴/۰۳/۳۱"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-dark-300 mb-1 block">حداکثر تعداد استفاده</label>
                <input
                  type="number"
                  value={couponForm.maxUses}
                  onChange={(e) => setCouponForm({ ...couponForm, maxUses: e.target.value })}
                  className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="100"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
              >
                انصراف
              </button>
              <button
                onClick={handleAddCoupon}
                disabled={!couponForm.code || !couponForm.value}
                className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ایجاد کوپن
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
