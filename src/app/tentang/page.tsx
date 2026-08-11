import Header from '@/components/Header';

export default function TentangPage() {
  const activities = [
    "Sidang Nasional LDK Se-Indonesia",
    "Kajian dan Seminar bersama Pembicara Nasional",
    "Aksi Damai Palestina",
    "Semarang Heritage Field Trip",
    "Networking mahasiswa se-Indonesia"
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-10 pb-20">
        <section className="max-w-4xl mx-auto px-4">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="bg-red-950/50 border border-red-500/30 text-red-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              All You Need To Know
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              RAPIMNAS 1 <br className="md:hidden" />
              <span className="text-red-400">FSLDK INDONESIA</span>
            </h1>
          </div>

          {/* Main Description Card */}
          <div className="bg-[#1a2340]/60 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl mb-12 relative overflow-hidden">
            {/* Dekorasi background tipis */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <p className="text-slate-200 leading-relaxed text-lg text-justify md:text-center relative z-10">
              Forum ini merupakan rapat kerja dan konsolidasi tingkat nasional yang mempertemukan pengurus <span className="font-semibold text-white">Puskomnas (Pusat Komunikasi Nasional)</span>, <span className="font-semibold text-white">Puskomda (Pusat Komunikasi Daerah)</span>, serta perwakilan pimpinan <span className="font-semibold text-white">Lembaga Dakwah Kampus (LDK)</span> dari seluruh perguruan tinggi di Indonesia.
            </p>

            <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
              <h2 className="text-xl font-bold text-white mb-6 text-center">Forum ini menjadi ruang untuk:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-red-400/30 transition">
                  <div className="text-red-400 text-2xl mb-3">💬</div>
                  <p className="text-slate-300 font-medium">Bertemu, berdiskusi, berkoordinasi, dan bertukar gagasan.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-red-400/30 transition">
                  <div className="text-red-400 text-2xl mb-3">🎯</div>
                  <p className="text-slate-300 font-medium">Wadah untuk menyusun langkah strategis dakwah kampus nasional.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's In Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white relative inline-block">
              What's in RAPIMNAS 1?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-500 rounded-full"></div>
            </h2>
          </div>
          
          {/* List Kegiatan (Timeline Style) */}
          <div className="max-w-2xl mx-auto space-y-4">
            {activities.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-6 bg-gradient-to-r from-[#1a2340] to-transparent p-5 rounded-2xl border border-white/5 hover:border-red-500/30 hover:bg-white/5 transition-all group"
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-red-950/50 border border-red-500/30 text-red-400 font-bold group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <span className="text-slate-200 text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
}