import Header from '@/components/Header';

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Tentang RAPIMNAS 2026</h1>
        <p className="text-slate-600 leading-relaxed">
          Rapimnas merupakan forum strategis tahunan untuk menyelaraskan arah gerak, mengevaluasi program kerja, dan menentukan arah kebijakan organisasi ke depan. Tahun ini, kita berfokus pada kolaborasi dan inovasi digital.
        </p>
      </section>
    </div>
  );
}