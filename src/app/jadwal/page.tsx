import Rundown from '@/components/Rundown';

export default function JadwalPage() {
  return (
    <div className="min-h-screen pt-10 pb-20 bg-[#3d0212]">
      
      {/* Header Halaman */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#fe7002]/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <span className="relative z-10 bg-[#b70f3c]/40 border border-[#fe7002]/40 text-[#fce043] text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(254,112,2,0.3)]">
          Timeline Kegiatan
        </span>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#ede5bf] mb-4">
          Jadwal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe7002] to-[#fce043]">RAPIMNAS FSLDK</span>
        </h1>
        <p className="relative z-10 text-[#ede5bf]/80 italic">
          Rangkaian acara diselenggarakan pada tanggal 12 - 15 November 2026 di Semarang.
        </p>
      </div>

      {/* Komponen Rundown Utama */}
      <div className="pb-20 relative z-10">
        <Rundown />
      </div>

    </div>
  );
}