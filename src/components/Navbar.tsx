import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PageId } from '../types';
import { HmtiLogo } from './HmtiLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const infoOsjurSubItems: { id: PageId; label: string; desc: string }[] = [
  { id: 'kegiatan', label: 'Rangkaian Kegiatan', desc: 'Jadwal & agenda tiap hari' },
  { id: 'dresscode', label: 'Dresscode', desc: 'Ketentuan pakaian & atribut' },
  { id: 'penugasan', label: 'Penugasan', desc: 'Daftar & instruksi tugas' },
  { id: 'pengumpulan', label: 'Pengumpulan', desc: 'Tautan form pengumpulan' },
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
    <header className="sticky top-0 z-30 w-full bg-white border-b border-[#D6E2FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Brand with HMTI Logo */}
        <button
          onClick={() => onNavigate('beranda')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none cursor-pointer"
        >
          <HmtiLogo className="w-8 h-8 md:w-9 md:h-9" />
          <div className="flex flex-col">
            <span className="font-extrabold text-base md:text-lg tracking-tight text-[#0A1A44] leading-tight">
              OSJUR D3 TI
            </span>
            <span className="hidden sm:inline text-[11px] font-medium text-[#4A5A85] -mt-0.5">
              Politeknik Semen Indonesia
            </span>
          </div>
        </button>

        {/* Desktop Nav Links (Beranda, Profil Prodi, Info OSJUR dropdown, Dokumentasi) */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* 1. Beranda */}
          <button
            onClick={() => {
              onNavigate('beranda');
              setIsDropdownOpen(false);
            }}
            className={`text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              currentPage === 'beranda'
                ? 'bg-[#1A56FF] text-white rounded-full px-4 py-1.5 shadow-xs'
                : 'text-[#4A5A85] hover:text-[#1A56FF] px-3.5 py-1.5 rounded-full hover:bg-[#EAF0FF]'
            }`}
          >
            Beranda
          </button>

          {/* 2. Profil Prodi */}
          <button
            onClick={() => {
              onNavigate('profil');
              setIsDropdownOpen(false);
            }}
            className={`text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              currentPage === 'profil'
                ? 'bg-[#1A56FF] text-white rounded-full px-4 py-1.5 shadow-xs'
                : 'text-[#4A5A85] hover:text-[#1A56FF] px-3.5 py-1.5 rounded-full hover:bg-[#EAF0FF]'
            }`}
          >
            Profil Prodi
          </button>

          {/* 3. Info OSJUR (Dropdown with Rangkaian Kegiatan, Dresscode, Penugasan, Pengumpulan) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`text-sm font-semibold transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 ${
                isInfoOsjurActive
                  ? 'bg-[#1A56FF] text-white rounded-full px-4 py-1.5 shadow-xs'
                  : 'text-[#4A5A85] hover:text-[#1A56FF] px-3.5 py-1.5 rounded-full hover:bg-[#EAF0FF]'
              }`}
            >
              <span>Info OSJUR</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                } ${isInfoOsjurActive ? 'text-white' : 'text-[#4A5A85]'}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-[16px] border border-[#D6E2FF] shadow-lg p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 border-b border-[#D6E2FF]/70 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A56FF]">
                    Panduan & Informasi OSJUR
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
                      className={`w-full text-left px-3 py-2.5 rounded-[10px] transition-colors cursor-pointer flex flex-col ${
                        isActive
                          ? 'bg-[#EAF0FF] text-[#1A56FF]'
                          : 'hover:bg-[#EAF0FF]/60 text-[#0A1A44]'
                      }`}
                    >
                      <span className="text-sm font-bold leading-tight">
                        {sub.label}
                      </span>
                      <span className="text-[11px] text-[#4A5A85] mt-0.5">
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
            onClick={() => {
              onNavigate('dokumentasi');
              setIsDropdownOpen(false);
            }}
            className={`text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              currentPage === 'dokumentasi'
                ? 'bg-[#1A56FF] text-white rounded-full px-4 py-1.5 shadow-xs'
                : 'text-[#4A5A85] hover:text-[#1A56FF] px-3.5 py-1.5 rounded-full hover:bg-[#EAF0FF]'
            }`}
          >
            Dokumentasi
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[#0A1A44] hover:bg-[#EAF0FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#1A56FF]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0A1A44]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0A1A44]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
