# EcoMine 🌊  
Real-Time Environmental Intelligence for Mining Operations

EcoMine adalah platform berbasis web untuk memantau **kualitas air tambang secara real-time** dan menyusun **laporan kepatuhan lingkungan otomatis**.  
Project ini dikembangkan oleh tim **Debug Bumi** untuk menjawab kebutuhan nyata industri tambang Indonesia terhadap _smart & sustainable water management_.

> Fokus awal: integrasi data dari **sensor kualitas air** (pH, TSS/turbiditas, konduktivitas, DO, dll.) lalu menampilkannya di dashboard, memberi peringatan (alerts), dan menghasilkan laporan siap kirim ke regulator.

---

## ✨ Fitur Utama

- **Real-Time Water Monitoring**
  - Menampilkan data kualitas air per titik pemantauan dalam bentuk kartu dan grafik.
  - Mendukung beberapa parameter (pH, TSS/turbidity, DO, dll.).

- **Threshold Alert System**
  - Status warna (hijau/kuning/merah) untuk setiap titik pemantauan.
  - Daftar _recent alerts_ jika nilai melampaui ambang batas.

- **Auto-Compliance Reporting**
  - Tombol **"Generate Report"** untuk membuat laporan periodik (mis. harian/mingguan).
  - Laporan dalam format yang mudah diadaptasi menjadi dokumen resmi untuk DLH/ESDM.

- **Multi-Site & Multi-Sensor Ready (Roadmap)**
  - Desain arsitektur mendukung integrasi dari berbagai sensor (water quality, piezometer tailing, dsb.).
  - Ke depan dapat dikembangkan ke _water reuse analytics_ dan _tailings monitoring_.

---

## 🏗️ Arsitektur Singkat

Monolith web app dengan pemisahan frontend–backend:

- **Frontend**
  - React + TypeScript
  - Komponen utama: Dashboard, Alerts, Report, Settings

- **Backend**
  - Node.js + Express
  - PostgreSQL untuk penyimpanan time-series sensor
  - API REST untuk:
    - `GET /sites`
    - `GET /sites/:id/sensors`
    - `GET /sensors/:id/readings`
    - `POST /reports/generate`

- **Data Ingestion (MVP)**
  - Simulasi data sensor (script generator) dijalankan periodik.
  - Di tahap produksi → diganti dengan data dari _field devices_ (gateway IoT).

---

## 📂 Struktur Folder (Rencana)

```txt
.
├── README.md
├── docs
│   ├── ARCHITECTURE.md
│   ├── API_SPEC.md
│   ├── CONTRIBUTING.md
│   └── ROADMAP.md
├── backend
│   ├── src
│   │   ├── index.ts
│   │   ├── config/
│   │   ├── modules/
│   │   ├── routes/
│   │   └── utils/
│   └── prisma/ (atau migrations/)
├── frontend
│   ├── src
│   │   ├── App.tsx
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── services/
└── scripts
    └── generate_dummy_data.ts
```

---

## 🚀 Cara Menjalankan (Dev Mode)

> Catatan: sesuaikan dengan setup aktual nanti.

### 1. Clone repo

```bash
git clone https://github.com/<org-or-user>/ecomine.git
cd ecomine
```

### 2. Backend

```bash
cd backend
cp .env.example .env          # isi DB_URL, dll.
npm install
npm run migrate               # kalau pakai ORM
npm run dev
```

Backend akan berjalan di `http://localhost:4000` (misal).

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend akan berjalan di `http://localhost:5173` atau port Vite default.

---

## 👥 Tim Debug Bumi

- **Ghani** – Tech Lead & Solution Architect  
- **Yahya** – Project Manager & Business Lead  
- **Aby Danu** – Backend & Data/ML Engineer  
- **Ardelio** – Frontend & UX Lead   

---

## 🧭 Roadmap Singkat

Lihat berkas [`docs/ROADMAP.md`](docs/ROADMAP.md) untuk detail, tapi garis besarnya:

1. **MVP 1.0**
   - Dashboard 1 site, 1 jenis sensor (air quality).
   - Alerts + generate laporan PDF.

2. **MVP 1.1**
   - Multi-site support & role-based access.
   - Penyempurnaan template laporan.

3. **Phase 2**
   - Integrasi piezometer tailing.
   - Analitik tren & simple anomaly detection.

4. **Phase 3**
   - Water reuse & waste valorization module.
   - Potensi integrasi dengan sistem pelaporan pemerintah.

---

## 📄 Lisensi

Pilih dan isi nanti (misalnya MIT):

```text
MIT License – lihat LICENSE file.
```

---

## 🤝 Kontribusi

Silakan lihat [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) untuk panduan kontribusi.
