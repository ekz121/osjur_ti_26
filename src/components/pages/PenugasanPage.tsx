import React from 'react';
import { FileText, Clock, User, Users, Info } from 'lucide-react';
import { assignments } from '../../data/osjurData';

export const PenugasanPage: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#EAF0FF] text-[#1A56FF] px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Informasi Penugasan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A44] tracking-tight">
          Penugasan
        </h1>

        <p className="text-base text-[#4A5A85] max-w-2xl leading-relaxed">
          Berikut adalah rincian seluruh penugasan OSJUR D3 Teknologi Informasi 2026.
          Cermati instruksi dan batas waktu pengerjaan setiap tugas di bawah ini.
        </p>
      </section>

      {/* 4 Kartu Tugas (Hanya Menampilkan Tugas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {assignments.map((task) => {
          const isKelompok = task.type === 'Kelompok';
          return (
            <div
              key={task.id}
              className="bg-white rounded-lg border border-[#D6E2FF] p-6 flex flex-col justify-between hover:border-[#1A56FF] transition-all shadow-xs"
            >
              <div className="space-y-4">
                {/* Header Card: Label & Chip Deadline */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-xs text-[#1A56FF] bg-[#EAF0FF] px-3 py-1 rounded-md">
                    {task.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A56FF] bg-[#EAF0FF] px-3 py-1 rounded-md shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Deadline: {task.deadline}</span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1A44]">
                    {task.title}
                  </h3>
                  <p className="text-sm text-[#4A5A85] mt-2 leading-relaxed">
                    {task.description}
                  </p>
                </div>

                {/* Petunjuk & Rincian */}
                <div className="p-3.5 rounded-md bg-[#EAF0FF]/50 border border-[#D6E2FF] text-xs text-[#0A1A44] leading-relaxed space-y-1.5">
                  <p className="font-bold text-[#1A56FF]">Petunjuk Pengerjaan:</p>
                  <p className="text-[#0A1A44]">{task.detail}</p>
                </div>
              </div>

              {/* Footer Info: Kategori */}
              <div className="pt-4 mt-4 border-t border-[#D6E2FF] flex items-center justify-between text-xs text-[#4A5A85]">
                <div className="flex items-center gap-1.5">
                  {isKelompok ? (
                    <Users className="w-4 h-4 text-[#1A56FF]" />
                  ) : (
                    <User className="w-4 h-4 text-[#1A56FF]" />
                  )}
                  <span className="font-semibold">Kategori: {task.type}</span>
                </div>
                <span className="text-[11px] text-[#4A5A85]">
                  Untuk pengumpulan, cek menu Pengumpulan
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
