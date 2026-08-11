export default function Rundown() {
  // Data jadwal bisa diedit di sini
  const schedule = [
    { time: "08:00 - 09:00", title: "Registrasi Peserta", desc: "Pendaftaran ulang dan pengambilan perlengkapan peserta." },
    { time: "09:00 - 10:30", title: "Pembukaan & Keynote Speech", desc: "Sambutan oleh Ketua Umum dan peresmian acara." },
    { time: "10:30 - 12:00", title: "Sidang Pleno I", desc: "Pembahasan agenda strategis dan tata tertib." },
    { time: "12:00 - 13:00", title: "ISHOMA", desc: "Istirahat, Sholat, dan Makan Siang." },
    { time: "13:00 - 15:30", title: "Sidang Komisi", desc: "Pembagian kelompok diskusi per wilayah kerja." },
  ];

  return (
    <section id="rundown" className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Jadwal Acara</h2>
        <p className="text-slate-600 mt-2">Rangkaian kegiatan utama selama Rapimnas berlangsung.</p>
      </div>
      
      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="md:w-48 shrink-0">
              <span className="text-blue-700 font-semibold bg-blue-50 px-4 py-2 rounded-lg inline-block">
                {item.time}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}