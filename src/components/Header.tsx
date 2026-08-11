"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  // State untuk mengontrol menu utama (Hamburger)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  
  // State khusus untuk mengontrol dropdown submenu pendaftaran di mobile
  const [isMobilePendaftaranOpen, setIsMobilePendaftaranOpen] = useState(false); 

  // Fungsi pembantu agar saat menu diklik, semua menu tertutup rapi
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePendaftaranOpen(false); 
  };

  return (
    <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Bagian Kiri: Logo & Judul */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/5 group-hover:bg-white/20 transition">
            <Image 
              src="/logo-fsldk.png" 
              alt="Logo FSLDK" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <Image 
              src="/logo-insani.png" 
              alt="Logo Insani" 
              width={32} 
              height={32} 
              className="object-contain rounded-sm" 
            />
          </div>
          <div className="font-bold text-lg md:text-xl text-white tracking-tight">
            RAPIMNAS FSLDK <span className="text-red-400">2026</span>
          </div>
        </Link>
        
        {/* Tombol Hamburger khusus Mobile */}
        <button 
          className="md:hidden text-slate-300 hover:text-white p-2 transition focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigasi Kanan (Hanya terlihat di Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className={`transition ${pathname === '/' ? 'text-white font-semibold' : 'hover:text-white'}`}>Beranda</Link>
          <Link href="/tentang" className={`transition ${pathname === '/tentang' ? 'text-white font-semibold' : 'hover:text-white'}`}>Tentang</Link>
          <Link href="/jadwal" className={`transition ${pathname === '/jadwal' ? 'text-white font-semibold' : 'hover:text-white'}`}>Jadwal</Link>
          
          <div className="relative group py-2">
            <button className={`flex items-center gap-1 transition outline-none ${pathname.startsWith('/pendaftaran') ? 'text-white font-semibold' : 'hover:text-white'}`}>
              Pendaftaran <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full right-0 mt-1 w-48 bg-[#1a2340] border border-white/10 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link href="/pendaftaran/panitia" className={`px-4 py-3 text-sm border-b border-white/5 transition ${pathname === '/pendaftaran/panitia' ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10'}`}>Pendaftaran Panitia</Link>
              <Link href="/pendaftaran/peserta" className={`px-4 py-3 text-sm transition ${pathname === '/pendaftaran/peserta' ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10'}`}>Pendaftaran Peserta</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Tampilan Menu Mobile Baru (Model Accordion sesuai gambar) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a2340]/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-1.5 shadow-2xl">
          
          <Link 
            href="/" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname === '/' ? 'bg-white/10 text-white font-bold' : 'text-slate-300 font-semibold active:bg-white/5'}`}
          >
            Beranda
          </Link>
          
          <Link 
            href="/tentang" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname === '/tentang' ? 'bg-white/10 text-white font-bold' : 'text-slate-300 font-semibold active:bg-white/5'}`}
          >
            Tentang Kami
          </Link>
          
          <Link 
            href="/jadwal" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname === '/jadwal' ? 'bg-white/10 text-white font-bold' : 'text-slate-300 font-semibold active:bg-white/5'}`}
          >
            Jadwal Acara
          </Link>
          
          {/* Wrapper Accordion untuk Pendaftaran */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobilePendaftaranOpen(!isMobilePendaftaranOpen)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider w-full outline-none ${pathname.startsWith('/pendaftaran') && !isMobilePendaftaranOpen ? 'bg-white/5 text-white font-bold' : 'text-slate-300 font-semibold active:bg-white/5'}`}
            >
              <span>Pendaftaran</span>
              {/* Ikon panah yang akan berputar jika diklik */}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isMobilePendaftaranOpen ? 'rotate-180 text-white' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Submenu yang muncul saat panah diklik */}
            {isMobilePendaftaranOpen && (
              <div className="flex flex-col mt-2 ml-4 border-l-2 border-white/10 overflow-hidden animate-fade-in">
                <Link 
                  href="/pendaftaran/panitia" 
                  onClick={closeMenu} 
                  className={`block pl-6 pr-4 py-3 text-sm transition rounded-r-lg ${pathname === '/pendaftaran/panitia' ? 'text-red-400 font-bold bg-white/5' : 'text-slate-300 active:bg-white/5'}`}
                >
                  Oprec Panitia
                </Link>
                <Link 
                  href="/pendaftaran/peserta" 
                  onClick={closeMenu} 
                  className={`block pl-6 pr-4 py-3 text-sm transition rounded-r-lg ${pathname === '/pendaftaran/peserta' ? 'text-red-400 font-bold bg-white/5' : 'text-slate-300 active:bg-white/5'}`}
                >
                  Pendaftaran Peserta
                </Link>
              </div>
            )}
          </div>

        </div>
      )}
    </header>
  );
}