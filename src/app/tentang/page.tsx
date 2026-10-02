export default function TentangPage() {
  // Data aktivitas (Rangkaian Kegiatan)
  const activities = [
    "Sidang Rapimnas (Sidang Pendahuluan, Pleno, Komisi)",
    "Seminar Kepemudaan",
    "Pelatihan Manajemen LDK (PMLDK)",
    "Live Podcast × UMF",
    "Gerakan Subuh Jamaah Nasional (GSJN)",
    "Menanam Pohon (Semai Asa)",
    "Business Case Competition & Poster",
    "Field Trip Semarang & Malam Keakraban"
  ];

  // Data Tujuan disesuaikan persis dengan dokumen referensi
  const objectives = [
    "Mempererat ukhuwah dan silaturahmi antarpimpinan serta anggota Lembaga Dakwah Kampus di tingkat nasional.",
    "Memperkuat koordinasi, komunikasi, dan sinergi antar-LDK dalam menjalankan peran dakwah di lingkungan perguruan tinggi.",
    "Menjadi wadah diskusi dan pertukaran gagasan mengenai tantangan serta peluang pengembangan dakwah kampus.",
    "Menyusun rekomendasi dan arah gerak bersama yang sesuai dengan kebutuhan serta dinamika LDK di Indonesia.",
    "Membangun jejaring kolaborasi yang berkelanjutan antarlembaga untuk memberikan kontribusi positif bagi kampus dan masyarakat.",
  ];

  // Data Misi
  const misi = [
    "Menguatkan konsolidasi nasional antar-Puskomda dan Lembaga Dakwah Kampus sebagai bagian dari upaya menyatukan arah gerak dakwah mahasiswa.",
    "Membangun ruang kolaborasi dan pertukaran gagasan antar-elemen FSLDK Indonesia dalam merespons isu dan tantangan strategis umat dan bangsa.",
    "Merumuskan arah gerak dan rekomendasi strategis yang relevan dengan kebutuhan dakwah mahasiswa di tingkat nasional maupun daerah.",
    "Mendorong lahirnya inisiatif dan kontribusi nyata yang dapat diimplementasikan oleh Puskomda dan LDK pasca-Rapimnas.",
    "Menumbuhkan semangat kepemimpinan dan kebermanfaatan bagi peserta agar mampu menjadi bagian dari gerakan mahasiswa yang memberikan dampak nyata di lingkungan masing-masing."
  ];

  return (
    <div className="min-h-screen bg-[#7d0526]/10">
      <div className="pt-10 pb-20 overflow-hidden">
        <section className="max-w-6xl mx-auto px-4">
          
          {/* Header Section dengan Animasi Hover */}
          <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#fe7002]/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <span className="relative z-10 bg-[#b70f3c]/40 border border-[#fe7002]/40 text-[#fce043] text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(254,112,2,0.3)]">
              Tentang Acara
            </span>
            <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#ede5bf] mb-4">
              Rapimnas 1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe7002] to-[#fce043]">FSLDK 2026</span>
            </h1>
            
            {/* Tema & Tagline */}
            <div className="bg-[#7d0526]/60 backdrop-blur-sm border border-[#b70f3c]/50 p-6 rounded-2xl max-w-3xl mx-auto shadow-2xl hover:shadow-[0_0_30px_rgba(254,112,2,0.15)] transition-shadow duration-500">
              <h2 className="text-[#fe7002] text-sm font-bold uppercase tracking-widest mb-2">Tema Utama</h2>
              <p className="text-[#ede5bf] text-base md:text-xl font-serif italic font-medium">
                "Diponegoro's Spirit: Berdikarya dalam Gerak, Berdampak bagi Bangsa"
              </p>
            </div>
          </div>

          {/* Main Description Card */}
          <div className="bg-[#7d0526]/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-[#b70f3c]/40 shadow-2xl mb-16 relative overflow-hidden group hover:border-[#fe7002]/50 transition-colors duration-500">
            {/* Dekorasi background tipis animasi putar */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#b70f3c]/20 rounded-full blur-3xl group-hover:rotate-180 transition-transform duration-[3000ms]"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#fe7002]/10 rounded-full blur-3xl group-hover:-rotate-180 transition-transform duration-[3000ms]"></div>
            
            <p className="text-[#ede5bf]/90 leading-relaxed text-lg text-justify md:text-center relative z-10 font-medium">
              Rapimnas × FSLDK 2026 merupakan forum nasional yang mempertemukan pimpinan dan perwakilan <span className="font-bold text-[#fe7002]">Lembaga Dakwah Kampus (LDK)</span> dari berbagai perguruan tinggi di Indonesia. Kegiatan ini menjadi ruang silaturahmi, konsolidasi, dan pertukaran gagasan dalam memperkuat peran serta sinergi LDK di tingkat nasional.
              <br />
              <br />
              Melalui rangkaian agenda persidangan, diskusi, dan forum silaturahmi, Rapimnas × FSLDK 2026 diharapkan mampu menghasilkan gagasan, rekomendasi, serta arah gerak bersama yang relevan dengan dinamika dakwah kampus. Kegiatan ini juga menjadi momentum untuk memperluas jejaring, mempererat ukhuwah, dan membangun kolaborasi antarlembaga demi memberikan kontribusi positif bagi kehidupan kampus dan masyarakat.
            </p>
          </div>

          {/* Visi & Misi Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#ede5bf] relative inline-block">
                Visi & Misi
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#fe7002] rounded-full"></div>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Card Visi */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#b70f3c]/80 to-[#7d0526] border border-[#fe7002]/40 p-8 md:p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(183,15,60,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fe7002]/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#fe7002] rounded-2xl flex items-center justify-center text-[#7d0526] mb-6 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#fce043] mb-4 uppercase tracking-wider">Visi</h3>
                  <p className="text-[#ede5bf] text-lg leading-relaxed font-medium italic">
                    “Mewujudkan Rapimnas 1 FSLDK Indonesia 2026 sebagai ruang konsolidasi dan kolaborasi untuk menguatkan arah gerak dakwah mahasiswa yang progresif dan berdampak bagi umat dan bangsa.”
                  </p>
                </div>
              </div>

              {/* Card Misi */}
              <div className="lg:col-span-7 bg-[#7d0526]/40 backdrop-blur-md border border-[#b70f3c]/50 p-8 md:p-10 rounded-[2rem] hover:border-[#fe7002]/40 transition-colors duration-500 shadow-xl">
                <h3 className="text-2xl font-bold text-[#fce043] mb-6 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#fe7002]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  MISI
                </h3>
                <div className="space-y-4">
                  {misi.map((item, index) => (
                    <div key={index} className="flex gap-4 p-3 rounded-xl hover:bg-[#b70f3c]/20 transition-colors duration-300 group/misi">
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-[#b70f3c]/40 text-[#fe7002] font-bold group-hover/misi:bg-[#fe7002] group-hover/misi:text-[#7d0526] transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-[#ede5bf]/90 leading-relaxed text-sm md:text-base pt-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tujuan & Rangkaian Kegiatan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Tujuan Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#ede5bf] relative inline-block">
                  Tujuan Pelaksanaan
                  <div className="absolute -bottom-3 left-0 w-16 h-1.5 bg-[#fe7002] rounded-full"></div>
                </h2>
              </div>
              <ul className="space-y-4">
                {objectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-transparent to-transparent hover:from-[#b70f3c]/20 hover:to-transparent border border-transparent hover:border-[#b70f3c]/30 transition-all duration-300 group">
                    <div className="mt-1 flex-shrink-0 text-[#fe7002] group-hover:scale-125 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[#ede5bf]/90 text-sm md:text-base leading-relaxed">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rangkaian Kegiatan (Timeline Style) */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#ede5bf] relative inline-block">
                  Rangkaian Kegiatan
                  <div className="absolute -bottom-3 left-0 w-16 h-1.5 bg-[#fe7002] rounded-full"></div>
                </h2>
              </div>
              <div className="space-y-3">
                {activities.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-5 bg-gradient-to-r from-[#7d0526]/60 to-transparent p-4 rounded-2xl border border-[#b70f3c]/30 hover:border-[#fe7002]/50 hover:bg-[#b70f3c]/30 transition-all duration-300 group hover:translate-x-3 cursor-default"
                  >
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#b70f3c] border border-[#fe7002]/40 text-[#fce043] font-bold group-hover:bg-[#fe7002] group-hover:text-[#7d0526] transition-colors duration-300 shadow-md">
                      {index + 1}
                    </div>
                    <span className="text-[#ede5bf] text-sm md:text-base font-medium group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>
      </div>
    </div>
  );
}