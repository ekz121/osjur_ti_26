import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';
import { PhotoItem } from '../../types';
import { industryPhotos, schoolPhotos } from '../../data/osjurData';
import { ImageLightbox } from '../ImageLightbox';
import { HmtiLogo } from '../HmtiLogo';

export const DokumentasiPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Header with HMTI Logo */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <HmtiLogo className="w-8 h-8" />
          <div className="inline-flex items-center gap-2 bg-[#EAF0FF] text-[#1A56FF] px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Galeri Kegiatan HMTI & Jurusan</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A44] tracking-tight">
          Dokumentasi
        </h1>

        <p className="text-base text-[#4A5A85] max-w-2xl leading-relaxed">
          Momen seru dan inspiratif mahasiswa D3 Teknologi Informasi Politeknik Semen Indonesia
          dalam berbagai kegiatan akademik, pengabdian masyarakat, dan eksplorasi industri.
        </p>
      </section>

      {/* Bagian 1: IT Go To School */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-bold text-[#1A56FF] uppercase tracking-wider">
            Pengabdian & Literasi Digital
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1A44] tracking-tight mt-1">
            IT Go To School
          </h2>
          <p className="text-sm text-[#4A5A85] mt-1">
            Dokumentasi kegiatan mahasiswa D3 Teknologi Informasi berbagi ilmu dan pengalaman ke sekolah-sekolah.
          </p>
        </div>

        {/* 2x2 di HP dan 4 sejajar di desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {schoolPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-lg border border-[#D6E2FF] overflow-hidden flex flex-col cursor-pointer group hover:border-[#1A56FF] transition-all shadow-xs"
            >
              <div className="relative aspect-4/3 bg-[#EAF0FF] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0A1A44]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white text-[#1A56FF] flex items-center justify-center shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
              {/* Keterangan foto persis: "IT Go To School" */}
              <div className="p-3 bg-white border-t border-[#D6E2FF]">
                <h3 className="text-xs sm:text-sm font-bold text-[#0A1A44] group-hover:text-[#1A56FF] transition-colors">
                  IT Go To School
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian 2: Kunjungan Industri */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-bold text-[#1A56FF] uppercase tracking-wider">
            Pengenalan Ekosistem Kerja
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1A44] tracking-tight mt-1">
            Kunjungan Industri
          </h2>
          <p className="text-sm text-[#4A5A85] mt-1">
            Dokumentasi pembelajaran langsung di dunia industri dan korporasi teknologi.
          </p>
        </div>

        {/* 2x2 di HP dan 4 sejajar di desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {industryPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-lg border border-[#D6E2FF] overflow-hidden flex flex-col cursor-pointer group hover:border-[#1A56FF] transition-all shadow-xs"
            >
              <div className="relative aspect-4/3 bg-[#EAF0FF] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0A1A44]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white text-[#1A56FF] flex items-center justify-center shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
              {/* Keterangan foto persis: "Kunjungan Industri" */}
              <div className="p-3 bg-white border-t border-[#D6E2FF]">
                <h3 className="text-xs sm:text-sm font-bold text-[#0A1A44] group-hover:text-[#1A56FF] transition-colors">
                  Kunjungan Industri
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Lightbox */}
      <ImageLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};
