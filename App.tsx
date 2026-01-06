import React from 'react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { MonitoringPoints } from './pages/MonitoringPoints';
import { Analytics } from './pages/Analytics';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';

// komponen root aplikasi yeuh
// pake MemoryRouter biar routing kerja tanpa perlu backend
function App() {
  return (
    <MemoryRouter>
      <Layout>
        {/* rute navigasi aplikasi, tiap path bakal ngebuka halaman yang beda atuh */}
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* pintu masuk utama atau dashboard mah */}
          <Route path="/monitoring" element={<MonitoringPoints />} /> {/* daftar titik pantau sensor kieu */}
          <Route path="/analytics" element={<Analytics />} /> {/* grafik buat liat perkembangan data mah */}
          <Route path="/reports" element={<Reports />} /> {/* buat bikin dokumen laporan atuh */}
          <Route path="/settings" element={<Settings />} /> {/* tempat ngatur sistem mah */}
          <Route path="*" element={<Navigate to="/" replace />} /> {/* kalo nyasar balikin ke dashboard ya */}
        </Routes>
      </Layout>
    </MemoryRouter>
  );
}

export default App;