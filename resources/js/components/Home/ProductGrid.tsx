import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  tags: string[];
  slug: string;
}

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('Semua Produk');

  const categories = [
    'Semua Produk',
    'Pin Enamel',
    'Medali',
    'Label Hijab',
    'Souvenir',
    'Pin Akrilik',
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Pin Enamel Custom Premium',
      category: 'Pin Enamel',
      price: 'Mulai Rp20.000',
      image: '/pin-custom/main.jpeg',
      description: 'Pin enamel berkualitas tinggi dengan desain custom sesuai keinginan Anda',
      tags: ['Custom', 'Premium', 'Tahan Lama'],
      slug: 'pin-enamel-custom-premium'
    },
    {
      id: 2,
      name: 'Medali Prestasi Emas',
      category: 'Medali',
      price: 'Mulai Rp25.000',
      image: '',
      description: 'Medali prestasi dengan finishing emas untuk berbagai kompetisi dan acara',
      tags: ['Prestasi', 'Emas', 'Berkualitas'],
      slug: 'medali-prestasi-custom'
    },
    {
      id: 3,
      name: 'Label Hijab Bordir',
      category: 'Label Hijab',
      price: 'Mulai Rp5.000',
      image: '',
      description: 'Label hijab dengan bordir halus dan tahan lama untuk brand fashion',
      tags: ['Bordir', 'Fashion', 'Halus'],
      slug: 'label-hijab-bordir'
    },
    {
      id: 4,
      name: 'Souvenir Gantungan Kunci',
      category: 'Souvenir',
      price: 'Mulai Rp20.000',
      image: '/gantungan-kunci/main.jpeg',
      description: 'Gantungan kunci unik dan menarik untuk souvenir acara atau promosi',
      tags: ['Unik', 'Promosi', 'Murah'],
      slug: 'souvenir-gantungan-kunci'
    },
    {
      id: 5,
      name: 'Pin Akrilik Custom',
      category: 'Pin Akrilik',
      price: 'Mulai Rp15.000',
      image: '',
      description: 'Pin akrilik transparan dengan desain modern dan printing berkualitas tinggi',
      tags: ['Modern', 'Transparan', 'Ringan'],
      slug: 'pin-akrilik-custom'
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'Semua Produk' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-white" id="produk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Produk Unggulan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan berbagai pilihan produk custom berkualitas tinggi yang telah dipercaya oleh ribuan klien di seluruh Indonesia
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="space-y-8">
          {/* Row 1: 3 produk pertama */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
              {/* Product Image - Clickable */}
              <a href={`/produk/${product.slug}`} className="block">
                <div className="h-80 bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  
                </div>
              </a>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  <a href={`/produk/${product.slug}`}>
                    {product.name}
                  </a>
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-blue-600">
                    {product.price}
                  </div>
                  <a
                    href={`/produk/${product.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    Detail Produk
                  </a>
                </div>

                {/* Contact CTAs */}
                <div className="flex gap-2">
                  <a
                    href="tel:+6281573420204"
                    className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Telepon</span>
                  </a>
                  <a
                    href={`https://wa.me/6281573420204?text=Halo,%20saya%20tertarik%20dengan%20${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>

          {/* Row 2: 2 produk terakhir di center */}
          {filteredProducts.length > 3 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {filteredProducts.slice(3).map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
                  >
                    {/* Product Image - Clickable */}
                    <a href={`/produk/${product.slug}`} className="block">
                      <div className=" h-80 bg-gray-200">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {product.category}
                          </span>
                        </div>
                        
                      </div>
                    </a>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        <a href={`/produk/${product.slug}`}>
                          {product.name}
                        </a>
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-bold text-blue-600">
                          {product.price}
                        </div>
                        <a
                          href={`/produk/${product.slug}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                        >
                          Detail Produk
                        </a>
                      </div>

                      {/* Contact CTAs */}
                      <div className="flex gap-2">
                        <a
                          href="tel:+6281573420204"
                          className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>Telepon</span>
                        </a>
                        <a
                          href={`https://wa.me/6281573420204?text=Halo,%20saya%20tertarik%20dengan%20${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-1"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
                          </svg>
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281573420204?text=Halo,%20saya%20ingin%20melihat%20semua%20produk%20yang%20tersedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>💬 Chat untuk Lihat Semua Produk</span>
          </a>
        </div>
      </div>
    </section>
  );
}