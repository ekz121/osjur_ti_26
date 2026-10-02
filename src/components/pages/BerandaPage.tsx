import React from 'react';
import {
  Calendar,
  Shirt,
  FileText,
  Send,
  Camera,
  ArrowRight,
  Code2,
  Layout,
  Database,
  Network,
  Cpu,
} from 'lucide-react';
import { PageId } from '../../types';
import { competencies } from '../../data/osjurData';
import heroEducationImage from '../../assets/images/hero_edu_vector_1790964103612.jpg';
import studentCartoonImage from '../../assets/images/cartoon_3d_student_1790964924354.jpg';
import mentorCartoonImage from '../../assets/images/cartoon_3d_mentor_1790964941989.jpg';

interface BerandaPageProps {
  onNavigate: (page: PageId) => void;
}

export const BerandaPage: React.FC<BerandaPageProps> = ({ onNavigate }) => {
  const competencyTheme = [
    {
      icon: Code2,
      bgColor: 'bg-[#1865F2]',
      textColor: 'text-[#1865F2]',
    },
    {
      icon: Layout,
      bgColor: 'bg-[#06B6D4]',
      textColor: 'text-[#06B6D4]',
    },
    {
      icon: Database,
      bgColor: 'bg-[#10B981]',
      textColor: 'text-[#10B981]',
    },
    {
      icon: Network,
      bgColor: 'bg-[#8B5CF6]',
      textColor: 'text-[#8B5CF6]',
    },
    {
      icon: Cpu,
      bgColor: 'bg-[#FFA033]',
      textColor: 'text-[#FFA033]',
    },
  ];

  const shortcuts: {
    page: PageId;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[] = [
    {
      page: 'kegiatan',
      title: 'Rangkaian Kegiatan',
      description: 'Jadwal lengkap tiap hari',
      icon: Calendar,
      accentColor: 'bg-[#1865F2]',
    },
    {
      page: 'dresscode',
      title: 'Dresscode & Atribut',
      description: 'Pakaian resmi yang dibawa',
      icon: Shirt,
      accentColor: 'bg-[#06B6D4]',
    },
    {
      page: 'penugasan',
      title: 'Penugasan Maba',
      description: 'Daftar instruksi dan deadline',
      icon: FileText,
      accentColor: 'bg-[#8B5CF6]',
    },
    {
      page: 'pengumpulan',
      title: 'Portal Pengumpulan',
      description: 'Kirim tugasmu melalui form',
      icon: Send,
      accentColor: 'bg-[#FFA033]',
    },
    {
      page: 'dokumentasi',
      title: 'Galeri Dokumentasi',
      description: 'Momen seru kegiatan jurusan',
      icon: Camera,
      accentColor: 'bg-[#10B981]',
    },
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-6">
      {/* 1. HERO SECTION WITH BLUE BACKGROUND & ORGANIC WAVE */}
      <section className="relative -mt-6 md:-mt-10 -mx-4 sm:-mx-6 bg-gradient-to-b from-[#1865F2] to-[#1255DC] text-white pt-8 pb-20 md:pt-14 md:pb-32 px-4 sm:px-8 overflow-hidden">
        {/* Floating Geometric Background Elements from Mockup */}
        <div className="absolute top-36 left-1/4 w-3 h-3 bg-white/30 rounded-full pointer-events-none" />
        <div className="absolute top-14 right-1/3 w-4 h-4 text-white/30 font-mono text-xl pointer-events-none">
          △
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-block">
              <span className="text-xs md:text-sm font-bold tracking-widest text-white/90 uppercase">
                A PLATFORM FOR LEARNERS AND D3 TI MABA
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Baris Pertamamu <br className="hidden sm:block" />
              Dimulai di Sini
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
              Halo, Maba! Semua informasi resmi OSJUR D3 Teknologi Informasi
              Politeknik Semen Indonesia ada di satu tempat praktis.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('kegiatan')}
                className="px-7 py-3.5 rounded-full bg-white text-[#1865F2] hover:bg-white/90 font-extrabold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
              >
                <span>Lihat Jadwal OSJUR</span>
                <ArrowRight className="w-4 h-4 text-[#FFA033]" />
              </button>

              <button
                onClick={() => onNavigate('profil')}
                className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm tracking-wide border border-white/25 transition-all cursor-pointer"
              >
                Profil Jurusan
              </button>
            </div>
          </div>

          {/* Right Vector Illustration Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl transform scale-90" />

              <div className="absolute -top-3 right-6 z-20 w-10 h-10 rounded-full bg-white text-[#FFA033] shadow-md flex items-center justify-center font-bold text-lg animate-bounce">
                ?
              </div>

              <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-[#0F49BE]">
                <img
                  src={heroEducationImage}
                  alt="Ilustrasi Edukasi OSJUR D3 TI"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 z-20 bg-white text-[#1A284E] px-4 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FFA033] text-white flex items-center justify-center font-bold text-xs">
                  TI
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-[#1A284E] leading-tight">
                    OSJUR D3 TI 2026
                  </p>
                  <p className="text-[10px] text-slate-500">Politeknik Semen Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-10 sm:h-16 md:h-20 text-[#F8FAFE] fill-current"
          >
            <path d="M0,0 C280,110 750,120 1200,30 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. DUAL FEATURED CALLOUT CARDS (FULL 3D CARTOON per Permintaan User) */}
      <section className="relative z-20 -mt-10 sm:-mt-16 max-w-5xl mx-auto">
        <div className="absolute -right-6 -bottom-4 hidden md:block opacity-30 pointer-events-none">
          <div className="grid grid-cols-4 gap-1.5">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1865F2]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Kenali Jurusanmu (Full 3D Cartoon Mahasiswa) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-between gap-4 group hover:shadow-lg transition-all">
            <div className="space-y-3 flex-1">
              <h2 className="text-xl font-black text-[#1A284E] tracking-tight">
                Kenali Jurusanmu ?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Pelajari 5 pilar kompetensi & kurikulum industri D3 TI.
              </p>
              <button
                onClick={() => onNavigate('profil')}
                className="px-5 py-2 rounded-full bg-[#FFA033] hover:bg-[#F59020] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-transform active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Blue Corner Box with Full 3D Cartoon Student */}
            <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl bg-gradient-to-br from-[#1865F2] to-[#0E4DC5] overflow-hidden shrink-0 relative flex items-center justify-center shadow-inner">
              <img
                src={studentCartoonImage}
                alt="3D Kartun Mahasiswa D3 TI"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Card 2: Panduan OSJUR (Full 3D Cartoon Mentor) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-between gap-4 group hover:shadow-lg transition-all">
            <div className="space-y-3 flex-1">
              <h2 className="text-xl font-black text-[#1A284E] tracking-tight">
                Panduan OSJUR ?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Jadwal lengkap kegiatan, aturan dresscode, dan penugasan.
              </p>
              <button
                onClick={() => onNavigate('kegiatan')}
                className="px-5 py-2 rounded-full bg-[#FFA033] hover:bg-[#F59020] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-transform active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Purple Corner Box with Full 3D Cartoon Mentor */}
            <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] overflow-hidden shrink-0 relative flex items-center justify-center shadow-inner">
              <img
                src={mentorCartoonImage}
                alt="3D Kartun Mentor OSJUR D3 TI"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION WHAT WE LEARN / 5 KOMPETENSI */}
      <section className="space-y-8 text-center pt-6">
        <div className="space-y-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFA033]">
            WHAT WE LEARN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A284E] tracking-tight">
            5 Kompetensi Utama D3 Teknologi Informasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto pt-1">
            Kombinasi keahlian praktis yang dirancang selaras dengan standar industri teknologi digital modern.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {competencies.map((comp, idx) => {
            const theme = competencyTheme[idx % competencyTheme.length];
            const Icon = theme.icon;

            return (
              <div
                key={comp.number}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div
                    className={`w-13 h-13 rounded-2xl ${theme.bgColor} text-white flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Pilar {comp.number}
                    </span>
                    <h3 className="font-extrabold text-lg text-[#1A284E] group-hover:text-[#1865F2] transition-colors">
                      {comp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('profil')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1865F2] hover:text-[#0D4CBF] transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-extrabold text-slate-300">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PINTASAN CEPAT OSJUR */}
      <section className="space-y-6 pt-4">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFA033]">
            QUICK ACCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A284E] tracking-tight">
            Pintasan Cepat Mahasiswa Baru
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shortcuts.map((sc) => {
            const Icon = sc.icon;
            return (
              <button
                key={sc.page}
                onClick={() => onNavigate(sc.page)}
                className="bg-white rounded-2xl border border-slate-100 p-5 text-left transition-all hover:border-[#1865F2] hover:shadow-lg cursor-pointer flex items-start gap-4 group shadow-xs"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${sc.accentColor} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#1A284E] group-hover:text-[#1865F2] transition-colors truncate">
                    {sc.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {sc.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. CTA SECTION (Teks button diubah menjadi "Kumpulkan Tugas Sekarang") */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
          <div className="grid grid-cols-5 gap-1.5">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1865F2]" />
            ))}
          </div>
        </div>

        <div className="max-w-2xl space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFA033]">
            GET STARTED NOW
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A284E] tracking-tight leading-tight">
            Sudah Menyelesaikan Tugas OSJUR Kamu?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Pastikan seluruh file penugasan telah siap sesuai instruksi dan format yang ditentukan
            sebelum batas tenggat waktu (*deadline*) berakhir.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('pengumpulan')}
              className="px-6 py-3 rounded-full bg-[#FFA033] hover:bg-[#F59020] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
            >
              <span>Kumpulkan Tugas Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
