import React from 'react';
import { FileText, Info, User, Users, UserRoundCog } from 'lucide-react';
import { assignments } from '../../data/osjurData';

const assignmentIcons = { Individu: User, Kelompok: Users, Angkatan: UserRoundCog };

export const PenugasanPage: React.FC = () => (
  <div className="space-y-8 pb-6 md:space-y-12">
    <section className="mx-auto max-w-3xl space-y-3 pt-2 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FF] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1865F2]">
        <FileText className="h-4 w-4" />
        <span>Daftar tugas peserta VOTECH</span>
      </div>
      <h1 className="text-3xl font-black tracking-tight text-[#1A284E] sm:text-5xl">Penugasan VOTECH</h1>
      <div className="mx-auto h-1 w-12 rounded-full bg-[#1865F2]" />
      <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
        Perhatikan jenis tugas dan kerjakan setiap poin sesuai arahan panitia.
      </p>
    </section>

    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-3 lg:items-start">
      {assignments.map((task) => {
        const Icon = assignmentIcons[task.type as keyof typeof assignmentIcons] ?? FileText;
        return (
          <article key={task.id} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_8px_28px_-12px_rgba(15,23,42,0.18)] sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1865F2] text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-[#FFF6EB] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#D87400]">{task.type}</span>
            </div>
            <h2 className="text-xl font-black leading-tight text-[#1A284E]">{task.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{task.description}</p>
            <ol className="mt-5 space-y-3">
              {task.items.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#334155]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EBF3FF] text-xs font-black text-[#1865F2]">{index + 1}</span>
                  <span className="min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ol>
            {task.note ? (
              <div className="mt-5 flex gap-2 rounded-2xl bg-[#F8FAFE] p-3.5 text-xs leading-5 text-slate-600">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#1865F2]" />
                <p>{task.note}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  </div>
);
