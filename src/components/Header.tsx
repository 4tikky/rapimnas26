"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk buka/tutup menu di HP

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
              src="/logo-insani.jpg" 
              alt="Logo Insani" 
              width={32} 
              height={32} 
              className="object-contain rounded-sm" 
            />
          </div>
          {/* Tulisan Rapimnas sekarang muncul di HP juga */}
          <div className="font-bold text-lg md:text-xl text-white tracking-tight">
            RAPIMNAS <span className="text-red-400">2026</span>
          </div>
        </Link>
        
        {/* Tombol Hamburger khusus Mobile */}
        <button 
          className="md:hidden text-slate-300 hover:text-white p-2 transition focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Ikon SVG berubah menjadi (X) jika menu terbuka, dan (Garisan 3) jika tertutup */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigasi Kanan (Hanya terlihat di Laptop/Desktop) */}
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

      {/* Tampilan Menu Dropdown (Khusus Mobile) */}
      {/* Akan muncul jika isMobileMenuOpen bernilai true */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a2340]/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-2 shadow-2xl">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)} // Menutup menu saat link diklik
            className={`block px-4 py-3 rounded-lg transition ${pathname === '/' ? 'bg-white/10 text-white font-semibold' : 'text-slate-300 active:bg-white/5'}`}
          >
            Beranda
          </Link>
          <Link 
            href="/tentang" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`block px-4 py-3 rounded-lg transition ${pathname === '/tentang' ? 'bg-white/10 text-white font-semibold' : 'text-slate-300 active:bg-white/5'}`}
          >
            Tentang
          </Link>
          <Link 
            href="/jadwal" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`block px-4 py-3 rounded-lg transition ${pathname === '/jadwal' ? 'bg-white/10 text-white font-semibold' : 'text-slate-300 active:bg-white/5'}`}
          >
            Jadwal
          </Link>
          
          <div className="border-t border-white/10 mt-2 pt-4 px-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Pendaftaran</span>
            <Link 
              href="/pendaftaran/panitia" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`block py-2 text-sm transition ${pathname === '/pendaftaran/panitia' ? 'text-red-400 font-semibold' : 'text-slate-300'}`}
            >
              • Daftar Panitia
            </Link>
            <Link 
              href="/pendaftaran/peserta" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`block py-2 text-sm transition ${pathname === '/pendaftaran/peserta' ? 'text-red-400 font-semibold' : 'text-slate-300'}`}
            >
              • Daftar Peserta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}