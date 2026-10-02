import React, { useState } from 'react';
import { Camera, Eye, Calendar } from 'lucide-react';
import { PhotoItem } from '../../types';
import { industryPhotos, schoolPhotos } from '../../data/osjurData';
import { ImageLightbox } from '../ImageLightbox';
import noPhotoDefault from '../../../No photo default.jpg';

export const DokumentasiPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Gabungkan seluruh foto dokumentasi
  const allPhotos = [...schoolPhotos, ...industryPhotos].map((photo) => ({
    ...photo,
    src: noPhotoDefault,
    alt: 'Foto dokumentasi belum tersedia',
  }));

  return (
    <div className="space-y-10 md:space-y-12 pb-6">
      {/* Header */}
      <section className="space-y-3 text-center max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#1865F2] text-xs font-extrabold uppercase tracking-wider">
          <Camera className="w-4 h-4" />
          <span>GALERI DOKUMENTASI</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A284E] tracking-tight">
          Dokumentasi Kegiatan
        </h1>

        <div className="w-12 h-1 bg-[#1865F2] rounded-full mx-auto" />

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Galeri foto rangkaian kegiatan mahasiswa D3 Teknologi Informasi Politeknik Semen Indonesia.
        </p>
      </section>

      {/* Grid Foto Dokumentasi (Keterangan teks lama dihapus, format tanggal di atas/bawah foto dan saat ini dibuat kosong sesuai permintaan user) */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {allPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* Tanggal di atas foto (Saat ini kosong sesuai permintaan, jika diisi akan tampil otomatis) */}
              {photo.date ? (
                <div className="px-4 py-2.5 bg-[#F8FAFE] border-b border-slate-100 flex items-center justify-between text-xs font-bold text-[#1865F2]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FFA033]" />
                    <span>{photo.date}</span>
                  </div>
                </div>
              ) : null}

              {/* Wadah Foto */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt || 'Dokumentasi OSJUR'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1865F2]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#1865F2] flex items-center justify-center shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Tanggal di bawah foto (Format keterangan tanggal; saat ini kosong sesuai permintaan) */}
              <div className="p-3 bg-white border-t border-slate-50 min-h-[38px] flex items-center justify-center text-center">
                {photo.date ? (
                  <span className="text-xs font-bold text-[#1A284E]">
                    {photo.date}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-300 font-medium tracking-wide">
                    {/* Dibuat kosong sesuai instruksi user */}
                  </span>
                )}
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
