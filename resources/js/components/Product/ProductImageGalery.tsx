import React, { useState, useRef } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const displayImages = images && images.length > 0 ? images : ['/default-product.jpg'];

  // Function untuk scroll thumbnails
  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Sesuaikan seberapa jauh scroll per klik
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="aspect-square relative group">
          {displayImages[selectedImage] ? (
            <img 
              src={displayImages[selectedImage]} 
              alt={`${productName} - Foto ${selectedImage + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}
          
          {/* Placeholder jika image tidak ada atau gagal load */}
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hidden">
            <div className="text-center">
              <div className="text-8xl text-gray-400 mb-4">📷</div>
              <p className="text-gray-500 font-medium">{productName}</p>
              <p className="text-gray-400 text-sm">Foto Produk Utama</p>
            </div>
          </div>

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-lg shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </button>

          {/* Product Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Premium Quality
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Images dengan Scroll Horizontal */}
      <div className="relative">
        {/* Left Scroll Button */}
        {displayImages.length > 5 && (
          <button
            onClick={() => scrollThumbnails('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300"
            style={{ marginLeft: '-12px' }}
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-2"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                selectedImage === index 
                  ? 'ring-2 ring-blue-600 ring-offset-2' 
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
              }`}
            >
              {image ? (
                <img 
                  src={image} 
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
              
              {/* Placeholder untuk thumbnail */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hidden">
                <div className="text-center">
                  <div className="text-xs text-gray-400">📷</div>
                  <p className="text-xs text-gray-400 mt-1">{index + 1}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        {displayImages.length > 5 && (
          <button
            onClick={() => scrollThumbnails('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300"
            style={{ marginRight: '-12px' }}
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Image Counter */}
      <div className="text-center">
        <span className="text-sm text-gray-500">
          {selectedImage + 1} dari {displayImages.length} foto
        </span>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg z-10"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                {displayImages[selectedImage] ? (
                  <img 
                    src={displayImages[selectedImage]} 
                    alt={`${productName} - Zoom View`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}
                
                {/* Placeholder untuk zoom view */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center absolute inset-0 hidden">
                  <div className="text-center">
                    <div className="text-9xl text-gray-400 mb-4">📷</div>
                    <p className="text-gray-500 font-medium text-xl">{productName}</p>
                    <p className="text-gray-400">Foto Detail Zoom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS untuk hide scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}