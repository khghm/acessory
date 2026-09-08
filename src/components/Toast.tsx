import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-6 left-1/2 z-[60] bg-dark-700 border border-gold-500/30 rounded-xl px-5 py-3 shadow-2xl shadow-gold-500/10 flex items-center gap-3"
        >
          <CheckCircle size={20} className="text-emerald-400" />
          <span className="text-dark-100 text-sm">{message}</span>
          <button onClick={onClose} className="text-dark-400 hover:text-dark-200 mr-2">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
