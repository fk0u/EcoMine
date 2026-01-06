// komponen toast notifikasi biar user tau kalo ada aksi yang berhasil atau gagal
// pake context biar bisa dipanggil dari mana aja di aplikasi
import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    // fungsi buat nambahin toast baru ke antrian
    const showToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // otomatis ilangin toast setelah 3 detik
        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Wadah Toast - Fixed position */}
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`min-w-[300px] bg-white rounded-2xl p-4 shadow-2xl border flex items-start gap-3 animate-slide-up transform transition-all hover:scale-105 cursor-pointer
              ${toast.type === 'success' ? 'border-emerald-100' :
                                toast.type === 'error' ? 'border-rose-100' :
                                    'border-blue-100'
                            }`}
                        onClick={() => removeToast(toast.id)}
                    >
                        {/* Ikon Statis Berdasarkan Tipe */}
                        <div className={`p-2 rounded-full shrink-0
              ${toast.type === 'success' ? 'bg-emerald-50 text-emerald-500' :
                                toast.type === 'error' ? 'bg-rose-50 text-rose-500' :
                                    'bg-blue-50 text-blue-500'
                            }`}>
                            {toast.type === 'success' && <CheckCircle size={20} />}
                            {toast.type === 'error' && <XCircle size={20} />}
                            {toast.type === 'info' && <Info size={20} />}
                        </div>

                        <div className="flex-1 pt-1">
                            <h5 className={`text-sm font-black uppercase tracking-wider mb-1
                ${toast.type === 'success' ? 'text-emerald-900' :
                                    toast.type === 'error' ? 'text-rose-900' :
                                        'text-blue-900'
                                }`}>
                                {toast.type === 'success' ? 'Berhasil' :
                                    toast.type === 'error' ? 'Gagal' : 'Info'}
                            </h5>
                            <p className="text-xs font-bold text-slate-500 leading-relaxed">{toast.message}</p>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                removeToast(toast.id);
                            }}
                            className="text-slate-300 hover:text-slate-500 transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

// hook kustom biar gampang manggil toast-nya
export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
