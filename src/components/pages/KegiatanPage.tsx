import React from 'react';
import { CalendarDays, ClipboardList } from 'lucide-react';
import { activityGuides, schedules } from '../../data/osjurData';

export const KegiatanPage: React.FC = () => (
  <div className="space-y-8 pb-6 md:space-y-12">
    <section className="mx-auto max-w-3xl space-y-3 pt-2 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FF] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1865F2]">
        <CalendarDays className="h-4 w-4" />
        <span>Agenda VOTECH 2026</span>
      </div>
      <h1 className="text-3xl font-black tracking-tight text-[#1A284E] sm:text-5xl">Rangkaian Kegiatan</h1>
      <div className="mx-auto h-1 w-12 rounded-full bg-[#1865F2]" />
      <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
        Berikut rangkaian kegiatan VOTECH Politeknik Semen Indonesia (POLTEKSI) 2026:
      </p>
    </section>

    <section className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,0.18)]">
      <table className="w-full table-fixed border-collapse text-left">
        <caption className="sr-only">Jadwal rangkaian kegiatan VOTECH 2026</caption>
        <thead className="bg-[#1865F2] text-white">
          <tr>
            <th scope="col" className="w-[25%] border-r border-white/25 px-3 py-3 text-[11px] font-extrabold uppercase tracking-wide sm:w-[23%] sm:px-6 sm:py-4 sm:text-sm">Tanggal</th>
            <th scope="col" className="w-[31%] border-r border-white/25 px-3 py-3 text-[11px] font-extrabold uppercase tracking-wide sm:w-[32%] sm:px-6 sm:py-4 sm:text-sm">Kegiatan</th>
            <th scope="col" className="px-3 py-3 text-[11px] font-extrabold uppercase tracking-wide sm:px-6 sm:py-4 sm:text-sm">Rangkaian</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {schedules.map((schedule) => (
            <tr key={schedule.id} className="align-top even:bg-[#F8FAFE]">
              <td className="border-r border-slate-200 px-3 py-4 text-xs font-extrabold leading-5 text-[#1865F2] sm:px-6 sm:py-5 sm:text-sm">{schedule.dateStr}</td>
              <td className="border-r border-slate-200 px-3 py-4 text-xs font-black leading-5 text-[#1A284E] sm:px-6 sm:py-5 sm:text-base">{schedule.title}</td>
              <td className="px-3 py-4 sm:px-6 sm:py-5">
                <ol className="space-y-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  {schedule.items.map((item, index) => (
                    <li key={item} className="flex gap-2">
                      <span className="font-extrabold text-[#D66A00]">{index + 1}.</span>
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ol>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    <section className="mx-auto max-w-5xl space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF1DF] text-[#C76500]">
          <ClipboardList className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#C76500]">Orientasi Jurusan Offline</p>
          <h2 className="text-xl font-black text-[#1A284E] sm:text-2xl">Kegiatan dan Juknis</h2>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,0.18)]">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">Kegiatan dan juknis Orientasi Jurusan Offline</caption>
          <thead className="bg-[#1865F2] text-white">
            <tr>
              <th scope="col" className="w-[34%] border-r border-white/25 px-3 py-3 text-[11px] font-extrabold uppercase tracking-wide sm:w-[36%] sm:px-6 sm:py-4 sm:text-sm">Kegiatan</th>
              <th scope="col" className="px-3 py-3 text-[11px] font-extrabold uppercase tracking-wide sm:px-6 sm:py-4 sm:text-sm">Juknis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {activityGuides.map((item) => (
              <tr key={item.activity} className="align-top even:bg-[#F8FAFE]">
                <th scope="row" className="border-r border-slate-200 px-3 py-3 text-xs font-extrabold leading-5 text-[#1865F2] sm:px-6 sm:py-4 sm:text-sm sm:text-[#1A284E]">{item.activity}</th>
                <td className="px-3 py-3 text-xs leading-5 text-slate-600 sm:px-6 sm:py-4 sm:text-sm sm:leading-6">{item.technicalGuide}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);
