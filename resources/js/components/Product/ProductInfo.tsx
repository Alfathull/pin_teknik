import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  specifications: {
    minimum_order: string;
    production_time: string;
  };
  features: string[];
  tags: string[];
}

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(50);

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya tertarik dengan ${product.name}
    
Spesifikasi yang saya inginkan:
- Produk: ${product.name}
- Kategori: ${product.category}
- Estimasi Quantity: ${quantity} pcs
- Harga: ${product.price}

Mohon informasi lebih lanjut mengenai:
1. Detail harga untuk quantity ${quantity} pcs
2. Waktu pengerjaan
3. Proses pemesanan
4. Contoh desain yang tersedia

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281573420204?text=${encodedMessage}`, '_blank');
  };

  const handleWhatsAppConsult = () => {
    const message = `Halo, saya ingin konsultasi tentang ${product.name}. Mohon informasi lengkap mengenai produk ini. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281573420204?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Category */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Ready Stock
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {product.name}
        </h1>
      </div>

      {/* Price */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Harga Mulai Dari</p>
            <p className="text-3xl font-bold text-blue-600">{product.price}</p>
            <p className="text-sm text-gray-500">*Harga dapat berubah sesuai spesifikasi</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-1">Min. Order</p>
            <p className="text-xl font-bold text-gray-900">{product.specifications.minimum_order}</p>
            <p className="text-sm text-gray-500">Waktu: {product.specifications.production_time}</p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
            >
              ✨ {tag}
            </span>
          ))}
        </div>
      </div>

      

      {/* CTA Buttons */}
      <div className="space-y-4">
        <button
          onClick={handleWhatsAppOrder}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
          </svg>
          <span>💬 Pesan Sekarang via WhatsApp</span>
        </button>

        <button
          onClick={handleWhatsAppConsult}
          className="w-full bg-white text-blue-600 py-4 rounded-xl text-lg font-bold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Konsultasi Gratis</span>
        </button>
      </div>

      {/* Product Features */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Keunggulan Produk</h3>
        <ul className="space-y-3">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Deskripsi Produk</h3>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 pt-6">
        <div className="text-center">
          <div className="text-2xl mb-2">🏆</div>
          <p className="text-sm font-semibold text-gray-900">Kualitas Premium</p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">🚀</div>
          <p className="text-sm font-semibold text-gray-900">Pengerjaan Cepat</p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">💯</div>
          <p className="text-sm font-semibold text-gray-900">Garansi Puas</p>
        </div>
      </div>
    </div>
  );
}