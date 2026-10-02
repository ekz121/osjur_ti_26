import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { schedules } from '../../data/osjurData';

export const KegiatanPage: React.FC = () => {
  const [activeDayFilter, setActiveDayFilter] = useState<number | 'all'>('all');

  const filteredSchedules =
    activeDayFilter === 'all'
      ? schedules
      : schedules.filter((s) => s.day === activeDayFilter);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#EAF0FF] text-[#1A56FF] px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
          <Calendar className="w-4 h-4" />
          <span>Timeline Pelaksanaan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A44] tracking-tight">
          Rangkaian Kegiatan
        </h1>

        <p className="text-base text-[#4A5A85] max-w-2xl leading-relaxed">
          Pantau seluruh agenda OSJUR D3 Teknologi Informasi dari hari pertama hingga penutupan.
          Pastikan kamu selalu hadir tepat waktu di setiap lokasi kegiatan!
        </p>

        {/* Day Filter Buttons (Agak kotak tapi ada lengkungan: rounded-md) */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveDayFilter('all')}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
              activeDayFilter === 'all'
                ? 'bg-[#1A56FF] border-[#1A56FF] text-white shadow-xs'
                : 'bg-[#FFFFFF] border-[#D6E2FF] text-[#0A1A44] hover:bg-[#EAF0FF]'
            }`}
          >
            Semua Hari (3 Hari)
          </button>
          {[1, 2, 3].map((dayNum) => (
            <button
              key={dayNum}
              onClick={() => setActiveDayFilter(dayNum)}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                activeDayFilter === dayNum
                  ? 'bg-[#1A56FF] border-[#1A56FF] text-white shadow-xs'
                  : 'bg-[#FFFFFF] border-[#D6E2FF] text-[#0A1A44] hover:bg-[#EAF0FF]'
              }`}
            >
              Hari {dayNum}
            </button>
          ))}
        </div>
      </section>

      {/* Kartu Hari (Agak kotak dengan lengkungan halus: rounded-lg) */}
      <div className="space-y-5">
        {filteredSchedules.map((schedule) => (
          <div
            key={schedule.day}
            className="bg-white rounded-lg border border-[#D6E2FF] overflow-hidden shadow-xs"
          >
            {/* Header Biru Hari (Agak kotak: rounded-t-[7px]) */}
            <div className="bg-[#1A56FF] text-white px-5 sm:px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-white/80">
                  Agenda Resmi
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  {schedule.title}
                </h2>
              </div>
              <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-md text-white">
                {schedule.dateStr}
              </span>
            </div>

            {/* List Kegiatan */}
            <div className="p-4 sm:p-6 divide-y divide-[#D6E2FF]">
              {schedule.activities.map((act, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 hover:bg-[#EAF0FF]/25 px-2.5 rounded-md transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-20 sm:w-24 shrink-0 flex items-center gap-1.5 text-xs font-bold text-[#1A56FF] tabular-nums">
                      <Clock className="w-3.5 h-3.5 stroke-[2.2]" />
                      <span>{act.time} WIB</span>
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-base text-[#0A1A44]">
                        {act.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#4A5A85] sm:self-center pl-7 sm:pl-0">
                    <MapPin className="w-3.5 h-3.5 text-[#1A56FF] shrink-0" />
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
