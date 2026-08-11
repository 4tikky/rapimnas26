import Link from 'next/link';

export default function ArsipPage() {
  const publicResources = [
    {
      title: "Logo RAPIMNAS 1 & FSLDK",
      description: "Unduh logo resmi RAPIMNAS 1 2026 dan logo FSLDK Indonesia format PNG resolusi tinggi (High-Res) untuk keperluan publikasi LDK kampus Anda.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      link: "#", 
      btnText: "Unduh Logo"
    },
    {
      title: "Twibbon & Caption Publikasi",
      description: "Mari meriahkan timeline media sosial dengan menggunakan Twibbon resmi RAPIMNAS 1. Sudah termasuk template caption untuk Instagram.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: "#", 
      btnText: "Pasang Twibbon"
    },
    {
      title: "Panduan Lomba Essai Nasional",
      description: "Buku panduan lengkap (syarat, ketentuan, dan timeline) Lomba Essai Nasional dalam rangka menyemarakkan RAPIMNAS 1 FSLDK Indonesia.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      link: "#", 
      btnText: "Unduh Panduan"
    },
    {
      title: "Proposal Sponsorship",
      description: "Bagi instansi atau perusahaan yang ingin berkolaborasi menyukseskan acara nasional ini, silakan unduh penawaran kerja sama kami.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.97 23.97 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      link: "#", 
      btnText: "Unduh Proposal"
    }
  ];

  return (
    <div className="min-h-screen pt-10 pb-20">
      
      {/* Header Halaman */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white mb-4">
          Pusat <span className="text-red-400">Unduhan</span>
        </h1>
        <p className="relative z-10 text-slate-300 max-w-2xl mx-auto">
          Kumpulan berkas publik, aset visual, dan dokumen pendukung RAPIMNAS 1 FSLDK Indonesia 2026 yang dapat diakses secara bebas.
        </p>
      </div>

      {/* Grid Download Cards */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {publicResources.map((item, index) => (
            <div 
              key={index}
              className="bg-[#1a2340]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-red-500/30 hover:-translate-y-2 hover:shadow-[0_15px_30px_-15px_rgba(220,38,38,0.2)] transition-all duration-300 flex flex-col h-full group/card"
            >
              {/* Wadah Ikon dengan warna dinamis menyesuaikan ikon */}
              <div className="w-14 h-14 bg-[#12182b] rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner group-hover/card:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 w-full bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-500 text-white font-medium py-3 rounded-xl transition-colors duration-300 group"
              >
                {item.btnText}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}