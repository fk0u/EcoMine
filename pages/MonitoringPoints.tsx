// halaman eksplorasi situs - nampilin semua titik monitoring di lapangan mah
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MONITORING_POINTS } from '../constants';
import { StatusBadge } from '../components/StatusBadge';
import { Map, List, Filter, Search, ArrowUpRight, Activity, Droplets, Thermometer } from 'lucide-react';
import { useToast } from '../components/Toast';

export const MonitoringPoints = () => {
  // state buat toggle antara tampilan list sama peta
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleDetailClick = (pointName: string, pointId: string) => {
    showToast(`Memuat detail analitik untuk ${pointName}...`, 'info');
    // simulasi loading dikit biar berasa aplikasi beneran
    setTimeout(() => {
      navigate(`/monitoring/${pointId}`);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full gap-8 pb-10">
      {/* Header Eksplorasi */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0">
        <div className="space-y-1">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-none">
            Eksplorasi Situs
          </h1>
          <p className="text-slate-400 text-sm lg:text-base font-medium max-w-md">
            Monitoring status infrastruktur lingkungan secara menyeluruh di seluruh area.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-1.5 flex shadow-sm border border-white/60">
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-white text-emerald-600 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Daftar
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${viewMode === 'map' ? 'bg-white text-emerald-600 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Peta
            </button>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-600 hover:bg-white shadow-sm transition-all">
            <Filter size={16} />
            <span className="hidden sm:inline">Filter Situs</span>
          </button>
        </div>
      </div>

      {/* Konten Utama Berdasarkan Mode */}
      {viewMode === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-6">
          {MONITORING_POINTS.map((point) => (
            <div key={point.id} className="bg-white/40 border border-white/60 p-8 rounded-[45px] hover:bg-white/80 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all group flex flex-col justify-between relative overflow-hidden will-change-transform">
              {/* Dekorasi Latar Belakang */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shadow-inner">
                    <Map size={28} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <StatusBadge status={point.status} />
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{point.lastUpdate}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-1 uppercase group-hover:text-emerald-700 transition-colors">{point.name}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {point.location}
                </p>

                <div className="grid grid-cols-2 gap-6 bg-white/40 p-5 rounded-3xl border border-white/40">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Activity size={12} />
                      <p className="text-[9px] uppercase font-black tracking-widest">pH Level</p>
                    </div>
                    <p className="text-2xl font-black text-slate-800">{point.readings.ph}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Droplets size={12} />
                      <p className="text-[9px] uppercase font-black tracking-widest">TSS (mg/L)</p>
                    </div>
                    <p className="text-2xl font-black text-slate-800">{point.readings.tss}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDetailClick(point.name, point.id)}
                className="mt-8 w-full py-4 bg-slate-900 text-white rounded-[25px] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all group-hover:shadow-lg cursor-pointer"
              >
                Lihat Detail Analitik <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 min-h-[500px] bg-slate-200 rounded-[50px] relative overflow-hidden border border-white shadow-inner group">
          {/* Mockup Peta yang Lebih Detail */}
          <div className="absolute inset-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-105 group-hover:scale-100">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="Terrain Map"
            />
          </div>

          {/* Overlay Grid Sensor */}
          <div className="absolute inset-0 bg-emerald-900/5 backdrop-blur-[2px]"></div>

          {/* Marker Sensor Mockup */}
          {MONITORING_POINTS.map((point, i) => (
            <div
              key={point.id}
              className="absolute animate-bounce-slow"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`
              }}
            >
              <div className="relative group/marker">
                <div
                  className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-emerald-500 cursor-pointer hover:scale-125 transition-all will-change-transform"
                  onClick={() => handleDetailClick(point.name, point.id)}
                >
                  <Activity size={18} className="text-emerald-600" />
                </div>
                {/* Info Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl opacity-0 scale-90 group-hover/marker:opacity-100 group-hover/marker:scale-100 transition-all pointer-events-none border border-white">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{point.id}</p>
                  <h4 className="font-bold text-slate-800 text-sm">{point.name}</h4>
                  <div className="flex justify-between mt-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-emerald-600">pH: {point.readings.ph}</span>
                    <span className="text-[10px] font-bold text-blue-600">TSS: {point.readings.tss}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-10 left-10 right-10 flex justify-center pointer-events-none">
            <div className="bg-slate-900/80 backdrop-blur-md px-8 py-4 rounded-full text-white text-xs font-bold flex items-center gap-4 border border-white/10 shadow-2xl">
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-emerald-500 rounded-full"></span> 8 Situs Aktif</span>
              <span className="w-[1px] h-4 bg-white/20"></span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-rose-500 rounded-full"></span> 2 Perlu Perhatian</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};