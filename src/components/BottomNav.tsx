import React, { useState } from 'react';
import { Home, GraduationCap, Layers, Camera, X, ChevronRight, Calendar, Shirt, FileText, Send } from 'lucide-react';
import { PageId } from '../types';

interface BottomNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onNavigate }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const isInfoOsjurActive =
    currentPage === 'kegiatan' ||
    currentPage === 'dresscode' ||
    currentPage === 'penugasan' ||
    currentPage === 'pengumpulan';

  const subItems: { id: PageId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'kegiatan', label: 'Rangkaian Kegiatan', icon: Calendar },
    { id: 'dresscode', label: 'Dresscode & Atribut', icon: Shirt },
    { id: 'penugasan', label: 'Penugasan', icon: FileText },
    { id: 'pengumpulan', label: 'Pengumpulan', icon: Send },
  ];

  return (
    <>
      {/* Quick Bottom Sheet for Info OSJUR when clicked from bottom bar */}
      {isSheetOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex flex-col justify-end lg:hidden animate-in fade-in duration-150"
          onClick={() => setIsSheetOpen(false)}
        >
          <div
            className="bg-white rounded-t-[24px] border-t border-[#D6E2FF] p-5 pb-8 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#D6E2FF]">
              <div>
                <span className="text-xs font-bold text-[#1A56FF] uppercase tracking-wider">
                  Pilih Halaman
                </span>
                <h3 className="text-base font-extrabold text-[#0A1A44]">
                  Info OSJUR
                </h3>
              </div>
              <button
                onClick={() => setIsSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-[#EAF0FF] text-[#0A1A44] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1.5 pt-1">
              {subItems.map((sub) => {
                const Icon = sub.icon;
                const isActive = currentPage === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      onNavigate(sub.id);
                      setIsSheetOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-[12px] text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#1A56FF] text-white'
                        : 'bg-[#EAF0FF]/50 text-[#0A1A44] hover:bg-[#EAF0FF]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-[8px] flex items-center justify-center ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-[#EAF0FF] text-[#1A56FF]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold">{sub.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#4A5A85]'}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Tab Bar: 4 Items (Beranda, Profil Prodi, Info OSJUR, Dokumentasi) */}
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#D6E2FF] lg:hidden pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-4 h-16 max-w-md mx-auto items-center px-1">
          {/* 1. Beranda */}
          <button
            onClick={() => onNavigate('beranda')}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                currentPage === 'beranda' ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              <Home className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-semibold tracking-tight transition-colors ${
                currentPage === 'beranda' ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              Beranda
            </span>
          </button>

          {/* 2. Profil Prodi */}
          <button
            onClick={() => onNavigate('profil')}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                currentPage === 'profil' ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              <GraduationCap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-semibold tracking-tight transition-colors ${
                currentPage === 'profil' ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              Profil Prodi
            </span>
          </button>

          {/* 3. Info OSJUR */}
          <button
            onClick={() => setIsSheetOpen(true)}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                isInfoOsjurActive ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-semibold tracking-tight transition-colors ${
                isInfoOsjurActive ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              Info OSJUR
            </span>
          </button>

          {/* 4. Dokumentasi */}
          <button
            onClick={() => onNavigate('dokumentasi')}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                currentPage === 'dokumentasi' ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              <Camera className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-semibold tracking-tight transition-colors ${
                currentPage === 'dokumentasi' ? 'text-[#1A56FF]' : 'text-[#4A5A85]'
              }`}
            >
              Dokumentasi
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
