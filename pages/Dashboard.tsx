import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { HISTORICAL_DATA, MONITORING_POINTS } from '../constants';
import { Droplets, Wind, Play, Sliders, TrendingUp, Sun, Waves, Zap, ChevronRight } from 'lucide-react';

// komponen kartu kecil biar gampang liat parameter lingkungan kayak cahaya atau tanah kieu
const ParameterCard = React.memo(({ icon: Icon, label, value, color, delay }: { icon: any, label: string, value: string, color: string, delay: string }) => (
  <div className={`bg-white/80 p-4 rounded-3xl flex items-center gap-4 border border-white/50 shadow-sm hover-lift cursor-pointer ${delay} will-change-transform`}>
    <div className={`p-3 rounded-2xl ${color} bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
      <Icon size={18} className={color} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-xs font-bold text-slate-800">{value}</p>
    </div>
  </div>
));

export const Dashboard = () => {
  const navigate = useNavigate();
  // kita tunjukin data dari titik monitoring yang pertama aja buat visual utama mah
  const currentPoint = MONITORING_POINTS[0];

  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-none">
            {currentPoint.name}
          </h1>
          <p className="text-slate-400 text-sm lg:text-base font-medium max-w-md">
            Situs pemantauan ekosistem pertambangan aktif. Daun hijau, subur, dan sehat.
          </p>
        </div>
        <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-3xl border border-white/60 shadow-sm flex items-center gap-3">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Live Monitoring</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column: Metrics & Detail */}
        <div className="lg:col-span-4 space-y-8">
          {/* Detailed Stats */}
          <div className="bg-white/50 rounded-[40px] p-8 space-y-8 border border-white/60 shadow-sm relative group overflow-hidden">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-slate-800 tracking-tight text-xl">Kondisi Situs</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time parameters</p>
              </div>
              <div className="bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-slate-50 transition-colors">
                <Sliders size={18} className="text-slate-800" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ParameterCard icon={Sun} label="Cahaya" value="Minimal" color="text-amber-500" delay="stagger-1" />
              <ParameterCard icon={Waves} label="Tanah" value="Kering" color="text-orange-600" delay="stagger-2" />
              <ParameterCard icon={Droplets} label="Lembab" value="70%" color="text-blue-500" delay="stagger-3" />
              <ParameterCard icon={Zap} label="Pupuk" value="Stabil" color="text-emerald-500" delay="stagger-4" />
            </div>
          </div>

          {/* pH Highlight */}
          <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl h-64 group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-2">Acidity Level</p>
                <h4 className="text-3xl font-black tracking-tighter">Current pH</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-black text-white leading-none">{currentPoint.readings.ph}</span>
                <span className="text-emerald-400 font-bold text-lg">Stable</span>
              </div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-colors duration-700"></div>
          </div>
        </div>

        {/* Center Column: Visual Highlight */}
        <div className="lg:col-span-5 h-[400px] lg:h-auto relative">
          <div className="absolute inset-0 bg-white/30 rounded-[50px] border border-white/50 overflow-hidden shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=1200"
              alt="Nature Subject"
              className="w-full h-full object-cover scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>

          {/* Zoom Circle / Detail View */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-[8px] border-white shadow-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80&w=800"
                alt="Focus Detail"
                className="w-full h-full object-cover scale-[1.7] group-hover:scale-[2] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-emerald-600/10 backdrop-blur-[1px]"></div>
            </div>
          </div>

          {/* Float Labels */}
          <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-white shadow-xl stagger-1 animate-float">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Chlorophyll B</p>
            <p className="text-xl font-black text-slate-800 tracking-tighter">0.738 <span className="text-emerald-500 text-xs text-[10px]">+2%</span></p>
          </div>
        </div>

        {/* Right Column: Analytics & Quick Stats */}
        <div className="lg:col-span-3 space-y-8">
          {/* Line Chart Card */}
          <div className="bg-[#B5E48C] rounded-[40px] p-8 text-[#1E3A1A] relative overflow-hidden shadow-xl hover-lift">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold tracking-tight">Trend Kualitas</h4>
              <div className="bg-white/30 backdrop-blur-md p-2 rounded-xl">
                <TrendingUp size={16} />
              </div>
            </div>

            <div className="h-32 -mx-4">
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

            <p className="text-[10px] font-black uppercase text-[#1E3A1A]/60 mt-4 tracking-widest text-center">Last 30 Days Analysis</p>
          </div>

          {/* Activity/Bar Chart Card */}
          <div className="bg-white/50 rounded-[40px] p-8 border border-white/60 shadow-sm flex flex-col justify-between h-64">
            <div className="flex justify-between items-center">
              <h4 className="font-bold tracking-tight text-lg text-slate-800">Situs Aktif</h4>
              <div className="bg-emerald-500 p-3 rounded-full text-white shadow-lg cursor-pointer hover:bg-emerald-600 transition-colors">
                <Zap size={16} fill="white" />
              </div>
            </div>

            <div className="flex items-end gap-1.5 h-24 pt-4">
              {[0.4, 0.7, 0.5, 0.3, 0.8, 0.6, 0.4, 1.0, 0.5, 0.3, 0.6, 0.8, 0.4, 0.7, 0.9].map((h, i) => (
                <div key={i} className={`flex-1 rounded-full transition-all hover:scale-y-110 ${h > 0.8 ? 'bg-emerald-500' : 'bg-slate-200'}`} style={{ height: `${h * 100}%` }}></div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance</span>
              <span className="text-sm font-bold text-emerald-600">88%</span>
            </div>
          </div>

          {/* Action Button */}
          <div
            onClick={() => navigate('/reports')}
            className="bg-emerald-600 rounded-[35px] p-6 text-white flex items-center justify-between group cursor-pointer hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200/50"
          >
            <span className="font-bold tracking-tight">Buka Laporan Penuh</span>
            <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};