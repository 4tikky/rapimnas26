import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Header dan Footer di sini
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAPIMNAS 1 FSLDK Indonesia 2026",
  description: "Website resmi Rapat Pimpinan Nasional 1 FSLDK Indonesia 2026 yang diselenggarakan di Universitas Diponegoro, Semarang. Dapatkan informasi jadwal, panduan, dan pendaftaran delegasi.",
  keywords: ["Rapimnas FSLDK 2026", "FSLDK Indonesia", "LDK Semarang", "Universitas Diponegoro", "Delegasi LDK"],
  openGraph: {
    title: "RAPIMNAS 1 FSLDK Indonesia 2026",
    description: "Website resmi Rapat Pimpinan Nasional 1 FSLDK Indonesia 2026 di Universitas Diponegoro, Semarang.",
    url: "https://rapimnas26.vercel.app",
    siteName: "RAPIMNAS FSLDK 2026",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#3d0212] antialiased">       
        {/* Header otomatis ada di semua halaman */}
        <Header />
        
        {/* Konten utama dari masing-masing page.tsx akan masuk ke sini */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer otomatis ada di semua halaman */}
        <Footer />
        {/* Tombol Back to Top */}
        <BackToTop />
      </body>
    </html>
  );
}