import Link from 'next/link';

export default function ArsipPage() {
  const publicResources = [
    {
      title: "Logo & Maskot RAPIMNAS 1 2026",
      description: "Unduh logo resmi dan Maskot RAPIMNAS 1 2026 Indonesia format PNG resolusi tinggi.",
      icon: (
        // Warna diubah menjadi Oranye (#fe7002)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#fe7002]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      link: "https://drive.google.com/drive/folders/14r_q9l9CKuw-4fFvy64rzXUjjHait5r3?usp=sharing", 
      btnText: "Unduh Logo"
    },
    // {
    //   title: "Twibbon & Caption Publikasi",
    //   description: "Mari meriahkan timeline media sosial dengan menggunakan Twibbon resmi RAPIMNAS 1. Sudah termasuk template caption untuk Instagram.",
    //   icon: (
    //     // Warna diubah menjadi Kuning (#fce043)
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#fce043]">
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //     </svg>
    //   ),
    //   link: "#", 
    //   btnText: "Pasang Twibbon"
    // },
    // {
    //   title: "Panduan Lomba Essai Nasional",
    //   description: "Buku panduan lengkap (syarat, ketentuan, dan timeline) Lomba Essai Nasional dalam rangka menyemarakkan RAPIMNAS 1 FSLDK Indonesia.",
    //   icon: (
    //     // Warna diubah menjadi Krem (#ede5bf)
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#ede5bf]">
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    //     </svg>
    //   ),
    //   link: "#", 
    //   btnText: "Unduh Panduan"
    // },
    {
      title: "Proposal Peserta",
      description: "Proposal lengkap untuk acara RAPIMNAS 1 FSLDK Indonesia 2026.",
      icon: (
        // Warna diubah menjadi Merah Terang (#b70f3c)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#b70f3c]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.97 23.97 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      link: "https://bit.ly/ProposalPesertaRapimnas2026", 
      btnText: "Lihat Proposal"
    }
  ];

  return (
    <div className="min-h-screen pt-10 pb-20 bg-[#3d0212]">
      
      {/* Header Halaman */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#fe7002]/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <span className="relative z-10 bg-[#b70f3c]/40 border border-[#fe7002]/40 text-[#fce043] text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(254,112,2,0.3)]">
          Pusat Unduhan
        </span>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#ede5bf] mb-4">
          Arsip & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe7002] to-[#fce043]">Dokumen</span>
        </h1>
        <p className="relative z-10 text-[#ede5bf]/80 italic">
          Kumpulan berkas publik, aset visual, dan dokumen pendukung RAPIMNAS 1 FSLDK Indonesia 2026        </p>
      </div>

      {/* List Download Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col gap-4 relative z-10">
          
          {publicResources.map((item, index) => (
            <div 
              key={index}
              className="bg-[#7d0526]/30 backdrop-blur-md p-6 rounded-2xl border border-[#b70f3c]/40 hover:border-[#fe7002]/50 hover:-translate-y-1 hover:shadow-[0_10px_25px_-10px_rgba(254,112,2,0.3)] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-5 group/list"
            >
              {/* Wadah Ikon di sebelah kiri */}
              <div className="shrink-0 w-14 h-14 bg-[#3d0212] rounded-xl flex items-center justify-center border border-[#b70f3c]/50 shadow-inner group-hover/list:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Teks Konten di tengah */}
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-bold text-[#ede5bf] mb-1 group-hover/list:text-[#fce043] transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-[#ede5bf]/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Tombol Unduh di sebelah kanan */}
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 inline-flex justify-center items-center gap-2 w-full md:w-auto px-6 py-3 bg-[#3d0212] hover:bg-[#fe7002] border border-[#b70f3c]/50 hover:border-[#fe7002] text-[#ede5bf] hover:text-[#3d0212] font-bold rounded-xl transition-colors duration-300 group mt-2 md:mt-0"
              >
                {item.btnText}
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}