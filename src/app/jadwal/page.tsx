import Rundown from '@/components/Rundown';

export default function JadwalPage() {
  return (
    <div className="min-h-screen bg-[#3d0212] overflow-hidden">
      
      {/* Header Halaman Jadwal dengan Efek Glow */}
      <section className="relative pt-24 pb-12 text-center">
        {/* Dekorasi Cahaya Latar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-[#b70f3c]/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 px-4 animate-fade-in-up">
          <span className="bg-[#7d0526]/60 border border-[#fe7002]/40 text-[#fce043] text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(254,112,2,0.3)] hover:-translate-y-1 transition-transform duration-300">
            Timeline Kegiatan
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#ede5bf] mb-4 drop-shadow-md">
            Jadwal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe7002] to-[#fce043]">RAPIMNAS 1</span>
          </h1>
          <p className="text-[#ede5bf]/80 max-w-2xl mx-auto text-base md:text-lg">
            Rangkaian acara diselenggarakan pada tanggal 12 hingga 15 November 2026 di Universitas Diponegoro, Semarang.
          </p>
        </div>
      </section>

      {/* Komponen Rundown Utama */}
      <div className="pb-20 relative z-10">
        <Rundown />
      </div>

    </div>
  );
}