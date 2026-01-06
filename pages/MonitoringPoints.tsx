// halaman eksplorasi situs - nampilin semua titik monitoring di lapangan
import React, { useState } from 'react';
import { MONITORING_POINTS } from '../constants';
import { StatusBadge } from '../components/StatusBadge';
import { Map, List, Filter, Download, ArrowUpRight } from 'lucide-react';

export const MonitoringPoints = () => {
  // state buat toggle antara tampilan list sama peta
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Eksplorasi Situs</h2>
          <p className="text-slate-500 mt-1 text-sm font-medium">Monitoring status infrastruktur lingkungan secara menyeluruh.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="glass bg-white/50 rounded-2xl p-1.5 flex shadow-sm">
            <button
              onClick={() => setViewMode('list')}
              className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
            >
              Daftar
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${viewMode === 'map' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
            >
              Peta
            </button>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 glass bg-white rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-600 hover:bg-white shadow-sm transition-all">
            <Filter size={14} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {/* kalo mode list, tampilin grid card dari semua titik monitoring */}
      {viewMode === 'list' ? (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-auto no-scrollbar pb-6 lg:pb-0">
          {MONITORING_POINTS.map((point) => (
            <div key={point.id} className="bg-white/40 border border-white/60 p-6 rounded-[35px] hover:bg-white transition-all group flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Map size={24} />
                  </div>
                  <button className="p-2.5 rounded-full bg-white shadow-sm text-slate-400 hover:text-emerald-600 transition-colors">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-slate-800 tracking-tighter mb-1 uppercase">{point.name}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">{point.location} • ID: {point.id}</p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="text-[9px] text-slate-300 uppercase font-black tracking-widest">pH</p>
                    <p className="text-xl font-black text-slate-700">{point.readings.ph}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-300 uppercase font-black tracking-widest">TSS</p>
                    <p className="text-xl font-black text-slate-700">{point.readings.tss}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white flex items-center justify-between">
                <StatusBadge status={point.status} />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{point.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 bg-white/20 rounded-[40px] flex items-center justify-center relative overflow-hidden border border-white/50">
          {/* buat tampilan peta mah sementara pake placeholder dulu ya, nanti bisa pake leaflet atuh */}
          <div className="relative z-10 text-center p-12 glass bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl max-w-sm border-white">
            <Map size={64} className="mx-auto text-emerald-600 mb-8" />
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Peta Lokasi</h3>
            <p className="text-slate-500 mt-4 text-sm font-medium leading-relaxed opacity-80">
              Visualisasi geospasial real-time dari seluruh infrastruktur sensor lingkungan di area konsesi.
            </p>
            <button onClick={() => setViewMode('list')} className="mt-10 px-10 py-3.5 bg-slate-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-black shadow-xl transition-all">
              Buka Daftar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};