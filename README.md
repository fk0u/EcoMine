# EcoMine - Sistem Pemantauan Lingkungan Tambang

nah ini aplikasi buat ngawasin kualitas air jeung kondisi lingkungan di area pertambangan atuh.

## Fitur Utama Mah

- **Dashboard Real-time** - pantau kondisi lingkungan langsung atuh
- **Titik Monitoring** - liat semua sensor yang dipasang di lapangan tah
- **Analitik** - grafik jeung statistik kualitas air
- **Laporan** - bikin laporan otomatis buat regulator mah gampang
- **Pengaturan** - atur batas peringatan sama notifikasi kieu kieu kieu

## Teknologi Nu Dipake

- React 19 + TypeScript biar mantap atuh
- Vite buat build tool (cepet pisan yeuh)
- Recharts buat urusan grafik mah
- Lucide-React buat icon-icon lucu
- React-Router buat pindah-pindah halaman atuh

## cara jalanin

```bash
# install dulu depedensina ya
npm install

# jalanin development server
npm run dev

# build production
npm run build
```

## Struktur Proyek Mah

```
ecomine/
├── components/     # komponen UI nu bisa dipake deui
├── pages/          # halaman-halaman utama
├── types.ts        # definisi tipe typescript
├── constants.ts    # data konstanta asli tapi palsu
└── App.tsx         # root component utamina
```

## Catetan Tambahan Mah

Aplikasi ieu masih keneh development tah, jadi mun aya bug atau saran mah langsung wae update atuh.
Sistem monitoringna udah bisa track pH, TSS, turbidity, sampai flow rate dari macem-macem titik di area tambang kieu.