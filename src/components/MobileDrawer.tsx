import React, { useState } from 'react';
import { X, ChevronRight, ChevronDown, Phone, Instagram } from 'lucide-react';
import { PageId } from '../types';
import { infoOsjurSubItems } from './Navbar';
import { HmtiLogo } from './HmtiLogo';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
}) => {
  const [isInfoOsjurExpanded, setIsInfoOsjurExpanded] = useState(true);

  if (!isOpen) return null;

  const isInfoOsjurChild =
    currentPage === 'kegiatan' ||
    currentPage === 'dresscode' ||
    currentPage === 'penugasan' ||
    currentPage === 'pengumpulan';

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/40 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full bg-white rounded-t-[24px] border-t border-[#D6E2FF] p-6 max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Logo */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D6E2FF]">
          <div className="flex items-center gap-3">
            <HmtiLogo className="w-9 h-9" />
            <div>
              <span className="text-[11px] font-bold text-[#1A56FF] uppercase tracking-wider block">
                Menu Utama
              </span>
              <h2 className="text-lg font-bold text-[#0A1A44] leading-tight">
                OSJUR D3 TI 2026
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup menu"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-[#EAF0FF] text-[#0A1A44]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links Navigation */}
        <div className="py-4 space-y-1.5">
          {/* 1. Beranda */}
          <button
            onClick={() => {
              onNavigate('beranda');
              onClose();
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] text-left font-semibold text-sm transition-colors ${
              currentPage === 'beranda'
                ? 'bg-[#1A56FF] text-white'
                : 'text-[#0A1A44] hover:bg-[#EAF0FF]'
            }`}
          >
            <span>Beranda</span>
            <ChevronRight
              className={`w-4 h-4 ${currentPage === 'beranda' ? 'text-white' : 'text-[#4A5A85]'}`}
            />
          </button>

          {/* 2. Profil Prodi */}
          <button
            onClick={() => {
              onNavigate('profil');
              onClose();
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] text-left font-semibold text-sm transition-colors ${
              currentPage === 'profil'
                ? 'bg-[#1A56FF] text-white'
                : 'text-[#0A1A44] hover:bg-[#EAF0FF]'
            }`}
          >
            <span>Profil Prodi</span>
            <ChevronRight
              className={`w-4 h-4 ${currentPage === 'profil' ? 'text-white' : 'text-[#4A5A85]'}`}
            />
          </button>

          {/* 3. Info OSJUR (Expandable accordion) */}
          <div className="rounded-[14px] border border-[#D6E2FF] bg-[#EAF0FF]/25 overflow-hidden">
            <button
              onClick={() => setIsInfoOsjurExpanded(!isInfoOsjurExpanded)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left font-bold text-sm transition-colors ${
                isInfoOsjurChild ? 'text-[#1A56FF]' : 'text-[#0A1A44]'
              }`}
            >
              <span>Info OSJUR</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isInfoOsjurExpanded ? 'rotate-180' : ''
                } ${isInfoOsjurChild ? 'text-[#1A56FF]' : 'text-[#4A5A85]'}`}
              />
            </button>

            {isInfoOsjurExpanded && (
              <div className="px-2 pb-2 space-y-1">
                {infoOsjurSubItems.map((sub) => {
                  const isActive = currentPage === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        onNavigate(sub.id);
                        onClose();
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[10px] text-left text-xs font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#1A56FF] text-white'
                          : 'text-[#0A1A44] hover:bg-[#EAF0FF]'
                      }`}
                    >
                      <span>{sub.label}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 ${
                          isActive ? 'text-white' : 'text-[#4A5A85]'
                        }`}
                      />
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
              onClose();
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] text-left font-semibold text-sm transition-colors ${
              currentPage === 'dokumentasi'
                ? 'bg-[#1A56FF] text-white'
                : 'text-[#0A1A44] hover:bg-[#EAF0FF]'
            }`}
          >
            <span>Dokumentasi</span>
            <ChevronRight
              className={`w-4 h-4 ${currentPage === 'dokumentasi' ? 'text-white' : 'text-[#4A5A85]'}`}
            />
          </button>
        </div>

        {/* Quick Contact Footer in Drawer */}
        <div className="pt-4 border-t border-[#D6E2FF] text-xs text-[#4A5A85] space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#1A56FF]" />
            <span>Panitia: 0812-3456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-[#1A56FF]" />
            <span>@osjur.d3ti</span>
          </div>
        </div>
      </div>
    </div>
  );
};
