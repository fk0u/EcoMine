<div align="center">

# 🌊 EcoMine

### Real-Time Environmental Intelligence for Mining Operations

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791.svg)](https://www.postgresql.org/)
[![ISMC XV](https://img.shields.io/badge/ISMC-XV%202026-orange.svg)](https://ismc.id/)
[![Status](https://img.shields.io/badge/Status-MVP%20Development-yellow.svg)]()

**Platform Monitoring Kualitas Air Tambang Real-Time dan Pelaporan Kepatuhan Otomatis**

Dikembangkan oleh Tim **Debug Bumi** untuk Hackathon ISMC XV 2026  
*Water Management and Recycling Innovation in Mining Industry*

[🚀 Quick Start](#-quick-start) • [📖 Documentation](#-dokumentasi) • [🎯 Features](#-fitur-utama) • [🏗️ Architecture](#️-arsitektur) • [👥 Team](#-tim-debug-bumi)

</div>

---

## 📋 Table of Contents

- [Tentang EcoMine](#-tentang-ecomine)
- [Latar Belakang](#-latar-belakang)
- [Fitur Utama](#-fitur-utama)
- [Cara Kerja](#-cara-kerja)
- [Dampak & Manfaat](#-dampak--manfaat)
- [Arsitektur](#️-arsitektur)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Struktur Proyek](#-struktur-proyek)
- [Roadmap](#-roadmap)
- [Tim Debug Bumi](#-tim-debug-bumi)
- [Dokumentasi](#-dokumentasi)
- [Lisensi](#-lisensi)

---

## 🎯 Tentang EcoMine

**EcoMine** adalah platform berbasis web yang dirancang untuk membantu perusahaan tambang di Indonesia melakukan **pemantauan kualitas air secara real-time** sekaligus **menyusun laporan kepatuhan lingkungan secara otomatis**. 

Platform ini menjawab kebutuhan nyata industri tambang Indonesia terhadap sistem manajemen air yang cerdas, efisien, dan berkelanjutan (*smart & sustainable water management*).

### 🎓 Hackathon Context

| Kategori | Detail |
|----------|--------|
| **Event** | ISMC XV 2026 |
| **Theme** | Water Management and Recycling Innovation in Mining Industry |
| **Sub-Theme** | Water Management and Recycling Innovation in Mining Industry |
| **Work Title** | EcoMine: Platform Monitoring Kualitas Air Tambang Real-Time dan Pelaporan Kepatuhan Otomatis |

---

## 🌍 Latar Belakang

### Permasalahan di Industri Tambang Indonesia

Latar belakang pengembangan EcoMine adalah masih **dominannya pemantauan manual** di banyak operasi tambang, berupa:

- 📝 **Pengambilan sampel air berkala** dan pengujian laboratorium
- 📊 **Pelaporan menggunakan lembar kerja terpisah** (spreadsheet manual)
- ⏱️ **Proses memakan waktu** dan rentan kesalahan human error
- 🚨 **Kesulitan membuktikan kepatuhan** kepada regulator dalam waktu cepat

### Urgensi Solusi

Dalam konteks **pengawasan yang semakin ketat** dan **kasus penangguhan izin tambang** akibat:
- Kegagalan reklamasi lingkungan
- Pengelolaan limbah yang tidak memadai
- Keterlambatan atau ketidaksesuaian pelaporan

**EcoMine hadir sebagai solusi digital** untuk meningkatkan transparansi, akurasi, dan efisiensi dalam pengelolaan kualitas air tambang.

---

## ✨ Fitur Utama

<table>
<tr>
<td width="50%">

### 📊 Real-Time Water Monitoring
- Dashboard interaktif dengan visualisasi data real-time
- Grafik time-series untuk tren kualitas air
- Kartu status per titik pemantauan
- Parameter: **pH, TSS, Turbiditas, Konduktivitas, DO**
- Peta lokasi sensor dengan status visual

</td>
<td width="50%">

### 🚨 Threshold Alert System
- Indikator status baku mutu (🟢 Normal, 🟡 Warning, 🔴 Critical)
- Notifikasi real-time saat parameter melewati batas
- Daftar peringatan prioritas dengan timestamp
- Konfigurasi threshold per parameter
- Alert history & analytics

</td>
</tr>
<tr>
<td width="50%">

### 📄 Auto-Compliance Reporting
- Generator laporan periodik otomatis (harian/mingguan/bulanan)
- Format siap kirim ke DLH/ESDM/Regulator
- Statistik: Min, Max, Avg, Frekuensi pelanggaran
- Export ke PDF/Excel dengan template profesional
- Audit trail lengkap untuk compliance

</td>
<td width="50%">

### 🔮 Multi-Site & Multi-Sensor (Roadmap)
- Dukungan multiple site tambang dalam 1 platform
- Integrasi berbagai jenis sensor (water quality, piezometer, flow meter)
- Water reuse analytics & circular economy metrics
- Tailings monitoring & drone imagery integration
- Predictive analytics dengan machine learning

</td>
</tr>
</table>

---

## ⚙️ Cara Kerja

EcoMine mengimplementasikan alur kerja yang sistematis dan terintegrasi:

```mermaid
graph LR
    A[Sensor Kualitas Air] -->|Data Terukur| B[Modul Akuisisi Data]
    B -->|Validasi & Storage| C[Database Terpusat]
    C -->|Analitik| D[Modul Pemrosesan]
    D -->|Statistik Harian| E[Dashboard UI]
    E -->|Visualisasi| F[User Interface]
    F -->|Generate Report| G[Laporan PDF/Excel]
    D -->|Threshold Check| H[Alert System]
```

### Tahapan Implementasi:

1. **📡 Akuisisi Data**
   - Sensor kualitas air (pH, TSS, turbiditas, konduktivitas, DO) mengirimkan data terukur
   - Data ditransmisikan ke server melalui gateway IoT (HTTP/MQTT)
   - Frekuensi pengiriman: setiap 15 menit (dapat dikonfigurasi)

2. **✅ Validasi & Penyimpanan**
   - Sistem melakukan validasi sederhana (range check, data integrity)
   - Data disimpan ke basis data PostgreSQL terpusat dengan timestamp
   - Backup otomatis dan redundancy untuk data critical

3. **📈 Analitik & Pemrosesan**
   - Modul analitik menghitung nilai statistik harian:
     - Rata-rata (average)
     - Nilai maksimum dan minimum
     - Frekuensi pelampauan baku mutu
     - Tren perubahan per periode

4. **🖥️ Antarmuka Pengguna**
   - Dashboard menampilkan informasi real-time dalam bentuk:
     - Grafik time-series interaktif
     - Peta titik pemantauan dengan indikator status
     - Kartu ringkasan per parameter
     - Tabel alert dengan prioritas

5. **📑 Pelaporan Otomatis**
   - Pengguna dapat mengunduh laporan berbasis periode tertentu
   - Format terstruktur sesuai kebutuhan regulasi (DLH/ESDM)
   - Template dapat dikustomisasi per perusahaan
   - Sertifikasi digital dan watermark untuk autentikasi

### 🔄 Pengembangan Bertahap

Secara bertahap, platform dirancang untuk diperluas dengan:
- 🏗️ **Integrasi piezometer** bendungan tailing untuk monitoring stabilitas
- 🚁 **Citra drone** untuk pemantauan reklamasi visual
- 💧 **Water reuse analytics** untuk mendukung circular economy
- 🤖 **Machine learning** untuk anomaly detection dan predictive maintenance

---

## 🎯 Dampak & Manfaat

### Untuk Perusahaan Tambang

| Aspek | Manfaat |
|-------|---------|
| **⚡ Kecepatan** | Pemantauan real-time vs. manual sampling (2-3 hari) |
| **🎯 Akurasi** | Eliminasi human error dalam pencatatan dan perhitungan |
| **🚨 Peringatan Dini** | Alert otomatis mencegah pelanggaran baku mutu |
| **📊 Kepatuhan** | Bukti digital lengkap untuk audit regulator |
| **💰 Efisiensi** | Reduksi beban administratif tim lingkungan |
| **🔍 Transparansi** | Rekam jejak data yang rapi dan mudah diaudit |

### Untuk Industri & Lingkungan

- **🌱 Sustainability**: Mendorong praktik pertambangan yang lebih bertanggung jawab
- **💧 Water Management**: Optimasi penggunaan air dan mendukung reuse/recycling
- **📜 Compliance**: Memperkuat tata kelola pertambangan sesuai regulasi
- **🔬 Data-Driven**: Keputusan berbasis data untuk pengelolaan lingkungan
- **🌍 ESG Goals**: Kontribusi terhadap Environmental, Social, and Governance targets

> *Sejalan dengan subtema "Water Management and Recycling Innovation in Mining Industry" dan tuntutan menuju tata kelola pertambangan yang lebih transparan dan berkelanjutan di Indonesia.*

---

## 🏗️ Arsitektur

EcoMine menggunakan arsitektur **monolith web application** dengan pemisahan frontend-backend yang jelas, dirancang untuk skalabilitas dan maintainability.

### Diagram Arsitektur

```
┌─────────────────────────────────────────────────────────────────┐
│                       PRESENTATION LAYER                        │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │         React + TypeScript Frontend (SPA)                │  │
│  │  • Dashboard  • Alerts  • Reports  • Settings           │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │ REST API (JSON)
┌────────────────────────────▼────────────────────────────────────┐
│                      APPLICATION LAYER                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │           Node.js + Express Backend (API)                │  │
│  │  • Routes  • Controllers  • Services  • Middleware      │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                         DATA LAYER                              │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              PostgreSQL Database                         │  │
│  │  • Sites  • Sensors  • Readings  • Alerts  • Reports   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                             ▲
                             │ Data Ingestion
┌────────────────────────────┴────────────────────────────────────┐
│                      INTEGRATION LAYER                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │         IoT Gateway / Data Ingestion Service             │  │
│  │  (MVP: Dummy Data Generator | Prod: Real Sensors)       │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Komponen Utama

#### 🎨 Frontend (React + TypeScript)
- **Dashboard**: Visualisasi real-time kualitas air per site
- **Alerts**: Daftar peringatan dan notifikasi
- **Reports**: Generator dan viewer laporan compliance
- **Settings**: Konfigurasi threshold, user management (future)

#### 🔧 Backend (Node.js + Express)
```
/api
  ├── /sites              GET /sites
  ├── /sites/:id/sensors  GET /sites/:id/sensors
  ├── /sensors/:id        GET /sensors/:id/readings
  ├── /alerts             GET /alerts
  └── /reports            POST /reports/generate
```

#### 💾 Database (PostgreSQL)
```sql
sites            → Informasi lokasi tambang
sensors          → Konfigurasi sensor per site
sensor_readings  → Time-series data kualitas air
alerts           → Log peringatan dan notifikasi
reports          → Metadata laporan yang dihasilkan
```

#### 📡 Data Ingestion (MVP: Simulasi | Prod: IoT)
- **MVP**: Script generator untuk data dummy realistis
- **Production**: Gateway IoT (HTTP/MQTT) dari field devices

Lihat [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) untuk detail lengkap.

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

### Database & Storage
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TimescaleDB](https://img.shields.io/badge/TimescaleDB-FDB515?style=for-the-badge&logo=timescale&logoColor=black)

### DevOps & Tools
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

</div>

### Teknologi Tambahan (Roadmap)
- **IoT**: MQTT, LoRaWAN, NB-IoT untuk sensor connectivity
- **Analytics**: Python + Pandas untuk data processing
- **ML**: TensorFlow/Scikit-learn untuk anomaly detection
- **Reporting**: Puppeteer/PDFKit untuk PDF generation
- **Cloud**: Azure/AWS untuk production deployment

---

## 🚀 Quick Start

### Prerequisites

Pastikan Anda telah menginstall:
- **Node.js** v18+ ([Download](https://nodejs.org/))
- **PostgreSQL** v15+ ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/downloads))
- **npm** atau **yarn** package manager

### Installation

#### 1️⃣ Clone Repository

```bash
git clone https://github.com/debug-bumi/ecomine.git
cd ecomine
```

#### 2️⃣ Setup Backend

```bash
cd backend

# Copy environment variables
cp .env.example .env

# Edit .env file dengan konfigurasi database Anda
# DATABASE_URL="postgresql://user:password@localhost:5432/ecomine"
# PORT=4000
# NODE_ENV=development

# Install dependencies
npm install

# Run database migrations
npm run migrate

# Seed database dengan sample data (optional)
npm run seed

# Start development server
npm run dev
```

Backend akan berjalan di `http://localhost:4000`

#### 3️⃣ Setup Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env file
# VITE_API_BASE_URL=http://localhost:4000/api

# Start development server
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

#### 4️⃣ Generate Dummy Data (Optional)

```bash
cd ../scripts
npm install
node generate_dummy_data.ts
```

### 🐳 Docker Setup (Alternative)

```bash
# Build dan jalankan semua services
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop services
docker-compose down
```

### 🧪 Running Tests

```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd frontend
npm run test

# E2E tests
npm run test:e2e
```

---

## 📁 Struktur Proyek

```
ecomine/
├── 📄 README.md                    # Documentation utama
├── 📄 docker-compose.yml           # Docker orchestration
├── 📄 .gitignore
├── 📄 LICENSE
│
├── 📁 docs/                        # Dokumentasi lengkap
│   ├── ARCHITECTURE.md            # Desain arsitektur sistem
│   ├── API_SPEC.md                # Spesifikasi API endpoints
│   ├── CONTRIBUTING.md            # Panduan kontribusi
│   ├── ROADMAP.md                 # Roadmap pengembangan
│   └── DEPLOYMENT.md              # Panduan deployment
│
├── 📁 backend/                     # Node.js + Express Backend
│   ├── src/
│   │   ├── index.ts               # Entry point
│   │   ├── config/                # Konfigurasi (DB, env)
│   │   ├── modules/               # Business logic modules
│   │   │   ├── sites/
│   │   │   ├── sensors/
│   │   │   ├── readings/
│   │   │   ├── alerts/
│   │   │   └── reports/
│   │   ├── routes/                # API routes
│   │   ├── middleware/            # Express middleware
│   │   ├── utils/                 # Helper functions
│   │   └── types/                 # TypeScript types
│   ├── prisma/                    # Prisma ORM schema & migrations
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── tests/                     # Unit & integration tests
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── 📁 frontend/                    # React + TypeScript Frontend
│   ├── public/                    # Static assets
│   ├── src/
│   │   ├── App.tsx                # Main app component
│   │   ├── main.tsx               # Entry point
│   │   ├── components/            # Reusable components
│   │   │   ├── common/            # Button, Card, Modal, etc.
│   │   │   ├── layout/            # Header, Sidebar, Footer
│   │   │   ├── dashboard/         # Dashboard-specific
│   │   │   └── charts/            # Chart components
│   │   ├── pages/                 # Page components
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── SiteDetailPage.tsx
│   │   │   ├── AlertsPage.tsx
│   │   │   ├── ReportsPage.tsx
│   │   │   └── SettingsPage.tsx
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── services/              # API client services
│   │   │   └── api.ts
│   │   ├── store/                 # State management (Zustand/Redux)
│   │   ├── types/                 # TypeScript types
│   │   ├── utils/                 # Helper functions
│   │   └── styles/                # Global styles
│   ├── tests/                     # Component tests
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── .env.example
│
├── 📁 scripts/                     # Utility scripts
│   ├── generate_dummy_data.ts     # Generate sensor dummy data
│   ├── migrate_db.sh              # Database migration helper
│   └── deploy.sh                  # Deployment script
│
└── 📁 .github/                     # GitHub configurations
    ├── workflows/                 # CI/CD workflows
    │   ├── test.yml
    │   └── deploy.yml
    └── ISSUE_TEMPLATE/            # Issue templates
```

---

## 🗓️ Roadmap

### 🎯 Phase 0 – Hackathon MVP (ISMC XV 2026) ✅ *Current*

**Tujuan:** Demo solusi fungsional untuk kompetisi

<details>
<summary>📋 Deliverables</summary>

- ✅ Dashboard monitoring 1 site
  - 1-3 sensor air quality (pH, TSS)
  - Grafik time-series real-time
  - Status cards dengan indikator warna
- ✅ Threshold alert system sederhana
- ✅ Generate PDF report basic
- ✅ Dataset simulasi realistis
- ✅ Dokumentasi lengkap
- ✅ Pitch deck & demo video

**Timeline:** Januari 2026  
**Status:** 🟡 In Progress

</details>

---

### 🚀 Phase 1 – Post-Hackathon (MVP 1.0)

**Tujuan:** Pilot di 1-2 tambang sebagai Proof of Concept

<details>
<summary>📋 Fitur Utama</summary>

- 🔄 Multi-site support (kelola beberapa lokasi tambang)
- 👥 Role-based access control (Admin, Engineer, Viewer)
- 📊 Template laporan kustomisasi per perusahaan
- 🎨 Perbaikan UX/UI berdasarkan feedback
- 🔒 Autentikasi & authorization
- 📱 Responsive design untuk mobile/tablet
- ⚡ Performance optimization
- 🐛 Bug fixes & stability improvements

**Timeline:** Q2 2026 (April - Juni)  
**Status:** 📅 Planned

</details>

---

### 🔬 Phase 2 – Sensor Integration & Analytics (MVP 1.1-2.0)

**Tujuan:** Platform utama lingkungan di site pilot

<details>
<summary>📋 Fitur Utama</summary>

**Integrasi Sensor:**
- 🌐 Ingestion service untuk gateway IoT vendor
- 📤 Import data historis (CSV/Excel)
- 📡 Support multiple protocols (HTTP, MQTT, LoRaWAN)

**Ekspansi Monitoring:**
- 🏗️ Piezometer tailing dam (monitoring stabilitas)
- 💧 Flow meter untuk volume discharge
- 🌡️ Sensor tambahan (suhu, kedalaman, dll)

**Analytics:**
- 📈 Analisis tren per musim
- 🤖 Simple anomaly detection (ML)
- 📊 Predictive analytics untuk maintenance
- 📉 Statistical process control (SPC)

**Timeline:** Q3-Q4 2026 (Juli - Desember)  
**Status:** 📅 Planned

</details>

---

### ♻️ Phase 3 – Water Reuse & Valorization Module

**Tujuan:** Mendukung circular economy & waste valorization

<details>
<summary>📋 Fitur Utama</summary>

- 💧 Tracking volume air yang dapat direuse
- 🔄 Simulasi skenario water reuse
- 📊 Kalkulasi pengurangan fresh water intake (%)
- 💰 Perhitungan penghematan biaya operasional
- 🌱 Estimasi dampak lingkungan (carbon footprint)
- 📈 ROI calculator untuk investasi sistem reuse
- 🎯 Benchmark dengan best practices industri

**Timeline:** 2027  
**Status:** 📅 Planned

</details>

---

### 🌐 Phase 4 – External Integration & Scale-Up

**Tujuan:** Solusi referensi industri tambang Indonesia

<details>
<summary>📋 Fitur Utama</summary>

**Integrasi Eksternal:**
- 🏛️ API integration dengan sistem pelaporan pemerintah
- 🏢 Integrasi ERP perusahaan (SAP, Oracle)
- 🔧 Maintenance management system integration
- 📊 Business intelligence tools (Power BI, Tableau)

**Scale-Up:**
- 🏗️ Multi-tenant architecture (SaaS model)
- 🌍 Support ratusan site secara simultan
- ⚡ High availability & disaster recovery
- 📈 Enterprise SLA & dedicated support
- 🔐 Advanced security & compliance (ISO 27001)
- 📱 Mobile app (iOS & Android)

**Timeline:** 2028+  
**Status:** 📅 Vision

</details>

---

**Lihat detail lengkap di:** [`docs/ROADMAP.md`](docs/ROADMAP.md)

---

## 👥 Tim Debug Bumi

<table>
<tr>
<td align="center" width="20%">
<img src="https://via.placeholder.com/150?text=Ghani" width="100px;" style="border-radius: 50%;" alt="Ghani"/><br />
<b>Ghani</b><br />
<sub>Tech Lead & Solution Architect</sub><br />
<a href="https://github.com/ghani">💻</a>
</td>
<td align="center" width="20%">
<img src="https://via.placeholder.com/150?text=Yahya" width="100px;" style="border-radius: 50%;" alt="Yahya"/><br />
<b>Yahya</b><br />
<sub>Project Manager & Business Lead</sub><br />
<a href="https://github.com/yahya">📊</a>
</td>
<td align="center" width="20%">
<img src="https://via.placeholder.com/150?text=Aby+Danu" width="100px;" style="border-radius: 50%;" alt="Aby Danu"/><br />
<b>Aby Danu</b><br />
<sub>Backend & Data/ML Engineer</sub><br />
<a href="https://github.com/abydanu">⚙️</a>
</td>
<td align="center" width="20%">
<img src="https://via.placeholder.com/150?text=Ardelio" width="100px;" style="border-radius: 50%;" alt="Ardelio"/><br />
<b>Ardelio</b><br />
<sub>Frontend & UX Lead</sub><br />
<a href="https://github.com/ardelio">🎨</a>
</td>
<td align="center" width="20%">
<img src="https://via.placeholder.com/150?text=Gwen" width="100px;" style="border-radius: 50%;" alt="Gwen"/><br />
<b>Gwen</b><br />
<sub>UI/Frontend Support</sub><br />
<a href="https://github.com/gwen">🖌️</a>
</td>
</tr>
</table>

### 🤝 Peran & Tanggung Jawab

| Anggota | Peran | Tanggung Jawab Utama |
|---------|-------|---------------------|
| **Ghani** | Tech Lead & Solution Architect | Arsitektur sistem, technical decisions, code review, best practices |
| **Yahya** | Project Manager & Business Lead | Planning, koordinasi tim, stakeholder management, business strategy |
| **Aby Danu** | Backend & Data/ML Engineer | API development, database design, data processing, ML integration |
| **Ardelio** | Frontend & UX Lead | UI/UX design, frontend architecture, component development |
| **Gwen** | UI/Frontend Support | UI implementation, styling, frontend testing, responsive design |

---

## 📖 Dokumentasi

### 📚 Core Documentation

| Dokumen | Deskripsi |
|---------|-----------|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Desain arsitektur sistem lengkap |
| [API_SPEC.md](docs/API_SPEC.md) | Spesifikasi API endpoints dan contracts |
| [ROADMAP.md](docs/ROADMAP.md) | Roadmap pengembangan detail |
| [CONTRIBUTING.md](docs/CONTRIBUTING.md) | Panduan kontribusi dan development guidelines |

### 🔗 Useful Links

- 📺 [Demo Video](https://youtube.com/watch?v=demo) *(coming soon)*
- 🎤 [Pitch Deck](https://slides.com/ecomine-pitch) *(coming soon)*
- 🌐 [Live Demo](https://demo.ecomine.id) *(coming soon)*
- 📧 [Contact Us](mailto:contact@debugbumi.id)

### 🎓 Academic Resources

- 📄 [Research Paper: Water Quality Monitoring in Mining](docs/research/paper.pdf)
- 📊 [Case Study: Implementation at Site X](docs/case-studies/site-x.pdf)
- 📈 [Benchmark Report: Indonesian Mining Industry](docs/reports/benchmark-2026.pdf)

---

## 🐛 Bug Reports & Feature Requests

Temukan bug atau punya ide fitur baru? Silakan buat issue:

1. 🐛 [Report a Bug](https://github.com/debug-bumi/ecomine/issues/new?template=bug_report.md)
2. ✨ [Request a Feature](https://github.com/debug-bumi/ecomine/issues/new?template=feature_request.md)
3. ❓ [Ask a Question](https://github.com/debug-bumi/ecomine/discussions)

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

```
MIT License

Copyright (c) 2026 Debug Bumi Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- 🎓 **ISMC XV 2026** - Indonesia Student Mining Contest Committee
- 🏢 **Mining Industry Partners** - Untuk insights & feedback
- 🌐 **Open Source Community** - Dependencies & tools yang digunakan
- 👨‍🏫 **Academic Advisors** - Guidance & mentorship

---

## 📞 Contact & Support

<div align="center">

### 📧 Email
**contact@debugbumi.id**

### 💬 Social Media
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Debug%20Bumi-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/company/debug-bumi)
[![Instagram](https://img.shields.io/badge/Instagram-@debugbumi-E4405F?style=for-the-badge&logo=instagram)](https://instagram.com/debugbumi)
[![Twitter](https://img.shields.io/badge/Twitter-@debugbumi-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/debugbumi)

### 🌐 Website
**[www.ecomine.id](https://www.ecomine.id)** *(coming soon)*

---

**Made with ❤️ by Debug Bumi Team for ISMC XV 2026**

*Menuju Tambang Indonesia yang Lebih Berkelanjutan* 🌱

</div>