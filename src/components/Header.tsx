import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo (Ini juga berfungsi sebagai tombol kembali ke awal) */}
        <Link href="/" className="font-bold text-xl text-blue-900 tracking-tight">
          RAPIMNAS <span className="text-blue-600">2026</span>
        </Link>
        
        {/* Navigasi Kanan */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {/* Menu Beranda Baru */}
          <Link href="/" className="hover:text-blue-600 transition font-semibold text-blue-600">Beranda</Link>
          
          <Link href="/tentang" className="hover:text-blue-600 transition">Tentang</Link>
          <Link href="/jadwal" className="hover:text-blue-600 transition">Jadwal</Link>
          
          {/* Dropdown Pendaftaran */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-blue-600 transition outline-none">
              Pendaftaran <span className="text-[10px]">▼</span>
            </button>
            
            {/* Isi Dropdown (Muncul saat di-hover) */}
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link href="/pendaftaran/panitia" className="px-4 py-3 hover:bg-slate-50 text-slate-700 text-sm border-b border-slate-50 transition">
                Pendaftaran Panitia
              </Link>
              <Link href="/pendaftaran/peserta" className="px-4 py-3 hover:bg-slate-50 text-slate-700 text-sm transition">
                Pendaftaran Peserta
              </Link>
            </div>
          </div>
        </nav>

      </div>
    </header>
  );
}