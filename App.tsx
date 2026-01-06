import React, { Suspense, lazy } from 'react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ToastProvider } from './components/Toast';

// lazy loading biar bundle-na leutik jeung jalan-na gancang pisan mah kieu
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));
const MonitoringPoints = lazy(() => import('./pages/MonitoringPoints').then(module => ({ default: module.MonitoringPoints })));
const MonitoringDetail = lazy(() => import('./pages/MonitoringDetail').then(module => ({ default: module.MonitoringDetail })));
const Analytics = lazy(() => import('./pages/Analytics').then(module => ({ default: module.Analytics })));
const Reports = lazy(() => import('./pages/Reports').then(module => ({ default: module.Reports })));
const Settings = lazy(() => import('./pages/Settings').then(module => ({ default: module.Settings })));

// Loading indicator premium kieu
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
    <div className="w-12 h-12 border-4 border-emerald-100 border-t-emerald-500 rounded-full animate-spin"></div>
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 animate-pulse">Menyiapkan Pengalaman...</p>
  </div>
);

// komponen root aplikasi yeuh
// pake MemoryRouter biar routing kerja tanpa perlu backend
function App() {
  return (
    <ToastProvider>
      <MemoryRouter>
        <Layout>
          {/* rute navigasi aplikasi, tiap path bakal ngebuka halaman yang beda atuh */}
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Dashboard />} /> {/* pintu masuk utama atau dashboard mah */}
              <Route path="/monitoring" element={<MonitoringPoints />} /> {/* daftar titik pantau sensor kieu */}
              <Route path="/monitoring/:id" element={<MonitoringDetail />} /> {/* halaman detail per titik */}
              <Route path="/analytics" element={<Analytics />} /> {/* grafik buat liat perkembangan data mah */}
              <Route path="/reports" element={<Reports />} /> {/* buat bikin dokumen laporan atuh */}
              <Route path="/settings" element={<Settings />} /> {/* tempat ngatur sistem mah */}
              <Route path="*" element={<Navigate to="/" replace />} /> {/* kalo nyasar balikin ke dashboard ya */}
            </Routes>
          </Suspense>
        </Layout>
      </MemoryRouter>
    </ToastProvider>
  );
}

export default App;