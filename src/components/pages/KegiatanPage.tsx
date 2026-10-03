import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { schedules } from '../../data/osjurData';

export const KegiatanPage: React.FC = () => {
  const [activeDayFilter, setActiveDayFilter] = useState<number | 'all'>('all');

  const filteredSchedules =
    activeDayFilter === 'all'
      ? schedules
      : schedules.filter((s) => s.day === activeDayFilter);

  return (
    <div className="space-y-10 md:space-y-12 pb-6">
      {/* Header */}
      <section className="space-y-3 text-center max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#1865F2] text-xs font-extrabold uppercase tracking-wider">
          <Calendar className="w-4 h-4" />
          <span>AGENDA RESMI MAHASISWA BARU</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A284E] tracking-tight">
          Rangkaian Kegiatan VOTECH
        </h1>

        <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto" />

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Simak jadwal dan lokasi pelaksanaan VOTECH dari hari pertama hingga penutupan.
          Hadir tepat waktu dan siapkan dirimu secara maksimal!
        </p>

        {/* Filter Buttons matching mockup pill style */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
          <button
            onClick={() => setActiveDayFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs ${
              activeDayFilter === 'all'
                ? 'bg-[#1865F2] text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#1865F2] hover:text-[#1865F2]'
            }`}
          >
            Semua Hari (3 Hari)
          </button>
          {[1, 2, 3].map((dayNum) => (
            <button
              key={dayNum}
              onClick={() => setActiveDayFilter(dayNum)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs ${
                activeDayFilter === dayNum
                  ? 'bg-[#FFA033] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#FFA033] hover:text-[#FFA033]'
              }`}
            >
              Hari {dayNum}
            </button>
          ))}
        </div>
      </section>

      {/* Cards per Hari (Agak kotak tapi ada lengkungan: rounded-2xl) */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {filteredSchedules.map((schedule) => (
          <div
            key={schedule.day}
            className="bg-white rounded-2xl border border-slate-100 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.06)] overflow-hidden transition-all hover:shadow-lg"
          >
            {/* Header Biru Hari */}
            <div className="bg-gradient-to-r from-[#1865F2] to-[#1255DC] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#FFA033] block">
                  JADWAL KEGIATAN
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {schedule.title}
                </h2>
              </div>
              <span className="text-xs font-bold bg-white/20 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-white border border-white/20">
                {schedule.dateStr}
              </span>
            </div>

            {/* List Kegiatan */}
            <div className="p-5 sm:p-7 divide-y divide-slate-100">
              {schedule.activities.map((act, idx) => (
                <div
                  key={idx}
                  className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F8FAFE] px-3 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 shrink-0 flex items-center gap-1.5 text-xs font-extrabold text-[#1865F2] tabular-nums bg-[#EBF3FF] px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>{act.time} WIB</span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-[#1A284E]">
                        {act.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 sm:self-center pl-7 sm:pl-0">
                    <MapPin className="w-3.5 h-3.5 text-[#FFA033] shrink-0" />
                    <span>{act.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
