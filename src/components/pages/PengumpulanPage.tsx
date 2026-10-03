import React, { useState } from 'react';
import { Send, ExternalLink, Info } from 'lucide-react';
import { assignments } from '../../data/osjurData';

export const DEFAULT_FORM_URL = '';

export const PengumpulanPage: React.FC = () => {
  const [formUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('osjur_custom_form_url')?.trim() ?? DEFAULT_FORM_URL;
    } catch {
      return DEFAULT_FORM_URL;
    }
  });

  const formAvailable = /^https:\/\/(docs\.google\.com\/forms|forms\.gle)\//i.test(formUrl);

  return (
    <div className="space-y-8 pb-6 md:space-y-12">
      {/* Header */}
      <section className="space-y-3 text-center max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#1865F2] text-xs font-extrabold uppercase tracking-wider">
          <Send className="w-4 h-4" />
          <span>PORTAL PENGUMPULAN TUGAS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A284E] tracking-tight">
          Pengumpulan Penugasan
        </h1>

        <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto" />

        {/* Teks Petunjuk Resmi */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.06)] text-left flex items-start gap-4 mt-6">
          <div className="w-10 h-10 rounded-2xl bg-[#FFA033] text-white flex items-center justify-center shrink-0 shadow-md">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-extrabold text-[#1A284E] leading-relaxed">
              Google Form pengumpulan belum tersedia.
            </p>
            <p className="text-xs text-slate-500">
              Tautan resmi akan ditampilkan di halaman ini setelah dibagikan oleh panitia VOTECH.
            </p>
          </div>
        </div>

      </section>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-3">
        {assignments.map((task) => (
          <div
            key={task.id}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_8px_28px_-12px_rgba(15,23,42,0.18)] sm:p-7"
          >
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-[#EBF3FF] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1865F2]">{task.type}</span>

              <div>
                <h3 className="text-xl font-black text-[#1A284E]">
                  {task.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {task.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFA033]" />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bright Orange Button matching Mockup CTA Style */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              {formAvailable ? (
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FFA033] px-5 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#F59020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1865F2] focus-visible:ring-offset-2">
                  <span>Buka Google Form</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <button type="button" disabled className="flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-slate-100 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Form segera tersedia
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
