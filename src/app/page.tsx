import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Open Recruitment Panitia
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 leading-tight">
          Mari Bergabung Mensukseskan <br className="hidden md:inline" />
          <span className="text-blue-600">RAPIMNAS 2026</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
          Universitas Diponegoro, Semarang
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {/* Link ini sekarang mengarah ke halaman (route) baru */}
          <Link href="/pendaftaran/panitia" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition">
            Daftar Panitia
          </Link>
          <Link href="/jadwal" className="bg-white hover:bg-slate-100 text-slate-700 font-medium px-6 py-3 rounded-xl border border-slate-200 transition">
            Timeline Oprec
          </Link>
        </div>
      </section>
    </div>
  );
}