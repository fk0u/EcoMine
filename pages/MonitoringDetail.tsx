// halaman detail buat satu titik monitoring spesifik mah
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MONITORING_POINTS } from '../constants';
import { StatusBadge } from '../components/StatusBadge';
import { ArrowLeft, Activity, Droplets, Thermometer, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

export const MonitoringDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // cari data titik monitoring berdasarkan ID dari URL
    const point = MONITORING_POINTS.find(p => p.name === id || p.id === id); // fallback name for easier linking if needed

    if (!point) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <h2 className="text-2xl font-black text-slate-800">Situs Tidak Ditemukan</h2>
                <p className="text-slate-500">Maaf, data monitoring untuk ID tersebut tidak tersedia.</p>
                <button onClick={() => navigate('/monitoring')} className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold">
                    Kembali ke Daftar
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 pb-10">
            {/* Header & Navigasi Balik */}
            <div className="flex items-start gap-4">
                <button
                    onClick={() => navigate('/monitoring')}
                    className="p-3 bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl hover:bg-white transition-all hover:scale-105 group"
                >
                    <ArrowLeft size={24} className="text-slate-600 group-hover:text-slate-900" />
                </button>
                <div className="space-y-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl lg:text-5xl font-black text-slate-800 tracking-tighter leading-none">
                            {point.name}
                        </h1>
                        <StatusBadge status={point.status} />
                    </div>
                    <p className="text-slate-400 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                        {point.location} &bull; ID: {point.id} &bull; Update: {point.lastUpdate}
                    </p>
                </div>
            </div>

            {/* Ringkasan Status Utama */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/40 backdrop-blur-md p-6 rounded-[35px] border border-white/60 flex items-center justify-between group hover:bg-white hover:shadow-xl transition-all">
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">pH Level</p>
                        <p className={`text-4xl font-black ${point.readings.ph < 6 || point.readings.ph > 9 ? 'text-rose-500' : 'text-slate-800'}`}>
                            {point.readings.ph}
                        </p>
                        <p className="text-[10px] bg-slate-100 inline-block px-2 py-1 rounded-md mt-2 font-bold text-slate-500">Normal: 6-9</p>
                    </div>
                    <div className={`p-4 rounded-3xl ${point.readings.ph < 6 || point.readings.ph > 9 ? 'bg-rose-100 text-rose-500' : 'bg-emerald-100 text-emerald-600'}`}>
                        <Activity size={32} />
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-md p-6 rounded-[35px] border border-white/60 flex items-center justify-between group hover:bg-white hover:shadow-xl transition-all">
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">TSS (mg/L)</p>
                        <p className={`text-4xl font-black ${point.readings.tss > 150 ? 'text-amber-500' : 'text-slate-800'}`}>
                            {point.readings.tss}
                        </p>
                        <p className="text-[10px] bg-slate-100 inline-block px-2 py-1 rounded-md mt-2 font-bold text-slate-500">Ambang: 200</p>
                    </div>
                    <div className={`p-4 rounded-3xl ${point.readings.tss > 150 ? 'bg-amber-100 text-amber-500' : 'bg-blue-100 text-blue-600'}`}>
                        <Droplets size={32} />
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-md p-6 rounded-[35px] border border-white/60 flex items-center justify-between group hover:bg-white hover:shadow-xl transition-all">
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Kekeruhan (NTU)</p>
                        <p className="text-4xl font-black text-slate-800">
                            {point.readings.turbidity}
                        </p>
                        <p className="text-[10px] bg-slate-100 inline-block px-2 py-1 rounded-md mt-2 font-bold text-slate-500">Stabil</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-indigo-100 text-indigo-600">
                        <Thermometer size={32} />
                    </div>
                </div>
            </div>

            {/* Grafik Historis & Detail Operasional */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Grafik Utama */}
                <div className="lg:col-span-2 bg-white/50 backdrop-blur-md p-8 rounded-[45px] border border-white/60 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-slate-800">Tren Kualitas Air (24 Jam)</h3>
                        <select className="bg-white border border-slate-200 text-xs font-bold px-4 py-2 rounded-xl outline-none">
                            <option>pH Level</option>
                            <option>TSS</option>
                            <option>Turbidity</option>
                        </select>
                    </div>

                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={point.history}>
                                <defs>
                                    <linearGradient id="colorPh" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorTss" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                                />
                                <Legend />
                                <Area type="monotone" dataKey="ph" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorPh)" name="pH Level" />
                                <Area type="monotone" dataKey="tss" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorTss)" name="TSS (mg/L)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Log Aktivitas & Maintenance */}
                <div className="bg-slate-900 text-white p-8 rounded-[45px] flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] -mr-16 -mt-16"></div>

                    <h3 className="text-xl font-black mb-6 relative z-10">Log Aktivitas</h3>

                    <div className="space-y-6 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <CheckCircle size={16} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold">Pemeriksaan Rutin Sensor</p>
                                <p className="text-xs text-slate-400 mt-1">Petugas: Budi Santoso &bull; 08:00 AM</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                                    <AlertTriangle size={16} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold">Alert: Lonjakan TSS</p>
                                <p className="text-xs text-slate-400 mt-1">Sistem Otomatis &bull; 10:45 AM</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Clock size={16} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold">Kalibrasi Mingguan</p>
                                <p className="text-xs text-slate-400 mt-1">Terjadwal: Besok, 09:00 AM</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-8 relative z-10">
                        <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-emerald-900/50">
                            Jadwalkan Maintenance
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
