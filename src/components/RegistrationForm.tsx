"use client";

import { useState } from 'react';

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; 
    setIsSubmitting(true);

    const formData = new FormData(form);
    
    // Tambahkan link_berkas ke dalam payload data
    const data = {
      nama: formData.get('nama'),
      email: formData.get('email'),
      nim: formData.get('nim'),
      divisi: formData.get('divisi'),
      alasan: formData.get('alasan'),
      link_berkas: formData.get('link_berkas'), 
    };

    try {
      // PASTIKAN URL INI SUDAH BENAR
      const scriptURL = "MASUKKAN_URL_APPS_SCRIPT_DI_SINI";
      
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      alert("Pendaftaran berhasil! Silakan tunggu info selanjutnya.");
      form.reset(); 
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="daftar" className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-[#1a2340]/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Form Pendaftaran Panitia</h2>
          <p className="text-slate-300 mt-2">Open Recruitment Kepanitiaan RAPIMNAS 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Nama Lengkap</label>
            <input 
              type="text" 
              name="nama"
              required 
              placeholder="Masukkan nama lengkap"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                required 
                placeholder="nama@students.undip.ac.id"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">NIM</label>
              <input 
                type="text" 
                name="nim"
                required 
                placeholder="Nomor Induk Mahasiswa"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Pilihan Divisi</label>
            <select 
              name="divisi"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer [&>option]:bg-[#1a2340]"
            >
              <option value="">-- Pilih Divisi --</option>
              <option value="Acara">Divisi Acara</option>
              <option value="Media & Informasi">Divisi Media & Informasi</option>
              <option value="Humas & Sponsorship">Divisi Humas & Sponsorship</option>
              <option value="Perlengkapan">Divisi Perlengkapan</option>
              <option value="Konsumsi">Divisi Konsumsi</option>
            </select>
          </div>
          
          {/* INPUT BARU: LINK BERKAS */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Link CV & Portofolio (Google Drive)</label>
            <input 
              type="url" 
              name="link_berkas"
              required 
              placeholder="Pastikan akses link sudah 'Anyone with the link'"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Alasan Mendaftar</label>
            <textarea 
              name="alasan"
              required 
              rows={4}
              placeholder="Ceritakan singkat kenapa kamu ingin bergabung..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400/50 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-red-900/50 flex justify-center items-center gap-2"
          >
            {isSubmitting ? 'Mengirim Data...' : 'Kirim Pendaftaran'}
          </button>
        </form>
      </div>
    </section>
  );
}