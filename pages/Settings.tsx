// halaman pengaturan keur ngatur batas-batas sensor jeung sistem yeuh
import React from 'react';
import { Save } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="max-w-4xl pb-10">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Pengaturan Sistem</h2>
        <p className="text-slate-500 mt-1 text-sm font-medium">Konfigurasi ambang batas, notifikasi, dan akses pengguna.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-50 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Konfigurasi Ambang Batas</h3>
          {/* di bagian bawah ini tempat setel batas aman biar sistem bisa kasih alert otomatis mah */}
          <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">Tentukan batas parameter untuk peringatan otomatis. Nilai ini berlaku secara global kecuali diatur khusus per sensor.</p>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Tingkat pH (Batas Bawah)</label>
              <input type="number" defaultValue="6.0" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold text-slate-700" />
              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Standar: 6.0</p>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Tingkat pH (Batas Atas)</label>
              <input type="number" defaultValue="9.0" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold text-slate-700" />
              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Standar: 9.0</p>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">TSS Maksimum (mg/L)</label>
              <input type="number" defaultValue="200" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold text-slate-700" />
              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Batas Regulasi: 200 mg/L</p>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Kekeruhan Maksimum (NTU)</label>
              <input type="number" defaultValue="150" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold text-slate-700" />
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex justify-end">
          <button className="bg-slate-900 hover:bg-black text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-200">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};