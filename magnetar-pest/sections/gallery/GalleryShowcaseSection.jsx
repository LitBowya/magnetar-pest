'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const GalleryShowcaseSection = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All gallery images from g1.jpeg to g22.jpeg
  const galleryImages = [
    { id: 1, src: '/gallery/g1.jpeg', alt: 'Pest Control Project 1' },
    { id: 2, src: '/gallery/g2.jpeg', alt: 'Pest Control Project 2' },
    { id: 3, src: '/gallery/g3.jpeg', alt: 'Pest Control Project 3' },
    { id: 4, src: '/gallery/g4.jpeg', alt: 'Pest Control Project 4' },
    { id: 5, src: '/gallery/g5.jpeg', alt: 'Pest Control Project 5' },
    { id: 6, src: '/gallery/g6.jpeg', alt: 'Pest Control Project 6' },
    { id: 7, src: '/gallery/g7.jpeg', alt: 'Pest Control Project 7' },
    { id: 8, src: '/gallery/g8.jpeg', alt: 'Pest Control Project 8' },
    { id: 9, src: '/gallery/g9.jpeg', alt: 'Pest Control Project 9' },
    { id: 10, src: '/gallery/g10.jpeg', alt: 'Pest Control Project 10' },
    { id: 11, src: '/gallery/g11.jpeg', alt: 'Pest Control Project 11' },
    { id: 12, src: '/gallery/g12.jpeg', alt: 'Pest Control Project 12' },
    { id: 13, src: '/gallery/g13.jpeg', alt: 'Pest Control Project 13' },
    { id: 14, src: '/gallery/g14.jpeg', alt: 'Pest Control Project 14' },
    { id: 15, src: '/gallery/g15.jpeg', alt: 'Pest Control Project 15' },
    { id: 16, src: '/gallery/g16.jpeg', alt: 'Pest Control Project 16' },
    { id: 17, src: '/gallery/g17.jpeg', alt: 'Pest Control Project 17' },
    { id: 18, src: '/gallery/g18.jpeg', alt: 'Pest Control Project 18' },
    { id: 19, src: '/gallery/g19.jpeg', alt: 'Pest Control Project 19' },
    { id: 20, src: '/gallery/g20.jpeg', alt: 'Pest Control Project 20' },
    { id: 21, src: '/gallery/g21.jpeg', alt: 'Pest Control Project 21' },
    { id: 22, src: '/gallery/g22.jpeg', alt: 'Pest Control Project 22' }
  ];

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(galleryImages[prevIndex]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Project</span> Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our comprehensive collection of pest control projects and see the real impact of our professional services
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Main Image */}
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {currentImageIndex + 1} of {galleryImages.length}
              </div>
            </div>

            {/* Click outside to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryShowcaseSection;
