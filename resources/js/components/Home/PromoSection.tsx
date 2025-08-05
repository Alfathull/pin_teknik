import React from 'react';

export default function PromoSection() {
  const features = [
    {
      icon: '🚀',
      title: 'Pengerjaan Cepat',
      description: 'Proses produksi 3-7 hari kerja dengan kualitas terjamin'
    },
    {
      icon: '💎',
      title: 'Kualitas Premium',
      description: 'Material berkualitas tinggi dan finishing yang sempurna'
    },
    {
      icon: '💰',
      title: 'Harga Terjangkau',
      description: 'Harga kompetitif dengan kualitas yang tidak diragukan'
    },
    {
      icon: '🎨',
      title: 'Desain Custom',
      description: 'Tim desainer profesional siap mewujudkan ide kreatif Anda'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Promo Banner */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="animate-pulse">🔥</span>
                <span>Promo Terbatas!</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dapatkan Diskon Hingga
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 block text-4xl md:text-5xl">
                  25% OFF
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Untuk pemesanan minimal 100 pcs. Promo berlaku sampai akhir bulan ini. 
                Jangan sampai terlewat kesempatan emas ini!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6281573420204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Klaim Promo Sekarang
                </a>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition-all duration-300">
                  Syarat & Ketentuan
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-white text-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-6xl font-bold mb-2">25%</div>
                <div className="text-xl font-semibold mb-2">DISKON</div>
                <div className="text-sm opacity-90">Min. order 100 pcs</div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm animate-spin-slow">
                  HOT!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Mengapa Memilih Kami?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Siap Mewujudkan Ide Kreatif Anda?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan Anda dengan tim ahli kami. Gratis konsultasi dan estimasi harga!
          </p>
          <a
            href="https://wa.me/6281573420204"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
            </svg>
            <span>Mulai Konsultasi Gratis</span>
          </a>
        </div>
      </div>
    </section>
  );
}