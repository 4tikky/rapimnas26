"use client";

export default function PickupLocation() {
  const locations = [
    {
      name: "Stasiun Semarang Tawang",
      type: "Kereta Api",
      desc: "Titik kumpul berada di area parkir kedatangan pintu utama Stasiun Tawang.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 15.375v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 15.375c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v1.5m0-1.5c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
        </svg>
      ),
      mapLink: "https://www.google.com/maps/search/?api=1&query=Stasiun+Semarang+Tawang"
    },
    {
      name: "Stasiun Poncol Semarang",
      type: "Kereta Api",
      desc: "Titik kumpul berada di pintu keluar penumpang (sebelah minimarket).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125" />
        </svg>
      ),
      mapLink: "https://www.google.com/maps/search/?api=1&query=Stasiun+Poncol+Semarang"
    },
    {
      name: "Bandara Ahmad Yani",
      type: "Pesawat",
      desc: "Titik kumpul di selasar penjemputan kedatangan domestik.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
      mapLink: "https://www.google.com/maps/search/?api=1&query=Bandara+Internasional+Jenderal+Ahmad+Yani+Semarang"
    },
    {
      name: "Terminal Banyumanik",
      type: "Bus",
      desc: "Titik kumpul berada di ruang tunggu penumpang (lobby utama).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      mapLink: "https://www.google.com/maps/search/?api=1&query=Terminal+Banyumanik+Semarang"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-rapimnas-yellow mb-3">Titik Penjemputan Peserta</h2>
        <p className="text-rapimnas-cream max-w-2xl mx-auto">
          Panitia memfasilitasi penjemputan delegasi di 4 titik utama kedatangan Kota Semarang. Silakan hubungi LO Anda saat tiba di lokasi berikut.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((loc, index) => (
          <div 
            key={index}
            className="bg-[#59041b] border border-rapimnas-red/30 p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-start hover:border-rapimnas-orange transition-colors duration-300 shadow-lg"
          >
            {/* Ikon Transportasi */}
            <div className="bg-rapimnas-red text-rapimnas-cream p-4 rounded-xl shrink-0">
              {loc.icon}
            </div>

            {/* Info Lokasi */}
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-rapimnas-orange mb-1">
                Jalur {loc.type}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{loc.name}</h3>
              <p className="text-rapimnas-cream/80 text-sm mb-4 leading-relaxed">
                {loc.desc}
              </p>
              
              {/* Tombol Buka Maps */}
              <a 
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-rapimnas-orange text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}