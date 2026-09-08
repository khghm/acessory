import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export default function CartSidebar({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartSidebarProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 5000000 ? 0 : 150000;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-md bg-dark-800 border-r border-dark-600 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-dark-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <ShoppingBag size={20} className="text-gold-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-dark-100">سبد خرید</h2>
                  <p className="text-xs text-dark-400">{items.length} محصول</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-dark-300 hover:text-gold-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-dark-700 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-dark-500" />
                  </div>
                  <p className="text-dark-400 text-lg mb-2">سبد خرید خالی است</p>
                  <p className="text-dark-500 text-sm">محصولات مورد علاقه خود را اضافه کنید</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-4 bg-dark-700/50 rounded-xl p-3 border border-dark-600"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-dark-100 truncate">{item.product.name}</h4>
                      <p className="text-xs text-dark-400 mt-0.5">{item.product.nameEn}</p>
                      <div className="text-gold-400 font-bold text-sm mt-2">
                        {formatPrice(item.product.price)} <span className="text-xs font-normal">تومان</span>
                      </div>
                      
                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center bg-dark-800 rounded-lg border border-dark-600">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-dark-300 hover:text-gold-400 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm text-dark-100">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-dark-300 hover:text-gold-400 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-dark-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-dark-700 p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-400">جمع کل</span>
                    <span className="text-dark-200">{formatPrice(subtotal)} تومان</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-400">هزینه ارسال</span>
                    <span className={shipping === 0 ? 'text-emerald-400' : 'text-dark-200'}>
                      {shipping === 0 ? 'رایگان' : `${formatPrice(shipping)} تومان`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gold-400/70">
                      تا ارسال رایگان {formatPrice(5000000 - subtotal)} تومان مانده
                    </p>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-dark-600">
                    <span className="text-dark-100">مبلغ قابل پرداخت</span>
                    <span className="text-gold-400">{formatPrice(total)} تومان</span>
                  </div>
                </div>

                <button className="w-full btn-gold py-4 rounded-xl text-center font-bold text-lg">
                  تکمیل خرید
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 text-center text-dark-400 hover:text-gold-400 transition-colors text-sm"
                >
                  ادامه خرید
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
