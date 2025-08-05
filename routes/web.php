<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Product Detail Route
Route::get('/produk/{slug}', function ($slug) {
    // Static product data for demo
    $products = [
        'pin-enamel-custom-premium' => [
            'id' => 1,
            'name' => 'Pin Enamel Custom Premium',
            'slug' => 'pin-enamel-custom-premium',
            'category' => 'Pin Enamel',
            'price' => 'Mulai dari Rp20.000',
            'description' => 'Pin enamel custom premium dengan kualitas terbaik. Dibuat menggunakan material zinc alloy berkualitas tinggi dan teknologi modern untuk menghasilkan pin yang tahan lama dan memiliki finishing yang sempurna.',
            'features' => [
                'Material zinc alloy berkualitas tinggi',
                'Finishing premium dengan detail tajam',
                'Tahan lama dan anti karat',
                'Minimum order 50 pcs',
                'Gratis design dan revisi',
                'Garansi kualitas 100%'
            ],
            'meta_description' => 'Pin enamel custom premium berkualitas tinggi di Bandung. Material zinc alloy, finishing sempurna, minimum order 50 pcs. Gratis konsultasi!'
        ],
        'medali-prestasi-custom' => [
            'id' => 2,
            'name' => 'Medali Prestasi Custom',
            'slug' => 'medali-prestasi-custom',
            'category' => 'Medali',
            'price' => 'Mulai dari Rp25.000',
            'description' => 'Medali prestasi dengan berbagai pilihan material dan finishing untuk berbagai jenis kompetisi dan penghargaan.',
            'features' => [
                'Pilihan material: kuningan, zinc alloy, stainless',
                'Berbagai ukuran: 5cm, 6cm, 7cm',
                'Include ribbon/tali medali',
                'Engraving nama pemenang (opsional)',
                'Packaging box eksklusif',
                'Fast production 7-10 hari'
            ],
            'meta_description' => 'Medali prestasi custom berkualitas untuk kompetisi dan penghargaan. Berbagai material dan ukuran. Production time 7-10 hari di Bandung.'
        ],
        'label-hijab-bordir' => [
            'id' => 3,
            'name' => 'Label Hijab Bordir Premium',
            'slug' => 'label-hijab-bordir',
            'category' => 'Label Hijab',
            'price' => 'Mulai dari Rp5.000',
            'description' => 'Label hijab dengan bordir halus dan tahan lama, cocok untuk brand fashion hijab dengan kualitas premium.',
            'features' => [
                'Bordir halus dengan benang berkualitas',
                'Berbagai pilihan warna dan ukuran',
                'Tahan cuci dan tidak luntur',
                'Minimum order 100 pcs',
                'Custom design sesuai brand',
                'Suitable untuk hijab premium'
            ],
            'meta_description' => 'Label hijab bordir premium untuk brand fashion. Bordir halus, tahan lama, minimum order 100 pcs. Custom design di Bandung.'
        ],
        'souvenir-gantungan-kunci' => [
            'id' => 4,
            'name' => 'Souvenir Gantungan Kunci Custom',
            'slug' => 'souvenir-gantungan-kunci',
            'category' => 'Souvenir',
            'price' => 'Mulai dari Rp15.000',
            'description' => 'Gantungan kunci custom dengan desain unik dan menarik untuk souvenir acara atau promosi brand.',
            'features' => [
                'Material logam berkualitas',
                'Berbagai bentuk dan ukuran',
                'Finishing chrome atau gold',
                'Include packaging menarik',
                'Cocok untuk corporate gift',
                'Minimum order 50 pcs'
            ],
            'meta_description' => 'Gantungan kunci custom untuk souvenir dan corporate gift. Material logam berkualitas, berbagai design unik di Bandung.'
        ],
        'atribut-tni-polri' => [
            'id' => 5,
            'name' => 'Atribut TNI/POLRI Custom',
            'slug' => 'atribut-tni-polri',
            'category' => 'Atribut',
            'price' => 'Mulai dari Rp30.000',
            'description' => 'Atribut resmi TNI/POLRI dengan kualitas standar militer dan presisi tinggi.',
            'features' => [
                'Sesuai standar resmi TNI/POLRI',
                'Material premium zinc alloy',
                'Detail presisi tinggi',
                'Finishing sesuai regulasi',
                'Garansi kesesuaian standar',
                'Pengerjaan oleh ahli berpengalaman'
            ],
            'meta_description' => 'Atribut TNI POLRI custom sesuai standar resmi. Material premium, detail presisi, dikerjakan ahli berpengalaman di Bandung.'
        ]
    ];

    if (!isset($products[$slug])) {
        abort(404);
    }

    return Inertia::render('ProductDetail', [
        'product' => $products[$slug]
    ]);
})->name('product.detail');

// Sitemap XML - SEO Optimized
Route::get('/sitemap.xml', function () {
    $urls = [
        // Homepage
        [
            'url' => url('/'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'weekly',
            'priority' => '1.0'
        ],
        
        // Product Pages
        [
            'url' => url('/produk/pin-enamel-custom-premium'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.9'
        ],
        [
            'url' => url('/produk/medali-prestasi-custom'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.9'
        ],
        [
            'url' => url('/produk/label-hijab-bordir'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => url('/produk/souvenir-gantungan-kunci'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => url('/produk/atribut-tni-polri'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ]
    ];

    $xml = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;
    
    foreach ($urls as $url) {
        $xml .= '  <url>' . PHP_EOL;
        $xml .= '    <loc>' . $url['url'] . '</loc>' . PHP_EOL;
        $xml .= '    <lastmod>' . $url['lastmod'] . '</lastmod>' . PHP_EOL;
        $xml .= '    <changefreq>' . $url['changefreq'] . '</changefreq>' . PHP_EOL;
        $xml .= '    <priority>' . $url['priority'] . '</priority>' . PHP_EOL;
        $xml .= '  </url>' . PHP_EOL;
    }
    
    $xml .= '</urlset>';

    return response($xml)->header('Content-Type', 'application/xml');
})->name('sitemap');

// Robots.txt - SEO Optimized
Route::get('/robots.txt', function () {
    $robots = "# Robots.txt for Pin Custom Bandung - SEO Optimized" . PHP_EOL;
    $robots .= "User-agent: *" . PHP_EOL;
    $robots .= "Allow: /" . PHP_EOL . PHP_EOL;
    
    // Block admin and private areas
    $robots .= "# Block admin and private areas" . PHP_EOL;
    $robots .= "Disallow: /admin/" . PHP_EOL;
    $robots .= "Disallow: /dashboard/" . PHP_EOL;
    $robots .= "Disallow: /login/" . PHP_EOL;
    $robots .= "Disallow: /register/" . PHP_EOL;
    $robots .= "Disallow: /password/" . PHP_EOL;
    $robots .= "Disallow: /api/" . PHP_EOL . PHP_EOL;
    
    // Block Laravel system directories  
    $robots .= "# Block Laravel system directories" . PHP_EOL;
    $robots .= "Disallow: /storage/" . PHP_EOL;
    $robots .= "Disallow: /vendor/" . PHP_EOL;
    $robots .= "Disallow: /config/" . PHP_EOL;
    $robots .= "Disallow: /bootstrap/" . PHP_EOL;
    $robots .= "Disallow: /database/" . PHP_EOL;
    $robots .= "Disallow: /resources/" . PHP_EOL;
    $robots .= "Disallow: /routes/" . PHP_EOL;
    $robots .= "Disallow: /tests/" . PHP_EOL . PHP_EOL;
    
    // Block development and temporary files
    $robots .= "# Block development and temporary files" . PHP_EOL;
    $robots .= "Disallow: /temp/" . PHP_EOL;
    $robots .= "Disallow: /tmp/" . PHP_EOL;
    $robots .= "Disallow: /*.log$" . PHP_EOL;
    $robots .= "Disallow: /*.sql$" . PHP_EOL;
    $robots .= "Disallow: /*.zip$" . PHP_EOL;
    $robots .= "Disallow: /backup/" . PHP_EOL . PHP_EOL;
    
    // Block search and filter pages to avoid duplicate content
    $robots .= "# Block search and filter pages" . PHP_EOL;
    $robots .= "Disallow: /*?*" . PHP_EOL;
    $robots .= "Disallow: /search?" . PHP_EOL;
    $robots .= "Disallow: /filter?" . PHP_EOL . PHP_EOL;
    
    // Allow important directories for SEO
    $robots .= "# Allow important directories for SEO" . PHP_EOL;
    $robots .= "Allow: /produk/" . PHP_EOL;
    $robots .= "Allow: /galeri/" . PHP_EOL;
    $robots .= "Allow: /tentang/" . PHP_EOL;
    $robots .= "Allow: /kontak/" . PHP_EOL;
    $robots .= "Allow: /blog/" . PHP_EOL;
    $robots .= "Allow: /css/" . PHP_EOL;
    $robots .= "Allow: /js/" . PHP_EOL;
    $robots .= "Allow: /images/" . PHP_EOL;
    $robots .= "Allow: /img/" . PHP_EOL;
    $robots .= "Allow: /assets/" . PHP_EOL;
    $robots .= "Allow: /build/" . PHP_EOL . PHP_EOL;
    
    // Allow social media crawlers
    $robots .= "# Allow social media crawlers" . PHP_EOL;
    $robots .= "User-agent: facebookexternalhit" . PHP_EOL;
    $robots .= "Allow: /" . PHP_EOL . PHP_EOL;
    
    $robots .= "User-agent: Twitterbot" . PHP_EOL;
    $robots .= "Allow: /" . PHP_EOL . PHP_EOL;
    
    $robots .= "User-agent: LinkedInBot" . PHP_EOL;
    $robots .= "Allow: /" . PHP_EOL . PHP_EOL;
    
    $robots .= "User-agent: WhatsApp" . PHP_EOL;
    $robots .= "Allow: /" . PHP_EOL . PHP_EOL;
    
    // Crawl delay to prevent server overload
    $robots .= "# Crawl delay to prevent server overload" . PHP_EOL;
    $robots .= "Crawl-delay: 1" . PHP_EOL . PHP_EOL;
    
    // Sitemap location
    $robots .= "# Sitemap location" . PHP_EOL;
    $robots .= "Sitemap: " . url('/sitemap.xml') . PHP_EOL;

    return response($robots)->header('Content-Type', 'text/plain');
})->name('robots');

// JSON-LD Schema for Homepage (SEO)
Route::get('/schema.json', function () {
    $schema = [
        "@context" => "https://schema.org",
        "@type" => "LocalBusiness",
        "name" => "Pin Custom Bandung",
        "alternateName" => "Pin Teknik Bandung",
        "description" => "Spesialis pembuatan pin enamel custom, medali prestasi, label hijab, dan souvenir berkualitas tinggi di Bandung",
        "image" => url('/images/logo-pin-custom.png'),
        "telephone" => "+62-815-7342-0204",
        "email" => "info@custompinenamel.com",
        "url" => url('/'),
        "address" => [
            "@type" => "PostalAddress",
            "streetAddress" => "Jl. Desa, No. 48, RT 06, RW 02",
            "addressLocality" => "Babakan Sari, Kiaracondong",
            "addressRegion" => "Bandung",
            "postalCode" => "40283",
            "addressCountry" => "ID"
        ],
        "geo" => [
            "@type" => "GeoCoordinates",
            "latitude" => -6.9175,
            "longitude" => 107.6191
        ],
        "openingHours" => "Mo-Sa 08:00-17:00",
        "priceRange" => "Rp15.000 - Rp100.000",
        "paymentAccepted" => ["Cash", "Bank Transfer", "E-wallet"],
        "currenciesAccepted" => "IDR",
        "serviceArea" => [
            "@type" => "GeoCircle",
            "geoMidpoint" => [
                "@type" => "GeoCoordinates",
                "latitude" => -6.9175,
                "longitude" => 107.6191
            ],
            "geoRadius" => "50000"
        ],
        "hasOfferCatalog" => [
            "@type" => "OfferCatalog",
            "name" => "Pin Custom Services",
            "itemListElement" => [
                [
                    "@type" => "Offer",
                    "itemOffered" => [
                        "@type" => "Service",
                        "name" => "Pin Enamel Custom Premium",
                        "description" => "Pin enamel custom premium dengan kualitas terbaik"
                    ]
                ],
                [
                    "@type" => "Offer", 
                    "itemOffered" => [
                        "@type" => "Service",
                        "name" => "Medali Prestasi Custom",
                        "description" => "Medali prestasi untuk berbagai kompetisi dan penghargaan"
                    ]
                ],
                [
                    "@type" => "Offer",
                    "itemOffered" => [
                        "@type" => "Service", 
                        "name" => "Label Hijab Bordir",
                        "description" => "Label hijab dengan bordir premium untuk brand fashion"
                    ]
                ]
            ]
        ],
        "sameAs" => [
            "https://www.tokopedia.com/teknik-pin",
            "https://shopee.co.id/pinteknik"
        ]
    ];

    return response()->json($schema, 200, [], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
})->name('schema');

// Health check endpoint
Route::get('/health', function () {
    return response()->json([
        'status' => 'healthy',
        'timestamp' => now()->toISOString(),
        'app_name' => config('app.name'),
        'app_env' => config('app.env')
    ]);
})->name('health');

// Authentication routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';