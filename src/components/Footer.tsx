import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { HmtiLogo } from './HmtiLogo';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative w-full bg-[#1865F2] text-white pt-14 pb-24 lg:pb-12 mt-20 overflow-hidden">
      {/* Decorative Wave at the top of Footer */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[99%]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-14 text-[#1865F2] fill-current"
        >
          <path d="M0,0 C320,80 820,10 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Decorative Dot Matrix in Bottom Right */}
      <div className="absolute -bottom-2 -right-2 p-6 opacity-30 pointer-events-none">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      {/* Decorative cross in Bottom Left */}
      <div className="absolute bottom-6 left-6 text-white/30 text-2xl font-black pointer-events-none">
        ✕
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 4 Column Footer Content (Get Updates card has been completely removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15 text-left">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-md">
                <HmtiLogo className="w-8 h-8" />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight block leading-tight">
                  VOTECH
                </span>
                <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
                  Politeknik Semen Indonesia
                </span>
              </div>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Membentuk generasi talenta teknologi yang adaptif, berintegritas, dan siap menjadi
              pelopor transformasi digital industri.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFA033]">
              QUICK LINKS
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-white/85 font-medium">
              {onNavigate && (
                <>
                  <button
                    onClick={() => onNavigate('beranda')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Beranda Utama
                  </button>
                  <button
                    onClick={() => onNavigate('profil')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Profil Prodi D3 TI
                  </button>
                  <button
                    onClick={() => onNavigate('kegiatan')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Jadwal Rangkaian Kegiatan
                  </button>
                  <button
                    onClick={() => onNavigate('dokumentasi')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Galeri Kegiatan
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Col 3: Info OSJUR & Tugas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFA033]">
              INFO VOTECH
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-white/85 font-medium">
              {onNavigate && (
                <>
                  <button
                    onClick={() => onNavigate('guidebook')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Guidebook VOTECH 2026
                  </button>
                  <button
                    onClick={() => onNavigate('dresscode')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dresscode & Atribut
                  </button>
                  <button
                    onClick={() => onNavigate('penugasan')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Daftar Penugasan
                  </button>
                  <button
                    onClick={() => onNavigate('pengumpulan')}
                    className="text-left hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Portal Pengumpulan Tugas
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFA033]">
              CONTACT US
            </h4>
            <ul className="space-y-2.5 text-xs text-white/85">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFA033] shrink-0" />
                <span>Kampus Polteksi, Gresik, Jawa Timur</span>
              </li>
              <li>
                <a
                  href="tel:+6285707095565"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFA033] shrink-0" />
                  <span>Panitia: +62 857-0709-5565</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/70">
          <span>&copy; 2026 VOTECH - HMTI Politeknik Semen Indonesia. All rights reserved.</span>
          <span>Designed with Modern Education Platform Style</span>
        </div>
      </div>
    </footer>
  );
};
