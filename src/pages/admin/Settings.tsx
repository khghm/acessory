import { useState } from 'react';
import { Save, Upload, Globe, Bell, Shield, Palette } from 'lucide-react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'عمومی', icon: Globe },
    { id: 'notifications', label: 'اعلان‌ها', icon: Bell },
    { id: 'security', label: 'امنیت', icon: Shield },
    { id: 'appearance', label: 'ظاهر', icon: Palette },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-100">تنظیمات</h1>
        <p className="text-dark-400 mt-1">مدیریت تنظیمات فروشگاه</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-dark-800 border border-dark-700 rounded-xl p-1.5 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30'
                : 'text-dark-300 hover:text-gold-400'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* General settings */}
      {activeTab === 'general' && (
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-dark-100 mb-4">اطلاعات فروشگاه</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-dark-300 mb-1 block">نام فروشگاه</label>
                <input
                  type="text"
                  defaultValue="LUXE Accessories"
                  className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-dark-300 mb-1 block">ایمیل فروشگاه</label>
                <input
                  type="email"
                  defaultValue="info@luxe-acc.com"
                  dir="ltr"
                  className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-dark-300 mb-1 block">شماره تماس</label>
                <input
                  type="text"
                  defaultValue="021-1234-5678"
                  dir="ltr"
                  className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-dark-300 mb-1 block">واحد پول</label>
                <select className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors">
                  <option>تومان</option>
                  <option>ریال</option>
                  <option>دلار</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm text-dark-300 mb-1 block">آدرس</label>
            <textarea
              rows={2}
              defaultValue="تهران، خیابان ولیعصر، پلاک ۱۲۳"
              className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="text-sm text-dark-300 mb-1 block">لوگو فروشگاه</label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                <span className="text-dark-900 font-bold text-2xl font-playfair">L</span>
              </div>
              <button className="flex items-center gap-2 bg-dark-700 text-dark-200 px-4 py-2 rounded-xl hover:bg-dark-600 transition-colors">
                <Upload size={16} />
                <span>آپلود لوگو جدید</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications */}
      {activeTab === 'notifications' && (
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-dark-100 mb-4">تنظیمات اعلان‌ها</h3>
          {[
            { label: 'اعلان سفارش جدید', desc: 'دریافت اعلان برای هر سفارش جدید' },
            { label: 'اعلان ثبت‌نام مشتری', desc: 'دریافت اعلان برای مشتریان جدید' },
            { label: 'اعلان اتمام موجودی', desc: 'دریافت اعلان وقتی محصولی ناموجود شد' },
            { label: 'گزارش روزانه', desc: 'دریافت گزارش روزانه فروش' },
            { label: 'اعلان ایمیل', desc: 'ارسال اعلان‌ها از طریق ایمیل' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-4 bg-dark-700/30 rounded-xl">
              <div>
                <p className="text-sm font-medium text-dark-100">{item.label}</p>
                <p className="text-xs text-dark-400 mt-0.5">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-dark-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-dark-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
              </label>
            </div>
          ))}
        </div>
      )}

      {/* Security */}
      {activeTab === 'security' && (
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 space-y-6">
          <h3 className="text-lg font-bold text-dark-100 mb-4">تنظیمات امنیتی</h3>
          <div>
            <label className="text-sm text-dark-300 mb-1 block">رمز عبور فعلی</label>
            <input
              type="password"
              className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-sm text-dark-300 mb-1 block">رمز عبور جدید</label>
            <input
              type="password"
              className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-sm text-dark-300 mb-1 block">تکرار رمز عبور جدید</label>
            <input
              type="password"
              className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <div className="flex items-center justify-between p-4 bg-dark-700/30 rounded-xl">
            <div>
              <p className="text-sm font-medium text-dark-100">احراز هویت دو مرحله‌ای</p>
              <p className="text-xs text-dark-400 mt-0.5">افزایش امنیت حساب کاربری</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-dark-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-dark-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
            </label>
          </div>
        </div>
      )}

      {/* Appearance */}
      {activeTab === 'appearance' && (
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 space-y-6">
          <h3 className="text-lg font-bold text-dark-100 mb-4">تنظیمات ظاهری</h3>
          <div>
            <label className="text-sm text-dark-300 mb-2 block">رنگ اصلی</label>
            <div className="flex items-center gap-3">
              {['#D4AF37', '#B76E79', '#C0C0C0', '#8B7355', '#4A5568'].map((color) => (
                <button
                  key={color}
                  className="w-10 h-10 rounded-xl border-2 border-dark-600 hover:border-gold-400 transition-colors"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm text-dark-300 mb-1 block">فونت سایت</label>
            <select className="w-full bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-gold-500 transition-colors">
              <option>Inter</option>
              <option>Vazir</option>
              <option>Sahel</option>
            </select>
          </div>
        </div>
      )}

      {/* Save button */}
      <button className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all">
        <Save size={18} />
        <span>ذخیره تغییرات</span>
      </button>
    </div>
  );
}
