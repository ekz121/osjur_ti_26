import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';
import { PhotoItem } from '../../types';
import { industryPhotos, schoolPhotos } from '../../data/osjurData';
import { ImageLightbox } from '../ImageLightbox';

export const DokumentasiPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const allPhotos = [...schoolPhotos, ...industryPhotos];

  return (
    <div className="space-y-10 md:space-y-12 pb-6">
      {/* Header */}
      <section className="space-y-3 text-center max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#1865F2] text-xs font-extrabold uppercase tracking-wider">
          <Camera className="w-4 h-4" />
          <span>Galeri kegiatan</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A284E] tracking-tight">
          Galeri VOTECH
        </h1>

        <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto" />

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Momen IT Go to School dan kunjungan industri mahasiswa Teknologi Informasi.
        </p>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {allPhotos.map((photo) => (
            <div
              key={photo.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedPhoto(photo)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedPhoto(photo);
                }
              }}
              aria-label={`Buka foto ${photo.title}`}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,0.2)] transition-shadow hover:shadow-xl focus-within:ring-2 focus-within:ring-[#1865F2]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.alt || 'Galeri VOTECH'}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#1865F2]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#1865F2] flex items-center justify-center shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex min-h-16 items-center px-5 py-4 text-left">
                <h2 className="text-sm font-extrabold text-[#1A284E] sm:text-base">{photo.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};
