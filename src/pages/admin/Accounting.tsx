import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Wallet, Receipt, Download, FileText } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const financialData = [
  { month: 'فروردین', income: 45000000, expense: 12000000, profit: 33000000 },
  { month: 'اردیبهشت', income: 52000000, expense: 15000000, profit: 37000000 },
  { month: 'خرداد', income: 61000000, expense: 18000000, profit: 43000000 },
  { month: 'تیر', income: 58000000, expense: 16000000, profit: 42000000 },
  { month: 'مرداد', income: 72000000, expense: 20000000, profit: 52000000 },
  { month: 'شهریور', income: 68000000, expense: 19000000, profit: 49000000 },
  { month: 'مهر', income: 85000000, expense: 22000000, profit: 63000000 },
  { month: 'آبان', income: 92000000, expense: 24000000, profit: 68000000 },
  { month: 'آذر', income: 98000000, expense: 25000000, profit: 73000000 },
  { month: 'دی', income: 105000000, expense: 26000000, profit: 79000000 },
  { month: 'بهمن', income: 115000000, expense: 28000000, profit: 87000000 },
  { month: 'اسفند', income: 125000000, expense: 30000000, profit: 95000000 },
];

const expenseCategories = [
  { name: 'خرید کالا', amount: 450000000, percentage: 45 },
  { name: 'حقوق کارکنان', amount: 200000000, percentage: 20 },
  { name: 'اجاره و قبوض', amount: 120000000, percentage: 12 },
  { name: 'تبلیغات', amount: 100000000, percentage: 10 },
  { name: 'حمل و نقل', amount: 80000000, percentage: 8 },
  { name: 'سایر', amount: 50000000, percentage: 5 },
];

const recentTransactions = [
  { id: 1, type: 'income', description: 'فروش گردنبند الماس', amount: 12500000, date: '۱۴۰۴/۰۱/۱۵', method: 'کارت' },
  { id: 2, type: 'expense', description: 'خرید موجودی جدید', amount: 50000000, date: '۱۴۰۴/۰۱/۱۴', method: 'حواله' },
  { id: 3, type: 'income', description: 'فروش ساعت مچی', amount: 25000000, date: '۱۴۰۴/۰۱/۱۳', method: 'آنلاین' },
  { id: 4, type: 'expense', description: 'حقوق کارکنان', amount: 85000000, date: '۱۴۰۴/۰۱/۱۲', method: 'حواله' },
  { id: 5, type: 'income', description: 'فروش دستبند طلا', amount: 8900000, date: '۱۴۰۴/۰۱/۱۱', method: 'کارت' },
  { id: 6, type: 'expense', description: 'اجاره فروشگاه', amount: 35000000, date: '۱۴۰۴/۰۱/۱۰', method: 'حواله' },
];

export default function AdminAccounting() {
  const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

  const totalIncome = financialData.reduce((sum, d) => sum + d.income, 0);
  const totalExpense = financialData.reduce((sum, d) => sum + d.expense, 0);
  const totalProfit = totalIncome - totalExpense;

  const downloadFinancialReport = () => {
    const headers = ['ماه', 'درآمد', 'هزینه', 'سود'];
    const csvContent = [
      headers.join(','),
      ...financialData.map(d => [
        d.month,
        d.income,
        d.expense,
        d.profit
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'financial-report.csv');
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
          <h1 className="text-2xl font-bold text-dark-100">حسابداری</h1>
          <p className="text-dark-400 mt-1">مدیریت مالی و حسابداری فروشگاه</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={downloadFinancialReport}
            className="flex items-center gap-2 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
          >
            <Download size={16} />
            <span>دانلود گزارش</span>
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium">
            <FileText size={16} />
            <span>ثبت تراکنش</span>
          </button>
        </div>
      </div>

      {/* Stats */}
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
          <p className="text-dark-400 text-xs">کل درآمد</p>
          <p className="text-xl font-bold text-dark-100 mt-1">{formatPrice(totalIncome)} ت</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <CreditCard className="text-red-400" size={20} />
            <span className="text-xs text-red-400 flex items-center gap-0.5">
              <TrendingDown size={12} />
              +۱۵%
            </span>
          </div>
          <p className="text-dark-400 text-xs">کل هزینه</p>
          <p className="text-xl font-bold text-dark-100 mt-1">{formatPrice(totalExpense)} ت</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/20 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Wallet className="text-gold-400" size={20} />
            <span className="text-xs text-gold-400 flex items-center gap-0.5">
              <TrendingUp size={12} />
              +۲۸%
            </span>
          </div>
          <p className="text-dark-400 text-xs">سود خالص</p>
          <p className="text-xl font-bold text-dark-100 mt-1">{formatPrice(totalProfit)} ت</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Receipt className="text-blue-400" size={20} />
          </div>
          <p className="text-dark-400 text-xs">حاشیه سود</p>
          <p className="text-xl font-bold text-dark-100 mt-1">{Math.round((totalProfit / totalIncome) * 100)}%</p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income/Expense chart */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-dark-100 mb-6">درآمد و هزینه ماهانه</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={financialData}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis dataKey="month" stroke="#666" style={{ fontSize: '11px' }} />
              <YAxis stroke="#666" style={{ fontSize: '11px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area type="monotone" dataKey="income" stroke="#10B981" fillOpacity={1} fill="url(#colorIncome)" />
              <Area type="monotone" dataKey="expense" stroke="#EF4444" fillOpacity={1} fill="url(#colorExpense)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Expense categories */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-dark-100 mb-6">دسته‌بندی هزینه‌ها</h3>
          <div className="space-y-4">
            {expenseCategories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-dark-300">{cat.name}</span>
                  <span className="text-sm text-dark-200">{formatPrice(cat.amount)} ت</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-gold-500 to-gold-600 h-2 rounded-full"
                    style={{ width: `${cat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-dark-100 mb-6">تراکنش‌های اخیر</h3>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-dark-700/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'income' ? 'bg-emerald-500/10' : 'bg-red-500/10'
                }`}>
                  {transaction.type === 'income' ? (
                    <TrendingUp className="text-emerald-400" size={18} />
                  ) : (
                    <TrendingDown className="text-red-400" size={18} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-100">{transaction.description}</p>
                  <p className="text-xs text-dark-400">{transaction.date} - {transaction.method}</p>
                </div>
              </div>
              <p className={`text-sm font-bold ${
                transaction.type === 'income' ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}{formatPrice(transaction.amount)} ت
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
