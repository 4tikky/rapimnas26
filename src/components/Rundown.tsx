"use client";

import { useState } from 'react';

export default function Rundown() {
  // State untuk menyimpan hari apa yang sedang aktif/diklik (Default: 0 alias Hari 1)
  const [activeDay, setActiveDay] = useState(0);

  // Data jadwal lengkap tanggal 5-8 November 2026
  // Silakan ganti teks time, title, dan desc sesuai dengan rundown aslinya nanti
  const scheduleData = [
    {
      day: "Hari 1",
      date: "Kamis, 5 Nov 2026",
      agenda: [
        { time: "13:00 - 15:00", title: "Kedatangan & Registrasi Peserta", desc: "Delegasi tiba di lokasi penginapan Universitas Diponegoro." },
        { time: "15:30 - 17:30", title: "Networking & Technical Meeting", desc: "Sesi perkenalan antar delegasi LDK se-Indonesia." },
        { time: "19:30 - 22:00", title: "Grand Opening RAPIMNAS 1", desc: "Pembukaan resmi, sambutan, dan Keynote Speech." }
      ]
    },
    {
      day: "Hari 2",
      date: "Jumat, 6 Nov 2026",
      agenda: [
        { time: "08:00 - 11:30", title: "Sidang Nasional Pleno I", desc: "Pembahasan tata tertib dan pemaparan agenda strategis." },
        { time: "11:30 - 13:30", title: "ISHOMA & Sholat Jumat", desc: "Istirahat, makan siang, dan ibadah." },
        { time: "13:30 - 17:30", title: "Sidang Komisi Nasional", desc: "Pembagian kelompok diskusi berdasarkan isu dan wilayah kerja." },
        { time: "19:30 - 22:00", title: "Lanjutan Sidang Komisi", desc: "Finalisasi hasil diskusi komisi." }
      ]
    },
    {
      day: "Hari 3",
      date: "Sabtu, 7 Nov 2026",
      agenda: [
        { time: "08:00 - 12:00", title: "Kajian & Seminar Nasional", desc: "Menghadirkan pembicara nasional untuk menambah wawasan delegasi." },
        { time: "13:00 - 15:30", title: "Sidang Paripurna & Pengesahan", desc: "Pembacaan hasil sidang komisi dan ketuk palu pengesahan." },
        { time: "16:00 - 17:30", title: "Aksi Damai Palestina", desc: "Aksi solidaritas kemanusiaan bersama seluruh delegasi." }
      ]
    },
    {
      day: "Hari 4",
      date: "Minggu, 8 Nov 2026",
      agenda: [
        { time: "07:00 - 11:00", title: "Semarang Heritage Field Trip", desc: "Mengeksplorasi kekayaan budaya dan sejarah di Kota Semarang." },
        { time: "11:00 - 13:00", title: "Closing Ceremony & Sayonara", desc: "Penutupan acara, pembagian sertifikat, dan kepulangan delegasi." }
      ]
    }
  ];

  return (
    <section id="rundown" className="max-w-4xl mx-auto px-4 py-16">
      
      {/* Header Jadwal */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">Jadwal Acara</h2>
        <p className="text-slate-300 mt-2">Rangkaian kegiatan RAPIMNAS 1 dari tanggal 5 - 8 November 2026.</p>
      </div>
      
      {/* Tab Navigasi Hari */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
        {scheduleData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 border ${
              activeDay === index 
                ? 'bg-red-600 text-white border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)] scale-105' 
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            <div className="text-sm md:text-base">{tab.day}</div>
            <div className={`text-xs mt-1 ${activeDay === index ? 'text-red-200' : 'text-slate-500'}`}>
              {tab.date}
            </div>
          </button>
        ))}
      </div>

      {/* Konten Jadwal Sesuai Tab yang Aktif */}
      <div className="space-y-4 animate-fade-in">
        {scheduleData[activeDay].agenda.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row gap-4 md:gap-8 bg-[#1a2340]/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 group"
          >
            <div className="md:w-48 shrink-0">
              <span className="text-red-300 font-semibold bg-red-950/50 border border-red-500/30 px-4 py-2 rounded-lg inline-block shadow-inner group-hover:bg-red-900/60 transition-colors">
                {item.time}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{item.title}</h3>
              <p className="text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}