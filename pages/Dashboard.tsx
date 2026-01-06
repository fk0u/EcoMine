// ini halaman utama dashboard buat liat rangkuman kualitas air di lapangan mah
import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { HISTORICAL_DATA, MONITORING_POINTS } from '../constants';
import { Droplets, Wind, Play, Sliders, TrendingUp, Sun, Waves, Zap, ChevronRight } from 'lucide-react';

// komponen kartu kecil biar gampang liat parameter lingkungan kayak cahaya atau tanah kieu
const ParameterCard = ({ icon: Icon, label, value, color, delay }: { icon: any, label: string, value: string, color: string, delay: string }) => (
  <div className={`bg-white/80 p-4 rounded-3xl flex items-center gap-4 border border-white/50 shadow-sm hover-lift cursor-pointer ${delay}`}>
    <div className={`p-3 rounded-2xl ${color} bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
      <Icon size={18} className={color} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-xs font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

export const Dashboard = () => {
  // kita tunjukin data dari titik monitoring yang pertama aja buat visual utama mah
  const currentPoint = MONITORING_POINTS[0];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-full">
      {/* sisi kiri mah isinya judul sama visualisasi yang utama atuh */}
      <div className="flex-1 flex flex-col justify-between h-auto lg:h-full relative py-4">
        <div className="space-y-1 lg:space-y-3 z-10">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-800 tracking-tighter leading-[1.1]">
            {currentPoint.name}
          </h1>
          <p className="text-slate-400 text-sm lg:text-lg font-medium max-w-sm lg:max-w-md">
            Situs pemantauan ekosistem pertambangan aktif. Daun hijau, subur, dan sehat.
          </p>
        </div>

        {/* area visualisasi tengah - gambar daun jeung pH meter tah */}
        <div className="relative flex-1 flex items-center justify-center py-12 lg:py-0">
          {/* ada lingkaran zoom biar fokus liat tingkat pH na mah */}
          <div className="absolute left-0 lg:left-0 top-1/2 -translate-y-1/2 z-20">
            <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full glass border-[6px] lg:border-[10px] border-white shadow-2xl flex items-center justify-center relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80&w=800"
                alt="Focus Detail"
                className="w-full h-full object-cover scale-[1.7] group-hover:scale-[2] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-emerald-600/10 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 transform hover:scale-110 transition-transform">
                  <p className="text-[11px] font-black uppercase tracking-tighter text-white">pH Level</p>
                  <p className="text-4xl lg:text-5xl font-black text-white">{currentPoint.readings.ph}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Subject Image */}
          <div className="w-full max-w-[320px] lg:max-w-none lg:w-[85%] lg:h-[85%] relative animate-pulse-slow">
            <img
              src="https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=1200"
              alt="Nature Subject"
              className="w-full h-full object-contain filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            />

            {/* Callouts */}
            <div className="absolute top-[10%] right-[5%] lg:right-[15%] hidden sm:flex flex-col items-end">
              <div className="h-[2px] w-20 bg-slate-300 rotate-[25deg] origin-right mb-4 opacity-40"></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Chl B Level</p>
              <p className="text-lg lg:text-2xl font-black text-slate-800 tracking-tighter">0.738: <span className="text-slate-400 text-sm">00.02b</span></p>
            </div>

            <div className="absolute bottom-[20%] right-[20%] hidden sm:flex flex-col items-end">
              <div className="h-[2px] w-14 bg-slate-300 -rotate-[15deg] origin-right mb-3 opacity-40"></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Soil Health</p>
              <p className="text-lg lg:text-2xl font-black text-slate-800 tracking-tighter uppercase italic">Dry & Cracked</p>
            </div>
          </div>
        </div>
      </div>

      {/* sisi kanan isinya kumpulan kartu buat analisa lebih dalem tah */}
      <div className="w-full lg:w-[400px] flex flex-col gap-8 pb-10">

        {/* grafik area buat liat polanya kayak gimana mah kieu */}
        <div className="bg-[#A7D17D] rounded-[40px] p-8 text-white relative overflow-hidden shadow-xl hover-lift stagger-1">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-xl font-bold tracking-tight">Analisis Kualitas</h4>
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Pola 1 Bulan Terakhir</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-2xl text-[10px] font-black flex items-center gap-2">
              Month <Sliders size={12} />
            </div>
          </div>

          <div className="h-40 -mx-8 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HISTORICAL_DATA}>
                <defs>
                  <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fff" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="tss" stroke="#fff" strokeWidth={3} fillOpacity={1} fill="url(#colorArea)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between text-[11px] font-black uppercase opacity-60">
            <span>mar</span><span>apr</span><span>mei</span><span className="text-white opacity-100 bg-black/30 px-3 py-0.5 rounded-full">jun</span><span>jul</span><span>aug</span><span>sep</span>
          </div>

          <div className="absolute top-[45%] right-10 bg-black text-[11px] font-black px-3 py-1.5 rounded-full flex items-center gap-2 shadow-2xl animate-bounce-slow">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span> 4%
          </div>
        </div>

        {/* detail lengkap isi situsnya ada di sini semua atuh */}
        <div className="bg-white/50 rounded-[40px] p-8 space-y-8 border border-white/60 shadow-sm relative group stagger-2">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-800 tracking-tight text-xl">Detail Situs</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Kondisi Real-Time</p>
            </div>
            <div className="bg-white p-3 rounded-full shadow-md cursor-pointer group-hover:translate-x-2 transition-all">
              <ChevronRight size={20} className="text-slate-800" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ParameterCard icon={Sun} label="Cahaya" value="Minimal" color="text-amber-500" delay="stagger-1" />
            <ParameterCard icon={Waves} label="Tanah" value="Kering" color="text-orange-600" delay="stagger-2" />
            <ParameterCard icon={Droplets} label="Lembab" value="70%" color="text-blue-500" delay="stagger-3" />
            <ParameterCard icon={Zap} label="Pupuk" value="Stabil" color="text-emerald-500" delay="stagger-4" />
          </div>
        </div>

        {/* ini buat monitoring batang biar lebih jelas kelihatannya mah */}
        <div className="glass-dark rounded-[40px] p-8 flex flex-col justify-between shadow-2xl h-64 stagger-3">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold tracking-tight text-xl">Situs Terpantau</h4>
              <p className="text-[10px] opacity-60 font-bold uppercase tracking-widest mt-1">Panduan Praktik Terbaik</p>
            </div>
            <div className="bg-emerald-500 p-4 rounded-full text-white shadow-xl cursor-pointer hover:rotate-[360deg] transition-all duration-700">
              <Play size={20} fill="currentColor" />
            </div>
          </div>

          <div className="flex items-end gap-2 h-20 pt-4">
            {[0.4, 0.7, 0.5, 0.3, 0.8, 0.6, 0.4, 1.0, 0.5, 0.3, 0.6, 0.8, 0.4, 0.7, 0.9, 0.3, 0.5, 0.7, 0.4, 0.8].map((h, i) => (
              <div key={i} className={`flex-1 rounded-full transform transition-all hover:scale-y-110 ${h > 0.8 ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]' : 'bg-white/20'}`} style={{ height: `${h * 100}%` }}></div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 opacity-60 text-[11px] font-black uppercase tracking-widest">
              <Sliders size={14} /> 1.0x
            </div>
            <span className="text-[11px] font-black opacity-60">05:34</span>
          </div>
        </div>

      </div>
    </div>
  );
};