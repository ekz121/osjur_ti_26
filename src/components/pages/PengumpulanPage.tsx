import React, { useState, useEffect } from 'react';
import { Send, ExternalLink, Clock, Info, Link as LinkIcon, Settings2, Check } from 'lucide-react';
import { assignments } from '../../data/osjurData';

// TAUTAN FORM PENGUMPULAN (Bisa diganti langsung di sini atau via tombol pengaturan di bawah):
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

  const handleOpenForm = (taskTitle: string) => {
    // Open target form in a new tab
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header & Instructions */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#EAF0FF] text-[#1A56FF] px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
          <Send className="w-4 h-4" />
          <span>Portal Pengumpulan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A44] tracking-tight">
          Pengumpulan Penugasan
        </h1>

        {/* Teks Petunjuk Resmi */}
        <div className="bg-[#EAF0FF] border border-[#D6E2FF] rounded-lg p-4 sm:p-5 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#1A56FF] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#0A1A44] leading-relaxed">
              Klik tombol untuk membuka form pengumpulan. Pastikan file sudah siap sebelum deadline.
            </p>
            <p className="text-xs text-[#4A5A85]">
              Formulir akan terbuka di tab baru. Pastikan akun Google yang kamu gunakan sesuai.
            </p>
          </div>
        </div>

        {/* Custom Form URL Quick Editor for Developer/Panitia */}
        <div className="pt-1">
          {!isEditingUrl ? (
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-md bg-white border border-[#D6E2FF] text-xs">
              <div className="flex items-center gap-2 text-[#4A5A85] truncate">
                <LinkIcon className="w-4 h-4 text-[#1A56FF] shrink-0" />
                <span className="font-semibold text-[#0A1A44]">Tautan Form Aktif:</span>
                <span className="text-[#1A56FF] truncate font-mono text-[11px]">{formUrl}</span>
              </div>
              <button
                onClick={() => {
                  setTempUrl(formUrl);
                  setIsEditingUrl(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EAF0FF] hover:bg-[#D6E2FF] text-[#1A56FF] font-bold text-[11px] transition-colors cursor-pointer shrink-0"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Ubah Link Form</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSaveUrl} className="p-3.5 rounded-md bg-white border border-[#1A56FF] space-y-2">
              <label className="block text-xs font-bold text-[#0A1A44]">
                Masukkan Tautan Form Google / Microsoft Form Pengumpulanmu:
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="url"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="https://forms.gle/..."
                  className="flex-1 w-full px-3 py-2 rounded-md border border-[#D6E2FF] text-xs text-[#0A1A44] focus:outline-none focus:border-[#1A56FF]"
                />
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-4 py-2 rounded-md bg-[#1A56FF] hover:bg-[#0F3FD1] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1"
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
                    className="px-3 py-2 rounded-md bg-[#EAF0FF] text-[#4A5A85] text-xs font-semibold hover:bg-[#D6E2FF] cursor-pointer"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4 Kartu Tugas Pengumpulan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {assignments.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg border border-[#D6E2FF] p-6 flex flex-col justify-between hover:border-[#1A56FF] transition-all shadow-xs"
          >
            <div className="space-y-4">
              {/* Header: Task Number & Deadline */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-[#1A56FF] bg-[#EAF0FF] px-2.5 py-0.5 rounded-md">
                  {task.number}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#4A5A85]">
                  <Clock className="w-3.5 h-3.5 text-[#1A56FF]" />
                  <span>Deadline: {task.deadline}</span>
                </div>
              </div>

              {/* Nama Tugas */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1A44]">
                  {task.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5A85] mt-1.5 leading-relaxed">
                  {task.description}
                </p>
              </div>

              <div className="p-3 rounded-md bg-[#EAF0FF]/40 border border-[#D6E2FF] text-xs text-[#4A5A85]">
                <span>Format: Link Google Drive / Dokumen / Repositori sesuai instruksi penugasan.</span>
              </div>
            </div>

            {/* Tombol Biru "Kumpulkan Tugas" dengan ikon panah keluar mengarah ke form */}
            <div className="pt-5 mt-4 border-t border-[#D6E2FF]">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] px-6 py-2.5 rounded-full bg-[#1A56FF] hover:bg-[#0F3FD1] text-white text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
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
