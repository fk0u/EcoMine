# EcoMine – Arsitektur Sistem

Dokumen ini menjelaskan rancangan arsitektur EcoMine pada level tinggi dan komponen-komponen utamanya.

---

## 1. Tujuan Arsitektur

- Mendukung **real-time water quality monitoring** untuk beberapa titik pemantauan.
- Menyediakan **API yang bersih** untuk frontend dan integrasi perangkat sensor.
- Mudah dikembangkan ke:
  - multi-site,
  - multi-sensor,
  - analitik lanjutan,
  - dan integrasi eksternal.

---

## 2. Gambaran Umum

EcoMine menggunakan arsitektur web app klasik:

- **Client (Frontend)** – SPA React yang memanggil REST API.
- **Server (Backend)** – Node.js/Express (atau framework sejenis).
- **Database** – PostgreSQL sebagai time-series + relational store.

Diagram tekstual:

```txt
[Sensor Air] --(HTTP/MQTT)--> [Ingestion Service] --(DB Write)--> [PostgreSQL]
                                                             |
                                                           [API Server] --(JSON)--> [React Frontend]
```

---

## 3. Komponen

### 3.1 Frontend (React)

Tanggung jawab:

- Menampilkan dashboard:
  - Cards ringkasan per site.
  - Grafik time-series per sensor.
  - Tabel alerts.
- Form untuk:
  - pengaturan threshold per parameter,
  - pemilihan periode laporan.
- Memicu `Generate Report` dan menampilkan statusnya.

Struktur (rencana):

```txt
frontend/src
├── pages/
│   ├── DashboardPage.tsx
│   ├── SiteDetailPage.tsx
│   └── ReportsPage.tsx
├── components/
│   ├── SensorCard.tsx
│   ├── AlertList.tsx
│   ├── WaterChart.tsx
│   └── ReportForm.tsx
└── services/
    └── api.ts
```

---

### 3.2 Backend (Node.js + Express)

Tanggung jawab:

- Menyediakan endpoint untuk:
  - daftar site (`GET /sites`),
  - daftar sensor per site (`GET /sites/:id/sensors`),
  - data pembacaan (`GET /sensors/:id/readings?from=&to=`),
  - pembuatan laporan (`POST /reports/generate`).
- Menyimpan data pembacaan sensor secara efisien.
- Mengelola _business logic_ untuk threshold & alert.

Contoh skema awal (pseudo):

```sql
TABLE sites (
  id UUID PK,
  name TEXT,
  location TEXT,
  created_at TIMESTAMP
);

TABLE sensors (
  id UUID PK,
  site_id UUID FK -> sites,
  name TEXT,
  type TEXT,          -- e.g. "pH", "TSS"
  unit TEXT,
  threshold_low NUMERIC,
  threshold_high NUMERIC
);

TABLE sensor_readings (
  id BIGSERIAL PK,
  sensor_id UUID FK -> sensors,
  value NUMERIC,
  recorded_at TIMESTAMP
);

TABLE alerts (
  id BIGSERIAL PK,
  sensor_id UUID FK -> sensors,
  level TEXT,         -- "warning" / "critical"
  message TEXT,
  triggered_at TIMESTAMP
);
```

---

### 3.3 Data Ingestion

Untuk MVP:

- Script `scripts/generate_dummy_data.ts`:
  - membuat data sensor tiap X menit,
  - menulis ke tabel `sensor_readings`.

Ke depan:

- Dapat diganti dengan:
  - microservice kecil yang menerima data dari gateway IoT (HTTP/MQTT),
  - atau integrasi langsung dengan platform IoT vendor.

---

### 3.4 Reporting Engine

- Mengambil data dari `sensor_readings` untuk periode tertentu.
- Menghitung:
  - min, max, average per parameter,
  - jumlah pelanggaran threshold.
- Menghasilkan:
  - JSON summary, lalu di-render ke PDF (pakai library seperti `pdfkit`/`puppeteer`).
- Template laporan dapat diubah per perusahaan atau per regulator.

---

## 4. Non-Functional

- **Scalability**: dapat ditingkatkan dengan memisah ingestion–API–reporting bila beban naik.
- **Security**: konfigurasi `.env`, koneksi DB pakai SSL (production), auth di API (phase berikutnya).
- **Observability**: logging terstruktur (winston/pino), healthcheck endpoint.

---

## 5. Roadmap Arsitektur

1. v1 – Monolith sederhana, 1 DB, 1 app server.
2. v2 – Pisahkan ingestion service jika mulai membaca dari banyak sensor.
3. v3 – Tambah service analytics & ML untuk anomaly detection.
