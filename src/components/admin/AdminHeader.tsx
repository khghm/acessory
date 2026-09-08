import { Bell, Search, User } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="bg-dark-800 border-b border-dark-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400" size={18} />
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full bg-dark-700 border border-dark-600 rounded-xl pr-10 pl-4 py-2.5 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-dark-300 hover:text-gold-400 transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3 pr-4 border-r border-dark-700">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <User size={16} className="text-dark-900" />
            </div>
            <div>
              <p className="text-sm font-medium text-dark-100">مدیر سیستم</p>
              <p className="text-xs text-dark-400">admin@luxe.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
