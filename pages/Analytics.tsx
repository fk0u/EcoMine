// ini tempat buat mantau grafik-grafik tren kualitas air dari waktu ke waktu mah
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Area
} from 'recharts';
import { HISTORICAL_DATA } from '../constants';

// bungkus kartu buat naruh grafik biar kelihatannya rapih atuh
const AnalyticsCard = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-50 shadow-sm">
    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">{title}</h3>
    <div className="h-[300px] w-full">
      {children}
    </div>
  </div>
);

export const Analytics = () => {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Analitik & Tren</h2>
        <p className="text-slate-500 mt-1 text-sm font-medium">Analisis mendalam terhadap pola data lingkungan dan keseimbangan air.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* grafik buat bandingin TSS sama kekeruhan, pake dua sumbu biar enak liatnya tah */}
        <AnalyticsCard title="Korelasi TSS vs Kekeruhan">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={HISTORICAL_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '10px' }} />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }} />
              <Line yAxisId="left" type="monotone" dataKey="tss" name="TSS (mg/L)" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="turbidity" name="Kekeruhan (NTU)" stroke="#f59e0b" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </AnalyticsCard>

        <AnalyticsCard title="Stabilitas Tingkat pH">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={HISTORICAL_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
              <YAxis domain={[0, 14]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '10px' }} />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }} />
              <Area type="monotone" dataKey="ph" name="Rentang pH" fill="#dcfce7" stroke="none" />
              <Line type="monotone" dataKey="ph" name="Nilai pH" stroke="#10b981" strokeWidth={3} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </AnalyticsCard>

        <div className="lg:col-span-2">
          <AnalyticsCard title="Wawasan Keseimbangan Air (Inflow vs Outflow)">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HISTORICAL_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '10px' }} />
                <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }} />
                <Bar dataKey="tss" name="Masuk (m³/h)" fill="#334155" radius={[4, 4, 0, 0]} />
                <Bar dataKey="turbidity" name="Keluar (m³/h)" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </AnalyticsCard>
        </div>
      </div>
    </div>
  );
};