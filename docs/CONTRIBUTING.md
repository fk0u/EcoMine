# Panduan Kontribusi – EcoMine

Terima kasih tertarik berkontribusi ke EcoMine! Dokumen ini menjelaskan cara kerja dasar di repo ini.

---

## 1. Setup Lingkungan

1. Fork dan clone repo.
2. Install dependency backend & frontend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Salin `.env.example` menjadi `.env` dan isi variabel yang diperlukan.

---

## 2. Branching

- Branch utama: `main`
- Buat branch baru untuk setiap fitur/bugfix:

```bash
git checkout -b feature/<nama-fitur>
git checkout -b bugfix/<deskripsi-singkat>
```

---

## 3. Style & Konvensi

- Backend: TypeScript, gunakan ESLint/Prettier jika tersedia.
- Frontend: React + TS, hindari _any_ kalau tidak terpaksa.
- Nama file dan folder: gunakan `kebab-case` atau `camelCase` secara konsisten.

---

## 4. Commit Message

Pakailah format singkat dan jelas, contohnya:

- `feat: add sensor readings endpoint`
- `fix: handle empty readings on chart`
- `docs: update architecture diagram`

---

## 5. Pull Request

Sebelum membuat PR:

1. Pastikan `npm test` / `npm run lint` (kalau ada) lulus.
2. Jelaskan di deskripsi PR:
   - Tujuan perubahan.
   - Cara mengetesnya.

---

## 6. Issue

Gunakan tab **Issues** untuk:

- Melaporkan bug.
- Mengusulkan fitur baru.
- Mendokumentasikan _technical debt_.

Tuliskan:

- Langkah reproduksi (untuk bug).
- Use case & dampak (untuk fitur).

---

## 7. Kontak

Untuk diskusi cepat, gunakan channel internal tim (WhatsApp/Discord), lalu simpulkan hasil keputusan ke dalam issue/PR supaya tercatat.