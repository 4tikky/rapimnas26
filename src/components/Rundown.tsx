"use client";

import { useState } from 'react';

export default function Rundown() {
  // Data Jadwal berdasarkan dokumen "Rancangan Guidebook Rapimnas x FSLDK.docx"
  const scheduleData = [
    {
      day: "Hari Pertama",
      date: "12 November 2026",
      events: [
        { time: "Siang - Sore", title: "Kedatangan Peserta", desc: "Penyambutan akbar delegasi LDK dari seluruh Indonesia di Universitas Diponegoro." },
        { time: "Malam", title: "Malam Keakraban Peserta", desc: "Momen untuk melepas penat, mempererat ukhuwah, dan membangun kedekatan antardelegasi." }
      ]
    },
    {
      day: "Hari Kedua",
      date: "13 November 2026",
      events: [
        { time: "Dini Hari", title: "Tahajud Berjamaah", desc: "Memulai hari dengan ibadah dan munajat bersama." },
        { time: "Pagi", title: "Grand Opening RAPIMNAS", desc: "Pembukaan resmi rangkaian Rapimnas FSLDK Indonesia 2026." },
        { time: "Siang", title: "Sidang Pendahuluan & Komisi", desc: "Awal rangkaian sidang untuk mengevaluasi gerak bersama dan isu strategis." },
        { time: "Sore", title: "Seminar Kepemudaan & Final Lomba", desc: "Ruang inspirasi generasi muda serta ajang Business Case Competition & Desain Poster." },
        { time: "Malam", title: "Live Podcast: Palestine", desc: "Sesi diskusi inspiratif 'More Than What You See: Mengenal Palestina dari Sisi yang Jarang Kita Ceritakan'." }
      ]
    },
    {
      day: "Hari Ketiga",
      date: "14 November 2026",
      events: [
        { time: "Pagi", title: "Sidang Komisi (Lanjutan)", desc: "Melanjutkan pembahasan agenda strategis nasional." },
        { time: "Siang", title: "Tanam Pohon (Semai Asa)", desc: "Aksi nyata kepedulian terhadap lingkungan sebagai bentuk tanggung jawab ekologis." },
        { time: "Sore", title: "Bedah GD Kaderisasi & Sensus Nasional", desc: "Pemaparan sistem kaderisasi dan sosialisasi program kerja nasional." },
        { time: "Malam", title: "Pemilihan Tuan Rumah & Penutupan", desc: "Sidang penentuan tuan rumah agenda selanjutnya dan penutupan resmi persidangan." }
      ]
    },
    {
      day: "Hari Keempat",
      date: "15 November 2026",
      events: [
        { time: "Subuh", title: "Gerakan Subuh Jamaah Nasional (GSJN)", desc: "Momentum spiritual menyatukan langkah dalam ibadah salat Subuh berjamaah serentak." },
        { time: "Pagi - Siang", title: "Semarang Field Trip", desc: "Eksplorasi destinasi sejarah dan budaya di Kota Semarang sekaligus mempererat kebersamaan." }
      ]
    }
  ];

  // State untuk Tab Navigasi Hari
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4">
      
      {/* Navigasi Tab Hari */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
              activeTab === index 
                ? 'bg-[#fe7002] text-[#7d0526] border-[#fe7002] shadow-[0_0_15px_rgba(254,112,2,0.5)] scale-105' 
                : 'bg-[#7d0526]/40 text-[#ede5bf]/70 border-[#b70f3c]/40 hover:bg-[#b70f3c]/50 hover:text-[#ede5bf]'
            }`}
          >
            {day.day}
          </button>
        ))}
      </div>

      {/* Konten Timeline */}
      <div className="relative">
        {/* Garis Vertikal Timeline (Garis Merah) */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-[#b70f3c]/30 rounded-full"></div>

        {/* Render Event Berdasarkan Tab yang Aktif */}
        <div className="space-y-8 animate-fade-in">
          
          {/* Header Tanggal */}
          <div className="pl-12 md:pl-20">
            <h3 className="text-2xl font-bold text-[#fce043] mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              {scheduleData[activeTab].date}
            </h3>
          </div>

          {/* List Kegiatan */}
          {scheduleData[activeTab].events.map((event, idx) => (
            <div key={idx} className="relative pl-12 md:pl-20 group">
              
              {/* Titik Timeline (Dot) yang beranimasi saat di-hover */}
              <div className="absolute left-[0.85rem] md:left-[1.85rem] top-1.5 w-4 h-4 bg-[#7d0526] border-2 border-[#fe7002] rounded-full group-hover:bg-[#fe7002] group-hover:scale-150 group-hover:shadow-[0_0_10px_#fe7002] transition-all duration-300 z-10"></div>
              
              {/* Kartu Konten */}
              <div className="bg-[#7d0526]/30 backdrop-blur-md border border-[#b70f3c]/40 p-6 rounded-2xl shadow-lg hover:border-[#fe7002]/50 hover:bg-[#7d0526]/60 hover:-translate-y-1 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-[#b70f3c]/40 text-[#fce043] text-xs font-bold rounded-lg mb-3">
                  {event.time}
                </span>
                <h4 className="text-xl font-bold text-[#ede5bf] mb-2">{event.title}</h4>
                <p className="text-[#ede5bf]/80 text-sm md:text-base leading-relaxed">
                  {event.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}