import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Search, Filter, Eye, Upload, X, Image as ImageIcon, Download } from 'lucide-react';
import { products as initialProducts, Product, categories } from '../../data/products';

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    price: '',
    originalPrice: '',
    category: 'necklace',
    description: '',
    image: '',
    rating: 4.5,
    reviews: 0,
    badge: '',
    inStock: true,
    colors: ['#FFD700'],
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.includes(searchQuery) || p.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

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

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name: formData.name,
      nameEn: formData.nameEn,
      price: Number(formData.price),
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined,
      category: formData.category,
      image: formData.image,
      rating: formData.rating,
      reviews: formData.reviews,
      badge: formData.badge || undefined,
      description: formData.description,
      colors: formData.colors,
      inStock: formData.inStock,
    };
    setProducts([...products, newProduct]);
    setShowAddModal(false);
    resetForm();
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      const updatedProduct: Product = {
        ...editingProduct,
        name: formData.name,
        nameEn: formData.nameEn,
        price: Number(formData.price),
        originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined,
        category: formData.category,
        image: formData.image,
        description: formData.description,
        badge: formData.badge || undefined,
        inStock: formData.inStock,
      };
      setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
      setEditingProduct(null);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      nameEn: '',
      price: '',
      originalPrice: '',
      category: 'necklace',
      description: '',
      image: '',
      rating: 4.5,
      reviews: 0,
      badge: '',
      inStock: true,
      colors: ['#FFD700'],
    });
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      nameEn: product.nameEn,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      category: product.category,
      description: product.description,
      image: product.image,
      rating: product.rating,
      reviews: product.reviews,
      badge: product.badge || '',
      inStock: product.inStock,
      colors: product.colors,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  // Download CSV function
  const downloadProductsCSV = () => {
    const headers = ['نام فارسی', 'نام انگلیسی', 'قیمت', 'قیمت قبل از تخفیف', 'دسته‌بندی', 'امتیاز', 'تعداد نظرات', 'برچسب', 'موجودی', 'توضیحات'];
    const csvContent = [
      headers.join(','),
      ...filteredProducts.map(product => {
        const categoryName = categories.find(c => c.id === product.category)?.name || product.category;
        return [
          product.name,
          product.nameEn,
          product.price,
          product.originalPrice || '',
          categoryName,
          product.rating,
          product.reviews,
          product.badge || '',
          product.inStock ? 'موجود' : 'ناموجود',
          product.description.replace(/,/g, '،')
        ].join(',');
      })
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'products-report.csv');
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
          <h1 className="text-2xl font-bold text-dark-100">محصولات</h1>
          <p className="text-dark-400 mt-1">مدیریت محصولات فروشگاه</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={downloadProductsCSV}
            className="flex items-center gap-2 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
          >
            <Download size={16} />
            <span>دانلود گزارش</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all"
          >
            <Plus size={18} />
            <span>افزودن محصول</span>
          </button>
        </div>
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
                        onClick={() => openEditModal(product)}
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
            onClick={() => { setShowAddModal(false); setEditingProduct(null); resetForm(); }}
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
                  {editingProduct ? 'ویرایش محصول' : 'افزودن محصول جدید'}
                </h3>
                <button
                  onClick={() => { setShowAddModal(false); setEditingProduct(null); resetForm(); }}
                  className="text-dark-400 hover:text-dark-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Image Upload */}
                <div>
                  <label className="text-sm text-dark-300 mb-2 block">تصویر محصول</label>
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
                        <p className="text-dark-400 text-sm mb-2">تصویر محصول را انتخاب کنید</p>
                        <p className="text-dark-500 text-xs mb-4">PNG, JPG, WEBP (حداکثر 5MB)</p>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-3 flex items-center gap-2 mx-auto bg-dark-700 text-dark-200 px-4 py-2 rounded-xl hover:bg-dark-600 transition-colors"
                    >
                      <Upload size={16} />
                      <span>{formData.image ? 'تغییر تصویر' : 'انتخاب تصویر'}</span>
                    </button>
                  </div>
                </div>

                {/* Name fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">نام فارسی</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="مثال: گردنبند الماس"
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
                      placeholder="Example: Diamond Necklace"
                    />
                  </div>
                </div>

                {/* Price fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">قیمت (تومان)</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="10000000"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">قیمت قبل از تخفیف (اختیاری)</label>
                    <input
                      type="number"
                      value={formData.originalPrice}
                      onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="12000000"
                    />
                  </div>
                </div>

                {/* Category and Badge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">دسته‌بندی</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="necklace">گردنبند</option>
                      <option value="bracelet">دستبند</option>
                      <option value="earring">گوشواره</option>
                      <option value="ring">انگشتر</option>
                      <option value="watch">ساعت</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-dark-300 mb-1 block">برچسب (اختیاری)</label>
                    <select
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="">بدون برچسب</option>
                      <option value="جدید">جدید</option>
                      <option value="تخفیف">تخفیف</option>
                      <option value="پرفروش">پرفروش</option>
                      <option value="ویژه">ویژه</option>
                      <option value="لوکس">لوکس</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm text-dark-300 mb-1 block">توضیحات</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="توضیحات محصول را وارد کنید..."
                  />
                </div>

                {/* Stock status */}
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.inStock}
                      onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-dark-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-dark-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                  <span className="text-sm text-dark-300">موجود در انبار</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => { setShowAddModal(false); setEditingProduct(null); resetForm(); }}
                  className="flex-1 bg-dark-700 text-dark-200 px-4 py-2.5 rounded-xl hover:bg-dark-600 transition-colors"
                >
                  انصراف
                </button>
                <button
                  onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                  disabled={!formData.name || !formData.price || !formData.image}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
