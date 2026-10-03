import React from 'react';
import { X, Calendar } from 'lucide-react';
import { PhotoItem } from '../types';

interface ImageLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup foto"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-slate-900 flex items-center justify-center">
          <img
            src={photo.src}
            alt={photo.alt || 'Galeri VOTECH'}
            referrerPolicy="no-referrer"
            className="w-full max-h-[75vh] object-contain"
          />
        </div>

        {photo.date ? (
          <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#1865F2]">
              <Calendar className="w-4 h-4 text-[#FFA033]" />
              <span>{photo.date}</span>
            </div>
            <span className="text-xs text-slate-400">VOTECH Politeknik Semen Indonesia</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
