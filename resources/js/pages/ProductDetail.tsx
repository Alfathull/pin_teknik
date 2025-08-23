import AppLayout from '../layouts/AppLayout';
import ProductImageGallery from '../components/Product/ProductImageGalery';
import ProductInfo from '../components/Product/ProductInfo';
import RelatedProducts from '../components/Product/RelatedProducts';
import ProductSpecifications from '../components/Product/ProductSpesifications';

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    slug: string;
    category: string;
    price: string;
    description: string;
  };
}

type ProductSlug = 'pin-enamel-custom-premium' | 'medali-prestasi-custom' | 'label-hijab-bordir' | 'souvenir-gantungan-kunci' | 'pin-akrilik-custom';

export default function ProductDetail({ product }: ProductDetailProps) {
  interface ProductData {
    id: number;
    name: string;
    category: string;
    price: string;
    description: string;
    images: string[];
    specifications: {
      dimensions: string;
      material: string;
      weight: string;
      colors: string[];
      finishing: string;
      minimum_order: string;
      production_time: string;
    };
    features: string[];
    tags: string[];
  }

  const productDataMapping: Record<ProductSlug, ProductData> = {
    'pin-enamel-custom-premium': {
      id: 1,
      name: "Pin Enamel Custom Premium",
      category: "Pin Enamel",
      price: "Mulai dari Rp20.000",
      description: "Pin enamel custom premium dengan kualitas terbaik. Dibuat menggunakan material zinc alloy berkualitas tinggi dan teknologi modern untuk menghasilkan pin yang tahan lama dan memiliki finishing yang sempurna. Cocok untuk corporate gift, merchandise, souvenir event, atau koleksi pribadi.",
      images: [
        "/pin-custom/main.jpeg",
        "/pin-custom/pin-custom1.jpeg", 
        "/pin-custom/pin-custom2.png",
        "/pin-custom/pin-custom3.png",
        "/pin-custom/pin-custom4.png",
        "/pin-custom/pin-custom5.png",
        "/pin-custom/pin-custom6.png",
        "/pin-custom/pin-custom7.png",
        "/pin-custom/pin-custom8.png",
        "/pin-custom/pin-custom9.png",
        "/pin-custom/pin-custom10.png",
        "/pin-custom/pin-custom11.png",
        "/pin-custom/pin-custom12.png",
        "/pin-custom/pin-custom13.png",
        "/pin-custom/pin-custom14.png",
      ],
      specifications: {
        dimensions: "25mm x 25mm (dapat disesuaikan)",
        material: "Bahan plat/durall berkualitas tinggi",
        weight: "8-12 gram",
        colors: ["Merah", "Biru", "Hijau", "Kuning", "Hitam", "Putih", "Custom"],
        finishing: "Soft Black, Chrome/Plating",
        minimum_order: "50 pcs",
        production_time: "5-7 hari kerja"
      },
      features: [
        "Desain 100% custom sesuai keinginan",
        "Material plat/durall dengan ketebalan 1,5mm",
        "Line hitam black full untuk hasil presisi",
        "Tahan lama dan anti pudar",
        "Berbagai pilihan finishing premium",
        "Gratis revisi desain hingga approved",
        "Packaging eksklusif tersedia"
      ],
      tags: ["Premium", "Custom", "Tahan Lama", "Corporate Gift", "Merchandise"]
    },
    
    'medali-prestasi-custom': {
      id: 2,
      name: "Medali Prestasi Custom",
      category: "Medali",
      price: "Mulai dari Rp35.000",
      description: "Medali prestasi dengan berbagai pilihan material dan finishing untuk berbagai jenis kompetisi dan penghargaan. Dibuat dengan standar kualitas tinggi untuk memberikan kesan mewah dan berkelas.",
      images: [
        "/medali/medali4.png",
        "/medali/medali2.png",
        "/medali/medali3.png",
        "/medali/medali1.png",
        "/medali/medali5.png",
      ],
      specifications: {
        dimensions: "50mm - 80mm (diameter)",
        material: "Zinc alloy dengan finishing premium",
        weight: "50-80 gram",
        colors: ["Emas", "Perak", "Perunggu", "Custom"],
        finishing: "Electroplating, Antique, Sandblast",
        minimum_order: "25 pcs",
        production_time: "7-10 hari kerja"
      },
      features: [
        "Desain 2D/3D custom",
        "Material zinc alloy premium",
        "Finishing electroplating berkualitas",
        "Tali/ribbon eksklusif included",
        "Berbagai ukuran tersedia",
        "Gratis desain dan revisi",
        "Kemasan individual tersedia"
      ],
      tags: ["Prestasi", "Emas", "Berkualitas", "Kompetisi", "Penghargaan"]
    },

    'label-hijab-bordir': {
      id: 3,
      name: "Label Hijab Bordir Premium",
      category: "Label Hijab",
      price: "Mulai dari Rp6.000",
      description: "Label hijab dengan bordir halus dan tahan lama, cocok untuk brand fashion hijab dengan kualitas premium. Menggunakan benang berkualitas tinggi yang tidak mudah luntur.",
      images: [
        "/label-hijab/label-hijab3.png",
        "/label-hijab/label-hijab2.png",
        "/label-hijab/label-hijab1.png",
      ],
      specifications: {
        dimensions: "2cm x 5cm (dapat disesuaikan)",
        material: "Polyester high grade dengan bordir",
        weight: "2-3 gram",
        colors: ["Hitam", "Putih", "Navy", "Custom sesuai brand"],
        finishing: "Bordir halus, Heat cut, Ultrasonic cut",
        minimum_order: "1000 pcs",
        production_time: "7-8 hari kerja"
      },
      features: [
        "Bordir halus dan rapi",
        "Material tidak mudah luntur",
        "Tahan cuci berulang kali",
        "Desain custom sesuai brand",
        "Berbagai ukuran tersedia",
        "Finishing rapi dan profesional",
        "Cocok untuk brand fashion"
      ],
      tags: ["Bordir", "Fashion", "Halus", "Brand", "Premium"]
    },

    'souvenir-gantungan-kunci': {
      id: 4,
      name: "Souvenir Gantungan Kunci Custom",
      category: "Souvenir",
      price: "Mulai dari Rp20.000",
      description: "Gantungan kunci custom dengan desain unik dan menarik untuk souvenir acara atau promosi brand. Dibuat dengan material berkualitas dan finishing yang menarik.",
      images: [
        "/gantungan-kunci/main.jpeg",
        "/gantungan-kunci/gantungan-kunci1.jpeg",
      ],
      specifications: {
        dimensions: "30mm x 40mm (dapat disesuaikan)",
        material: "Zinc alloy dengan coating anti karat",
        weight: "15-25 gram",
        colors: ["Full Color", "Metalik", "Custom"],
        finishing: "Enamel, Printing, Emboss",
        minimum_order: "100 pcs",
        production_time: "5-7 hari kerja"
      },
      features: [
        "Desain full custom",
        "Material tahan karat",
        "Ring kuat dan awet",
        "Berbagai bentuk tersedia",
        "Finishing berkualitas",
        "Cocok untuk promosi",
        "Harga ekonomis"
      ],
      tags: ["Unik", "Promosi", "Murah", "Souvenir", "Custom"]
    },

    'pin-akrilik-custom': {
      id: 5,
      name: "Pin Akrilik Custom",
      category: "Pin Akrilik",
      price: "Mulai dari Rp6.000",
      description: "Pin akrilik transparan dengan desain modern dan printing berkualitas tinggi. Cocok untuk event, promosi brand, atau merchandise dengan tampilan yang unik dan eye-catching.",
      images: [
        "/pin-akrilik/pin-akrilik1.png",
        "/pin-akrilik/pin-akrilik2.png",
      ],
      specifications: {
        dimensions: "25mm - 100mm (custom size)",
        material: "Akrilik transparan 3mm",
        weight: "5-15 gram",
        colors: ["Full Color Print", "Clear", "Frosted"],
        finishing: "UV resistant coating",
        minimum_order: "25 pcs",
        production_time: "5-7 hari kerja"
      },
      features: [
        "Material akrilik berkualitas tinggi",
        "Printing full color HD resolution",
        "Transparan dan modern",
        "Ringan dan nyaman digunakan",
        "Tahan UV dan anti-fade",
        "Custom shape tersedia",
        "Eco-friendly material"
      ],
      tags: ["Modern", "Transparan", "Ringan", "Custom", "HD Print"]
    }
  };

  // Ambil data product berdasarkan slug dari props dengan type safety
  const productData = productDataMapping[product.slug as ProductSlug] || productDataMapping['pin-enamel-custom-premium'];

  return (
    <AppLayout
      title={`${productData.name} | Pin Custom Bandung - Kualitas Premium`}
      description={`${productData.description.substring(0, 150)}... Pesan sekarang dengan kualitas terjamin dan harga terbaik!`}
      keywords={`${productData.name}, pin enamel custom, pin custom bandung, ${productData.tags.join(', ')}`}
    >
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <a href="/" className="hover:text-blue-600 transition-colors">Beranda</a>
            <span>›</span>
            <a href="/#produk" className="hover:text-blue-600 transition-colors">Produk</a>
            <span>›</span>
            <span className="text-gray-900 font-medium">{productData.category}</span>
            <span>›</span>
            <span className="text-gray-900 font-medium">{productData.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ProductImageGallery images={productData.images} productName={productData.name} />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo product={productData} />
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mt-16">
            <ProductSpecifications 
              specifications={productData.specifications}
            />
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <RelatedProducts currentProductId={productData.id} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}