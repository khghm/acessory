import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, AlertTriangle, CheckCircle, TrendingDown, Search, Download, Plus, Edit2, Eye, X, Save, Warehouse } from 'lucide-react';
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

const initialInventoryData: InventoryItem[] = products.map((p, i) => ({
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
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventoryData);
  const [searchQuery, setSearchQuery] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showRestockModal, setShowRestockModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [restockForm, setRestockForm] = useState({
    quantity: '',
    warehouse: '',
    supplier: '',
    cost: '',
    notes: '',
  });

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.productName.includes(searchQuery);
    const matchesWarehouse = warehouseFilter === 'all' || item.warehouse === warehouseFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesWarehouse && matchesStatus;
  });

  const stats = {
    total: inventory.length,
    normal: inventory.filter(i => i.status === 'normal').length,
    low: inventory.filter(i => i.status === 'low').length,
    out: inventory.filter(i => i.status === 'out').length,
  };

  const openRestockModal = (item: InventoryItem) => {
    setSelectedItem(item);
    setRestockForm({
      quantity: '',
      warehouse: item.warehouse,
      supplier: '',
      cost: '',
      notes: '',
    });
    setShowRestockModal(true);
  };

  const handleRestock = () => {
    if (selectedItem && restockForm.quantity) {
      const quantity = Number(restockForm.quantity);
      setInventory(inventory.map(item => {
        if (item.productId === selectedItem.productId) {
          const newStock = item.currentStock + quantity;
          let newStatus: InventoryItem['status'] = 'normal';
          if (newStock === 0) newStatus = 'out';
          else if (newStock < item.minStock) newStatus = 'low';
          else if (newStock > item.maxStock) newStatus = 'overstock';
          return {
            ...item,
            currentStock: newStock,
            lastRestock: '۱۴۰۴/۰۱/۲۰',
            status: newStatus,
          };
        }
        return item;
      }));
      setShowRestockModal(false);
      setSelectedItem(null);
    }
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
        item.status === 'normal' ? 'عادی' : item.status === 'low' ? 'کم' : item.status === 'out' ? 'ناموجود' : 'مازاد'
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'normal':
        return <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">عادی</span>;
      case 'low':
        return <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">کم</span>;
      case 'out':
        return <span className="px-2 py-0.5 rounded-full text-xs bg-red-500/10 text-red-400 border border-red-500/30">ناموجود</span>;
      case 'overstock':
        return <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30">مازاد</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">مدیریت انبار</h1>
          <p className="text-dark-400 mt-1">کنترل موجودی و شارژ انبار</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={downloadInventoryCSV}
            className="flex items-center gap-2 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
          >
            <Download size={16} />
            <span>دانلود</span>
          </button>
          <button
            onClick={() => {
              setSelectedItem(null);
              setRestockForm({ quantity: '', warehouse: 'انبار تهران', supplier: '', cost: '', notes: '' });
              setShowRestockModal(true);
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all"
          >
            <Plus size={18} />
            <span>شارژ انبار</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <Package className="text-dark-400" size={20} />
          </div>
          <p className="text-dark-400 text-sm">کل اقلام</p>
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
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">حداقل/حداکثر</th>
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
                      <div className="w-24 h-2 bg-dark-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.status === 'normal' ? 'bg-emerald-500' :
                            item.status === 'low' ? 'bg-yellow-500' :
                            item.status === 'out' ? 'bg-red-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${Math.min(100, (item.currentStock / item.maxStock) * 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-dark-200">{item.currentStock}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-dark-300">{item.minStock} / {item.maxStock}</td>
                  <td className="py-4 px-6 text-sm text-dark-300">{item.warehouse}</td>
                  <td className="py-4 px-6 text-sm text-dark-300">{item.lastRestock}</td>
                  <td className="py-4 px-6">{getStatusBadge(item.status)}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => openRestockModal(item)}
                        className="p-2 text-dark-400 hover:text-gold-400 transition-colors"
                        title="شارژ انبار"
                      >
                        <Plus size={16} />
                      </button>
                      <button className="p-2 text-dark-400 hover:text-blue-400 transition-colors">
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Restock Modal */}
      <AnimatePresence>
        {showRestockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowRestockModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center">
                    <Warehouse className="text-gold-400" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-100">شارژ انبار</h3>
                </div>
                <button
                  onClick={() => setShowRestockModal(false)}
                  className="text-dark-400 hover:text-dark-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {selectedItem && (
                <div className="bg-dark-700/50 rounded-xl p-3 mb-4">
                  <p className="text-sm text-dark-400">محصول:</p>
                  <p className="text-dark-100 font-medium">{selectedItem.productName}</p>
                  <p className="text-xs text-dark-400 mt-1">موجودی فعلی: {selectedItem.currentStock}</p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">تعداد شارژ *</label>
                  <input
                    type="number"
                    value={restockForm.quantity}
                    onChange={(e) => setRestockForm({ ...restockForm, quantity: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="تعداد"
                  />
                </div>

                <div>
                  <label className="text-sm text-dark-300 mb-1 block">انبار مقصد</label>
                  <select
                    value={restockForm.warehouse}
                    onChange={(e) => setRestockForm({ ...restockForm, warehouse: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="انبار تهران">انبار تهران</option>
                    <option value="انبار اصفهان">انبار اصفهان</option>
                    <option value="انبار شیراز">انبار شیراز</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-dark-300 mb-1 block">تامین‌کننده</label>
                  <input
                    type="text"
                    value={restockForm.supplier}
                    onChange={(e) => setRestockForm({ ...restockForm, supplier: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="نام تامین‌کننده"
                  />
                </div>

                <div>
                  <label className="text-sm text-dark-300 mb-1 block">هزینه خرید (تومان)</label>
                  <input
                    type="number"
                    value={restockForm.cost}
                    onChange={(e) => setRestockForm({ ...restockForm, cost: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="text-sm text-dark-300 mb-1 block">یادداشت</label>
                  <textarea
                    rows={2}
                    value={restockForm.notes}
                    onChange={(e) => setRestockForm({ ...restockForm, notes: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="توضیحات اضافی..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => setShowRestockModal(false)}
                  className="flex-1 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
                >
                  انصراف
                </button>
                <button
                  onClick={handleRestock}
                  disabled={!restockForm.quantity}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={16} />
                  <span>ثبت شارژ</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
