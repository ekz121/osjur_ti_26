import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronRight, ChevronDown, Phone, Instagram } from 'lucide-react';
import { PageId } from '../types';
import { infoOsjurSubItems } from './Navbar';

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isInfoOsjurChild =
    currentPage === 'kegiatan' ||
    currentPage === 'dresscode' ||
    currentPage === 'penugasan' ||
    currentPage === 'pengumpulan';

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#061b4f]/45 lg:hidden"
      onClick={onClose}
    >
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className="flex h-full w-[min(22rem,calc(100%-1.25rem))] flex-col overflow-y-auto bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Clean & Modern, Tanpa Logo sesuai permintaan user) */}
        <div className="bg-[#1865F2] text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFA033] block">
              NAVIGASI RESMI
            </span>
            <h2 className="text-lg font-black text-white leading-tight">
              OSJUR D3 TI 2026
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Tutup menu"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-white/15 text-white transition-colors hover:bg-white/25 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links Navigation */}
        <div className="p-5 space-y-2 flex-1">
          {/* 1. Beranda */}
          <button
            onClick={() => {
              onNavigate('beranda');
              onClose();
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left font-extrabold text-sm transition-all cursor-pointer ${
              currentPage === 'beranda'
                ? 'bg-[#1865F2] text-white shadow-md'
                : 'text-[#1A284E] hover:bg-slate-50'
            }`}
          >
            <span>Beranda</span>
            <ChevronRight
              className={`w-4 h-4 ${currentPage === 'beranda' ? 'text-white' : 'text-slate-400'}`}
            />
          </button>

          {/* 2. Profil Prodi */}
          <button
            onClick={() => {
              onNavigate('profil');
              onClose();
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left font-extrabold text-sm transition-all cursor-pointer ${
              currentPage === 'profil'
                ? 'bg-[#1865F2] text-white shadow-md'
                : 'text-[#1A284E] hover:bg-slate-50'
            }`}
          >
            <span>Profil Prodi D3 TI</span>
            <ChevronRight
              className={`w-4 h-4 ${currentPage === 'profil' ? 'text-white' : 'text-slate-400'}`}
            />
          </button>

          {/* 3. Info OSJUR (Tanpa logo/icon di dalamnya sesuai permintaan user) */}
          <div className="rounded-2xl border border-slate-100 bg-[#F8FAFE] overflow-hidden">
            <button
              onClick={() => setIsInfoOsjurExpanded(!isInfoOsjurExpanded)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left font-extrabold text-sm transition-colors cursor-pointer ${
                isInfoOsjurChild ? 'text-[#1865F2]' : 'text-[#1A284E]'
              }`}
            >
              <span>Info OSJUR</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isInfoOsjurExpanded ? 'rotate-180' : ''
                } ${isInfoOsjurChild ? 'text-[#1865F2]' : 'text-slate-400'}`}
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
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#1865F2] text-white shadow-xs'
                          : 'text-[#1A284E] hover:bg-white'
                      }`}
                    >
                      <span>{sub.label}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 ${
                          isActive ? 'text-white' : 'text-slate-400'
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
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left font-extrabold text-sm transition-all cursor-pointer ${
              currentPage === 'dokumentasi'
                ? 'bg-[#1865F2] text-white shadow-md'
                : 'text-[#1A284E] hover:bg-slate-50'
            }`}
          >
            <span>Dokumentasi Kegiatan</span>
            <ChevronRight
              className={`w-4 h-4 ${currentPage === 'dokumentasi' ? 'text-white' : 'text-slate-400'}`}
            />
          </button>
        </div>

        {/* Quick Contact Footer in Drawer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#1865F2]" />
            <span>Panitia: 0812-3456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-3.5 h-3.5 text-[#1865F2]" />
            <span>@osjur.d3ti</span>
          </div>
        </div>
      </aside>
    </div>
  );
};
