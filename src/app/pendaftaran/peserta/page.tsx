"use client";

import { useState } from 'react';

export default function PendaftaranPesertaPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; 
    setIsSubmitting(true);

    // Di sini nantinya kamu bisa masukkan logika ke Google Apps Script
    // seperti yang ada di form panitia.
    setTimeout(() => {
      alert("Pendaftaran Delegasi berhasil! Silakan tunggu konfirmasi panitia.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-10 pb-20">
      
      {/* Header Halaman */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Pendaftaran Delegasi</h1>
        <p className="text-slate-300">Rapat Pimpinan Nasional 1 FSLDK Indonesia 2026</p>
      </div>

      <section className="max-w-3xl mx-auto px-4">
        
        {/* 1. KOTAK BERKAS (Resource Section) */}
        <div className="bg-red-950/30 border border-red-500/30 p-6 md:p-8 rounded-3xl mb-10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📥</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Berkas Persyaratan</h3>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                Sebelum mengisi formulir pendaftaran, pastikan Anda telah mengunduh, membaca, dan melengkapi dokumen berikut. Satukan dokumen yang telah diisi ke dalam satu folder Google Drive Anda (pastikan aksesnya "Anyone with the link").
              </p>
              
              {/* Tombol-tombol Download */}
              <div className="flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl border border-white/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Guide Book Peserta
                </a>
                <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl border border-white/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Surat Rekomendasi Delegasi
                </a>
                <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl border border-white/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Surat Undangan LDK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FORMULIR PENDAFTARAN */}
        <div className="bg-[#1a2340]/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Data Delegasi</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Nama Lengkap</label>
                <input type="text" required placeholder="Sesuai KTP/KTM" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">No. WhatsApp</label>
                <input type="tel" required placeholder="081234567890" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Asal Kampus / Instansi</label>
              <input type="text" required placeholder="Contoh: Universitas Diponegoro" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Status Delegasi</label>
              <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer [&>option]:bg-[#1a2340]">
                <option value="">-- Pilih Status --</option>
                <option value="puskomnas">Pengurus Puskomnas</option>
                <option value="puskomda">Pengurus Puskomda</option>
                <option value="ldk">Delegasi LDK Kampus</option>
              </select>
            </div>

            <div className="pt-4">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Link Folder Google Drive (Berkas)
                <span className="text-red-400 ml-1">*</span>
              </label>
              <input type="url" required placeholder="https://drive.google.com/drive/folders/..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <p className="text-xs text-slate-400 mt-2">Pastikan folder berisi Scan KTM, Surat Rekomendasi LDK, dan berkas lainnya sesuai Guide Book.</p>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-red-600 hover:bg-red-700 disabled:bg-red-400/50 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-red-900/50 flex justify-center items-center gap-2">
              {isSubmitting ? 'Memproses...' : 'Kirim Pendaftaran Delegasi'}
            </button>
          </form>
        </div>
        
      </section>
    </div>
  );
}