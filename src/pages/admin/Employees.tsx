import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Mail, Phone, Shield, Eye, X, Save } from 'lucide-react';

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

// Helper function to create avatar placeholder
const createAvatar = (name: string, color: string): string => {
  const initial = name.charAt(0);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="${color}"/>
    <text x="50" y="62" font-family="Arial" font-size="36" fill="white" text-anchor="middle" font-weight="bold">${initial}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const initialEmployees: Employee[] = [
  { id: 1, name: 'علی رضایی', email: 'ali@luxe.com', phone: '09121234567', role: 'مدیر فروش', department: 'فروش', joinDate: '۱۴۰۲/۰۳/۱۵', salary: 25000000, avatar: createAvatar('علی', '#D4AF37'), status: 'active' },
  { id: 2, name: 'مریم احمدی', email: 'maryam@luxe.com', phone: '09131234567', role: 'کارشناس پشتیبانی', department: 'پشتیبانی', joinDate: '۱۴۰۲/۰۶/۲۰', salary: 15000000, avatar: createAvatar('مریم', '#B76E79'), status: 'active' },
  { id: 3, name: 'حسین محمدی', email: 'hossein@luxe.com', phone: '09141234567', role: 'انباردار', department: 'انبار', joinDate: '۱۴۰۲/۰۹/۱۰', salary: 12000000, avatar: createAvatar('حسین', '#4A5568'), status: 'active' },
  { id: 4, name: 'زهرا کریمی', email: 'zahra@luxe.com', phone: '09151234567', role: 'حسابدار', department: 'مالی', joinDate: '۱۴۰۳/۰۱/۰۵', salary: 18000000, avatar: createAvatar('زهرا', '#8B7355'), status: 'active' },
  { id: 5, name: 'رضا نوری', email: 'reza@luxe.com', phone: '09161234567', role: 'کارشناس دیجیتال مارکتینگ', department: 'بازاریابی', joinDate: '۱۴۰۳/۰۴/۱۸', salary: 20000000, avatar: createAvatar('رضا', '#2D3748'), status: 'active' },
  { id: 6, name: 'فاطمه حسینی', email: 'fatemeh@luxe.com', phone: '09171234567', role: 'طراح گرافیک', department: 'بازاریابی', joinDate: '۱۴۰۳/۰۷/۲۲', salary: 16000000, avatar: createAvatar('فاطمه', '#C0C0C0'), status: 'inactive' },
];

const avatarColors = ['#D4AF37', '#B76E79', '#4A5568', '#8B7355', '#2D3748', '#C0C0C0', '#10B981', '#3B82F6', '#8B5CF6', '#F59E0B'];

export default function AdminEmployees() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    joinDate: '',
    salary: '',
    status: 'active' as 'active' | 'inactive',
  });

  const filteredEmployees = employees.filter((e) => {
    const matchesSearch = e.name.includes(searchQuery) || e.email.includes(searchQuery);
    const matchesDepartment = departmentFilter === 'all' || e.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(employees.map(e => e.department))];
  const totalSalary = employees.filter(e => e.status === 'active').reduce((sum, e) => sum + e.salary, 0);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      department: '',
      joinDate: '',
      salary: '',
      status: 'active',
    });
  };

  const openAddModal = () => {
    resetForm();
    setEditingEmployee(null);
    setShowModal(true);
  };

  const openEditModal = (employee: Employee) => {
    setEditingEmployee(employee);
    setFormData({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      role: employee.role,
      department: employee.department,
      joinDate: employee.joinDate,
      salary: employee.salary.toString(),
      status: employee.status,
    });
    setShowModal(true);
  };

  const handleAdd = () => {
    const newEmployee: Employee = {
      id: Math.max(...employees.map(e => e.id)) + 1,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      department: formData.department,
      joinDate: formData.joinDate || '۱۴۰۴/۰۱/۲۰',
      salary: Number(formData.salary),
      avatar: createAvatar(formData.name, avatarColors[Math.floor(Math.random() * avatarColors.length)]),
      status: formData.status,
    };
    setEmployees([...employees, newEmployee]);
    setShowModal(false);
    resetForm();
  };

  const handleUpdate = () => {
    if (editingEmployee) {
      const updated: Employee = {
        ...editingEmployee,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        department: formData.department,
        joinDate: formData.joinDate,
        salary: Number(formData.salary),
        avatar: createAvatar(formData.name, editingEmployee.avatar.includes('fill="%23') ? '#D4AF37' : avatarColors[Math.floor(Math.random() * avatarColors.length)]),
        status: formData.status,
      };
      setEmployees(employees.map(e => e.id === editingEmployee.id ? updated : e));
      setShowModal(false);
      resetForm();
      setEditingEmployee(null);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('آیا از حذف این کارمند مطمئن هستید؟')) {
      setEmployees(employees.filter(e => e.id !== id));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">کارکنان</h1>
          <p className="text-dark-400 mt-1">مدیریت کارکنان و پرسنل فروشگاه</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all"
        >
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
          <p className="text-dark-400 text-sm mb-1">دپارتمان‌ها</p>
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
              <button
                onClick={() => openEditModal(employee)}
                className="flex-1 flex items-center justify-center gap-1 bg-dark-700 text-dark-200 px-3 py-2 rounded-xl hover:bg-dark-600 transition-colors text-sm"
              >
                <Edit2 size={14} />
                <span>ویرایش</span>
              </button>
              <button
                onClick={() => handleDelete(employee.id)}
                className="p-2 text-dark-400 hover:text-red-400 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setShowModal(false); setEditingEmployee(null); resetForm(); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-dark-100">
                  {editingEmployee ? 'ویرایش کارمند' : 'افزودن کارمند جدید'}
                </h3>
                <button
                  onClick={() => { setShowModal(false); setEditingEmployee(null); resetForm(); }}
                  className="text-dark-400 hover:text-dark-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">نام و نام خانوادگی *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="مثال: علی رضایی"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">ایمیل *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      dir="ltr"
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="example@luxe.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">شماره تماس *</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      dir="ltr"
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="09121234567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">سمت *</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="مثال: مدیر فروش"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">دپارتمان *</label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="مثال: فروش"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">تاریخ استخدام</label>
                    <input
                      type="text"
                      value={formData.joinDate}
                      onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="۱۴۰۴/۰۱/۲۰"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">حقوق ماهانه (تومان) *</label>
                    <input
                      type="number"
                      value={formData.salary}
                      onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-dark-300 mb-2 block">وضعیت</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFormData({ ...formData, status: 'active' })}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        formData.status === 'active'
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                          : 'border-dark-600 bg-dark-700 text-dark-300'
                      }`}
                    >
                      <span className="text-sm">فعال</span>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, status: 'inactive' })}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        formData.status === 'inactive'
                          ? 'border-red-500 bg-red-500/10 text-red-400'
                          : 'border-dark-600 bg-dark-700 text-dark-300'
                      }`}
                    >
                      <span className="text-sm">غیرفعال</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => { setShowModal(false); setEditingEmployee(null); resetForm(); }}
                  className="flex-1 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
                >
                  انصراف
                </button>
                <button
                  onClick={editingEmployee ? handleUpdate : handleAdd}
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.role || !formData.salary}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={16} />
                  <span>{editingEmployee ? 'ذخیره تغییرات' : 'افزودن کارمند'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
