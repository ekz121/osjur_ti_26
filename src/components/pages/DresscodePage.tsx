import React from 'react';
import { Shirt, Calendar, Info, Check } from 'lucide-react';
import { dresscodes } from '../../data/osjurData';

export const DresscodePage: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#EAF0FF] text-[#1A56FF] px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
          <Shirt className="w-4 h-4" />
          <span>Panduan Pakaian & Perlengkapan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A44] tracking-tight">
          Dresscode & Atribut
        </h1>

        <p className="text-base text-[#4A5A85] max-w-2xl leading-relaxed">
          Berikut adalah ketentuan pakaian dan daftar atribut yang wajib kamu kenakan dan bawa
          pada setiap hari pelaksanaan OSJUR D3 Teknologi Informasi 2026.
        </p>
      </section>

      {/* 3 Kartu Hari dengan Tanggal dan Informasi Biasa (Tanpa Checkbox) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {dresscodes.map((dc) => (
          <div
            key={dc.day}
            className="bg-white rounded-lg border border-[#D6E2FF] p-6 flex flex-col justify-between hover:border-[#1A56FF] transition-all shadow-xs"
          >
            <div className="space-y-5">
              {/* Day & Date Header */}
              <div className="pb-3 border-b border-[#D6E2FF] space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-extrabold text-[#0A1A44]">
                    {dc.title}
                  </h2>
                  <span className="text-xs font-bold text-[#1A56FF] bg-[#EAF0FF] px-2.5 py-0.5 rounded-md">
                    Wajib
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4A5A85]">
                  <Calendar className="w-3.5 h-3.5 text-[#1A56FF]" />
                  <span>{dc.dateStr}</span>
                </div>
              </div>

              {/* Aturan Pakaian */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A56FF] mb-2">
                  Aturan Pakaian
                </h3>
                <div className="p-3.5 rounded-md bg-[#EAF0FF]/50 border border-[#D6E2FF] text-sm font-semibold text-[#0A1A44] leading-relaxed">
                  {dc.attire}
                </div>
              </div>

              {/* Atribut Yang Dibawa (Tampilan Informasi Biasa, Tanpa Checkbox) */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A56FF] mb-2">
                  Atribut Yang Dibawa
                </h3>
                <ul className="space-y-2">
                  {dc.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-md bg-[#FFFFFF] border border-[#D6E2FF] text-sm text-[#0A1A44]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A56FF] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Catatan / Reminder */}
            <div className="mt-6 pt-4 border-t border-[#D6E2FF] flex items-center gap-2 text-xs text-[#4A5A85]">
              <Info className="w-4 h-4 text-[#1A56FF] shrink-0" />
              <span>Pastikan pakaian sopan, rapi, dan sesuai ketentuan.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
