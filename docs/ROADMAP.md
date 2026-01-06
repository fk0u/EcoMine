# EcoMine – Roadmap Pengembangan

Roadmap ini menggambarkan tahapan pengembangan EcoMine dari versi hackathon hingga produk SaaS yang siap digunakan industri.

---

## Phase 0 – Hackathon MVP (ISMC XV)

**Tujuan:** Menunjukkan solusi yang fungsional dan relevan dengan _water management & recycling_.

Deliverables:

- Dashboard 1 site dengan:
  - 1–3 sensor air (pH, TSS).
  - Grafik time-series + status cards.
- Threshold alert sederhana.
- Tombol **Generate Report** → menghasilkan laporan PDF basic.
- Dataset simulasi yang realistis.

---

## Phase 1 – Post-Hackathon (MVP 1.0)

**Tujuan:** Bisa dipakai pilot di 1–2 tambang sebagai PoC.

Fokus:

- Multi-site support.
- Role-based access (admin, env engineer, viewer).
- Template laporan yang bisa dikonfigurasi per perusahaan.
- Perbaikan UX & reliability.

---

## Phase 2 – Integrasi Sensor & Analytics (MVP 1.1–2.0)

**Tujuan:** Menjadi platform utama lingkungan di site pilot.

Fokus:

- Ingestion service yang menerima data dari:
  - gateway IoT vendor sensor,
  - file CSV/historical import.
- Penambahan:
  - piezometer tailing dam (stabilitas),
  - flow meter/discharge volume.
- Analitik:
  - tren per musim,
  - _simple anomaly detection_ (ML ringan).

---

## Phase 3 – Water Reuse & Valorization Module

**Tujuan:** Mendukung _mine waste valorization_ & _circular economy_.

Fokus:

- Tracking volume air yang bisa direuse.
- Simulasi skenario reuse (berapa % pengurangan fresh water intake).
- Perhitungan dampak lingkungan & potensi penghematan biaya.

---

## Phase 4 – Integrasi Eksternal & Scale-Up

**Tujuan:** Menjadi solusi referensi industri di Indonesia.

Fokus:

- Potensi integrasi dengan:
  - platform pelaporan pemerintah (bila API tersedia),
  - sistem ERP/maintenance perusahaan.
- Multi-tenant architecture untuk skala ratusan site.
- SLA, monitoring, dan support level enterprise.

---

## Catatan

Timeline spesifik bisa disesuaikan dengan:
- hasil pilot,
- feedback perusahaan tambang,
- dan kesiapan tim/business development.
