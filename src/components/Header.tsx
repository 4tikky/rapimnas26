"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isMobilePendaftaranOpen, setIsMobilePendaftaranOpen] = useState(false); 

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePendaftaranOpen(false); 
  };

  return (
    <header className="sticky top-0 z-50 bg-[#7d0526]/95 backdrop-blur-md border-b border-[#b70f3c]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Bagian Kiri: Logo & Judul */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* PERBAIKAN 1: Hapus border dan bg transparan di container logo */}
          <div className="flex items-center gap-2 group-hover:opacity-80 transition-opacity">
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
            <Image
              src="/logo-rapimnas.png"
              alt="Logo RAPIMNAS"
              width={32}
              height={32}
              className="object-contain rounded-sm"
            />
          </div>
          <div className="hidden md:block font-bold text-lg md:text-xl text-[#ede5bf] tracking-tight">
            RAPIMNAS FSLDK <span className="text-[#fe7002]">2026</span>
          </div>
        </Link>
        
        {/* Tombol Hamburger khusus Mobile */}
        <button 
          className="md:hidden text-[#ede5bf] hover:text-[#fe7002] p-2 transition focus:outline-none"
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
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className={`transition ${pathname === '/' ? 'text-[#fe7002] font-semibold' : 'text-[#ede5bf]/90 hover:text-[#fe7002]'}`}>Beranda</Link>
          <Link href="/tentang" className={`transition ${pathname === '/tentang' ? 'text-[#fe7002] font-semibold' : 'text-[#ede5bf]/90 hover:text-[#fe7002]'}`}>Tentang</Link>
          <Link href="/jadwal" className={`transition ${pathname === '/jadwal' ? 'text-[#fe7002] font-semibold' : 'text-[#ede5bf]/90 hover:text-[#fe7002]'}`}>Jadwal</Link>
          <Link href="/pendaftaran/peserta" className={`transition ${pathname.startsWith('/pendaftaran') ? 'text-[#fe7002] font-semibold' : 'text-[#ede5bf]/90 hover:text-[#fe7002]'}`}>
            Pendaftaran Peserta
          </Link>
          <Link href="/arsip" className={`transition ${pathname === '/arsip' ? 'text-[#fe7002] font-semibold' : 'text-[#ede5bf]/90 hover:text-[#fe7002]'}`}>Arsip</Link>
        </nav>
      </div>

      {/* Tampilan Menu Mobile Baru (Model Accordion) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#7d0526]/95 backdrop-blur-xl border-b border-[#b70f3c] py-4 px-4 flex flex-col gap-1.5 shadow-2xl z-50">
          
          <Link 
            href="/" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname === '/' ? 'bg-[#b70f3c] text-[#fe7002] font-bold' : 'text-[#ede5bf]/90 font-semibold active:bg-[#b70f3c]/50'}`}
          >
            Beranda
          </Link>
          
          <Link 
            href="/tentang" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname === '/tentang' ? 'bg-[#b70f3c] text-[#fe7002] font-bold' : 'text-[#ede5bf]/90 font-semibold active:bg-[#b70f3c]/50'}`}
          >
            Tentang Kami
          </Link>
          
          <Link 
            href="/jadwal" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname === '/jadwal' ? 'bg-[#b70f3c] text-[#fe7002] font-bold' : 'text-[#ede5bf]/90 font-semibold active:bg-[#b70f3c]/50'}`}
          >
            Jadwal Acara
          </Link>
          
          {/* Wrapper Accordion untuk Pendaftaran */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobilePendaftaranOpen(!isMobilePendaftaranOpen)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider w-full outline-none ${pathname.startsWith('/pendaftaran') && !isMobilePendaftaranOpen ? 'bg-[#b70f3c] text-[#fe7002] font-bold' : 'text-[#ede5bf]/90 font-semibold active:bg-[#b70f3c]/50'}`}
            >
              <span>Pendaftaran</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isMobilePendaftaranOpen ? 'rotate-180 text-[#fe7002]' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

          {/* PERUBAHAN: Pendaftaran di mobile juga menjadi link tunggal biasa */}
          <Link 
            href="/pendaftaran/peserta" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname.startsWith('/pendaftaran') ? 'bg-[#b70f3c] text-[#fe7002] font-bold' : 'text-[#ede5bf]/90 font-semibold active:bg-[#b70f3c]/50'}`}
          >
            Pendaftaran Delegasi
          </Link>
          </div>
          <Link 
            href="/arsip" 
            onClick={closeMenu} 
            className={`block px-4 py-3.5 rounded-xl transition uppercase text-sm tracking-wider ${pathname === '/arsip' ? 'bg-[#b70f3c] text-[#fe7002] font-bold' : 'text-[#ede5bf]/90 font-semibold active:bg-[#b70f3c]/50'}`}
          >
            Pusat Unduhan
          </Link>
        </div>
      )}
    </header>
  );
}