import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { HmtiLogo } from './HmtiLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const infoOsjurSubItems: { id: PageId; label: string; desc: string }[] = [
  { id: 'guidebook', label: 'Guidebook VOTECH', desc: 'Baca & download panduan resmi' },
  { id: 'kegiatan', label: 'Rangkaian Kegiatan', desc: 'Agenda online & offline' },
  { id: 'dresscode', label: 'Dresscode & Atribut', desc: 'Ketentuan pakaian resmi' },
  { id: 'penugasan', label: 'Penugasan Maba', desc: 'Daftar instruksi & deadline' },
  { id: 'pengumpulan', label: 'Portal Pengumpulan', desc: 'Tautan form pengumpulan tugas' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isInfoOsjurActive =
    currentPage === 'kegiatan' ||
    currentPage === 'guidebook' ||
    currentPage === 'dresscode' ||
    currentPage === 'penugasan' ||
    currentPage === 'pengumpulan';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#1865F2] text-white sticky top-0 z-40 border-b border-white/10 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Logo & Name (Clean, without redundant Info OSJUR button) */}
        <button
          onClick={() => onNavigate('beranda')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <HmtiLogo className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base md:text-lg tracking-tight text-white leading-tight">
              VOTECH
            </span>
            <span className="hidden sm:inline text-[10px] font-medium text-white/80 uppercase tracking-wider">
              Politeknik Semen Indonesia
            </span>
          </div>
        </button>

        {/* Desktop Nav Links: Beranda, Profil Prodi, Info OSJUR (Dropdown disini), Dokumentasi */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* 1. Beranda */}
          <button
            onClick={() => onNavigate('beranda')}
            className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1.5 ${
              currentPage === 'beranda'
                ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#FFA033] after:rounded-full'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Beranda
          </button>

          {/* 2. Profil Prodi */}
          <button
            onClick={() => onNavigate('profil')}
            className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1.5 ${
              currentPage === 'profil'
                ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#FFA033] after:rounded-full'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Profil Prodi
          </button>

          {/* 3. Info OSJUR with Dropdown in the main nav list */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1.5 inline-flex items-center gap-1.5 ${
                isInfoOsjurActive
                  ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#FFA033] after:rounded-full'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>Info VOTECH</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white text-[#1A284E] rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1865F2]">
                    Panduan & Informasi VOTECH
                  </span>
                </div>
                {infoOsjurSubItems.map((sub) => {
                  const isActive = currentPage === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        onNavigate(sub.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer flex flex-col ${
                        isActive
                          ? 'bg-[#EBF3FF] text-[#1865F2]'
                          : 'hover:bg-slate-50 text-[#1A284E]'
                      }`}
                    >
                      <span className="text-xs font-bold leading-tight">
                        {sub.label}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5">
                        {sub.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 4. Dokumentasi */}
          <button
            onClick={() => onNavigate('dokumentasi')}
            className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1.5 ${
              currentPage === 'dokumentasi'
                ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#FFA033] after:rounded-full'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Galeri
          </button>
        </nav>

        {/* Action Button: "Kumpulkan Tugas Sekarang" */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('pengumpulan')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFA033] hover:bg-[#F59020] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span>Kumpulkan Tugas Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="min-h-[44px] inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/10 px-3 text-xs font-bold text-white transition-colors hover:bg-white/20 lg:hidden cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
