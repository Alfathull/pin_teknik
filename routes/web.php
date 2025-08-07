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
            'price' => 'Mulai dari Rp35.000',
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
            'price' => 'Mulai dari Rp6.000',
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
        'pin-akrilik-custom' => [
            'id' => 5,
            'name' => 'Pin Akrilik Custom',
            'slug' => 'pin-akrilik-custom',
            'category' => 'Pin Akrilik',
            'price' => 'Mulai dari Rp15.000',
            'description' => 'Pin akrilik transparan dengan desain modern dan printing berkualitas tinggi. Cocok untuk event, promosi brand, atau merchandise dengan tampilan yang unik dan eye-catching.',
            'features' => [
                'Material akrilik transparan berkualitas',
                'Printing full color HD resolution',
                'Design modern dan eye-catching',
                'Ringan dan nyaman digunakan',
                'Tahan lama dan anti-scratch',
                'Minimum order 25 pcs'
            ],
            'meta_description' => 'Pin akrilik custom transparan dengan printing HD. Design modern, ringan, tahan lama. Minimum order 25 pcs. Custom printing berkualitas di Bandung.',
    ]
    ];

    if (!isset($products[$slug])) {
        abort(404);
    }

    return Inertia::render('ProductDetail', [
        'product' => $products[$slug]
    ]);
})->name('product.detail');

// Sitemap XML - FIXED VERSION
Route::get('/sitemap.xml', function () {
    $urls = [
        [
            'url' => url('/'),
            'lastmod' => now()->format('Y-m-d'),
            'changefreq' => 'weekly',
            'priority' => '1.0'
        ],
        [
            'url' => url('/produk/pin-enamel-custom-premium'),
            'lastmod' => now()->format('Y-m-d'),
            'changefreq' => 'monthly',
            'priority' => '0.9'
        ],
        [
            'url' => url('/produk/medali-prestasi-custom'),
            'lastmod' => now()->format('Y-m-d'),
            'changefreq' => 'monthly',
            'priority' => '0.9'
        ],
        [
            'url' => url('/produk/label-hijab-bordir'),
            'lastmod' => now()->format('Y-m-d'),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => url('/produk/souvenir-gantungan-kunci'),
            'lastmod' => now()->format('Y-m-d'),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => url('/produk/atribut-tni-polri'),
            'lastmod' => now()->format('Y-m-d'),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ]
    ];

    $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
    $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    
    foreach ($urls as $url) {
        $sitemap .= '<url>';
        $sitemap .= '<loc>' . $url['url'] . '</loc>';
        $sitemap .= '<lastmod>' . $url['lastmod'] . '</lastmod>';
        $sitemap .= '<changefreq>' . $url['changefreq'] . '</changefreq>';
        $sitemap .= '<priority>' . $url['priority'] . '</priority>';
        $sitemap .= '</url>';
    }
    
    $sitemap .= '</urlset>';

    return response($sitemap, 200, [
        'Content-Type' => 'application/xml; charset=UTF-8'
    ]);
})->name('sitemap');

// Robots.txt - SEO Optimized
Route::get('/robots.txt', function () {
    $robots = "User-agent: *\n";
    $robots .= "Allow: /\n\n";
    
    $robots .= "# Block admin areas\n";
    $robots .= "Disallow: /admin/\n";
    $robots .= "Disallow: /dashboard/\n";
    $robots .= "Disallow: /login/\n";
    $robots .= "Disallow: /register/\n";
    $robots .= "Disallow: /password/\n\n";
    
    $robots .= "# Block Laravel system directories\n";
    $robots .= "Disallow: /storage/\n";
    $robots .= "Disallow: /vendor/\n";
    $robots .= "Disallow: /config/\n";
    $robots .= "Disallow: /bootstrap/\n\n";
    
    $robots .= "# Allow important paths\n";
    $robots .= "Allow: /produk/\n";
    $robots .= "Allow: /css/\n";
    $robots .= "Allow: /js/\n";
    $robots .= "Allow: /images/\n";
    $robots .= "Allow: /build/\n\n";
    
    $robots .= "# Social media bots\n";
    $robots .= "User-agent: facebookexternalhit\n";
    $robots .= "Allow: /\n\n";
    
    $robots .= "User-agent: Twitterbot\n";
    $robots .= "Allow: /\n\n";
    
    $robots .= "# Sitemap\n";
    $robots .= "Sitemap: " . url('/sitemap.xml') . "\n";

    return response($robots, 200, [
        'Content-Type' => 'text/plain; charset=UTF-8'
    ]);
})->name('robots');

// JSON-LD Schema for Local Business SEO
Route::get('/schema.json', function () {
    $schema = [
        "@context" => "https://schema.org",
        "@type" => "LocalBusiness",
        "name" => "Pin Custom Bandung",
        "alternateName" => "Pin Teknik Bandung",
        "description" => "Spesialis pembuatan pin enamel custom, medali prestasi, label hijab, dan souvenir berkualitas tinggi di Bandung",
        "telephone" => "+62-815-7342-0204",
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
        "hasOfferCatalog" => [
            "@type" => "OfferCatalog",
            "name" => "Pin Custom Services",
            "itemListElement" => [
                [
                    "@type" => "Offer",
                    "itemOffered" => [
                        "@type" => "Service",
                        "name" => "Pin Enamel Custom Premium"
                    ]
                ],
                [
                    "@type" => "Offer", 
                    "itemOffered" => [
                        "@type" => "Service",
                        "name" => "Medali Prestasi Custom"
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
        'version' => '1.0.0'
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