import React from 'react';

interface RelatedProductsProps {
  currentProductId: number;
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Data semua produk
  const allProducts = [
    {
      id: 1,
      name: "Pin Enamel Custom Premium",
      category: "Pin Enamel",
      price: "Mulai Rp20.000",
      image: "/pin-custom/main.jpeg",
      description: "Pin enamel berkualitas tinggi dengan desain custom sesuai keinginan",
      slug: "pin-enamel-custom-premium"
    },
    {
      id: 2,
      name: "Medali Prestasi Custom",
      category: "Medali",
      price: "Mulai Rp35.000",
      image: "/medali/medali4.png",
      description: "Medali prestasi dengan berbagai pilihan finishing untuk penghargaan",
      slug: "medali-prestasi-custom"
    },
    {
      id: 3,
      name: "Label Hijab Bordir",
      category: "Label Hijab",
      price: "Mulai Rp6.000",
      image: "/label-hijab/label-hijab3.png",
      description: "Label hijab dengan bordir halus untuk brand fashion",
      slug: "label-hijab-bordir"
    },
    {
      id: 4,
      name: "Souvenir Gantungan Kunci",
      category: "Souvenir",
      price: "Mulai Rp20.000",
      image: "/gantungan-kunci/main.jpeg",
      description: "Gantungan kunci custom untuk souvenir dan promosi",
      slug: "souvenir-gantungan-kunci"
    },
    {
      id: 5,
      name: "Pin Akrilik Csutom",
      category: "Pin Akrilik",
      price: "Mulai Rp6.000",
      image: "/pin-akrilik/pin-akrilik1.png",
      description: "Pin akrilik transparan dengan desain modern dan printing berkualitas tinggi",
      slug: "pin-akrilik-custom"
    }
  ];

  const relatedProducts = allProducts.filter(product => product.id !== currentProductId);

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Produk Terkait Lainnya
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan produk custom lainnya yang mungkin Anda butuhkan untuk melengkapi kebutuhan promosi atau souvenir
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Product Image */}
            <a href={`/produk/${product.slug}`} className="block">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>

              </div>
            </a>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                <a href={`/produk/${product.slug}`}>
                  {product.name}
                </a>
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-blue-600">
                  {product.price}
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/produk/${product.slug}`}
                    className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    Detail
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products CTA */}
      <div className="text-center mt-8">
        <a
          href="/#produk"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          <span>Lihat Semua Produk</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}