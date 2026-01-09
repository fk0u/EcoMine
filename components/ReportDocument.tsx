import React, { forwardRef } from 'react';
import { MONITORING_POINTS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ReportDocumentProps {
    reportType: string;
    date: string;
    points: typeof MONITORING_POINTS;
}

export const ReportDocument = forwardRef<HTMLDivElement, ReportDocumentProps>(({ reportType, date, points }, ref) => {
    // data ringkasan buat chart pie
    const statusCounts = [
        { name: 'Normal', value: points.filter(p => p.status === 'Normal').length, color: '#10b981' },
        { name: 'Peringatan', value: points.filter(p => p.status === 'Peringatan').length, color: '#f59e0b' },
        { name: 'Kritis', value: points.filter(p => p.status === 'Kritis').length, color: '#ef4444' },
    ];

    return (
        <div ref={ref} className="bg-white text-black p-12 mx-auto shadow-2xl print:shadow-none print:p-8" style={{ width: '210mm', minHeight: '297mm', position: 'relative' }}>
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <span className="text-[150px] font-black rotate-[-45deg] border-[20px] border-slate-900 px-20">ECOMINE</span>
            </div>

            {/* Kop Surat */}
            <div className="border-b-[3px] border-black pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-2xl">E</div>
                    <div>
                        <h1 className="text-2xl font-serif font-black uppercase tracking-tighter text-slate-900">PT. EcoMine Solusi Indonesia</h1>
                        <p className="text-[10px] font-serif italic text-slate-500">Environmental Telemetry & Compliance Systems</p>
                    </div>
                </div>
                <div className="text-right text-[9px] text-slate-500 font-mono">
                    <p>SCBD Office Tower, Lantai 42</p>
                    <p>Jakarta Selatan, 12190</p>
                    <p>www.ecomine.id | support@ecomine.id</p>
                </div>
            </div>

            {/* Judul & Nomor Dokumen */}
            <div className="text-center mb-8">
                <h2 className="text-lg font-bold uppercase underline tracking-widest leading-none mb-1">{reportType}</h2>
                <p className="text-[10px] font-mono">No: {Math.floor(Math.random() * 1000)}/RPT-ENV/EM/{new Date().getFullYear()}</p>
                <p className="text-[10px] font-mono italic">Tanggal Terbit: {date}</p>
            </div>

            {/* Pendahuluan */}
            <div className="text-[11px] leading-relaxed mb-6 font-serif">
                <p className="mb-3">Yth. Bagian Pengawasan Lingkungan,</p>
                <p>Bersama ini kami lampirkan ringkasan eksekutif hasil pemantauan kualitas air limbah tambang secara otomatis (real-time) yang terekam pada server EcoMine. Data ini merupakan representasi valid dari kondisi lapangan di situs operasional.</p>
            </div>

            {/* Visualisasi Ringkasan (Charts) - INI YANG BARU */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                    <h3 className="text-[10px] font-black uppercase mb-3 text-slate-600">Sebaran Status Situs</h3>
                    <div className="h-32 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={statusCounts} innerRadius={25} outerRadius={40} paddingAngle={5} dataKey="value">
                                    {statusCounts.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="text-[8px] space-y-1 ml-4 font-bold">
                            {statusCounts.map(s => (
                                <div key={s.name} className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }}></span>
                                    {s.name}: {s.value} Unit
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                    <h3 className="text-[10px] font-black uppercase mb-3 text-slate-600">Rata-rata pH Harian</h3>
                    <div className="h-32">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={points[0].history.slice(0, 5)}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="time" hide />
                                <YAxis hide domain={[0, 14]} />
                                <Area type="monotone" dataKey="ph" stroke="#0f172a" fill="#94a3b8" fillOpacity={0.2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Tabel Utama */}
            <table className="w-full border-collapse border border-slate-400 text-[10px] mb-8 font-serif">
                <thead>
                    <tr className="bg-slate-100 uppercase font-black tracking-widest text-[9px]">
                        <th className="border border-slate-400 p-2 text-center w-12">No</th>
                        <th className="border border-slate-400 p-2 text-left">Nama Titik Monitoring</th>
                        <th className="border border-slate-400 p-2 text-center">pH</th>
                        <th className="border border-slate-400 p-2 text-center">TSS (mg/L)</th>
                        <th className="border border-slate-400 p-2 text-left">Catatan</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map((point, i) => (
                        <tr key={point.id}>
                            <td className="border border-slate-400 p-2 text-center font-mono">{i + 1}</td>
                            <td className="border border-slate-400 p-2 font-bold">{point.name}</td>
                            <td className={`border border-slate-400 p-2 text-center font-black ${point.readings.ph < 6 || point.readings.ph > 9 ? 'bg-red-50 text-red-700' : ''}`}>{point.readings.ph}</td>
                            <td className={`border border-slate-400 p-2 text-center font-black ${point.readings.tss > 150 ? 'bg-orange-50 text-orange-700' : ''}`}>{point.readings.tss}</td>
                            <td className="border border-slate-400 p-2 text-[9px] italic">
                                {point.status === 'Normal' ? 'Kondisi stabil dan memenuhi baku mutu.' :
                                    point.status === 'Peringatan' ? 'Perlu pengawasan berkala pada filter outlet.' :
                                        'DIREKOMENDASIKAN TINDAKAN PRIORITAS SEGERA.'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Kesimpulan */}
            <div className="text-[10px] leading-relaxed mb-12 font-serif bg-slate-50 p-4 border-l-4 border-slate-900">
                <strong className="block mb-1 underline">Kesimpulan Teknis:</strong>
                <p>Secara keseluruhan, efisiensi sistem pengolahan air limbah mencapai <strong>84%</strong>. Ditemukan anomali pada <strong>{points.filter(p => p.status === 'Kritis').length} situs</strong> yang memerlukan investigasi lapangan dalam 24 jam ke depan. Dokumen ini dicetak secara otomatis dan memiliki kekuatan hukum yang setara dengan laporan manual resmi perusahaan.</p>
            </div>

            {/* Pengesahan / Tanda Tangan */}
            <div className="flex justify-between items-end mt-12 px-8">
                <div className="text-center relative">
                    {/* Mock QR Code for Digital Sign */}
                    <div className="w-16 h-16 border-2 border-slate-200 p-1 mb-2 mx-auto bg-white">
                        <div className="w-full h-full bg-slate-900 opacity-10 flex flex-wrap gap-1 p-1">
                            {Array.from({ length: 16 }).map((_, i) => <div key={i} className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`}></div>)}
                        </div>
                    </div>
                    <p className="text-[8px] font-mono text-slate-400">Verifikasi Digital OK</p>
                </div>

                <div className="text-center relative">
                    {/* Official Stamp Mock */}
                    <div className="absolute top-[-50px] right-[-30px] w-24 h-24 border-[4px] border-emerald-600/30 rounded-full flex items-center justify-center rotate-12 pointer-events-none select-none">
                        <div className="text-emerald-600/30 font-black text-[10px] uppercase text-center">
                            APPROVED<br />SISTEM VERIFIED<br />{new Date().getFullYear()}
                        </div>
                    </div>

                    <p className="mb-16 text-[10px]">Tanda Tangan Pengesahan,</p>
                    <p className="font-bold border-b border-black inline-block text-[11px]">Ir. Ardel Yo, M.Eng</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500">Direktur Teknis Lingkungan</p>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-10 left-12 right-12 flex justify-between items-center text-[8px] text-slate-400 font-mono border-t border-slate-100 pt-2">
                <span>EcoMine Digital Report Service &bull; GUID: {crypto.randomUUID().slice(0, 8).toUpperCase()}</span>
                <span>Halaman 1 / 1</span>
            </div>
        </div>
    );
});

ReportDocument.displayName = 'ReportDocument';
