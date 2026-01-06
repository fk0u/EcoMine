// ini komponen layout utama buat bungkus semua halaman biar konsisten atuh
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Home,
  Leaf,
  TrendingUp,
  Sliders,
  LogOut,
  Search,
  Bell
} from 'lucide-react';

// bikin komponen kecil biar gampang bikin item navigasi di sidebar mah
const NavItem = ({ to, icon: Icon, active, mobile = false }: { to: string; icon: any; active: boolean, mobile?: boolean }) => {
  return (
    <Link
      to={to}
      className={`sidebar-pill transition-all flex items-center justify-center ${mobile
        ? `p-3 rounded-2xl ${active ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400'}`
        : `p-3.5 rounded-full ${active ? 'bg-white shadow-xl text-emerald-600 scale-110 border border-emerald-50' : 'text-slate-400 hover:text-slate-600'}`
        }`}
    >
      <Icon size={mobile ? 20 : 22} strokeWidth={active ? 2.5 : 2} />
    </Link>
  );
};

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-transparent">
      {/* sidebar kalo di PC mah tetep di kiri ya, gak pindah-pindah atuh */}
      <aside className="hidden lg:flex w-24 h-screen flex-col items-center justify-between py-10 fixed left-0 top-0 z-50">
        <div className="flex flex-col items-center gap-12">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-4 hover:rotate-6 transition-transform cursor-pointer">
            <span className="text-2xl font-black text-emerald-600 tracking-tighter">P</span>
          </div>
          <nav className="flex flex-col items-center gap-8">
            <NavItem to="/" icon={Home} active={location.pathname === '/'} />
            <NavItem to="/monitoring" icon={Leaf} active={location.pathname === '/monitoring'} />
            <NavItem to="/analytics" icon={TrendingUp} active={location.pathname === '/analytics'} />
            <NavItem to="/settings" icon={Sliders} active={location.pathname === '/settings'} />
          </nav>
        </div>
        <button className="text-slate-400 hover:text-rose-500 transition-colors p-3">
          <LogOut size={22} />
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:pl-24 relative p-4 lg:p-8">
        <main className="flex-1 glass rounded-[40px] lg:rounded-[50px] shadow-2xl relative flex flex-col overflow-visible">
          {/* Internal Header */}
          <div className="flex items-center justify-between px-6 py-6 lg:px-12 lg:pt-10 shrink-0 sticky top-0 z-40 bg-white/20 backdrop-blur-md rounded-t-[40px] lg:rounded-t-[50px]">
            <div className="flex items-center gap-4 lg:gap-8 flex-1">
              <div className="hidden sm:flex items-center gap-3">
                <button className="px-5 py-2 glass bg-white/50 rounded-full text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:bg-white hover:text-slate-700 transition-all">Analitik</button>
                <button className="px-5 py-2 glass bg-white rounded-full text-[11px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Situs Saya
                </button>
              </div>
              <div className="glass px-6 py-2.5 rounded-full flex items-center gap-4 w-full max-w-md shadow-sm border-white/40 focus-within:ring-2 focus-within:ring-emerald-200 transition-all">
                <input
                  type="text"
                  placeholder="Cari data situs..."
                  className="bg-transparent border-none outline-none text-sm w-full text-slate-600 placeholder:text-slate-400 font-medium"
                />
                <Search size={18} className="text-slate-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden sm:flex glass p-3 rounded-full text-slate-500 hover:text-slate-900 transition-all shadow-sm border-white/40">
                <Bell size={20} />
              </button>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white shadow-lg overflow-hidden shrink-0 transform hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.pravatar.cc/150?u=olivia" alt="Olivia" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Dynamic Route Content (Scrollable) */}
          <div className="flex-1 p-6 lg:p-12 lg:pt-4 overflow-visible">
            <div key={location.pathname} className="page-transition">
              {children}
            </div>
          </div>
        </main>

        {/* navigasi bawah untuk tampilan mobile supaya gampang dijangkau jempol yeuh */}
        <div className="lg:hidden sticky bottom-6 left-0 right-0 flex items-center justify-around glass-dark mx-auto mt-6 p-3 rounded-[30px] w-full max-w-[320px] shadow-2xl z-50">
          <NavItem to="/" icon={Home} active={location.pathname === '/'} mobile />
          <NavItem to="/monitoring" icon={Leaf} active={location.pathname === '/monitoring'} mobile />
          <NavItem to="/analytics" icon={TrendingUp} active={location.pathname === '/analytics'} mobile />
          <NavItem to="/settings" icon={Sliders} active={location.pathname === '/settings'} mobile />
        </div>
      </div>
    </div>
  );
};