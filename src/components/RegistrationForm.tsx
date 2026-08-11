"use client";

import { useState } from 'react';

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setIsSubmitting(true);

    // Mengambil data dari form
    const formData = new FormData(e.currentTarget);
    const data = {
      nama: formData.get('nama'),
      email: formData.get('email'),
      nim: formData.get('nim'),
      divisi: formData.get('divisi'),
      alasan: formData.get('alasan'),
    };

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbyq1XiS5srpo5NrawyOSlcqKeTsY-xmQwPee394h15bpBenRk6lRlUiUxaFypVbbA_m/exec";
      
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      alert("Pendaftaran berhasil! Silakan tunggu info selanjutnya.");
      form.reset(); // Reset form setelah submit berhasil
      
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="daftar" className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Form Pendaftaran Panitia</h2>
          <p className="text-slate-600 mt-2">Open Recruitment Kepanitiaan RAPIMNAS 2026 - Undip</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
            <input 
              type="text" 
              name="nama"
              required 
              placeholder="Masukkan nama lengkap"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                required 
                placeholder="nama@students.undip.ac.id"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">NIM</label>
              <input 
                type="text" 
                name="nim"
                required 
                placeholder="Nomor Induk Mahasiswa"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Pilihan Divisi</label>
            <select 
              name="divisi"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white cursor-pointer"
            >
              <option value="">-- Pilih Divisi --</option>
              <option value="Acara">Divisi Acara</option>
              <option value="Media & Informasi">Divisi Media & Informasi</option>
              <option value="Humas & Sponsorship">Divisi Humas & Sponsorship</option>
              <option value="Perlengkapan">Divisi Perlengkapan</option>
              <option value="Konsumsi">Divisi Konsumsi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Alasan Mendaftar</label>
            <textarea 
              name="alasan"
              required 
              rows={4}
              placeholder="Ceritakan singkat kenapa kamu ingin bergabung..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2"
          >
            {isSubmitting ? 'Mengirim Data...' : 'Kirim Pendaftaran'}
          </button>
        </form>
      </div>
    </section>
  );
}