import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  product: string;
  quantity: string;
  location: string;
  avatar: string;
}

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Budi Santoso",
      company: "PT. Maju Bersama",
      role: "HR Manager",
      content: "Sangat puas dengan kualitas pin enamel yang diproduksi! Hasil sangat memuaskan, detail desain presisi, dan pengerjaan cepat. Tim juga sangat responsif dalam komunikasi. Pasti akan order lagi untuk kebutuhan company merchandise.",
      rating: 5,
      product: "Pin Enamel Corporate",
      quantity: "500 pcs",
      location: "Jakarta",
      avatar: "BS"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      company: "Busana Hijab Elegan",
      role: "Brand Owner",
      content: "Label hijab bordir yang dihasilkan sangat halus dan berkualitas tinggi. Cocok banget untuk brand hijab premium kami. Harga juga sangat kompetitif dibanding tempat lain. Customer service ramah dan sabar menjelaskan detail produk.",
      rating: 5,
      product: "Label Hijab Bordir",
      quantity: "1000 pcs",
      location: "Bandung",
      avatar: "SN"
    },
    {
      id: 3,
      name: "Ahmad Rizki",
      company: "Event Organizer Pro",
      role: "Event Director",
      content: "Medali untuk kompetisi marathon sangat berkualitas! Peserta sangat senang dengan medali yang diberikan. Finishing emas sangat bagus dan tidak mudah pudar. Pengerjaan tepat waktu sesuai deadline event kami.",
      rating: 5,
      product: "Medali Prestasi Custom",
      quantity: "200 pcs",
      location: "Surabaya",
      avatar: "AR"
    },
    {
      id: 4,
      name: "Dewi Sartika",
      company: "Wedding Organizer Indah",
      role: "Wedding Planner",
      content: "Souvenir gantungan kunci untuk wedding client kami sangat unik dan memorable! Design sesuai request, kualitas material bagus, dan packaging rapi. Semua tamu undangan suka dengan souvenir ini.",
      rating: 5,
      product: "Souvenir Gantungan Kunci",
      quantity: "300 pcs",
      location: "Yogyakarta",
      avatar: "DS"
    },
    {
      id: 5,
      name: "Kolonel Agus Wijaya",
      company: "TNI AD",
      role: "Perwira Tinggi",
      content: "Atribut TNI yang diproduksi sangat sesuai standar militer. Kualitas material premium, detail presisi, dan hasil akhir sangat memuaskan. Recommended untuk kebutuhan atribut resmi institusi.",
      rating: 5,
      product: "Atribut TNI Custom",
      quantity: "100 pcs",
      location: "Jakarta",
      avatar: "AW"
    }
  ];

  // Auto slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-300 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ribuan klien telah mempercayai kami untuk kebutuhan pin custom, medali, dan souvenir berkualitas tinggi
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-4">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Customer Info */}
                      <div className="lg:col-span-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-blue-600 font-semibold">{testimonial.role}</p>
                            <p className="text-gray-600">{testimonial.company}</p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center lg:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                      </div>

                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        <div className="relative">
                          <svg className="absolute top-0 left-0 w-12 h-12 text-blue-200 -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                          </svg>
                          <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 italic pl-8">
                            "{testimonial.content}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Klien Puas</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Produk Terjual</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4.9</div>
            <div className="text-gray-600 font-medium">Rating ⭐</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">20+</div>
            <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Bergabunglah dengan Ribuan Klien Puas Lainnya!
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Konsultasi gratis untuk kebutuhan pin custom, medali, dan souvenir Anda. 
              Tim ahli kami siap membantu mewujudkan ide kreatif Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6281573420204"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Telepon Sekarang</span>
              </a>
              <a
                href="https://wa.me/6281573420204?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20produk%20custom%20seperti%20testimoni%20yang%20saya%20baca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
                </svg>
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}