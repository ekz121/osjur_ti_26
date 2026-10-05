import React from 'react';
import { BookOpen, Download, ExternalLink, FileText } from 'lucide-react';

const guidebookUrl = '/guidebook-votech-2026.pdf';

export const GuidebookPage: React.FC = () => (
  <div className="space-y-8 pb-6 md:space-y-12">
    <section className="mx-auto max-w-3xl space-y-3 pt-2 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FF] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1865F2]">
        <BookOpen className="h-4 w-4" />
        <span>Panduan peserta VOTECH</span>
      </div>
      <h1 className="text-3xl font-black tracking-tight text-[#1A284E] sm:text-5xl">Guidebook VOTECH 2026</h1>
      <div className="mx-auto h-1 w-12 rounded-full bg-[#1865F2]" />
      <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
        Baca atau unduh guidebook untuk melihat informasi lengkap VOTECH 2026.
      </p>
    </section>

    <section className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,0.18)]">
      <div className="flex flex-col gap-5 bg-[#1865F2] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <FileText className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-black sm:text-xl">GUIDEBOOK VOTECH 2026.pdf</h2>
            <p className="mt-1 text-xs text-white/80 sm:text-sm">14 halaman · PDF</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:flex sm:shrink-0">
          <a
            href={guidebookUrl}
            download="GUIDEBOOK VOTECH 2026.pdf"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFA033] px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#F59020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1865F2]"
          >
            <Download className="h-4 w-4" />
            Download Guidebook
          </a>
          <a
            href={guidebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ExternalLink className="h-4 w-4" />
            Buka PDF
          </a>
        </div>
      </div>

    </section>
  </div>
);
