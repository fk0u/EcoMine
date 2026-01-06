import { MonitoringPoint, Status, Alert, ReportTemplate } from './types';

// kumpulan titik monitoring yang lagi aktif pantau lahan mah
// ini masih data boongan buat demo, nanti aslinya mah nembak API atuh
export const MONITORING_POINTS: MonitoringPoint[] = [
  {
    id: 'MP-001',
    name: 'Kolam Pengendapan A - Inlet',
    location: 'Kolam Pengendapan',
    status: Status.Normal,
    lastUpdate: '10 menit yang lalu',
    readings: { timestamp: '2023-10-27T10:00:00Z', ph: 7.2, tss: 45, turbidity: 25, flowRate: 120 },
    coordinates: { lat: -0.5, lng: 117.15 }
  },
  {
    id: 'MP-002',
    name: 'Kolam Pengendapan A - Outlet',
    location: 'Saluran Pembuangan',
    status: Status.Peringatan, // agak ngeri nih TSS-nya mulai tinggi, pantau terus mah
    lastUpdate: '2 menit yang lalu',
    readings: { timestamp: '2023-10-27T10:08:00Z', ph: 6.4, tss: 180, turbidity: 95, flowRate: 115 },
    coordinates: { lat: -0.51, lng: 117.16 }
  },
  {
    id: 'MP-003',
    name: 'Kontrol Hulu Sungai',
    location: 'Hulu',
    status: Status.Normal, // air di hulu mah biasanya masih bening pisan atuh
    lastUpdate: '15 menit yang lalu',
    readings: { timestamp: '2023-10-27T09:55:00Z', ph: 7.0, tss: 20, turbidity: 10, flowRate: 500 },
    coordinates: { lat: -0.48, lng: 117.12 }
  },
  {
    id: 'MP-004',
    name: 'Kepatuhan Hilir Sungai',
    location: 'Hilir',
    status: Status.Normal,
    lastUpdate: '5 menit yang lalu',
    readings: { timestamp: '2023-10-27T10:05:00Z', ph: 6.9, tss: 35, turbidity: 18, flowRate: 550 },
    coordinates: { lat: -0.55, lng: 117.20 }
  },
  {
    id: 'MP-005',
    name: 'Jalur Dewatering Pit',
    location: 'Tengah',
    status: Status.Kritis, // aduh pH anjlok banget kieu, fix ada asam tambang masuk mah
    lastUpdate: 'Baru saja',
    readings: { timestamp: '2023-10-27T10:10:00Z', ph: 4.5, tss: 350, turbidity: 210, flowRate: 80 },
    coordinates: { lat: -0.49, lng: 117.14 }
  }
];

// list alert atau peringatan yang baru aja nongol cenah
// yang paling gres ditaruh di atas biar langsung kelihatan atuh
export const RECENT_ALERTS: Alert[] = [
  {
    id: 'ALT-1024',
    severity: 'tinggi',
    message: 'Drainase Asam Tambang terdeteksi di Pit Dewatering', // gawat pisan ieu mah, buru cek lapangan atuh
    timestamp: '10:42 AM',
    location: 'Jalur Dewatering Pit',
    acknowledged: false // belum di-acknowledge, kudu segera dicek
  },
  {
    id: 'ALT-1023',
    severity: 'sedang',
    message: 'TSS mendekati ambang batas (180 mg/L)',
    timestamp: '09:15 AM',
    location: 'Kolam Pengendapan A - Outlet',
    acknowledged: true // udah dicek sama operator
  },
  {
    id: 'ALT-1022',
    severity: 'rendah',
    message: 'Jadwal kalibrasi sensor', // maintenance rutin aja ieu mah
    timestamp: 'Kemarin',
    location: 'Kontrol Hulu Sungai',
    acknowledged: true
  }
];

// rekaman data historis buat liat trend naik turunnya mah
// datanya diambil per dua jam kieu biar keliatan grafiknya atuh
export const HISTORICAL_DATA = [
  { time: '06:00', ph: 7.1, tss: 40, turbidity: 20 },
  { time: '08:00', ph: 7.0, tss: 45, turbidity: 25 },
  { time: '10:00', ph: 6.8, tss: 120, turbidity: 80 }, // mulai naik nih di jam 10
  { time: '12:00', ph: 6.5, tss: 200, turbidity: 150 }, // puncak na jam 12 siang
  { time: '14:00', ph: 6.6, tss: 180, turbidity: 130 }, // mulai turun dikit
  { time: '16:00', ph: 6.9, tss: 90, turbidity: 60 },
  { time: '18:00', ph: 7.1, tss: 50, turbidity: 30 }, // sore udah normal lagi
];

// template laporan yang udah disiapin buat masing-masing instansi mah
// jadwal kirimnya beda-beda, ada yang harian sampai triwulanan kieu
export const REPORT_TEMPLATES: ReportTemplate[] = [
  { id: 'RPT-01', name: 'Laporan Pelaksanaan RKL-RPL', frequency: 'Triwulanan', regulator: 'Kementerian LHK' },
  { id: 'RPT-02', name: 'Log Kualitas Air Harian', frequency: 'Harian', regulator: 'Manajemen Internal' },
  { id: 'RPT-03', name: 'Laporan Kepatuhan Baku Mutu Air Limbah', frequency: 'Bulanan', regulator: 'Dinas Lingkungan Hidup' },
];