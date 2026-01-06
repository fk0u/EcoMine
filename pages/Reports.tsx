import React, { useState, useRef } from 'react';
import { REPORT_TEMPLATES, MONITORING_POINTS } from '../constants';
import { FileText, Download, Calendar, CheckCircle, Clock, ChevronRight, Search, Loader2, X, Printer } from 'lucide-react';
import { useToast } from '../components/Toast';
import { ReportDocument } from '../components/ReportDocument';
import { useReactToPrint } from 'react-to-print';

export const Reports = () => {
  const { showToast } = useToast();
  const [generatingId, setGeneratingId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const reportRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: reportRef,
    documentTitle: `EcoMine-Report-${selectedTemplate.replace(/\s+/g, '-')}`,
    onAfterPrint: () => {
      showToast('Laporan berhasil dicetak / disimpan sebagai PDF.', 'success');
      setShowPreview(false);
    }
  });

  // simulasi bikin laporan baru pake loading fake
  const handleGenerateReport = (templateId: string, templateName: string) => {
    setGeneratingId(templateId);

    // simulasi proses generate yang agak lama dikit
    setTimeout(() => {
      setGeneratingId(null);
      setSelectedTemplate(templateName);
      setShowPreview(true);
      showToast(`Laporan ${templateName} berhasil dibuat! Silakan preview.`, 'success');
    }, 1500);
  };

  const handleDownload = (fileName: string) => {
    showToast(`Mengunduh dokumen: ${fileName}`, 'info');
    setTimeout(() => {
      showToast('Dokumen berhasil diunduh.', 'success');
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-8 pb-10 relative">
      {/* Modal Preview Laporan Resmi */}
      {showPreview && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-100 w-full max-w-4xl h-[90vh] rounded-[30px] flex flex-col overflow-hidden shadow-2xl">
            <div className="bg-white p-6 border-b border-slate-200 flex justify-between items-center shrink-0">
              <div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Pratinjau Dokumen</h3>
                <p className="text-xs text-slate-500 font-bold">Mode Cetak A4 &bull; {selectedTemplate}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handlePrint()}
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-colors"
                >
                  <Printer size={16} /> Cetak / Simpan PDF
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="bg-slate-200 text-slate-600 p-2 rounded-xl hover:bg-slate-300 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 bg-slate-500/10 custom-scrollbar flex justify-center">
              <ReportDocument
                ref={reportRef}
                reportType={selectedTemplate}
                date={new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                points={MONITORING_POINTS}
              />
            </div>
          </div>
        </div>
      )}

      {/* Header Laporan */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-none">
            Laporan Kepatuhan
          </h1>
          <p className="text-slate-400 text-sm lg:text-base font-medium max-w-md">
            Hasilkan dan ekspor dokumen regulasi secara otomatis untuk transparansi lingkungan.
          </p>
        </div>
        <button
          onClick={() => showToast('Membuka wizard pembuatan laporan...', 'info')}
          className="bg-slate-900 group hover:bg-black text-white px-8 py-4 rounded-[30px] text-[11px] font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-slate-200"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
            <FileText size={16} />
          </div>
          Buat Laporan Baru
        </button>
      </div>

      {/* Grid Template Laporan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REPORT_TEMPLATES.map((template) => (
          <div key={template.id} className="bg-white/50 backdrop-blur-md p-8 rounded-[45px] border border-white/60 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all group relative overflow-hidden flex flex-col justify-between">
            {/* Dekorasi Ikon Besar di Belakang */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <FileText size={160} className="text-slate-900" />
            </div>

            <div className="relative">
              <div className="flex justify-between items-start mb-8">
                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${template.frequency === 'Harian' ? 'bg-blue-50 text-blue-600' :
                  template.frequency === 'Bulanan' ? 'bg-emerald-50 text-emerald-600' :
                    'bg-amber-50 text-amber-600'
                  }`}>
                  {template.frequency}
                </span>
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={18} className="text-slate-400" />
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-800 mb-2 leading-none uppercase tracking-tighter group-hover:text-emerald-700 transition-colors">{template.name}</h3>
              <p className="text-[10px] text-slate-400 mb-8 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span> Target: {template.regulator}
              </p>
            </div>

            <div className="relative flex items-center justify-between pt-8 border-t border-white/60">
              <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Generate Terakhir</p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Clock size={12} className="text-emerald-500" /> 2 hari yang lalu
                </div>
              </div>
              <button
                onClick={() => handleGenerateReport(template.id, template.name)}
                disabled={generatingId === template.id}
                className="bg-white p-4 rounded-full shadow-md text-slate-400 hover:text-emerald-600 hover:scale-110 transition-all border border-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {generatingId === template.id ? <Loader2 size={20} className="animate-spin text-emerald-500" /> : <Printer size={20} />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tabel Laporan Terbaru */}
      <div className="bg-white/40 border border-white/60 rounded-[50px] mt-8 overflow-hidden backdrop-blur-md">
        <div className="p-10 border-b border-white/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h3 className="text-xl font-black text-slate-800 tracking-tighter uppercase">Riwayat Dokumen</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Laporan yang baru saja dihasilkan sistem</p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="bg-white/60 px-5 py-2.5 rounded-2xl flex items-center gap-3 flex-1 sm:w-64 border border-white">
              <Search size={16} className="text-slate-400" />
              <input type="text" placeholder="Cari laporan..." className="bg-transparent border-none outline-none text-xs font-bold text-slate-600 placeholder:text-slate-300 w-full" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left">
            <thead className="bg-slate-50/30 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-10 py-6">Nama File</th>
                <th className="px-10 py-6">Dibuat Oleh</th>
                <th className="px-10 py-6">Tanggal Terbit</th>
                <th className="px-10 py-6">Status Validasi</th>
                <th className="px-10 py-6">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/40 text-xs font-bold text-slate-700">
              {[
                { name: 'RKL-RPL_Triwulan-3_2023.pdf', user: 'Sistem Otomatis', date: '15 Okt 2023', status: 'Valid' },
                { name: 'LAPORAN_MINGGUAN_AIR_SITUS_B.pdf', user: 'Admin Lapangan', date: '12 Okt 2023', status: 'Valid' },
                { name: 'DOKUMEN_AMDALT_2023_REVISI.pdf', user: 'Kepala Teknik', date: '10 Okt 2023', status: 'Pending' },
              ].map((doc, i) => (
                <tr key={i} className="hover:bg-white/40 transition-colors group">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-900 text-white p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                        <FileText size={16} />
                      </div>
                      <span className="uppercase tracking-tighter group-hover:text-emerald-700 transition-colors font-black">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6 uppercase text-[10px] tracking-widest text-slate-400">{doc.user}</td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-emerald-500" /> {doc.date}
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${doc.status === 'Valid' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                      }`}>
                      <CheckCircle size={10} /> {doc.status === 'Valid' ? 'Terverifikasi' : 'Menunggu'}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <button
                      onClick={() => handleDownload(doc.name)}
                      className="bg-white border border-slate-100 px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:shadow-md transition-all"
                    >
                      Unduh
                    </button>
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