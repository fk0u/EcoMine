// halaman laporan buat ngatur dokumen kepatuhan lingkungan yeuh
import React from 'react';
import { REPORT_TEMPLATES } from '../constants';
import { FileText, Download, Calendar, CheckCircle, Clock } from 'lucide-react';

export const Reports = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Laporan Kepatuhan</h2>
          <p className="text-slate-500 mt-1 text-sm font-medium">Hasilkan dan ekspor dokumen regulasi secara otomatis.</p>
        </div>
        <button className="bg-slate-900 hover:bg-black text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-xl shadow-slate-200">
          <FileText size={14} />
          Buat Laporan Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* data templatenya kita ambil dari file constants ya, terus dilooping kieu */}
        {REPORT_TEMPLATES.map((template) => (
          <div key={template.id} className="bg-white p-8 rounded-3xl border border-slate-50 hover:border-slate-200 transition-all group relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <FileText size={80} className="text-slate-900" />
            </div>

            <div className="relative">
              <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-6 ${template.frequency === 'Harian' ? 'bg-blue-50 text-blue-600' :
                template.frequency === 'Bulanan' ? 'bg-purple-50 text-purple-600' :
                  'bg-orange-50 text-orange-600'
                }`}>
                {template.frequency}
              </span>

              <h3 className="text-base font-bold text-slate-800 mb-2 leading-tight uppercase tracking-tighter">{template.name}</h3>
              <p className="text-xs text-slate-400 mb-8 font-medium">
                Target: {template.regulator}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  Terakhir: <span className="text-slate-500">2 hari lalu</span>
                </div>
                <button className="text-slate-400 hover:text-slate-900 p-2 transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-50 mt-10 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Laporan Terbaru yang Dihasilkan</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              {/* ini bagian kepala tabel buat daftar laporan yang baru aja jadi tah */}
              <tr>
                <th className="px-8 py-5">Nama Laporan</th>
                <th className="px-8 py-5">Dibuat Oleh</th>
                <th className="px-8 py-5">Tanggal</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-xs font-bold text-slate-600">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 text-slate-500 p-2 rounded-lg">
                        <FileText size={14} />
                      </div>
                      <span className="uppercase tracking-tighter">RKL-RPL_Triwulan-3_2023.pdf</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 uppercase text-[10px] tracking-widest text-slate-400">Otomatis Sistem</td>
                  <td className="px-8 py-5 flex items-center gap-2">
                    <Calendar size={14} className="text-slate-300" /> 15 Okt 2023
                  </td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600">
                      <CheckCircle size={10} /> Selesai
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="text-slate-400 hover:text-slate-900 uppercase text-[9px] tracking-widest font-black transition-colors">Unduh</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};