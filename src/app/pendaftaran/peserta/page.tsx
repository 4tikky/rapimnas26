import Link from 'next/link';
import Image from 'next/image';
import PickupLocation from '@/components/PickupLocation';

export default function PendaftaranPesertaPage() {
  
  // Masukkan link Google Form pendaftaran Anda di sini
  const linkPendaftaranGForm = "https://forms.gle/ContohLinkPendaftaran";
  
  // Masukkan link Google Drive untuk Guidebook Anda di sini
  const linkGuidebook = "https://canva.link/guidebookpesertarapimnas26";

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
                    <p className="text-[#ede5bf]/70 text-sm">5 - 16 Oktober 2026</p>
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
                <div className="bg-[#b70f3c]/20 p-5 rounded-xl border border-[#b70f3c]/40">
                  <div className="flex justify-between items-center border-b border-[#b70f3c]/40 pb-4 mb-4">
                    <span className="text-[#fce043] font-bold text-2xl">Rp 550.000</span>
                  </div>
                  <div>
                    <span className="text-[#ede5bf]/80 text-sm block mb-1">Metode Pembayaran:</span>
                    <span className="text-[#ede5bf] font-semibold block">BSI 7278224532</span>
                    <span className="text-[#fe7002] text-xs italic">a.n. NAURA YAZMI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian Kanan: Aksi (Tombol & Guidebook) */}
            <div className="flex flex-col justify-center space-y-8">
              
              <div className="bg-[#3d0212]/50 p-6 rounded-2xl border border-[#fe7002]/30 text-center">
                <h3 className="text-lg font-bold text-[#ede5bf] mb-2">Langkah Pendaftaran:</h3>
                <p className="text-[#ede5bf]/80 text-sm mb-6">
                  Pastikan Anda telah membaca dan menyiapkan berkas sesuai panduan pada Guidebook sebelum mendaftar.
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
                  <a href="https://wa.me/62895384252700" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#ede5bf] hover:text-[#fe7002] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#7d0526] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Fakhri</p>
                      <p className="text-xs opacity-70">0895-3842-52700</p>
                    </div>
                  </a>
                  <a href="https://wa.me/6282322196244" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#ede5bf] hover:text-[#fe7002] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#7d0526] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Alya</p>
                      <p className="text-xs opacity-70">0823-2219-6244</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* PETA TITIK PENJEMPUTAN (Baru Ditambahkan) */}
        <div className="mt-16 bg-[#7d0526]/40 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-[#b70f3c]/40">
          <div className="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#fe7002]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-[#ede5bf]">Titik Lokasi Penjemputan</h2>
          </div>
          
          <p className="text-[#ede5bf]/80 text-sm mb-6">
            Panitia memfasilitasi penjemputan di 4 titik utama kedatangan Kota Semarang.
          </p>

          {/* WADAH PETA */}
          <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden border-2 border-[#b70f3c]/40 relative group">
            {/* Ganti URL src ini dengan link Embed Google My Maps milikmu nanti */}
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1tneEBlxcaA6xdQSv-Y60v9_Cv9Iigm0&ehbc=2E312F"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

          {/* Tag Lokasi (Bisa Diklik & Buka Tab Baru) */}
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-[#fe7002]">
            <a 
              href="https://maps.app.goo.gl/uhWsicESR7dhy6rA9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b70f3c]/20 hover:bg-[#fe7002] text-[#fe7002] hover:text-[#3d0212] px-4 py-2 rounded-xl border border-[#b70f3c]/40 hover:border-[#fe7002] transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              🚆 Stasiun Tawang
            </a>
            
            <a 
              href="https://maps.app.goo.gl/HGqB5AiWU6XBdVaM8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b70f3c]/20 hover:bg-[#fe7002] text-[#fe7002] hover:text-[#3d0212] px-4 py-2 rounded-xl border border-[#b70f3c]/40 hover:border-[#fe7002] transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              🚆 Stasiun Poncol
            </a>
            
            <a 
              href="https://maps.app.goo.gl/YakbzkmQkKTNWucx9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b70f3c]/20 hover:bg-[#fe7002] text-[#fe7002] hover:text-[#3d0212] px-4 py-2 rounded-xl border border-[#b70f3c]/40 hover:border-[#fe7002] transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              ✈️ Bandara Ahmad Yani
            </a>
            
            <a 
              href="https://maps.app.goo.gl/a8YXt1uwqGtm9GkB9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b70f3c]/20 hover:bg-[#fe7002] text-[#fe7002] hover:text-[#3d0212] px-4 py-2 rounded-xl border border-[#b70f3c]/40 hover:border-[#fe7002] transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              🚌 Terminal Banyumanik
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}