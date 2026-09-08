import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Search, Filter, Eye, MoreVertical } from 'lucide-react';
import { products as initialProducts, Product } from '../../data/products';

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.includes(searchQuery) || p.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">محصولات</h1>
          <p className="text-dark-400 mt-1">مدیریت محصولات فروشگاه</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all"
        >
          <Plus size={18} />
          <span>افزودن محصول</span>
        </button>
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
          <div className="flex items-center gap-3">
            <Filter size={18} className="text-dark-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-200 focus:outline-none focus:border-gold-500 transition-colors"
            >
              <option value="all">همه دسته‌ها</option>
              <option value="necklace">گردنبند</option>
              <option value="bracelet">دستبند</option>
              <option value="earring">گوشواره</option>
              <option value="ring">انگشتر</option>
              <option value="watch">ساعت</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products table */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-700/50">
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">محصول</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">دسته‌بندی</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">قیمت</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">موجودی</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-dark-400">امتیاز</th>
                <th className="text-center py-4 px-6 text-sm font-medium text-dark-400">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-dark-100">{product.name}</p>
                        <p className="text-xs text-dark-400">{product.nameEn}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-dark-300">
                      {product.category === 'necklace' && 'گردنبند'}
                      {product.category === 'bracelet' && 'دستبند'}
                      {product.category === 'earring' && 'گوشواره'}
                      {product.category === 'ring' && 'انگشتر'}
                      {product.category === 'watch' && 'ساعت'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-dark-200">{formatPrice(product.price)} تومان</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                      product.inStock 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : 'bg-red-500/10 text-red-400'
                    }`}>
                      {product.inStock ? 'موجود' : 'ناموجود'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gold-400">{product.rating}</span>
                      <span className="text-xs text-dark-400">({product.reviews})</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-dark-400 hover:text-blue-400 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => setEditingProduct(product)}
                        className="p-2 text-dark-400 hover:text-gold-400 transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-dark-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {(showAddModal || editingProduct) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setShowAddModal(false); setEditingProduct(null); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-dark-100 mb-6">
                {editingProduct ? 'ویرایش محصول' : 'افزودن محصول جدید'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">نام محصول</label>
                  <input
                    type="text"
                    defaultValue={editingProduct?.name || ''}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">قیمت (تومان)</label>
                  <input
                    type="number"
                    defaultValue={editingProduct?.price || ''}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">دسته‌بندی</label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors">
                    <option value="necklace">گردنبند</option>
                    <option value="bracelet">دستبند</option>
                    <option value="earring">گوشواره</option>
                    <option value="ring">انگشتر</option>
                    <option value="watch">ساعت</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">توضیحات</label>
                  <textarea
                    rows={3}
                    defaultValue={editingProduct?.description || ''}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => { setShowAddModal(false); setEditingProduct(null); }}
                  className="flex-1 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
                >
                  انصراف
                </button>
                <button
                  onClick={() => { setShowAddModal(false); setEditingProduct(null); }}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all"
                >
                  {editingProduct ? 'ذخیره تغییرات' : 'افزودن محصول'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
