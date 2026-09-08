import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Mail, Phone, Shield, User, Eye } from 'lucide-react';

// Helper function to create avatar placeholder
const createAvatar = (name: string, color: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="${color}"/>
    <text x="50" y="60" font-family="Arial" font-size="36" fill="white" text-anchor="middle" font-weight="bold">${name.charAt(0)}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  joinDate: string;
  salary: number;
  avatar: string;
  status: 'active' | 'inactive';
}

const employees: Employee[] = [
  { id: 1, name: 'علی رضایی', email: 'ali@luxe.com', phone: '09121234567', role: 'مدیر فروش', department: 'فروش', joinDate: '۱۴۰۲/۰۳/۱۵', salary: 25000000, avatar: createAvatar('علی', '#D4AF37'), status: 'active' },
  { id: 2, name: 'مریم احمدی', email: 'maryam@luxe.com', phone: '09131234567', role: 'کارشناس پشتیبانی', department: 'پشتیبانی', joinDate: '۱۴۰۲/۰۶/۲۰', salary: 15000000, avatar: createAvatar('مریم', '#B76E79'), status: 'active' },
  { id: 3, name: 'حسین محمدی', email: 'hossein@luxe.com', phone: '09141234567', role: 'انباردار', department: 'انبار', joinDate: '۱۴۰۲/۰۹/۱۰', salary: 12000000, avatar: createAvatar('حسین', '#4A5568'), status: 'active' },
  { id: 4, name: 'زهرا کریمی', email: 'zahra@luxe.com', phone: '09151234567', role: 'حسابدار', department: 'مالی', joinDate: '۱۴۰۳/۰۱/۰۵', salary: 18000000, avatar: createAvatar('زهرا', '#8B7355'), status: 'active' },
  { id: 5, name: 'رضا نوری', email: 'reza@luxe.com', phone: '09161234567', role: 'کارشناس دیجیتال مارکتینگ', department: 'بازاریابی', joinDate: '۱۴۰۳/۰۴/۱۸', salary: 20000000, avatar: createAvatar('رضا', '#2D3748'), status: 'active' },
  { id: 6, name: 'فاطمه حسینی', email: 'fatemeh@luxe.com', phone: '09171234567', role: 'طراح گرافیک', department: 'بازاریابی', joinDate: '۱۴۰۳/۰۷/۲۲', salary: 16000000, avatar: createAvatar('فاطمه', '#C0C0C0'), status: 'inactive' },
];

export default function AdminEmployees() {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const filteredEmployees = employees.filter((e) => {
    const matchesSearch = e.name.includes(searchQuery) || e.email.includes(searchQuery);
    const matchesDepartment = departmentFilter === 'all' || e.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(employees.map(e => e.department))];
  const totalSalary = employees.filter(e => e.status === 'active').reduce((sum, e) => sum + e.salary, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">کارکنان</h1>
          <p className="text-dark-400 mt-1">مدیریت کارکنان و پرسنل فروشگاه</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-5 py-2.5 rounded-xl font-medium">
          <Plus size={18} />
          <span>افزودن کارمند</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <p className="text-dark-400 text-sm mb-1">کل کارکنان</p>
          <p className="text-2xl font-bold text-dark-100">{employees.length}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <p className="text-dark-400 text-sm mb-1">فعال</p>
          <p className="text-2xl font-bold text-emerald-400">{employees.filter(e => e.status === 'active').length}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <p className="text-dark-400 text-sm mb-1">تعداد دپارتمان‌ها</p>
          <p className="text-2xl font-bold text-dark-100">{departments.length}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <p className="text-dark-400 text-sm mb-1">حقوق ماهانه</p>
          <p className="text-xl font-bold text-gold-400">{new Intl.NumberFormat('fa-IR').format(totalSalary)} ت</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="جستجوی نام یا ایمیل..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-200 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="all">همه دپارتمان‌ها</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      {/* Employees grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEmployees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-5 hover:border-gold-500/30 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/30"
                />
                <div>
                  <h3 className="text-sm font-medium text-dark-100">{employee.name}</h3>
                  <p className="text-xs text-gold-400">{employee.role}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                employee.status === 'active'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-dark-700 text-dark-400'
              }`}>
                {employee.status === 'active' ? 'فعال' : 'غیرفعال'}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-dark-300">
                <Mail size={14} className="text-dark-400" />
                <span dir="ltr" className="text-xs">{employee.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-300">
                <Phone size={14} className="text-dark-400" />
                <span dir="ltr" className="text-xs">{employee.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-300">
                <Shield size={14} className="text-dark-400" />
                <span>{employee.department}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dark-700">
              <div>
                <p className="text-xs text-dark-400">تاریخ عضویت</p>
                <p className="text-sm font-medium text-dark-100">{employee.joinDate}</p>
              </div>
              <div>
                <p className="text-xs text-dark-400">حقوق ماهانه</p>
                <p className="text-sm font-medium text-gold-400">{new Intl.NumberFormat('fa-IR').format(employee.salary)} ت</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button className="flex-1 flex items-center justify-center gap-1 bg-dark-700 text-dark-200 px-3 py-2 rounded-xl hover:bg-dark-600 transition-colors text-sm">
                <Eye size={14} />
                <span>مشاهده</span>
              </button>
              <button className="p-2 text-dark-400 hover:text-gold-400 transition-colors">
                <Edit2 size={14} />
              </button>
              <button className="p-2 text-dark-400 hover:text-red-400 transition-colors">
                <Trash2 size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
