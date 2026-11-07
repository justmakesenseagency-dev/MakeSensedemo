import React, { useState } from 'react';
import { REAL_GALLERY_PHOTOS } from '../data/schoolData';
import { Maximize2, X, CheckCircle } from 'lucide-react';

interface FacilitiesGallerySectionProps {
  lang: 'en' | 'hi';
}

export const FacilitiesGallerySection: React.FC<FacilitiesGallerySectionProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<typeof REAL_GALLERY_PHOTOS[0] | null>(null);

  const filterTabs = ['All', 'Classrooms', 'Play Area', 'Campus & Grounds', 'Corridor & Offices'];

  const filteredPhotos =
    selectedFilter === 'All'
      ? REAL_GALLERY_PHOTOS
      : REAL_GALLERY_PHOTOS.filter((p) => p.category === selectedFilter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>{lang === 'hi' ? 'परिसर और सुविधाएं' : 'Facilities & Campus Gallery'}</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            {lang === 'hi' ? 'वास्तविक परिसर की एक झलक' : 'Authentic Campus & Facilities'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real photographs of Al-Jamia International School in Gwalior — showing classrooms, outdoor play area,
            landscaped garden path, corridor, and reception.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#071324] text-amber-300 shadow-sm border border-amber-500/40'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid of Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-lg transition-all group cursor-pointer flex flex-col"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setActivePhoto(photo);
              }}
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-white/95 px-2.5 py-0.5 rounded shadow-xs">
                    {photo.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1 group-hover:text-emerald-900 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {photo.caption}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Al-Jamia International School</span>
                  <span className="text-emerald-700 font-semibold">Gwalior Campus</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#071324] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="w-full max-h-[75vh] object-contain bg-black"
              referrerPolicy="no-referrer"
            />

            <div className="p-5 text-white">
              <div className="flex items-center gap-2 mb-1.5 text-xs text-amber-300">
                <span className="font-bold uppercase tracking-wider">{activePhoto.category}</span>
                <span>·</span>
                <span className="text-slate-400">Authentic School Photograph · Gwalior</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-1">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
