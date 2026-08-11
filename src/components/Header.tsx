"use client"; // Wajib ditambahkan karena kita perlu membaca URL secara real-time di sisi client

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import hook navigasi dari Next.js

export default function Header() {
  const pathname = usePathname(); // Variabel penanda kita sedang di URL mana

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
          <div className="font-bold text-xl text-white tracking-tight hidden sm:block">
            RAPIMNAS <span className="text-red-400">2026</span>
          </div>
        </Link>
        
        {/* Navigasi Kanan (Sekarang Dinamis) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link 
            href="/" 
            className={`transition ${pathname === '/' ? 'text-white font-semibold' : 'hover:text-white'}`}
          >
            Beranda
          </Link>
          
          <Link 
            href="/tentang" 
            className={`transition ${pathname === '/tentang' ? 'text-white font-semibold' : 'hover:text-white'}`}
          >
            Tentang
          </Link>
          
          <Link 
            href="/jadwal" 
            className={`transition ${pathname === '/jadwal' ? 'text-white font-semibold' : 'hover:text-white'}`}
          >
            Jadwal
          </Link>
          
          {/* Dropdown Pendaftaran */}
          <div className="relative group py-2">
            <button 
              className={`flex items-center gap-1 transition outline-none ${pathname.startsWith('/pendaftaran') ? 'text-white font-semibold' : 'hover:text-white'}`}
            >
              Pendaftaran <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-[#1a2340] border border-white/10 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link 
                href="/pendaftaran/panitia" 
                className={`px-4 py-3 text-sm border-b border-white/5 transition ${pathname === '/pendaftaran/panitia' ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10'}`}
              >
                Pendaftaran Panitia
              </Link>
              <Link 
                href="/pendaftaran/peserta" 
                className={`px-4 py-3 text-sm transition ${pathname === '/pendaftaran/peserta' ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10'}`}
              >
                Pendaftaran Peserta
              </Link>
            </div>
          </div>
        </nav>

      </div>
    </header>
  );
}