import Link from 'next/link';
import Image from 'next/image';

export default function PendaftaranPesertaPage() {
  
  // Masukkan link Google Form pendaftaran Anda di sini
  const linkPendaftaranGForm = "https://forms.gle/ContohLinkPendaftaran";
  
  // Masukkan link Google Drive untuk Guidebook Anda di sini
  const linkGuidebook = "https://drive.google.com/ContohLinkGuidebook";

  return (
    <div className="min-h-screen pt-10 pb-20 bg-[#3d0212]">
      
      {/* Header Halaman */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#fe7002]/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <span className="relative z-10 bg-[#b70f3c]/40 border border-[#fe7002]/40 text-[#fce043] text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(254,112,2,0.3)]">
          Pendaftaran Peserta
        </span>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#ede5bf] mb-4">
          Delegasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe7002] to-[#fce043]">RAPIMNAS FSLDK</span>
        </h1>
        <p className="relative z-10 text-[#ede5bf]/80 italic">
          Tema: "Diponegoro's Spirit : Berdikarya dalam Gerak, Berdampak bagi Bangsa"
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4">
        
        {/* Kontainer Utama */}
        <div className="bg-[#7d0526]/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-[#b70f3c]/40 relative overflow-hidden group hover:border-[#fe7002]/50 transition-colors duration-500">
          
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#b70f3c]/20 rounded-full blur-3xl group-hover:rotate-180 transition-transform duration-[3000ms]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            
            {/* Bagian Kiri: Info Timeline & Biaya */}
            <div className="space-y-8">
              {/* Timeline Pendaftaran */}
              <div>
                <h3 className="text-xl font-bold text-[#fce043] mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#fe7002]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  Timeline Pendaftaran
                </h3>
                <div className="space-y-3">
                  <div className="bg-[#b70f3c]/20 p-4 rounded-xl border border-[#b70f3c]/40">
                    <p className="text-[#ede5bf] font-bold">Batch 1</p>
                    <p className="text-[#ede5bf]/70 text-sm">1 - 16 Oktober 2026</p>
                  </div>
                  <div className="bg-[#b70f3c]/20 p-4 rounded-xl border border-[#b70f3c]/40">
                    <p className="text-[#ede5bf] font-bold">Batch 2</p>
                    <p className="text-[#ede5bf]/70 text-sm">17 - 31 Oktober 2026</p>
                  </div>
                </div>
              </div>

              {/* Biaya Pendaftaran */}
              <div>
                <h3 className="text-xl font-bold text-[#fce043] mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#fe7002]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                  Biaya & Pembayaran
                </h3>
                <div className="bg-[#b70f3c]/20 p-5 rounded-xl border border-[#b70f3c]/40 space-y-4">
                  <div className="flex justify-between items-center border-b border-[#b70f3c]/40 pb-3">
                    <span className="text-[#ede5bf]">Batch 1</span>
                    <span className="text-[#fce043] font-bold text-lg">Rp 550.000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#b70f3c]/40 pb-3">
                    <span className="text-[#ede5bf]">Batch 2</span>
                    <span className="text-[#fce043] font-bold text-lg">Rp 550.000</span>
                  </div>
                  <div>
                    <span className="text-[#ede5bf]/80 text-sm block mb-1">Metode Pembayaran:</span>
                    <span className="text-[#ede5bf] font-semibold block">Transfer ke Rekening Bendahara</span>
                    <span className="text-[#fe7002] text-xs italic">(Detail rekening terdapat pada Guidebook)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian Kanan: Aksi (Tombol & Guidebook) */}
            <div className="flex flex-col justify-center space-y-8">
              
              <div className="bg-[#3d0212]/50 p-6 rounded-2xl border border-[#fe7002]/30 text-center">
                <h3 className="text-lg font-bold text-[#ede5bf] mb-2">Langkah Pendaftaran:</h3>
                <p className="text-[#ede5bf]/80 text-sm mb-6">
                  Pastikan Anda telah mengunduh, membaca, dan menyiapkan berkas sesuai panduan pada Guidebook sebelum menekan tombol daftar.
                </p>

                <div className="flex flex-col gap-4">
                  {/* Tombol Guidebook */}
                  <a 
                    href={linkGuidebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#b70f3c] hover:bg-[#b70f3c]/80 text-[#ede5bf] font-medium py-3.5 rounded-xl border border-[#ede5bf]/30 transition-all duration-300 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    Unduh / Baca Guidebook
                  </a>
                  
                  {/* Tombol Pendaftaran GForm */}
                  <a 
                    href={linkPendaftaranGForm} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#fe7002] hover:bg-[#fce043] text-[#7d0526] font-bold py-4 rounded-xl shadow-[0_5px_15px_rgba(254,112,2,0.4)] hover:shadow-[0_5px_25px_rgba(252,224,67,0.6)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Menuju Form Pendaftaran
                  </a>
                </div>
              </div>

              {/* Contact Person */}
              <div className="bg-[#b70f3c]/20 p-5 rounded-xl border border-[#b70f3c]/40">
                <h4 className="text-[#fce043] font-bold mb-3 text-sm uppercase tracking-wider">Narahubung (CP)</h4>
                <div className="space-y-3">
                  <a href="https://wa.me/6281284860084" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#ede5bf] hover:text-[#fe7002] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#7d0526] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Shorim Azmi Abwah</p>
                      <p className="text-xs opacity-70">0812-8486-0084</p>
                    </div>
                  </a>
                  <a href="https://wa.me/6285695543964" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#ede5bf] hover:text-[#fe7002] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#7d0526] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Annida Qotrunnada</p>
                      <p className="text-xs opacity-70">0856-9554-3964</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}