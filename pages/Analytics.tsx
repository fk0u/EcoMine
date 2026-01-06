// ini tempat buat mantau grafik-grafik tren kualitas air dari waktu ke waktu mah
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Area
} from 'recharts';
import { HISTORICAL_DATA } from '../constants';
import { TrendingUp, Activity, BarChart3, Info } from 'lucide-react';

// bungkus kartu buat naruh grafik biar kelihatannya rapih dan premium atuh
const AnalyticsCard = React.memo(({ title, icon: Icon, children, className = "" }: { title: string, icon: any, children?: React.ReactNode, className?: string }) => (
  <div className={`bg-white/50 backdrop-blur-md rounded-[40px] p-8 border border-white/60 shadow-sm relative overflow-hidden group ${className} gpu-accelerated`}>
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-50 text-emerald-600 group-hover:scale-110 transition-transform">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 tracking-tight smooth-render">{title}</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data Real-time</p>
        </div>
      </div>
      <button className="text-slate-300 hover:text-slate-600 transition-colors">
        <Info size={18} />
      </button>
    </div>
    <div className="h-[300px] w-full">
      {children}
    </div>
  </div>
));

export const Analytics = () => {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Bagian Header Analitik */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-none">
            Analitik & Tren
          </h1>
          <p className="text-slate-400 text-sm lg:text-base font-medium max-w-md">
            Analisis mendalam terhadap pola data lingkungan dan keseimbangan air secara otomatis.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white px-6 py-3 rounded-3xl shadow-xl flex items-center gap-3 cursor-pointer hover:bg-black transition-all">
            <span className="text-sm font-bold uppercase tracking-wider">Export PDF</span>
          </div>
        </div>
      </div>

      {/* Grid Utama Grafik */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Kolom Kiri: Korelasi Data */}
        <div className="lg:col-span-7">
          <AnalyticsCard title="Korelasi TSS vs Kekeruhan" icon={TrendingUp}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={HISTORICAL_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '10px', padding: '16px' }} />
                <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', paddingBottom: '20px' }} />
                <Line yAxisId="left" type="monotone" dataKey="tss" name="TSS (mg/L)" stroke="#10b981" strokeWidth={4} dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                <Line yAxisId="right" type="monotone" dataKey="turbidity" name="Kekeruhan (NTU)" stroke="#3b82f6" strokeWidth={4} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </AnalyticsCard>
        </div>

        {/* Kolom Kanan: Stabilitas pH */}
        <div className="lg:col-span-5">
          <AnalyticsCard title="Stabilitas pH" icon={Activity}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={HISTORICAL_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
                <YAxis domain={[0, 14]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', fontSize: '10px' }} />
                <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }} />
                <Area type="monotone" dataKey="ph" name="Rentang pH" fill="#dcfce7" stroke="none" />
                <Line type="monotone" dataKey="ph" name="Nilai pH" stroke="#047857" strokeWidth={4} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </AnalyticsCard>
        </div>

        {/* Bar Chart di Bagian Bawah */}
        <div className="lg:col-span-12">
          <AnalyticsCard title="Volume Air (Inflow vs Outflow)" icon={BarChart3}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HISTORICAL_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', fontSize: '10px' }} />
                <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }} />
                <Bar dataKey="tss" name="Masuk (m³/h)" fill="#1e293b" radius={[12, 12, 0, 0]} />
                <Bar dataKey="turbidity" name="Keluar (m³/h)" fill="#94a3b8" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </AnalyticsCard>
        </div>
      </div>
    </div>
  );
};