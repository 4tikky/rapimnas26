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
      <body className={`${inter.className} bg-gradient-to-b from-[#5A0A10] to-[#121B35] min-h-screen text-slate-100 flex flex-col`}>
        {/* Header otomatis ada di semua halaman */}
        <Header />
        
        {/* Konten utama dari masing-masing page.tsx akan masuk ke sini */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer otomatis ada di semua halaman */}
        <Footer />
      </body>
    </html>
  );
}