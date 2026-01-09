// halaman pengaturan sistem - tempat ngatur ambang batas sensor sama profil mah
import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, User, Save, AlertTriangle, Smartphone, Mail } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Header Pengaturan */}
      <div className="space-y-1">
        <h1 className="text-4xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-none">
          Konfigurasi Sistem
        </h1>
        <p className="text-slate-400 text-sm lg:text-base font-medium max-w-md">
          Sesuaikan parameter pemantauan, notifikasi, dan preferensi akun Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Kolom Kiri: Navigasi Pengaturan (Mockup) */}
        <div className="xl:col-span-1 space-y-4">
          {[
            { icon: AlertTriangle, label: 'Ambang Batas Sensor', active: true },
            { icon: User, label: 'Profil Pengguna', active: false },
            { icon: Bell, label: 'Notifikasi & Lansiran', active: false },
            { icon: Shield, label: 'Keamanan & Akses', active: false },
            { icon: Smartphone, label: 'Integrasi Perangkat', active: false },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center justify-between p-6 rounded-[30px] transition-all border ${item.active
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-200 border-slate-900'
                  : 'bg-white/40 text-slate-500 hover:bg-white border-white/60'
                }`}
            >
              <div className="flex items-center gap-4">
                <item.icon size={20} className={item.active ? 'text-emerald-400' : 'text-slate-400'} />
                <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
              </div>
              {item.active && <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>}
            </button>
          ))}
        </div>

        {/* Kolom Kanan: Form Pengaturan Utama */}
        <div className="xl:col-span-2 space-y-10">
          {/* Section: Ambang Batas Sensor */}
          <div className="bg-white/40 border border-white/60 p-10 rounded-[50px] backdrop-blur-md relative overflow-hidden">
            {/* Dekorasi Latar Belakang */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/60">
                <div className="bg-emerald-500 p-3 rounded-2xl text-white shadow-lg">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tighter uppercase">Ambang Batas Sensor</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tentukan nilai batas untuk memicu alarm sistem</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: 'pH Minimum', value: '6.5', unit: 'pH', desc: 'Batas bawah keasaman air aman' },
                  { label: 'pH Maksimum', value: '8.5', unit: 'pH', desc: 'Batas atas keasaman air aman' },
                  { label: 'TSS Maksimum', value: '50.0', unit: 'mg/L', desc: 'Zat padat tersuspensi maksimal' },
                  { label: 'Kekeruhan Maks', value: '25.0', unit: 'NTU', desc: 'Tingkat kekeruhan air maksimal' },
                ].map((input, i) => (
                  <div key={i} className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex justify-between">
                      {input.label}
                      <span className="text-emerald-600 lowercase italic normal-case">{input.unit}</span>
                    </label>
                    <div className="bg-white/60 border border-white p-5 rounded-3xl focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
                      <input
                        type="number"
                        defaultValue={input.value}
                        className="bg-transparent border-none outline-none text-2xl font-black text-slate-800 w-full placeholder:text-slate-200"
                      />
                      <p className="text-[9px] font-bold text-slate-300 mt-2 italic">{input.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-emerald-900/5 rounded-3xl border border-emerald-900/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Save size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight">Simpan Perubahan?</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data akan langsung diperbarui ke seluruh sensor</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-[25px] text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-95">
                  Update Konfigurasi
                </button>
              </div>
            </div>
          </div>

          {/* Section: Email Notifikasi (Mockup Ringkas) */}
          <div className="bg-white/40 border border-white/60 p-10 rounded-[50px] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-500 p-3 rounded-2xl text-white shadow-lg">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800 tracking-tighter uppercase">Penerima Alergi</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email yang akan menerima notifikasi status kritis</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {['admin@it-bumi.com', 'kepala.teknik@tambang.co.id'].map((email, i) => (
                <div key={i} className="bg-white/60 border border-white px-5 py-3 rounded-2xl flex items-center gap-3 text-xs font-bold text-slate-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  {email}
                  <button className="text-slate-300 hover:text-rose-500 transition-colors ml-2">×</button>
                </div>
              ))}
              <button className="border-2 border-dashed border-slate-200 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-emerald-300 hover:text-emerald-500 transition-all">
                + Tambah Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};