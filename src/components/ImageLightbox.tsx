import React from 'react';
import { X } from 'lucide-react';
import { PhotoItem } from '../types';

interface ImageLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-[20px] overflow-hidden border border-[#D6E2FF]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup foto"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#0A1A44] flex items-center justify-center hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={photo.src}
          alt={photo.alt}
          referrerPolicy="no-referrer"
          className="w-full max-h-[70vh] object-cover"
        />

        <div className="p-4 sm:p-5 bg-white border-t border-[#D6E2FF]">
          <span className="text-xs font-bold text-[#1A56FF] uppercase tracking-wide">
            {photo.category === 'school' ? 'IT Go To School' : 'Kunjungan Industri'}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#0A1A44] mt-0.5">
            {photo.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#4A5A85] mt-1">{photo.alt}</p>
        </div>
      </div>
    </div>
  );
};
