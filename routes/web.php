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
            'price' => 'Mulai dari 20.000',
            'description' => 'Pin enamel custom premium dengan kualitas terbaik. Dibuat menggunakan material zinc alloy berkualitas tinggi dan teknologi modern untuk menghasilkan pin yang tahan lama dan memiliki finishing yang sempurna.',
        ],
        'medali-prestasi-custom' => [
            'id' => 2,
            'name' => 'Medali Prestasi Custom',
            'slug' => 'medali-prestasi-custom',
            'category' => 'Medali',
            'price' => 'Mulai dari Rp25.000',
            'description' => 'Medali prestasi dengan berbagai pilihan material dan finishing untuk berbagai jenis kompetisi dan penghargaan.',
        ],
        'label-hijab-bordir' => [
            'id' => 3,
            'name' => 'Label Hijab Bordir Premium',
            'slug' => 'label-hijab-bordir',
            'category' => 'Label Hijab',
            'price' => 'Mulai dari Rp5.000',
            'description' => 'Label hijab dengan bordir halus dan tahan lama, cocok untuk brand fashion hijab dengan kualitas premium.',
        ],
        'souvenir-gantungan-kunci' => [
            'id' => 4,
            'name' => 'Souvenir Gantungan Kunci Custom',
            'slug' => 'souvenir-gantungan-kunci',
            'category' => 'Souvenir',
            'price' => 'Mulai dari Rp20.000',
            'description' => 'Gantungan kunci custom dengan desain unik dan menarik untuk souvenir acara atau promosi brand.',
        ],
        'atribut-tni-polri' => [
            'id' => 5,
            'name' => 'Atribut TNI/POLRI Custom',
            'slug' => 'atribut-tni-polri',
            'category' => 'Atribut',
            'price' => 'Mulai dari Rp20.000',
            'description' => 'Atribut resmi TNI/POLRI dengan kualitas standar militer dan presisi tinggi.',
        ]
    ];

    if (!isset($products[$slug])) {
        abort(404);
    }

    return Inertia::render('ProductDetail', [
        'product' => $products[$slug]
    ]);
})->name('product.detail');

// Sitemap XML
Route::get('/sitemap.xml', function () {
    $urls = [
        [
            'url' => url('/'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'weekly',
            'priority' => '1.0'
        ],
        [
            'url' => url('/produk/pin-enamel-custom-premium'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => url('/produk/medali-prestasi-custom'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.8'
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
        ],
        [
            'url' => url('/produk/pin-button-custom'),
            'lastmod' => now()->toISOString(),
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
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

// Robots.txt
Route::get('/robots.txt', function () {
    $robots = "User-agent: *" . PHP_EOL;
    $robots .= "Allow: /" . PHP_EOL;
    $robots .= "Disallow: /admin" . PHP_EOL;
    $robots .= "Disallow: /dashboard" . PHP_EOL;
    $robots .= "Disallow: /login" . PHP_EOL;
    $robots .= "Disallow: /register" . PHP_EOL;
    $robots .= PHP_EOL;
    $robots .= "Sitemap: " . url('/sitemap.xml') . PHP_EOL;

    return response($robots)->header('Content-Type', 'text/plain');
})->name('robots');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';