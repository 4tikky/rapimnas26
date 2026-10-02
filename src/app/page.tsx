import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#3d0212] overflow-hidden"> 
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[calc(100vh-73px)] flex items-center justify-center text-center">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/foto-acara.JPG" 
            alt="Dokumentasi Rapimnas Sebelumnya"
            fill
            className="object-cover object-center"
            priority
          />
          {/* 2. PERBAIKAN: Gradasi dari maroon transparan di atas, menuju maroon pekat (#3d0212) di bawah agar menyatu sempurna dengan section berikutnya */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#7d0526]/70 via-[#7d0526]/80 to-[#3d0212]"></div>
        </div>

        {/* Konten Hero */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center justify-center h-full py-4">
          
          <div className="bg-[#7d0526]/50 border border-[#b70f3c]/50 px-4 py-1.5 rounded-full mb-4 max-w-2xl">
            <p className="text-[#ede5bf] text-xs md:text-sm font-medium italic">
              "Diponegoro's Spirit: Berdikarya dalam Gerak, Berdampak bagi Bangsa"
            </p>
          </div>

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
        {/* Hapus background tebal, gunakan border dan bg transparan halus agar menyatu dengan warna dasar */}
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

      {/* 3. SECTION JADWAL */}
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

      {/* 4. SECTION PENDAFTARAN (Call to Action dengan Maskot) */}
      <section className="max-w-5xl mx-auto px-4 py-20 mb-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#7d0526] to-[#4a0316] border border-[#b70f3c] p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Cahaya Latar Belakang */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#fe7002]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Bagian Teks & Tombol (Kiri) */}
          <div className="relative z-10 text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ede5bf] mb-4">Mari Berkontribusi!</h2>
            <p className="text-[#ede5bf]/90 mb-8 max-w-lg mx-auto md:mx-0">
              Delegasi merupakan perwakilan resmi dari Puskomda atau LDK. Segera daftarkan diri Anda dan ikuti rangkaian acara dari tanggal 12 hingga 15 November 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/pendaftaran/peserta" className="bg-[#fe7002] hover:bg-[#fce043] text-[#7d0526] font-bold px-6 py-3.5 rounded-xl shadow-[0_5px_15px_rgba(254,112,2,0.3)] transition-all duration-300">
                Daftar Peserta/Delegasi
              </Link>
              <Link href="/pendaftaran/peserta" className="bg-[#3d0212] hover:bg-[#b70f3c] border border-[#b70f3c] text-[#ede5bf] font-medium px-6 py-3.5 rounded-xl transition-all duration-300">
                Informasi Pendaftaran
              </Link>
            </div>
          </div>

          {/* Bagian Maskot (Kanan) */}
          <div className="relative z-10 w-56 md:w-72 shrink-0 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] hover:scale-105 hover:-rotate-2 transition-transform duration-500 mt-6 md:mt-0">
            {/* 
              Pastikan file maskot dinamai "MASKOT.png" dan diletakkan di folder "public"
            */}
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

    </div>
  );
}