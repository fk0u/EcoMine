// ini macem-macem status buat monitoring titik pantau kita mah
export enum Status {
  Normal = 'Normal',
  Peringatan = 'Peringatan',
  Kritis = 'Kritis'
}

// nah ini interface buat nyimpen data hasil bacaan sensor di lapangan atuh
// isinya macem-macem parameter yang diukur cenah
export interface SensorReading {
  timestamp: string;
  ph: number; // kadar keasaman air, range 0-14
  tss: number; // total suspended solids dalam mg/L - debu halus sama partikel yang terlarut
  turbidity: number; // kekeruhan air dalam NTU - makin tinggi makin keruh
  flowRate: number; // debit aliran air dalam m3/jam
}

// titik monitoring teh kudu jelas identitasna atuh, biar gak pahili
// koordinat juga penting buat mapping lokasi sensorna mah
export interface MonitoringPoint {
  id: string;
  name: string;
  location: 'Hulu' | 'Tengah' | 'Hilir' | 'Kolam Pengendapan' | 'Saluran Pembuangan';
  status: Status;
  lastUpdate: string;
  readings: SensorReading;
  coordinates: { lat: number; lng: number }; // koordinat GPS buat peta
  history: { time: string; ph: number; tss: number; turbidity: number }[]; // data historis spesifik per titik
}

// kalo ada anomali di lapangan, sistem otomatis bakal ngirim alert kieu
// pastikan keparahan atau severity-nya kebaca jelas ya
export interface Alert {
  id: string;
  severity: 'rendah' | 'sedang' | 'tinggi';
  message: string;
  timestamp: string;
  location: string;
  acknowledged: boolean; // udah dibaca apa belum tah
}

// ini template buat bikin laporan, formatnya mah kumaha regulator atuh
// soalnya tiap instansi pasti beda-beda permintaannya mah
export interface ReportTemplate {
  id: string;
  name: string;
  frequency: 'Harian' | 'Mingguan' | 'Bulanan' | 'Triwulanan';
  regulator: string; // nama instansi yang minta laporan
}