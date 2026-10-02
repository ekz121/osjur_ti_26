import React from 'react';
import { FileText, Clock, User, Users, Info, ArrowUpRight } from 'lucide-react';
import { assignments } from '../../data/osjurData';

export const PenugasanPage: React.FC = () => {
  return (
    <div className="space-y-10 md:space-y-12 pb-6">
      {/* Header */}
      <section className="space-y-3 text-center max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#1865F2] text-xs font-extrabold uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>DAFTAR TUGAS RESMI MAHASISWA BARU</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A284E] tracking-tight">
          Penugasan OSJUR D3 TI
        </h1>

        <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto" />

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Berikut adalah rincian seluruh penugasan OSJUR D3 Teknologi Informasi 2026.
          Cermati instruksi pengerjaan, ketentuan format, dan batas akhir pengumpulan (*deadline*).
        </p>
      </section>

      {/* 4 Kartu Tugas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {assignments.map((task) => {
          const isKelompok = task.type === 'Kelompok';
          return (
            <div
              key={task.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.06)] p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="space-y-5">
                {/* Header Card: Nomor & Deadline Pill */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-xs text-[#1865F2] bg-[#EBF3FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                    {task.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#FFA033] bg-[#FFF6EB] px-3.5 py-1 rounded-full shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{task.deadline}</span>
                  </div>
                </div>

                {/* Judul & Deskripsi */}
                <div>
                  <h3 className="text-xl font-black text-[#1A284E]">
                    {task.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {task.description}
                  </p>
                </div>

                {/* Detail & Petunjuk */}
                <div className="p-4 rounded-2xl bg-[#F8FAFE] border border-slate-100 text-xs text-[#1A284E] leading-relaxed space-y-1.5">
                  <p className="font-extrabold text-[#1865F2] uppercase tracking-wider text-[10px]">
                    Petunjuk Pengerjaan:
                  </p>
                  <p className="text-slate-600">{task.detail}</p>
                </div>
              </div>

              {/* Footer Card */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-1.5">
                  {isKelompok ? (
                    <Users className="w-4 h-4 text-[#8B5CF6]" />
                  ) : (
                    <User className="w-4 h-4 text-[#10B981]" />
                  )}
                  <span className="text-[#1A284E]">Kategori: {task.type}</span>
                </div>
                <span className="text-[11px] text-[#FFA033]">
                  Kirim di menu Pengumpulan
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
