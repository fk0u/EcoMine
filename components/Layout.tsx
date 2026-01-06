// ini komponen layout utama buat bungkus semua halaman biar konsisten atuh
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Home,
  Leaf,
  TrendingUp,
  FileText,
  Sliders,
  LogOut,
  Search,
  Bell
} from 'lucide-react';

// komponen navigasi sidebar yang lebih clean dan modern
// komponen navigasi sidebar yang lebih clean dan modern
const NavItem = React.memo(({ to, icon: Icon, active, mobile = false }: { to: string; icon: any; active: boolean, mobile?: boolean }) => {
  return (
    <Link
      to={to}
      className={`transition-all flex items-center justify-center relative group ${mobile
        ? `p-3 rounded-2xl ${active ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400'}`
        : `w-12 h-12 rounded-xl mb-4 ${active ? 'bg-slate-900 text-white shadow-xl scale-110' : 'text-slate-400 hover:bg-white hover:shadow-md hover:text-slate-600'}`
        } gpu-accelerated`}
    >
      <Icon size={mobile ? 20 : 20} strokeWidth={active ? 2.5 : 2} />
      {!mobile && active && (
        <span className="absolute left-14 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
          Aktif
        </span>
      )}
    </Link>
  );
});

const Sidebar = React.memo(({ pathname }: { pathname: string }) => (
  <aside className="hidden lg:flex w-24 h-screen flex-col items-center justify-between py-10 fixed left-0 top-0 z-50">
    <div className="flex flex-col items-center w-full">
      <div className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-white/60 flex items-center justify-center hover:rotate-12 transition-transform cursor-pointer group mb-12">
        <span className="text-2xl font-black text-emerald-500 tracking-tighter group-hover:scale-110 transition-transform">E</span>
      </div>

      <nav className="flex flex-col items-center w-full px-4 text-rendering-optimizeLegibility">
        <NavItem to="/" icon={Home} active={pathname === '/'} />
        <NavItem to="/monitoring" icon={Leaf} active={pathname === '/monitoring'} />
        <NavItem to="/analytics" icon={TrendingUp} active={pathname === '/analytics'} />
        <NavItem to="/reports" icon={FileText} active={pathname === '/reports'} />
        <NavItem to="/settings" icon={Sliders} active={pathname === '/settings'} />
      </nav>
    </div>

    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-colors mb-4">
      <LogOut size={20} />
    </button>
  </aside>
));

const Header = React.memo(({ pathname }: { pathname: string }) => {
  const title = pathname === '/' ? 'Dashboard' :
    pathname === '/monitoring' ? 'Eksplorasi Situs' :
      pathname.includes('/monitoring/') ? 'Detail Situs' :
        pathname.replace('/', '').charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-8 py-6 lg:pt-8 bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-sm gpu-accelerated">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-8 flex-1">
          <div className="hidden md:block min-w-[200px]">
            <h2 className="text-xl font-black text-slate-900 tracking-tight leading-none smooth-render">
              {title}
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4 bg-white px-5 py-3.5 rounded-[20px] shadow-sm border border-slate-100 flex-1 max-w-xl group focus-within:shadow-md focus-within:ring-2 focus-within:ring-emerald-500/10 transition-all">
            <Search size={18} className="text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari parameter, situs, atau laporan..."
              className="bg-transparent border-none outline-none text-xs font-bold w-full text-slate-700 placeholder:text-slate-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-slate-800 hover:shadow-md transition-all group">
            <Bell size={20} className="group-hover:animate-swing" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-4 pl-6 border-l border-slate-200/50">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-slate-800 leading-none">Olivia R.</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Kepala Teknik</p>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-slate-100 overflow-hidden border-2 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <img src="https://i.pravatar.cc/150?u=olivia" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#FAFAFA] text-slate-800 font-sans selection:bg-emerald-500/20 overflow-hidden">
      <Sidebar pathname={location.pathname} />

      {/* Area Konten Utama - Floating Card Design */}
      <div className="flex-1 flex flex-col min-h-screen lg:pl-24 relative p-4 lg:p-6 lg:h-screen lg:overflow-hidden">
        <main className="flex-1 bg-white/60 border border-white/80 shadow-[0_0_50px_-12px_rgba(0,0,0,0.08)] rounded-[40px] lg:rounded-[50px] relative flex flex-col overflow-hidden backdrop-blur-3xl gpu-accelerated">

          <Header pathname={location.pathname} />

          {/* Konten Rute Dinamis (Scrollable Area) */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden pt-28 pb-10 px-6 lg:px-10 scroll-smooth" id="main-content">
            <div className="max-w-[1600px] mx-auto w-full animate-slide-up">
              <div key={location.pathname} className="page-transition">
                {children}
              </div>
            </div>
          </div>
        </main>

        {/* Navigasi Mobile - Floating Bottom Bar */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-2 rounded-[25px] shadow-2xl flex justify-between items-center z-50 border border-white/10">
          <NavItem to="/" icon={Home} active={location.pathname === '/'} mobile />
          <NavItem to="/monitoring" icon={Leaf} active={location.pathname === '/monitoring'} mobile />
          <NavItem to="/analytics" icon={TrendingUp} active={location.pathname === '/analytics'} mobile />
          <NavItem to="/reports" icon={FileText} active={location.pathname === '/reports'} mobile />
          <NavItem to="/settings" icon={Sliders} active={location.pathname === '/settings'} mobile />
        </div>
      </div>
    </div>
  );
};