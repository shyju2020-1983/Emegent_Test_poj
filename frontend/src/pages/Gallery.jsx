import React, { useState } from 'react';
import { galleryImages } from '../data/mock';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ECEC75] via-[#e6e67c] to-[#ECEC75] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold font-serif text-[#0f172a] mb-4">
            Gallery
          </h1>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            A visual journey through our culinary delights and dining experience
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-8 border-b border-[#e6e67c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[#0f172a] text-white'
                  : 'bg-[#f8fafc] text-[#64748b] hover:bg-[#ECEC75]/30'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('food')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'food'
                  ? 'bg-[#0f172a] text-white'
                  : 'bg-[#f8fafc] text-[#64748b] hover:bg-[#ECEC75]/30'
              }`}
            >
              Food
            </button>
            <button
              onClick={() => setFilter('restaurant')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'restaurant'
                  ? 'bg-[#0f172a] text-white'
                  : 'bg-[#f8fafc] text-[#64748b] hover:bg-[#ECEC75]/30'
              }`}
            >
              Restaurant
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#ECEC75]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#f8fafc]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-[#ECEC75] text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#0f172a]/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold font-serif mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-[#ECEC75] capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif text-[#0f172a] mb-4">
            Experience It Yourself
          </h2>
          <p className="text-lg text-[#64748b] mb-8">
            Visit us today and taste the authentic flavors of Malabar cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/order"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
            >
              Order Online
            </a>
            <a
              href="/locations"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ECEC75] text-[#0f172a] rounded-lg font-semibold hover:bg-[#e6e67c] transition-colors"
            >
              Find a Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
