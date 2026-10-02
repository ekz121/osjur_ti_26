import React, { useState } from 'react';
import { Home, GraduationCap, LayoutGrid, Camera, X, ChevronRight, Calendar, Shirt, FileText, Send } from 'lucide-react';
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
    { id: 'penugasan', label: 'Penugasan Maba', icon: FileText },
    { id: 'pengumpulan', label: 'Portal Pengumpulan', icon: Send },
  ];

  return (
    <>
      {/* Quick Bottom Sheet for Info OSJUR when clicked from bottom bar */}
      {isSheetOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-2xs flex flex-col justify-end lg:hidden animate-in fade-in duration-150"
          onClick={() => setIsSheetOpen(false)}
        >
          <div
            className="bg-white rounded-t-3xl border-t border-slate-100 p-6 pb-8 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFA033]">
                  PANDUAN LENGKAP
                </span>
                <h3 className="text-lg font-black text-[#1A284E]">
                  Info OSJUR 2026
                </h3>
              </div>
              <button
                onClick={() => setIsSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-[#1A284E] flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 pt-1">
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
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1865F2] text-white shadow-md'
                        : 'bg-[#F8FAFE] text-[#1A284E] hover:bg-[#EBF3FF]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-white text-[#1865F2] shadow-xs'
                        }`}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-extrabold">{sub.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`}
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
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:hidden pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-4 h-16 max-w-md mx-auto items-center px-1">
          {/* 1. Beranda */}
          <button
            onClick={() => onNavigate('beranda')}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors relative"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                currentPage === 'beranda' ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              <Home className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-bold tracking-tight transition-colors ${
                currentPage === 'beranda' ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              Beranda
            </span>
            {currentPage === 'beranda' && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFA033] absolute top-1.5" />
            )}
          </button>

          {/* 2. Profil Prodi */}
          <button
            onClick={() => onNavigate('profil')}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors relative"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                currentPage === 'profil' ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              <GraduationCap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-bold tracking-tight transition-colors ${
                currentPage === 'profil' ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              Profil Prodi
            </span>
            {currentPage === 'profil' && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFA033] absolute top-1.5" />
            )}
          </button>

          {/* 3. Info OSJUR */}
          <button
            onClick={() => setIsSheetOpen(true)}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors relative"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                isInfoOsjurActive ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              <LayoutGrid className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-bold tracking-tight transition-colors ${
                isInfoOsjurActive ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              Info OSJUR
            </span>
            {isInfoOsjurActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFA033] absolute top-1.5" />
            )}
          </button>

          {/* 4. Dokumentasi */}
          <button
            onClick={() => onNavigate('dokumentasi')}
            className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors relative"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                currentPage === 'dokumentasi' ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              <Camera className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span
              className={`text-[10px] font-bold tracking-tight transition-colors ${
                currentPage === 'dokumentasi' ? 'text-[#1865F2]' : 'text-slate-400'
              }`}
            >
              Dokumentasi
            </span>
            {currentPage === 'dokumentasi' && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFA033] absolute top-1.5" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};
