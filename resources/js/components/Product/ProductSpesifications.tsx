import React, { useState } from 'react';

interface Specifications {
  dimensions: string;
  material: string;
  weight: string;
  colors: string[];
  finishing: string;
  minimum_order: string;
  production_time: string;
}

interface ProductSpecificationsProps {
  specifications: Specifications;
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', name: 'Spesifikasi', icon: '📋' },
    { id: 'materials', name: 'Material & Finishing', icon: '🎨' },
    { id: 'process', name: 'Proses Produksi', icon: '⚙️' },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Konsultasi & Desain",
      description: "Tim kami akan membantu merancang desain sesuai keinginan Anda",
      duration: "1-2 hari"
    },
    {
      step: 2,
      title: "Approval Desain",
      description: "Revisi desain hingga Anda puas dengan hasilnya",
      duration: "1 hari"
    },
    {
      step: 3,
      title: "Produksi",
      description: "Proses produksi menggunakan mesin modern dan quality control ketat",
      duration: "3-8 hari"
    },
    {
      step: 4,
      title: "Quality Check",
      description: "Pengecekan kualitas menyeluruh sebelum packaging",
      duration: "1 hari"
    },
    {
      step: 5,
      title: "Packaging & Kirim",
      description: "Packaging aman dan pengiriman ke alamat tujuan",
      duration: "1 hari"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
    <div className="p-6">
        {activeTab === 'specifications' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Detail Spesifikasi</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">📏</span>
                    Dimensi
                  </h4>
                  <p className="text-gray-700">{specifications.dimensions}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">⚖️</span>
                    Berat
                  </h4>
                  <p className="text-gray-700">{specifications.weight}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">📦</span>
                    Minimum Order
                  </h4>
                  <p className="text-gray-700">{specifications.minimum_order}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">🎨</span>
                    Pilihan Warna
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {specifications.colors.map((color, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-lg text-sm font-medium text-gray-700 border"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">⏰</span>
                    Waktu Produksi
                  </h4>
                  <p className="text-gray-700">{specifications.production_time}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Material & Finishing</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">🏭</span>
                    Material Utama
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">Bahan plat/durall berkualitas tinggi</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">Bahan plat/durall dengan ketebalan 1,5mm untuk durabilitas maksimal</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">Line hitam black full untuk hasil yang presisi dan tahan lama</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">Backing pin berkualitas standar internasional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">✨</span>
                    Pilihan Finishing
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-2">Soft Black</h5>
                      <p className="text-sm text-gray-600">
                        Finishing dengan warna hitam soft yang elegan, memberikan tampilan modern dan profesional
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-2">Chrome/Plating</h5>
                      <p className="text-sm text-gray-600">
                        Finishing chrome dengan lapisan plating mengkilap, tahan korosi dan memberikan kesan premium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Palette Warna Tersedia</h4>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
                {[
                  { name: 'Merah', color: 'bg-red-500' },
                  { name: 'Biru', color: 'bg-blue-500' },
                  { name: 'Hijau', color: 'bg-green-500' },
                  { name: 'Kuning', color: 'bg-yellow-400' },
                  { name: 'Hitam', color: 'bg-gray-900' },
                  { name: 'Putih', color: 'bg-white border-2 border-gray-300' },
                  { name: 'Custom', color: 'bg-gradient-to-r from-purple-400 to-pink-400' }
                ].map((colorOption, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 rounded-full ${colorOption.color} mx-auto mb-2 shadow-lg`}></div>
                    <p className="text-xs font-medium text-gray-700">{colorOption.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                *Warna custom tersedia sesuai permintaan dengan biaya tambahan
              </p>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proses Produksi</h3>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">Siap Mulai Proyek Anda?</h4>
              <p className="mb-4 text-green-100">Konsultasi gratis dengan tim ahli kami sekarang juga!</p>
              <a
                href="https://wa.me/6281573420204?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20proses%20produksi%20pin%20custom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
                </svg>
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
          </div>
        )} 
    </div>
    </div>
  );
}