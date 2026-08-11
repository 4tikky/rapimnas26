import Link from 'next/link';

export default function ArsipPage() {
  const publicResources = [
    {
      title: "Logo RAPIMNAS 1 & FSLDK",
      description: "Unduh logo resmi RAPIMNAS 1 2026 dan logo FSLDK Indonesia format PNG resolusi tinggi (High-Res) untuk keperluan publikasi LDK kampus Anda.",
      icon: "🎨",
      link: "#", // Ganti dengan link GDrive Logo
      btnText: "Unduh Logo"
    },
    {
      title: "Twibbon & Caption Publikasi",
      description: "Mari meriahkan timeline media sosial dengan menggunakan Twibbon resmi RAPIMNAS 1. Sudah termasuk template caption untuk Instagram.",
      icon: "🖼️",
      link: "#", // Ganti dengan link Twibbonize / GDrive
      btnText: "Pasang Twibbon"
    },
    {
      title: "Panduan Lomba Essai Nasional",
      description: "Buku panduan lengkap (syarat, ketentuan, dan timeline) Lomba Essai Nasional dalam rangka menyemarakkan RAPIMNAS 1 FSLDK Indonesia.",
      icon: "📝",
      link: "#", // Ganti dengan link GDrive Guidebook Lomba
      btnText: "Unduh Panduan"
    },
    {
      title: "Proposal Sponsorship",
      description: "Bagi instansi atau perusahaan yang ingin berkolaborasi menyukseskan acara nasional ini, silakan unduh penawaran kerja sama kami.",
      icon: "🤝",
      link: "#", // Ganti dengan link GDrive Proposal
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
              className="bg-[#1a2340]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-red-500/30 hover:-translate-y-2 hover:shadow-[0_15px_30px_-15px_rgba(220,38,38,0.2)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/5 shadow-inner">
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