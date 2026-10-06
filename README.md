# 🌟 RAPIMNAS 1 FSLDK Indonesia 2026 - Official Web Platform

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Repositori resmi untuk pengembangan *website* **Rapat Pimpinan Nasional (RAPIMNAS) 1 FSLDK Indonesia 2026** yang diselenggarakan di Universitas Diponegoro, Semarang. 

Website ini dibangun untuk menjadi pusat informasi terpadu yang responsif dan modern bagi seluruh delegasi Lembaga Dakwah Kampus (LDK) se-Indonesia dengan mengusung tema: *"Diponegoro's Spirit: Berdikarya dalam Gerak, Berdampak bagi Bangsa"*.

---

## 🚀 Fitur Utama

- **Beranda & Countdown**: Informasi utama acara yang dilengkapi dengan penghitung waktu mundur (countdown) dinamis menuju hari pelaksanaan.
- **Jadwal & Agenda**: Menampilkan *rundown* lengkap kegiatan RAPIMNAS dari kedatangan peserta hingga penutupan acara.
- **Pendaftaran Delegasi**: Pusat pendaftaran yang memuat detail Harga Tiket Masuk (HTM) berdasarkan domisili (Semarang/Non-Semarang) dan gelombang pendaftaran (Batch 1 & 2). Dilengkapi panduan unduh *Guidebook* dan pintasan ke Form Pendaftaran.
- **Peta Interaktif Penjemputan**: Integrasi Web Maps dinamis (via Google Maps iframe) untuk menyorot 4 titik kedatangan utama delegasi (Stasiun Tawang, Stasiun Poncol, Bandara Ahmad Yani, Terminal Banyumanik).
- **Pusat Unduhan (Arsip)**: Repositori berkas publik (menggunakan format SVG ikon modern) untuk kemudahan unduh Logo Resolusi Tinggi, Twibbon, Panduan Lomba Essai, dan Proposal Sponsorship.
- **SEO & Metadata**: Telah dioptimasi agar mudah ditemukan di mesin pencari (terverifikasi Google Search Console) serta dilengkapi *OpenGraph* untuk tampilan *preview* *link* yang rapi saat dibagikan ke WhatsApp dan media sosial lainnya.

---

## 💻 Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 
- **Bahasa:** TypeScript
- **Deployment:** [Vercel](https://vercel.com/)
- **Ikonografi:** Scalable Vector Graphics (SVG) murni

---

## 🎨 Palet Warna UI/UX (Konfigurasi Tailwind)

Platform ini menggunakan warna *custom* yang telah didaftarkan secara khusus pada `tailwind.config.ts`:
- **Maroon Dark (`#7d0526`)**: Warna utama (*Background*, *Footer*).
- **Red Bright (`#b70f3c`)**: Warna aksen sekunder untuk *border*, *card*, dan kotak elemen.
- **Cream (`#ede5bf`)**: Warna tipografi dasar yang nyaman dibaca pada *background* gelap.
- **Orange (`#fe7002`)**: Warna *highlight* interaktif dan tombol aksi utama.
- **Yellow (`#fce043`)**: Warna sekunder untuk penekanan harga (nominal) dan judul sorotan.

---

## 🛠️ Panduan Instalasi Lokal (Development)

Bagi pengembang (*developer*) yang ingin menjalankan atau berkontribusi pada *project* ini secara lokal, ikuti langkah berikut:

1. **Clone repositori ini**
   ```bash
   git clone [https://github.com/4tikky/rapimnas26.git](https://github.com/4tikky/rapimnas26.git)
   cd rapimnas26

2. **Intall Dependency**
    ```bash
    npm install

3. **Jalankan server pengembangan**
    ```bash
    npm run dev

4. Buka http://localhost:3000 di browser Anda. Halaman akan otomatis dimuat ulang (auto-updates) apabila ada perubahan pada kode.