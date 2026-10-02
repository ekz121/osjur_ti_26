import React from 'react';
import { Shirt, Calendar, Info, CheckCircle2 } from 'lucide-react';
import { dresscodes } from '../../data/osjurData';

export const DresscodePage: React.FC = () => {
  return (
    <div className="space-y-10 md:space-y-12 pb-6">
      {/* Header */}
      <section className="space-y-3 text-center max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#1865F2] text-xs font-extrabold uppercase tracking-wider">
          <Shirt className="w-4 h-4" />
          <span>KETENTUAN PAKAIAN & ATRIBUT</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A284E] tracking-tight">
          Dresscode & Atribut Maba
        </h1>

        <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto" />

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Berikut adalah ketentuan pakaian resmi serta daftar atribut wajib yang harus kamu kenakan dan bawa
          selama 3 hari pelaksanaan OSJUR D3 Teknologi Informasi 2026.
        </p>
      </section>

      {/* 3 Kartu Hari */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {dresscodes.map((dc) => (
          <div
            key={dc.day}
            className="bg-white rounded-3xl border border-slate-100 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.06)] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="space-y-6">
              {/* Day & Date Header */}
              <div className="pb-4 border-b border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black text-[#1A284E]">
                    {dc.title}
                  </h2>
                  <span className="text-xs font-extrabold text-[#FFA033] bg-[#FFF6EB] px-3 py-1 rounded-full uppercase tracking-wider">
                    Wajib
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1865F2]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{dc.dateStr}</span>
                </div>
              </div>

              {/* Aturan Pakaian */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Ketentuan Pakaian:
                </h3>
                <div className="p-4 rounded-2xl bg-[#F8FAFE] border border-slate-100 text-xs sm:text-sm font-bold text-[#1A284E] leading-relaxed">
                  {dc.attire}
                </div>
              </div>

              {/* Atribut Yang Dibawa */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Atribut Yang Dibawa:
                </h3>
                <ul className="space-y-2">
                  {dc.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-2xs text-xs sm:text-sm text-[#1A284E]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#EBF3FF] text-[#1865F2] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Catatan Kaki */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400">
              <Info className="w-3.5 h-3.5 text-[#FFA033] shrink-0" />
              <span>Pastikan name tag terpasang di dada sebelah kiri.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
