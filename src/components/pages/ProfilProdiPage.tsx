import React from 'react';
import {
  Code2,
  Layout,
  Database,
  Network,
  Cpu,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { competencies } from '../../data/osjurData';
import { HmtiLogo } from '../HmtiLogo';

export const ProfilProdiPage: React.FC = () => {
  const competencyIcons = [Code2, Layout, Database, Network, Cpu];

  const careerPaths = [
    { title: 'Frontend & Full-stack Web Developer', note: 'Membangun aplikasi digital modern' },
    { title: 'UI/UX & Product Designer', note: 'Merancang antarmuka sistem yang intuitif' },
    { title: 'Database Administrator', note: 'Mengelola arsitektur data enterprise' },
    { title: 'Network & Cloud Infrastructure Support', note: 'Menjaga konektivitas dan server' },
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Header & Opening Statement with Logo */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HmtiLogo className="w-8 h-8" />
          <div className="inline-flex items-center gap-2 bg-[#EAF0FF] text-[#1A56FF] px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Mengenal Jurusanmu</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A44] tracking-tight">
          Profil Prodi
        </h1>

        <div className="bg-white rounded-lg border border-[#D6E2FF] p-6 sm:p-8 shadow-xs">
          <p className="text-base sm:text-lg text-[#0A1A44] leading-relaxed">
            D3 Teknologi Informasi merupakan program studi di Politeknik Semen Indonesia
            yang berfokus mencetak talenta digital ahli melalui keseimbangan teori dan praktik.
            Program ini dirancang agar mahasiswa tidak sekadar memahami konsep, tetapi
            langsung mengeksekusinya menjadi produk teknologi nyata.
          </p>
        </div>
      </section>

      {/* 5 Kompetensi Utama */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-bold text-[#1A56FF] uppercase tracking-wider">
            Kurikulum Keunggulan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1A44] tracking-tight mt-1">
            5 Kompetensi Utama
          </h2>
          <p className="text-sm text-[#4A5A85] mt-1">
            Fokus keilmuan praktis yang akan kamu kuasai secara bertahap selama perkuliahan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencies.map((comp, idx) => {
            const Icon = competencyIcons[idx % competencyIcons.length];
            return (
              <div
                key={comp.number}
                className="bg-white rounded-lg border border-[#D6E2FF] p-6 flex flex-col justify-between hover:border-[#1A56FF] transition-all hover:bg-[#EAF0FF]/20 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-extrabold text-2xl text-[#1A56FF] tabular-nums">
                      {comp.number}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#EAF0FF] text-[#1A56FF] flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#0A1A44] mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-[#4A5A85] leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prospek Karir & Relevansi Industri */}
      <section className="bg-white rounded-lg border border-[#D6E2FF] p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[#EAF0FF] text-[#1A56FF] flex items-center justify-center">
            <Briefcase className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0A1A44]">
              Prospek Lulusan D3 TI
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5A85]">
              Karier nyata yang menunggu setelah kamu menyelesaikan studi
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {careerPaths.map((career, i) => (
            <div
              key={i}
              className="p-3.5 rounded-md bg-[#EAF0FF]/40 border border-[#D6E2FF] flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#1A56FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#0A1A44]">{career.title}</h4>
                <p className="text-xs text-[#4A5A85]">{career.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
