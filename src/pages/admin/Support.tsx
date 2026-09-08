import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, CheckCircle, AlertCircle, Search, Filter, Eye, Reply } from 'lucide-react';

interface Ticket {
  id: string;
  customer: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt: string;
  replies: number;
}

const tickets: Ticket[] = [
  { id: 'TK-001', customer: 'سارا احمدی', subject: 'مشکل در پرداخت آنلاین', message: 'سلام، هنگام پرداخت با خطا مواجه شدم...', priority: 'high', status: 'open', createdAt: '۱۴۰۴/۰۱/۱۵ ۱۰:۳۰', updatedAt: '۱۴۰۴/۰۱/۱۵ ۱۰:۳۰', replies: 0 },
  { id: 'TK-002', customer: 'محمد رضایی', subject: 'درخواست تغییر آدرس ارسال', message: 'لطفاً آدرس ارسال سفارش من را تغییر دهید...', priority: 'medium', status: 'in-progress', createdAt: '۱۴۰۴/۰۱/۱۴ ۱۵:۲۰', updatedAt: '۱۴۰۴/۰۱/۱۵ ۰۹:۱۵', replies: 2 },
  { id: 'TK-003', customer: 'نیلوفر کریمی', subject: 'سوال درباره محصول', message: 'آیا این محصول گارانتی دارد؟...', priority: 'low', status: 'resolved', createdAt: '۱۴۰۴/۰۱/۱۳ ۱۲:۴۵', updatedAt: '۱۴۰۴/۰۱/۱۴ ۱۶:۳۰', replies: 3 },
  { id: 'TK-004', customer: 'علی محمدی', subject: 'درخواست مرجوعی', message: 'محصول دریافتی با توضیحات مطابقت ندارد...', priority: 'high', status: 'open', createdAt: '۱۴۰۴/۰۱/۱۲ ۱۸:۱۰', updatedAt: '۱۴۰۴/۰۱/۱۲ ۱۸:۱۰', replies: 0 },
  { id: 'TK-005', customer: 'فاطمه حسینی', subject: 'پیگیری سفارش', message: 'سفارش من هنوز ارسال نشده...', priority: 'medium', status: 'in-progress', createdAt: '۱۴۰۴/۰۱/۱۱ ۰۹:۰۰', updatedAt: '۱۴۰۴/۰۱/۱۲ ۱۱:۲۰', replies: 4 },
  { id: 'TK-006', customer: 'رضا نوری', subject: 'تشکر از خدمات', message: 'از خدمات عالی شما تشکر می‌کنم...', priority: 'low', status: 'closed', createdAt: '۱۴۰۴/۰۱/۱۰ ۱۴:۳۰', updatedAt: '۱۴۰۴/۰۱/۱۱ ۱۰:۰۰', replies: 1 },
];

export default function AdminSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const filteredTickets = tickets.filter((t) => {
    const matchesSearch = t.id.includes(searchQuery) || t.customer.includes(searchQuery) || t.subject.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || t.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in-progress').length,
    resolved: tickets.filter(t => t.status === 'resolved' || t.status === 'closed').length,
  };

  const statusConfig = {
    'open': { label: 'باز', icon: AlertCircle, color: 'red' },
    'in-progress': { label: 'در حال بررسی', icon: Clock, color: 'yellow' },
    'resolved': { label: 'حل شده', icon: CheckCircle, color: 'emerald' },
    'closed': { label: 'بسته شده', icon: CheckCircle, color: 'blue' },
  };

  const priorityConfig = {
    'low': { label: 'کم', color: 'blue' },
    'medium': { label: 'متوسط', color: 'yellow' },
    'high': { label: 'زیاد', color: 'red' },
  };

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
    yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-100">تیکت‌های پشتیبانی</h1>
        <p className="text-dark-400 mt-1">مدیریت درخواست‌ها و تیکت‌های مشتریان</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <MessageSquare className="text-blue-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">کل تیکت‌ها</p>
          <p className="text-2xl font-bold text-dark-100 mt-1">{stats.total}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <AlertCircle className="text-red-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">تیکت‌های باز</p>
          <p className="text-2xl font-bold text-red-400 mt-1">{stats.open}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Clock className="text-yellow-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">در حال بررسی</p>
          <p className="text-2xl font-bold text-yellow-400 mt-1">{stats.inProgress}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="text-emerald-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">حل شده</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">{stats.resolved}</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400" size={18} />
            <input
              type="text"
              placeholder="جستجوی تیکت..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-700 border border-dark-600 rounded-xl pr-10 pl-4 py-2.5 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-200 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="all">همه وضعیت‌ها</option>
            <option value="open">باز</option>
            <option value="in-progress">در حال بررسی</option>
            <option value="resolved">حل شده</option>
            <option value="closed">بسته شده</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-200 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="all">همه اولویت‌ها</option>
            <option value="low">کم</option>
            <option value="medium">متوسط</option>
            <option value="high">زیاد</option>
          </select>
        </div>
      </div>

      {/* Tickets list */}
      <div className="space-y-3">
        {filteredTickets.map((ticket, index) => {
          const status = statusConfig[ticket.status];
          const priority = priorityConfig[ticket.priority];
          const statusColors = colorClasses[status.color];
          const priorityColors = colorClasses[priority.color];

          return (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl p-5 hover:border-gold-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-gold-400 font-mono text-sm">{ticket.id}</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${priorityColors.bg} ${priorityColors.text} border ${priorityColors.border}`}>
                    {priority.label}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${statusColors.bg} ${statusColors.text} border ${statusColors.border}`}>
                    <status.icon size={12} />
                    {status.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-dark-400 hover:text-gold-400 transition-colors">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 text-dark-400 hover:text-blue-400 transition-colors">
                    <Reply size={16} />
                  </button>
                </div>
              </div>

              <h3 className="text-sm font-medium text-dark-100 mb-2">{ticket.subject}</h3>
              <p className="text-xs text-dark-400 mb-3 line-clamp-2">{ticket.message}</p>

              <div className="flex items-center justify-between text-xs text-dark-500">
                <div className="flex items-center gap-4">
                  <span>{ticket.customer}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={12} />
                    {ticket.replies} پاسخ
                  </span>
                </div>
                <span>{ticket.createdAt}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
