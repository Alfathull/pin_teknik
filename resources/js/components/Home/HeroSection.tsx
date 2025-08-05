import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Wujudkan Ide Kreatif Anda dengan
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-2">
                Pin Custom Berkualitas
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Spesialis pembuatan pin enamel, medali, label hijab, dan berbagai souvenir custom di Bandung. 
              Kualitas premium, harga terjangkau, dan pengerjaan cepat untuk semua kebutuhan Anda.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/6281573420204?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20pin%20custom"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
                </svg>
                <span>Chat WhatsApp Gratis</span>
              </a>
              
              <a
                href="#produk"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Lihat Produk
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 text-sm mt-1">Klien Puas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-gray-600 text-sm mt-1">Produk Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">20+</div>
                <div className="text-gray-600 text-sm mt-1">Tahun Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Pin Enamel</span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl h-20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Medali</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl h-20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Label Hijab</span>
                  </div>
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Souvenir</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce">
              ⭐
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
              💎
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}