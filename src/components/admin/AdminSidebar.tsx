import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  LogOut,
  Gem
} from 'lucide-react';

export default function AdminSidebar() {
  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'داشبورد' },
    { path: '/admin/products', icon: Package, label: 'محصولات' },
    { path: '/admin/orders', icon: ShoppingCart, label: 'سفارشات' },
    { path: '/admin/customers', icon: Users, label: 'مشتریان' },
    { path: '/admin/analytics', icon: BarChart3, label: 'گزارشات' },
    { path: '/admin/settings', icon: Settings, label: 'تنظیمات' },
  ];

  return (
    <aside className="fixed right-0 top-0 bottom-0 w-64 bg-dark-800 border-l border-dark-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-dark-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
            <Gem className="text-dark-900" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-playfair font-bold text-gold-gradient">LUXE</h1>
            <p className="text-xs text-dark-400">پنل مدیریت</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30'
                  : 'text-dark-300 hover:bg-dark-700 hover:text-gold-400'
              }`
            }
            end={item.path === '/admin'}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-dark-700">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-dark-300 hover:bg-dark-700 hover:text-red-400 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">خروج</span>
        </NavLink>
      </div>
    </aside>
  );
}
