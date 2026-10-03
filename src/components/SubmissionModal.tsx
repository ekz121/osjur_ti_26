import React, { useState } from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { Assignment, TaskSubmission } from '../types';

interface SubmissionModalProps {
  assignment: Assignment | null;
  initialSubmission?: TaskSubmission;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (submission: TaskSubmission) => void;
}

export const SubmissionModal: React.FC<SubmissionModalProps> = ({
  assignment,
  initialSubmission,
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen || !assignment) return null;

  const [fullName, setFullName] = useState(initialSubmission?.fullName || '');
  const [nim, setNim] = useState(initialSubmission?.nim || '');
  const [groupName, setGroupName] = useState(initialSubmission?.groupName || '');
  const [fileUrl, setFileUrl] = useState(initialSubmission?.fileUrl || '');
  const [note, setNote] = useState(initialSubmission?.note || '');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Mohon masukkan nama lengkapmu.');
      return;
    }
    if (!nim.trim()) {
      setError('Mohon masukkan NIM.');
      return;
    }
    if (!fileUrl.trim()) {
      setError('Mohon cantumkan tautan link tugasmu (Google Drive, GitHub, dll).');
      return;
    }

    const newSub: TaskSubmission = {
      taskId: assignment.id,
      fullName: fullName.trim(),
      nim: nim.trim(),
      groupName: groupName.trim() || 'Kelompok Umum',
      fileUrl: fileUrl.trim(),
      note: note.trim(),
      submittedAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    onSubmit(newSub);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-[20px] border border-[#D6E2FF] p-6 shadow-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#D6E2FF]">
          <div>
            <span className="text-xs font-bold text-[#1A56FF] uppercase tracking-wide">
              {assignment.number} · Deadline: {assignment.deadline}
            </span>
            <h3 className="text-xl font-bold text-[#0A1A44] mt-0.5">
              Form Pengumpulan Tugas
            </h3>
            <p className="text-sm text-[#4A5A85] mt-1">{assignment.title}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup form"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-[#EAF0FF] text-[#0A1A44]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#EAF0FF] text-[#1A56FF] flex items-center justify-center mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-[#0A1A44]">Tugas Berhasil Dikirim!</h4>
            <p className="text-sm text-[#4A5A85] mt-1">
              Data pengumpulanmu telah tercatat oleh sistem VOTECH.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {error && (
              <div className="p-3 rounded-[12px] bg-[#EAF0FF] border border-[#D6E2FF] text-xs font-semibold text-[#1A56FF]">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#0A1A44] uppercase tracking-wide mb-1.5">
                Nama Lengkap <span className="text-[#1A56FF]">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Contoh: Muhammad Rizky Pratama"
                className="w-full px-4 py-2.5 rounded-[12px] border border-[#D6E2FF] bg-[#FFFFFF] text-sm text-[#0A1A44] placeholder:text-[#4A5A85]/50 focus:outline-none focus:border-[#1A56FF]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#0A1A44] uppercase tracking-wide mb-1.5">
                  NIM Mahasiswa <span className="text-[#1A56FF]">*</span>
                </label>
                <input
                  type="text"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  placeholder="Contoh: 260301001"
                  className="w-full px-4 py-2.5 rounded-[12px] border border-[#D6E2FF] bg-[#FFFFFF] text-sm text-[#0A1A44] placeholder:text-[#4A5A85]/50 focus:outline-none focus:border-[#1A56FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A1A44] uppercase tracking-wide mb-1.5">
                  Gugus / Kelompok
                </label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Contoh: Kelompok 04 - Algoritma"
                  className="w-full px-4 py-2.5 rounded-[12px] border border-[#D6E2FF] bg-[#FFFFFF] text-sm text-[#0A1A44] placeholder:text-[#4A5A85]/50 focus:outline-none focus:border-[#1A56FF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A1A44] uppercase tracking-wide mb-1.5">
                Tautan File Tugas <span className="text-[#1A56FF]">*</span>
              </label>
              <input
                type="url"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                placeholder="https://drive.google.com/... atau https://github.com/..."
                className="w-full px-4 py-2.5 rounded-[12px] border border-[#D6E2FF] bg-[#FFFFFF] text-sm text-[#0A1A44] placeholder:text-[#4A5A85]/50 focus:outline-none focus:border-[#1A56FF]"
              />
              <p className="text-[11px] text-[#4A5A85] mt-1">
                Pastikan hak akses tautan Google Drive / Cloud sudah diatur ke "Siapa saja yang memiliki link".
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A1A44] uppercase tracking-wide mb-1.5">
                Catatan Tambahan (Opsional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                placeholder="Tambahkan pesan jika ada hal khusus mengenai pengerjaan tugasmu..."
                className="w-full px-4 py-2 rounded-[12px] border border-[#D6E2FF] bg-[#FFFFFF] text-sm text-[#0A1A44] placeholder:text-[#4A5A85]/50 focus:outline-none focus:border-[#1A56FF] resize-none"
              />
            </div>

            <div className="pt-3 border-t border-[#D6E2FF] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#4A5A85] hover:bg-[#EAF0FF] transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#1A56FF] hover:bg-[#0F3FD1] text-white text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Kirimkan Tugas</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
