"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mendeteksi posisi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi untuk kembali ke atas dengan mulus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <button 
        onClick={scrollToTop}
        className="relative group focus:outline-none flex flex-col items-center"
        aria-label="Kembali ke atas"
      >
        {/* Tooltip teks yang muncul saat kursor diarahkan ke maskot */}
        <span className="absolute -top-12 bg-[#7d0526] text-[#fce043] text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap border border-[#fe7002]/40">
          Kembali ke Atas ↑
        </span>
        
        {/* Lingkaran pembungkus Maskot */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#b70f3c]/20 backdrop-blur-md rounded-full border-2 border-[#fe7002]/50 p-1 shadow-[0_0_15px_rgba(254,112,2,0.3)] group-hover:shadow-[0_0_25px_rgba(252,224,67,0.6)] group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center overflow-hidden">
          <Image 
            src="/MASKOT.png" 
            alt="Back to top" 
            width={80} 
            height={80} 
            className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </button>
    </div>
  );
}