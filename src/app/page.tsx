import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen"> 
      
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-20 md:pt-16 md:pb-32 text-center relative">
        {/* Dekorasi Background Cahaya */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <span className="bg-red-950/50 border border-red-500/30 text-red-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
            RAPIMNAS FSLDK 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 leading-tight">
            Rapat Pimpinan Nasional 1 <br className="hidden md:inline" />
            <span className="text-red-400">FSLDK INDONESIA</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Universitas Diponegoro, Semarang • November 2026
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pendaftaran/panitia" className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-1 transition-all duration-300">
              Daftar Panitia
            </Link>
            <Link href="#jelajahi" className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm font-medium px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              Jelajahi Acara
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION TENTANG (Ringkasan) */}
      <section id="jelajahi" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20">
        <div className="bg-[#1a2340]/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-10 hover:border-red-500/20 transition-colors duration-500 group">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">Tentang RAPIMNAS 1</h2>
            <p className="text-slate-300 mb-6 leading-relaxed text-justify">
              Forum ini merupakan rapat kerja dan konsolidasi tingkat nasional yang mempertemukan pengurus Puskomnas, Puskomda, serta perwakilan pimpinan Lembaga Dakwah Kampus (LDK) dari seluruh Indonesia untuk menyusun langkah strategis dakwah kampus.
            </p>
            <Link href="/tentang" className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors group/link">
              Baca Selengkapnya 
              <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
          
          {/* Dekorasi Visual untuk Section Tentang */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="bg-gradient-to-br from-red-500/20 to-transparent p-6 rounded-2xl border border-white/5 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
              <div className="text-red-400 mb-3">
                {/* SVG Ikon Kolaborasi (Group) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div className="text-white font-bold">Kolaborasi</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-6 rounded-2xl border border-white/5 group-hover:-translate-y-2 transition-transform duration-500 delay-150 mt-6">
              <div className="text-blue-400 mb-3">
                {/* SVG Ikon Strategi (Rocket/Target) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.45c.019-.104.039-.208.06-.311m-2.228 2.704a2.97 2.97 0 1 1-4.2-4.2l.685-.685m5.249 5.25l-.685.685" />
                </svg>
              </div>
              <div className="text-white font-bold">Strategi</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION JADWAL (Highlight) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Highlight Kegiatan</h2>
          <p className="text-slate-300 mt-2">Rangkaian acara utama yang menanti Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(220,38,38,0.3)] transition-all duration-300 cursor-default">
            <div className="w-12 h-12 bg-red-950/50 rounded-xl flex items-center justify-center text-red-400 mb-6 border border-red-500/30 font-bold">1</div>
            <h3 className="text-xl font-bold text-white mb-3">Sidang Nasional</h3>
            <p className="text-slate-400 text-sm">Pembahasan agenda strategis bersama LDK se-Indonesia.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(220,38,38,0.3)] transition-all duration-300 cursor-default">
            <div className="w-12 h-12 bg-red-950/50 rounded-xl flex items-center justify-center text-red-400 mb-6 border border-red-500/30 font-bold">2</div>
            <h3 className="text-xl font-bold text-white mb-3">Kajian & Seminar</h3>
            <p className="text-slate-400 text-sm">Menghadirkan pembicara nasional yang inspiratif.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(220,38,38,0.3)] transition-all duration-300 cursor-default">
            <div className="w-12 h-12 bg-red-950/50 rounded-xl flex items-center justify-center text-red-400 mb-6 border border-red-500/30 font-bold">3</div>
            <h3 className="text-xl font-bold text-white mb-3">Semarang Field Trip</h3>
            <p className="text-slate-400 text-sm">Mengeksplorasi kekayaan warisan budaya di Semarang.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/jadwal" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
            Lihat Jadwal Lengkap
          </Link>
        </div>
      </section>

      {/* 4. SECTION PENDAFTARAN (Call to Action) */}
      <section className="max-w-4xl mx-auto px-4 py-20 mb-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-red-900/40 to-[#121B35]/80 border border-red-500/20 p-10 md:p-16 rounded-[2.5rem] text-center backdrop-blur-md">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-4">Siap Berkontribusi?</h2>
          <p className="relative z-10 text-slate-300 mb-10 max-w-lg mx-auto">
            Pilih jalur partisipasimu dan jadilah bagian dari sejarah pergerakan dakwah kampus nasional di Universitas Diponegoro.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/pendaftaran/panitia" className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-red-600/40 hover:-translate-y-1 transition-all duration-300">
              Daftar Sebagai Panitia
            </Link>
            <Link href="/pendaftaran/peserta" className="bg-[#1a2340] hover:bg-[#232e54] border border-white/10 text-white font-medium px-8 py-4 rounded-xl hover:-translate-y-1 transition-all duration-300">
              Daftar Sebagai Peserta
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}