import React, { useState } from 'react';
import { Send, ExternalLink, Clock, Info, Link as LinkIcon, Settings2, Check, ArrowRight } from 'lucide-react';
import { assignments } from '../../data/osjurData';

export const DEFAULT_FORM_URL = 'https://forms.gle/';

export const PengumpulanPage: React.FC = () => {
  const [formUrl, setFormUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('osjur_custom_form_url');
      return saved && saved.trim() ? saved : DEFAULT_FORM_URL;
    } catch {
      return DEFAULT_FORM_URL;
    }
  });

  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [tempUrl, setTempUrl] = useState(formUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = tempUrl.trim() || DEFAULT_FORM_URL;
    setFormUrl(finalUrl);
    try {
      localStorage.setItem('osjur_custom_form_url', finalUrl);
    } catch (e) {
      console.error(e);
    }
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsEditingUrl(false);
    }, 1000);
  };

  return (
    <div className="space-y-10 md:space-y-12 pb-6">
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
              Klik tombol untuk membuka form pengumpulan. Pastikan file sudah siap sebelum deadline.
            </p>
            <p className="text-xs text-slate-500">
              Formulir Google Form resmi panitia akan terbuka di tab baru. Siapkan link Google Drive atau berkas tugasmu.
            </p>
          </div>
        </div>

        {/* Link Form Settings Bar */}
        <div className="pt-2 text-left">
          {!isEditingUrl ? (
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-xs text-xs">
              <div className="flex items-center gap-2.5 text-slate-500 truncate">
                <LinkIcon className="w-4 h-4 text-[#1865F2] shrink-0" />
                <span className="font-extrabold text-[#1A284E]">Tautan Form Aktif:</span>
                <span className="text-[#1865F2] truncate font-mono text-[11px] bg-[#EBF3FF] px-2.5 py-1 rounded-md">
                  {formUrl}
                </span>
              </div>
              <button
                onClick={() => {
                  setTempUrl(formUrl);
                  setIsEditingUrl(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] hover:bg-[#D6E6FF] text-[#1865F2] font-bold text-xs transition-colors cursor-pointer shrink-0"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Ubah Link Form</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSaveUrl} className="p-4 rounded-2xl bg-white border border-[#1865F2] shadow-md space-y-3">
              <label className="block text-xs font-bold text-[#1A284E]">
                Masukkan Tautan Google Form Pengumpulan Tugas:
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <input
                  type="url"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="https://forms.gle/..."
                  className="flex-1 w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-[#1A284E] focus:outline-none focus:border-[#1865F2]"
                />
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#1865F2] hover:bg-[#1255DC] text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    {saveSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Tersimpan!</span>
                      </>
                    ) : (
                      <span>Simpan Link</span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingUrl(false)}
                    className="px-4 py-2.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4 Kartu Pengumpulan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {assignments.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-3xl border border-slate-100 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.06)] p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="space-y-4">
              {/* Header: Task Number & Deadline */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#1865F2] bg-[#EBF3FF] px-3.5 py-1 rounded-full">
                  {task.number}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FFA033] bg-[#FFF6EB] px-3.5 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{task.deadline}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#1A284E]">
                  {task.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {task.description}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFE] border border-slate-100 text-xs text-slate-500">
                <span className="font-semibold text-[#1865F2]">Format Pengiriman:</span> Link Google Drive, Dokumen, atau GitHub sesuai instruksi.
              </div>
            </div>

            {/* Bright Orange Button matching Mockup CTA Style */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] px-6 py-3 rounded-full bg-[#FFA033] hover:bg-[#F59020] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Kumpulkan Tugas</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
