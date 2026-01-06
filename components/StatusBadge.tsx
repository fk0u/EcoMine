import React from 'react';
import { Status } from '../types';

// komponen untuk menampilkan badge status (normal, peringatan, kritis)
// warnanya otomatis menyesuaikan dengan status yang digunakan yeuh
export const StatusBadge = ({ status }: { status: Status }) => {
  // ieu styling untuk background dan warna teks na
  const styles = {
    [Status.Normal]: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    [Status.Peringatan]: 'bg-amber-100 text-amber-700 border-amber-200',
    [Status.Kritis]: 'bg-rose-100 text-rose-700 border-rose-200',
  };

  // styling untuk indikator titik (dot), kecil bulat di sebelah kiri tah
  const dotStyles = {
    [Status.Normal]: 'bg-emerald-500',
    [Status.Peringatan]: 'bg-amber-500',
    [Status.Kritis]: 'bg-rose-500',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
      {status}
    </span>
  );
};