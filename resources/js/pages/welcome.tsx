import React from 'react';
import AppLayout from '../layouts/AppLayout';
import HeroSection from '../components/Home/HeroSection';
import ProductGrid from '../components/Home/ProductGrid';
import PromoSection from '../components/Home/PromoSection';
import TestimonialSection from '../components/Home/TestimonialSection';

export default function Welcome() {
  return (
    <AppLayout
      title="Pin Enamel Custom Bandung | Jasa Pembuatan Pin, Medali & Souvenir Terbaik"
      description="Jasa pembuatan pin enamel custom, medali, label hijab, dan souvenir berkualitas tinggi di Bandung. Produksi cepat, harga terjangkau, desain menarik. Gratis konsultasi!"
      keywords="pin enamel custom bandung, jasa pembuatan pin, medali custom, label hijab, souvenir bandung, pin button, atribut TNI POLRI, pin custom murah, pin enamel berkualitas"
    >
      <HeroSection />
      <ProductGrid />
      <TestimonialSection />
      <PromoSection />
    </AppLayout>
  );
}