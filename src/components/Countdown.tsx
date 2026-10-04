"use client";

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Target waktu: 12 November 2026, jam 08:00 WIB
    const targetDate = new Date("2026-11-12T08:00:00+07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 bg-[#b70f3c]/40 backdrop-blur-md border border-[#fe7002]/40 px-6 py-3 md:px-8 md:py-3.5 rounded-full shadow-lg mx-auto">
      <span className="text-[#ede5bf] text-sm font-semibold tracking-wide uppercase">
        Menuju Acara
      </span>
      
      <div className="flex items-center gap-3 md:gap-4 text-[#fce043] font-bold">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-xs font-medium text-[#ede5bf]">Hari</span>
        </div>
        <span className="text-[#fe7002] animate-pulse">:</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs font-medium text-[#ede5bf]">Jam</span>
        </div>
        <span className="text-[#fe7002] animate-pulse">:</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs font-medium text-[#ede5bf]">Mnt</span>
        </div>
        <span className="text-[#fe7002] animate-pulse">:</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs font-medium text-[#ede5bf]">Dtk</span>
        </div>
      </div>
    </div>
  );
}