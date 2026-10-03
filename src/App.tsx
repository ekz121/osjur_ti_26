/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { Footer } from './components/Footer';
import { BerandaPage } from './components/pages/BerandaPage';
import { ProfilProdiPage } from './components/pages/ProfilProdiPage';
import { KegiatanPage } from './components/pages/KegiatanPage';
import { DresscodePage } from './components/pages/DresscodePage';
import { PenugasanPage } from './components/pages/PenugasanPage';
import { PengumpulanPage } from './components/pages/PengumpulanPage';
import { DokumentasiPage } from './components/pages/DokumentasiPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <BerandaPage onNavigate={handleNavigate} />;
      case 'profil':
        return <ProfilProdiPage />;
      case 'kegiatan':
        return <KegiatanPage />;
      case 'dresscode':
        return <DresscodePage />;
      case 'penugasan':
        return <PenugasanPage />;
      case 'pengumpulan':
        return <PengumpulanPage />;
      case 'dokumentasi':
        return <DokumentasiPage />;
      default:
        return <BerandaPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0A1A44] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Mobile Full Menu Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area: Mobile First (390px feel on small screen, clean max-w-6xl on desktop) */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        {renderCurrentPage()}
      </main>

      {/* Footer Biru */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
