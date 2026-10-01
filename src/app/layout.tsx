import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Header dan Footer di sini
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapimnas FSLDK 2026",
  description: "Website Resmi Rapat Pimpinan Nasional FSLDK 2026",
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