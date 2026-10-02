import React from 'react';
import {
  Calendar,
  Shirt,
  FileText,
  Send,
  Camera,
  ArrowRight,
  ChevronRight,
  Code2,
  Layout,
  Database,
  Network,
  Cpu,
} from 'lucide-react';
import { PageId } from '../../types';
import { competencies } from '../../data/osjurData';
import { HmtiLogo } from '../HmtiLogo';

interface BerandaPageProps {
  onNavigate: (page: PageId) => void;
}

export const BerandaPage: React.FC<BerandaPageProps> = ({ onNavigate }) => {
  const shortcuts: {
    page: PageId;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      page: 'kegiatan',
      title: 'Rangkaian Kegiatan',
      description: 'Jadwal lengkap tiap hari',
      icon: Calendar,
    },
    {
      page: 'dresscode',
      title: 'Dresscode',
      description: 'Pakaian dan atribut yang dibawa',
      icon: Shirt,
    },
    {
      page: 'penugasan',
      title: 'Penugasan',
      description: 'Daftar tugas dan instruksi',
      icon: FileText,
    },
    {
      page: 'pengumpulan',
      title: 'Pengumpulan',
      description: 'Tautan form pengumpulan tugas',
      icon: Send,
    },
    {
      page: 'dokumentasi',
      title: 'Dokumentasi',
      description: 'Momen seru kegiatan jurusan',
      icon: Camera,
    },
  ];

  const competencyIcons = [Code2, Layout, Database, Network, Cpu];

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Hero Panel Biru Jreng with HMTI Logo */}
      <section className="bg-[#1A56FF] text-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EAF0FF]/20 text-[#FFFFFF] border border-[#FFFFFF]/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <HmtiLogo className="w-5 h-5" />
            <span>OSJUR D3 TI 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance">
            Baris Pertamamu Dimulai di Sini.
          </h1>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
            Halo, Maba! Semua info OSJUR D3 Teknologi Informasi ada di satu tempat.
            Persiapkan dirimu untuk petualangan teknologi yang inspiratif dan berkesan.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('kegiatan')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1A56FF] font-bold text-sm hover:bg-[#EAF0FF] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Lihat Jadwal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Pintasan Cepat (5 Kartu) */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A1A44] tracking-tight">
            Pintasan Cepat
          </h2>
          <p className="text-sm text-[#4A5A85]">
            Akses langsung info penting yang paling sering kamu butuhkan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {shortcuts.map((sc) => {
            const Icon = sc.icon;
            return (
              <button
                key={sc.page}
                onClick={() => onNavigate(sc.page)}
                className="bg-white rounded-[16px] border border-[#D6E2FF] p-5 text-left transition-all hover:border-[#1A56FF] hover:bg-[#EAF0FF]/30 cursor-pointer flex items-start gap-4 group focus-visible:outline-2 focus-visible:outline-[#1A56FF]"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#EAF0FF] text-[#1A56FF] flex items-center justify-center shrink-0 group-hover:bg-[#1A56FF] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-[#0A1A44] group-hover:text-[#1A56FF] transition-colors truncate">
                      {sc.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-[#4A5A85] group-hover:text-[#1A56FF] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </div>
                  <p className="text-xs text-[#4A5A85] mt-1 line-clamp-1">
                    {sc.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Kompetensi Prodi (5 baris bernomor 01-05 + tombol Selengkapnya) */}
      <section className="bg-[#EAF0FF]/50 rounded-[20px] border border-[#D6E2FF] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[#1A56FF] uppercase tracking-wider">
              Kurikulum & Keahlian
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A1A44] tracking-tight">
              Kompetensi Prodi D3 TI
            </h2>
            <p className="text-sm text-[#4A5A85] mt-0.5">
              5 pilar utama keahlian yang akan kamu pelajari selama studi.
            </p>
          </div>
          <button
            onClick={() => onNavigate('profil')}
            className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-[#1A56FF] text-white text-xs font-bold hover:bg-[#0F3FD1] transition-all cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Selengkapnya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {competencies.map((comp, idx) => {
            const Icon = competencyIcons[idx % competencyIcons.length];
            return (
              <div
                key={comp.number}
                className="bg-white rounded-[12px] border border-[#D6E2FF] p-4 flex items-center gap-4 transition-colors hover:border-[#1A56FF]"
              >
                <span className="font-extrabold text-lg text-[#1A56FF] tabular-nums shrink-0 w-8">
                  {comp.number}
                </span>
                <div className="w-9 h-9 rounded-[8px] bg-[#EAF0FF] text-[#1A56FF] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-[#0A1A44] truncate">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-[#4A5A85] hidden sm:block truncate mt-0.5">
                    {comp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
