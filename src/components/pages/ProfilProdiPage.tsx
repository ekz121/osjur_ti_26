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
  ArrowRight,
} from 'lucide-react';
import { competencies } from '../../data/osjurData';
import { HmtiLogo } from '../HmtiLogo';

export const ProfilProdiPage: React.FC = () => {
  const competencyTheme = [
    { icon: Code2, bgColor: 'bg-[#1865F2]', label: 'Web Tech' },
    { icon: Layout, bgColor: 'bg-[#06B6D4]', label: 'Design' },
    { icon: Database, bgColor: 'bg-[#10B981]', label: 'Data Architecture' },
    { icon: Network, bgColor: 'bg-[#8B5CF6]', label: 'Infrastructure' },
    { icon: Cpu, bgColor: 'bg-[#FFA033]', label: 'Algorithm' },
  ];

  const careerPaths = [
    { title: 'Frontend & Full-stack Web Developer', note: 'Membangun aplikasi digital modern berbasis cloud' },
    { title: 'UI/UX & Product Interface Designer', note: 'Merancang arsitektur antarmuka digital yang intuitif' },
    { title: 'Database Administrator & Data Engineer', note: 'Mengelola tata kelola & keamanan arsitektur data industri' },
    { title: 'Network & Cloud Infrastructure Support', note: 'Mengamankan sistem jaringan, server, dan konektivitas' },
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-6">
      {/* Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#1865F2] text-xs font-extrabold uppercase tracking-wider">
          <HmtiLogo className="w-4 h-4" />
          <span>MENGENAL JURUSANMU</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A284E] tracking-tight">
          Profil Program Studi D3 TI
        </h1>

        <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto" />

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] text-left mt-6">
          <p className="text-sm sm:text-base text-[#1A284E] leading-relaxed">
            <strong className="text-[#1865F2]">D3 Teknologi Informasi</strong> merupakan program studi unggulan di{' '}
            <strong>Politeknik Semen Indonesia</strong> yang berfokus mencetak talenta digital ahli melalui keseimbangan teori dan praktik.
            Program ini dirancang agar mahasiswa tidak sekadar memahami konsep, tetapi langsung mengeksekusinya menjadi produk teknologi nyata.
          </p>
        </div>
      </section>

      {/* 5 Kompetensi Utama (Mockup Card Style) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFA033]">
            CORE COMPETENCIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A284E] tracking-tight">
            5 Kompetensi Utama Lulusan
          </h2>
          <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => {
            const theme = competencyTheme[idx % competencyTheme.length];
            const Icon = theme.icon;

            return (
              <div
                key={comp.number}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-13 h-13 rounded-2xl ${theme.bgColor} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-black text-[#FFA033] bg-[#FFF6EB] px-3 py-1 rounded-full">
                      Pilar {comp.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[#1A284E] group-hover:text-[#1865F2] transition-colors">
                      {comp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="text-[#1865F2]">{theme.label}</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prospek Karir Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FFA033] text-white flex items-center justify-center shadow-md">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFA033]">
              CAREER PATHWAYS
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#1A284E]">
              Prospek Karir Lulusan D3 TI
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {careerPaths.map((career, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#F8FAFE] border border-slate-100 flex items-start gap-3.5 hover:border-[#1865F2] transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#1865F2] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#1A284E]">{career.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{career.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
