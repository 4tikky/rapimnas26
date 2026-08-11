export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 pt-10 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Kiri: Identitas Acara */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-white">RAPIMNAS FSLDK 2026</h3>
          <p className="text-slate-400 text-sm mt-1">Diselenggarakan di Universitas Diponegoro, Semarang</p>
        </div>

        {/* Kanan: Sosial Media */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-slate-300 font-semibold text-sm">Ikuti Info Terbaru:</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a 
              href="https://instagram.com/rapimnas_fsldk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-red-400 transition flex items-center gap-2 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-red-400/30"
            >
              📸 IG: @rapimnas_fsldk
            </a>
            <a 
              href="https://tiktok.com/@rapimnas.fsldk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-red-400 transition flex items-center gap-2 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-red-400/30"
            >
              🎵 TikTok: @rapimnas.fsldk
            </a>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-4 text-center mt-10 pt-6 border-t border-white/5 text-slate-500 text-xs">
        &copy; 2026 Divisi Multimedia RAPIMNAS FSLDK. All rights reserved.
      </div>
    </footer>
  );
}