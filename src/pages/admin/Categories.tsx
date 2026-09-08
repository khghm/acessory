import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Search, Eye, X, Upload, Image as ImageIcon, Save } from 'lucide-react';
import { categories as initialCategories, Category } from '../../data/products';

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    nameEn: '',
    description: '',
    image: '',
    count: 0,
  });

  const filteredCategories = categories.filter((c) =>
    c.name.includes(searchQuery) || c.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    const newCategory: Category = {
      id: formData.id || `cat-${Date.now()}`,
      name: formData.name,
      nameEn: formData.nameEn,
      description: formData.description,
      image: formData.image,
      count: formData.count,
    };
    setCategories([...categories, newCategory]);
    setShowModal(false);
    resetForm();
  };

  const handleUpdate = () => {
    if (editingCategory) {
      const updated: Category = {
        ...editingCategory,
        name: formData.name,
        nameEn: formData.nameEn,
        description: formData.description,
        image: formData.image,
        count: formData.count,
      };
      setCategories(categories.map((c) => (c.id === editingCategory.id ? updated : c)));
      setEditingCategory(null);
      resetForm();
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('آیا از حذف این دسته‌بندی مطمئن هستید؟')) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  const openEditModal = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      id: category.id,
      name: category.name,
      nameEn: category.nameEn,
      description: category.description,
      image: category.image,
      count: category.count,
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      nameEn: '',
      description: '',
      image: '',
      count: 0,
    });
  };

  const openAddModal = () => {
    resetForm();
    setEditingCategory(null);
    setShowModal(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">دسته‌بندی‌ها</h1>
          <p className="text-dark-400 mt-1">مدیریت دسته‌بندی‌های فروشگاه</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all"
        >
          <Plus size={18} />
          <span>افزودن دسته‌بندی</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5">
          <p className="text-dark-400 text-sm mb-1">کل دسته‌بندی‌ها</p>
          <p className="text-2xl font-bold text-dark-100">{categories.length}</p>
        </div>
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5">
          <p className="text-dark-400 text-sm mb-1">کل محصولات</p>
          <p className="text-2xl font-bold text-gold-400">
            {categories.reduce((sum, c) => sum + c.count, 0)}
          </p>
        </div>
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5">
          <p className="text-dark-400 text-sm mb-1">میانگین محصولات</p>
          <p className="text-2xl font-bold text-dark-100">
            {(categories.reduce((sum, c) => sum + c.count, 0) / categories.length).toFixed(1)}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-dark-800 border border-dark-700 rounded-2xl p-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400" size={18} />
          <input
            type="text"
            placeholder="جستجوی دسته‌بندی..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-dark-700 border border-dark-600 rounded-xl pr-10 pl-4 py-2.5 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
          />
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all"
          >
            {/* Image */}
            <div className="relative h-40 bg-dark-700 overflow-hidden">
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="text-dark-500" size={48} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
              <div className="absolute bottom-3 right-3 left-3">
                <h3 className="text-lg font-bold text-dark-100">{category.name}</h3>
                <p className="text-xs text-gold-400">{category.nameEn}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-dark-400 mb-3 line-clamp-2">{category.description}</p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gold-500/10 text-gold-400 rounded-full text-xs font-medium">
                    {category.count} محصول
                  </span>
                </div>
                <span className="text-xs text-dark-500">ID: {category.id}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-3 border-t border-dark-700">
                <button
                  onClick={() => openEditModal(category)}
                  className="flex-1 flex items-center justify-center gap-1 bg-dark-700 text-dark-200 px-3 py-2 rounded-lg hover:bg-dark-600 transition-colors text-sm"
                >
                  <Edit2 size={14} />
                  <span>ویرایش</span>
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="flex items-center justify-center gap-1 bg-red-500/10 text-red-400 px-3 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-sm"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-4 bg-dark-800 border border-dark-600 rounded-full flex items-center justify-center">
            <Search size={32} className="text-dark-500" />
          </div>
          <p className="text-dark-400 text-lg">دسته‌بندی یافت نشد</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setShowModal(false); setEditingCategory(null); resetForm(); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-dark-100">
                  {editingCategory ? 'ویرایش دسته‌بندی' : 'افزودن دسته‌بندی جدید'}
                </h3>
                <button
                  onClick={() => { setShowModal(false); setEditingCategory(null); resetForm(); }}
                  className="text-dark-400 hover:text-dark-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Image Upload */}
                <div>
                  <label className="text-sm text-dark-300 mb-2 block">تصویر دسته‌بندی</label>
                  <div className="border-2 border-dashed border-dark-600 rounded-xl p-6 text-center hover:border-gold-500/50 transition-colors">
                    {formData.image ? (
                      <div className="relative inline-block">
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="max-w-full max-h-48 rounded-lg object-contain"
                        />
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, image: '' })}
                          className="absolute top-2 left-2 w-8 h-8 bg-red-500/90 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <ImageIcon className="mx-auto text-dark-500 mb-3" size={48} />
                        <p className="text-dark-400 text-sm mb-2">تصویر دسته‌بندی را انتخاب کنید</p>
                        <p className="text-dark-500 text-xs mb-4">PNG, JPG, WEBP (حداکثر 5MB)</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="category-image"
                    />
                    <label
                      htmlFor="category-image"
                      className="mt-3 flex items-center gap-2 mx-auto bg-dark-700 text-dark-200 px-4 py-2 rounded-xl hover:bg-dark-600 transition-colors cursor-pointer w-fit"
                    >
                      <Upload size={16} />
                      <span>{formData.image ? 'تغییر تصویر' : 'انتخاب تصویر'}</span>
                    </label>
                  </div>
                </div>

                {/* Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">نام فارسی</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="مثال: گردنبند"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">نام انگلیسی</label>
                    <input
                      type="text"
                      value={formData.nameEn}
                      onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                      dir="ltr"
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Example: Necklace"
                    />
                  </div>
                </div>

                {/* ID and Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">شناسه (ID)</label>
                    <input
                      type="text"
                      value={formData.id}
                      onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                      disabled={!!editingCategory}
                      dir="ltr"
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors disabled:opacity-50"
                      placeholder="necklace"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">تعداد محصولات</label>
                    <input
                      type="number"
                      value={formData.count}
                      onChange={(e) => setFormData({ ...formData, count: Number(e.target.value) })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">توضیحات</label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="توضیحات دسته‌بندی..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => { setShowModal(false); setEditingCategory(null); resetForm(); }}
                  className="flex-1 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
                >
                  انصراف
                </button>
                <button
                  onClick={editingCategory ? handleUpdate : handleAdd}
                  disabled={!formData.name || !formData.nameEn || !formData.id}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={16} />
                  <span>{editingCategory ? 'ذخیره تغییرات' : 'افزودن دسته‌بندی'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
