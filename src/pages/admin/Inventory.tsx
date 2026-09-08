import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, AlertTriangle, CheckCircle, TrendingDown, Search, Download, Plus, Edit2, Eye } from 'lucide-react';
import { products } from '../../data/products';

interface InventoryItem {
  productId: number;
  productName: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  warehouse: string;
  lastRestock: string;
  status: 'normal' | 'low' | 'out' | 'overstock';
}

const inventoryData: InventoryItem[] = products.map((p, i) => ({
  productId: p.id,
  productName: p.name,
  currentStock: Math.floor(Math.random() * 50) + 5,
  minStock: 10,
  maxStock: 100,
  warehouse: ['انبار تهران', 'انبار اصفهان', 'انبار شیراز'][i % 3],
  lastRestock: `۱۴۰۴/۰${(i % 9) + 1}/۱۵`,
  status: Math.random() > 0.8 ? 'low' : Math.random() > 0.9 ? 'out' : 'normal',
}));

export default function AdminInventory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch = item.productName.includes(searchQuery);
    const matchesWarehouse = warehouseFilter === 'all' || item.warehouse === warehouseFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesWarehouse && matchesStatus;
  });

  const stats = {
    total: inventoryData.length,
    normal: inventoryData.filter(i => i.status === 'normal').length,
    low: inventoryData.filter(i => i.status === 'low').length,
    out: inventoryData.filter(i => i.status === 'out').length,
  };

  const downloadInventoryCSV = () => {
    const headers = ['نام محصول', 'موجودی فعلی', 'حداقل موجودی', 'حداکثر موجودی', 'انبار', 'آخرین شارژ', 'وضعیت'];
    const csvContent = [
      headers.join(','),
      ...filteredInventory.map(item => [
        item.productName,
        item.currentStock,
        item.minStock,
        item.maxStock,
        item.warehouse,
        item.lastRestock,
        item.status === 'normal' ? 'عادی' : item.status === 'low' ? 'کم' : 'ناموجود'
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'inventory-report.csv');
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
          <h1 className="text-2xl font-bold text-dark-100">مدیریت انبار</h1>
          <p className="text-dark-400 mt-1">کنترل موجودی و انبارداری محصولات</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={downloadInventoryCSV}
            className="flex items-center gap-2 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
          >
            <Download size={16} />
            <span>دانلود گزارش</span>
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium">
            <Plus size={16} />
            <span>شارژ انبار</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Package className="text-blue-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">کل محصولات</p>
          <p className="text-2xl font-bold text-dark-100 mt-1">{stats.total}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="text-emerald-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">موجودی عادی</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">{stats.normal}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="text-yellow-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">موجودی کم</p>
          <p className="text-2xl font-bold text-yellow-400 mt-1">{stats.low}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <TrendingDown className="text-red-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">ناموجود</p>
          <p className="text-2xl font-bold text-red-400 mt-1">{stats.out}</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400" size={18} />
            <input
              type="text"
              placeholder="جستجوی محصول..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-700 border border-dark-600 rounded-xl pr-10 pl-4 py-2.5 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <select
            value={warehouseFilter}
            onChange={(e) => setWarehouseFilter(e.target.value)}
            className="bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-200 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="all">همه انبارها</option>
            <option value="انبار تهران">انبار تهران</option>
            <option value="انبار اصفهان">انبار اصفهان</option>
            <option value="انبار شیراز">انبار شیراز</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-200 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="all">همه وضعیت‌ها</option>
            <option value="normal">عادی</option>
            <option value="low">کم</option>
            <option value="out">ناموجود</option>
          </select>
        </div>
      </div>

      {/* Inventory table */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-700/50">
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">محصول</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">موجودی</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">انبار</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">آخرین شارژ</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">وضعیت</th>
                <th className="text-center py-4 px-6 text-sm font-medium text-dark-400">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <motion.tr
                  key={item.productId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors"
                >
                  <td className="py-4 px-6 text-sm text-dark-100">{item.productName}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-dark-200">{item.currentStock}</span>
                      <span className="text-xs text-dark-400">/ {item.maxStock}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-dark-300">{item.warehouse}</td>
                  <td className="py-4 px-6 text-sm text-dark-300">{item.lastRestock}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                      item.status === 'normal'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : item.status === 'low'
                        ? 'bg-yellow-500/10 text-yellow-400'
                        : 'bg-red-500/10 text-red-400'
                    }`}>
                      {item.status === 'normal' ? 'عادی' : item.status === 'low' ? 'کم' : 'ناموجود'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-dark-400 hover:text-blue-400 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-dark-400 hover:text-gold-400 transition-colors">
                        <Edit2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
