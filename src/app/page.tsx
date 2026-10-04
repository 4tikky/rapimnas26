"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Referensi untuk membidik elemen galeri
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // State untuk menyimpan URL foto yang sedang di-preview (lightbox)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fungsi untuk menggeser galeri ke kiri atau kanan
  const scrollGallery = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 600 : 300; 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#3d0212] overflow-hidden"> 
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[calc(100vh-73px)] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/foto-acara.JPG" 
            alt="Dokumentasi Rapimnas Sebelumnya"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#7d0526]/70 via-[#7d0526]/80 to-[#3d0212]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center justify-center h-full py-4">
          <span className="bg-[#b70f3c]/60 border border-[#fe7002]/40 text-[#fce043] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(254,112,2,0.4)] backdrop-blur-sm">
            "Diponegoro's Spirit: Berdikarya dalam Gerak, Berdampak bagi Bangsa"
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#ede5bf] leading-tight max-w-4xl tracking-tight">
            Rapat Pimpinan Nasional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe7002] to-[#fce043] drop-shadow-md">
              FSLDK INDONESIA 2026
            </span>
          </h1>

          <p className="mt-3 text-[#ede5bf]/90 text-sm md:text-base font-medium">
            Universitas Diponegoro, Semarang • 12 - 15 November 2026
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/pendaftaran/peserta" className="bg-[#fe7002] hover:bg-[#fce043] text-[#7d0526] font-bold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(254,112,2,0.4)] transition-all duration-300 text-sm md:text-base">
              Daftar Delegasi
            </Link>
            <Link href="#jelajahi" className="bg-[#7d0526]/60 hover:bg-[#b70f3c]/80 text-[#ede5bf] backdrop-blur-md font-medium px-6 py-3 rounded-xl border border-[#ede5bf]/30 hover:border-[#fe7002] transition-all duration-300 text-sm md:text-base">
              Jelajahi Acara
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION TENTANG */}
      <section id="jelajahi" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20">
        <div className="bg-[#7d0526]/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#b70f3c]/30 shadow-2xl flex flex-col md:flex-row items-center gap-10 hover:border-[#fe7002]/40 transition-colors duration-500 group">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#ede5bf] mb-4">Tentang RAPIMNAS 1</h2>
            <p className="text-[#ede5bf]/80 mb-6 leading-relaxed text-justify">
              Rapimnas × FSLDK 2026 merupakan forum kerja nasional yang secara khusus diarahkan untuk merumuskan fondasi sistem bagi gerak FSLDK ke depan. Forum ini mempertemukan pimpinan Puskomnas, Puskomda, dan perwakilan Lembaga Dakwah Kampus (LDK) dari seluruh Indonesia untuk menyusun arah gerak bersama.
            </p>
            <Link href="/tentang" className="inline-flex items-center gap-2 text-[#fe7002] font-semibold hover:text-[#fce043] transition-colors group/link">
              Selengkapnya tentang visi & misi
              <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="bg-gradient-to-br from-[#b70f3c]/20 to-transparent p-6 rounded-2xl border border-[#b70f3c]/20 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
              <div className="text-[#fe7002] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div className="text-[#ede5bf] font-bold">Ukhuwah</div>
              <p className="text-[#ede5bf]/60 text-xs mt-1">Mempererat jejaring kolaborasi antarlembaga.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#fe7002]/20 to-transparent p-6 rounded-2xl border border-[#fe7002]/20 group-hover:-translate-y-2 transition-transform duration-500 delay-150 mt-6">
              <div className="text-[#fce043] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.45c.019-.104.039-.208.06-.311m-2.228 2.704a2.97 2.97 0 1 1-4.2-4.2l.685-.685m5.249 5.25l-.685.685" />
                </svg>
              </div>
              <div className="text-[#ede5bf] font-bold">Sistem</div>
              <p className="text-[#ede5bf]/60 text-xs mt-1">Merumuskan arah gerak dakwah nasional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION KILAS BALIK / DOKUMENTASI */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#ede5bf] relative inline-block">
            Kilas Balik RAPIMNAS
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#fe7002] rounded-full"></div>
          </h2>
          <p className="text-[#ede5bf]/70 mt-6 max-w-2xl mx-auto">
            Geser untuk melihat momen kebersamaan, lalu klik foto untuk memperbesar tampilan.
          </p>
        </div>

        <div className="relative group">
          {/* Tombol Kiri */}
          <button 
            onClick={() => scrollGallery('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3d0212] border-2 border-[#fe7002] text-[#fe7002] hover:bg-[#fe7002] hover:text-[#3d0212] rounded-full items-center justify-center shadow-[0_0_15px_rgba(254,112,2,0.5)] transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Container Scroll */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {/* Array untuk mapping foto agar kodenya lebih bersih */}
            {[
              "/dokumentasi-1.JPG",
              "/dokumentasi-2.JPG",
              "/dokumentasi-3.JPG",
              "/dokumentasi-4.JPG",
              "/dokumentasi-5.JPG",
              "/dokumentasi-6.JPG",
              "/dokumentasi-7.JPG",
              "/dokumentasi-8.JPG",
              "/dokumentasi-9.JPG"
            ].map((imgSrc, index) => (
              <div 
                key={index}
                className="relative min-w-[85%] md:min-w-[60%] lg:min-w-[45%] h-64 md:h-80 rounded-3xl overflow-hidden snap-center flex-shrink-0 group/card border border-[#b70f3c]/40 shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <Image 
                  src={imgSrc} 
                  alt={`Dokumentasi ${index + 1}`} 
                  fill 
                  className="object-cover group-hover/card:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay Hitam Transparan & Ikon Kaca Pembesar saat Hover */}
                <div className="absolute inset-0 bg-[#3d0212]/0 group-hover/card:bg-[#3d0212]/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#fe7002]/90 text-[#3d0212] flex items-center justify-center opacity-0 group-hover/card:opacity-100 scale-50 group-hover/card:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(254,112,2,0.6)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Kanan */}
          <button 
            onClick={() => scrollGallery('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3d0212] border-2 border-[#fe7002] text-[#fe7002] hover:bg-[#fe7002] hover:text-[#3d0212] rounded-full items-center justify-center shadow-[0_0_15px_rgba(254,112,2,0.5)] transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        {/* Indikator Mobile */}
        <div className="flex justify-center items-center gap-2 mt-2 text-[#ede5bf]/50 text-sm md:hidden animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
          <span>Geser untuk melihat foto lain</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </section>

      {/* 4. SECTION JADWAL */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#ede5bf]">Rangkaian Kegiatan</h2>
          <p className="text-[#ede5bf]/70 mt-2">Agenda utama yang akan memperkuat sinergi LDK se-Indonesia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#7d0526]/30 backdrop-blur-sm p-6 rounded-3xl border border-[#b70f3c]/40 hover:bg-[#7d0526]/60 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-lg font-bold text-[#ede5bf] mb-2">Sidang Pleno</h3>
            <p className="text-[#ede5bf]/60 text-sm">Menghimpun aspirasi dan merumuskan rekomendasi gerak FSLDK Indonesia.</p>
          </div>
          <div className="bg-[#7d0526]/30 backdrop-blur-sm p-6 rounded-3xl border border-[#b70f3c]/40 hover:bg-[#7d0526]/60 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-lg font-bold text-[#ede5bf] mb-2">Seminar Kepemudaan</h3>
            <p className="text-[#ede5bf]/60 text-sm">Ruang diskusi generasi muda dalam menghadapi dinamika bangsa.</p>
          </div>
          <div className="bg-[#7d0526]/30 backdrop-blur-sm p-6 rounded-3xl border border-[#b70f3c]/40 hover:bg-[#7d0526]/60 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-lg font-bold text-[#ede5bf] mb-2">Pelatihan Manajemen (PMLDK)</h3>
            <p className="text-[#ede5bf]/60 text-sm">Pengembangan kapasitas untuk mengelola LDK secara strategis.</p>
          </div>
          <div className="bg-[#7d0526]/30 backdrop-blur-sm p-6 rounded-3xl border border-[#b70f3c]/40 hover:bg-[#7d0526]/60 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-lg font-bold text-[#ede5bf] mb-2">Field Trip Semarang</h3>
            <p className="text-[#ede5bf]/60 text-sm">Mengeksplorasi budaya kota dan mempererat ukhuwah antardelegasi.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/jadwal" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#fe7002]/50 text-[#fe7002] hover:bg-[#fe7002]/10 transition-colors">
            Lihat Jadwal Keseluruhan
          </Link>
        </div>
      </section>

      {/* 5. SECTION PENDAFTARAN */}
      <section className="max-w-5xl mx-auto px-4 py-20 mb-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#7d0526] to-[#4a0316] border border-[#b70f3c] p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#fe7002]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ede5bf] mb-4">Mari Berkontribusi!</h2>
            <p className="text-[#ede5bf]/90 mb-8 max-w-lg mx-auto md:mx-0">
              Segera daftarkan diri Anda dan ikuti rangkaian acara dari tanggal 12 hingga 15 November 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/pendaftaran/peserta" className="bg-[#fe7002] hover:bg-[#fce043] text-[#7d0526] font-bold px-6 py-3.5 rounded-xl shadow-[0_5px_15px_rgba(254,112,2,0.3)] transition-all duration-300">
                Daftar Peserta/Delegasi
              </Link>
            </div>
          </div>

          <div className="relative z-10 w-56 md:w-72 shrink-0 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] hover:scale-105 hover:-rotate-2 transition-transform duration-500 mt-6 md:mt-0">
            <Image 
              src="/MASKOT.png" 
              alt="Maskot Rapimnas 2026" 
              width={400} 
              height={400} 
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL (Preview Full Foto) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Tombol Tutup Silang (X) */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#fe7002] transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Kotak Preview Gambar */}
          <div 
            className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[85vh] rounded-2xl overflow-hidden shadow-2xl cursor-default animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup kalau klik fotonya langsung
          >
            <Image 
              src={selectedImage} 
              alt="Preview Dokumentasi" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      )}

    </div>
  );
}