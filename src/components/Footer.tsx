import React from 'react';
import { Phone, Instagram, MapPin, ExternalLink } from 'lucide-react';
import { PageId } from '../types';
import { HmtiLogo } from './HmtiLogo';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#1A56FF] text-white pt-10 pb-24 lg:pb-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/20">
          {/* Col 1: Identity with HMTI Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0">
                <HmtiLogo className="w-9 h-9" />
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md text-xs font-semibold tracking-wide">
                <span>OSJUR D3 TI 2026</span>
              </div>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight">
              D3 Teknologi Informasi
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Politeknik Semen Indonesia. Membentuk generasi talenta teknologi
              yang adaptif, terampil, dan siap berkontribusi nyata bagi industri.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
              {onNavigate && (
                <>
                  <button
                    onClick={() => onNavigate('beranda')}
                    className="text-left hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Beranda
                  </button>
                  <button
                    onClick={() => onNavigate('profil')}
                    className="text-left hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Profil Prodi
                  </button>
                  <button
                    onClick={() => onNavigate('kegiatan')}
                    className="text-left hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Rangkaian Kegiatan
                  </button>
                  <button
                    onClick={() => onNavigate('dresscode')}
                    className="text-left hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Dresscode
                  </button>
                  <button
                    onClick={() => onNavigate('penugasan')}
                    className="text-left hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Penugasan
                  </button>
                  <button
                    onClick={() => onNavigate('pengumpulan')}
                    className="text-left hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Pengumpulan
                  </button>
                  <button
                    onClick={() => onNavigate('dokumentasi')}
                    className="text-left hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Dokumentasi
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Col 3: Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Kontak & Media Sosial
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="tel:081234567890"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Panitia OSJUR: 0812-3456-7890</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/osjur.d3ti"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>@osjur.d3ti</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Kampus Politeknik Semen Indonesia, Gresik</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <span>&copy; 2026 OSJUR D3 Teknologi Informasi - HMTI Politeknik Semen Indonesia.</span>
          <span>Semangat Orientasi Studi Jurusan!</span>
        </div>
      </div>
    </footer>
  );
};
