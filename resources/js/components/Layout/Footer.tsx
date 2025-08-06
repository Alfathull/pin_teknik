import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
  const productLinks = [
    { name: 'Pin Enamel Custom', href: '/produk/pin-enamel-custom-premium' },
    { name: 'Medali Prestasi', href: '/produk/medali-prestasi-custom' },
    { name: 'Label Hijab', href: '/produk/label-hijab-bordir' },
    { name: 'Souvenir Gantungan Custom', href: '/produk/souvenir-gantungan-kunci' },
    { name: 'Atribut TNI/POLRI', href: '/produk/atribut-tni-polri' },
  ];

  return (
    <footer className="bg-gray-900 text-white" id="kontak">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Pin Teknik Logo" 
                className="h-40 w-auto"
              />
            </Link>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Spesialis pembuatan pin enamel, medali, label hijab, dan souvenir custom 
              berkualitas tinggi di Bandung. <span className="text-blue-400 font-semibold">Gratis konsultasi & estimasi harga!</span>
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telepon / WhatsApp</p>
                  <a href="tel:+6281573420204" className="text-white hover:text-blue-400 font-semibold">
                    +62 815-7342-0204
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Lokasi</p>
                  <p className="text-white">Jl. Desa, No. 48, RT 06, RW 02, Kel. Babakan Sari, Kec. Kiaracondong, Kota Bandung</p>
                </div>
              </div>
            </div>

            {/* Social Media - Updated to Tokopedia & Shopee */}
            <div className="flex space-x-4">
              <a
                href="https://www.tokopedia.com/teknik-pin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-white p-3 rounded-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="20" viewBox="0 0 64 64">
                  <linearGradient id="BByzyhRg08SueoHenzjo7a_QxTCUohbBw9U_gr1" x1="32.135" x2="32.135" y1="1.445" y2="51.043" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000"></stop><stop offset=".492" stop-color="#000"></stop><stop offset="1" stop-color="#000"></stop></linearGradient><path fill="url(#BByzyhRg08SueoHenzjo7a_QxTCUohbBw9U_gr1)" d="M54,13.6v24.51c0,8.79-7.12,15.91-15.9,15.91H10.27V13.6h12.59c2.93,0,6.62,1.99,9.28,4.64 c2.65-2.65,6.34-4.64,9.27-4.64H54z"></path><circle cx="22.859" cy="30.163" r="9.276" fill="#fff"></circle><circle cx="41.411" cy="30.163" r="9.276" fill="#fff"></circle><path fill="#fff" d="M44,48.473c0,0.799-0.109,2.78-0.298,3.527H20.568c-0.189-0.746-0.298-2.728-0.298-3.527 C20.27,42.688,25.583,38,32.14,38C38.687,38,44,42.688,44,48.473z"></path><linearGradient id="BByzyhRg08SueoHenzjo7b_QxTCUohbBw9U_gr2" x1="23.522" x2="23.522" y1="-3.418" y2="63.822" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000"></stop><stop offset="1" stop-color="#000"></stop></linearGradient><circle cx="23.522" cy="30.825" r="4.638" fill="url(#BByzyhRg08SueoHenzjo7b_QxTCUohbBw9U_gr2)"></circle><circle cx="21.203" cy="27.181" r="2.982" fill="#fff"></circle><path fill="#fff" d="M41.41,14.6c-2.53,0-5.97,1.74-8.57,4.34c-0.19,0.2-0.45,0.3-0.7,0.3c-0.26,0-0.52-0.1-0.71-0.3 c-2.6-2.6-6.04-4.34-8.57-4.34H11.27v38.42H38.1c8.21,0,14.9-6.69,14.9-14.91V14.6H41.41z M51,38.11 c0,7.12-5.79,12.91-12.9,12.91H13.27V16.6h9.59c1.69,0,4.69,1.29,7.15,3.76c0.57,0.56,1.32,0.88,2.13,0.88 c0.8,0,1.55-0.32,2.12-0.88c2.46-2.47,5.46-3.76,7.15-3.76H51V38.11z"></path><linearGradient id="BByzyhRg08SueoHenzjo7c_QxTCUohbBw9U_gr3" x1="32.135" x2="32.135" y1="-3.418" y2="63.822" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000"></stop><stop offset="1" stop-color="#000"></stop></linearGradient><path fill="url(#BByzyhRg08SueoHenzjo7c_QxTCUohbBw9U_gr3)" d="M41.067,20.23 c-3.929,0-7.322,2.299-8.932,5.617c-1.61-3.318-5.003-5.617-8.933-5.617c-5.477,0-9.932,4.455-9.932,9.932s4.456,9.933,9.932,9.933 c3.929,0,7.323-2.299,8.933-5.618c1.61,3.318,5.003,5.618,8.932,5.618c5.477,0,9.933-4.456,9.933-9.933S46.544,20.23,41.067,20.23z M23.203,38.095c-4.374,0-7.932-3.559-7.932-7.933c0-4.373,3.558-7.932,7.932-7.932s7.933,3.559,7.933,7.932 C31.135,34.536,27.577,38.095,23.203,38.095z M41.067,38.095c-4.374,0-7.932-3.559-7.932-7.933c0-4.373,3.558-7.932,7.932-7.932 S49,25.789,49,30.162C49,34.536,45.441,38.095,41.067,38.095z"></path><linearGradient id="BByzyhRg08SueoHenzjo7d_QxTCUohbBw9U_gr4" x1="40.749" x2="40.749" y1="-3.418" y2="63.822" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000"></stop><stop offset="1" stop-color="#000"></stop></linearGradient><circle cx="40.749" cy="30.825" r="4.638" fill="url(#BByzyhRg08SueoHenzjo7d_QxTCUohbBw9U_gr4)"></circle><circle cx="38.43" cy="27.181" r="2.982" fill="#fff"></circle><linearGradient id="BByzyhRg08SueoHenzjo7e_QxTCUohbBw9U_gr5" x1="31.85" x2="31.85" y1="37.11" y2="43.98" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000"></stop><stop offset=".492" stop-color="#000"></stop><stop offset="1" stop-color="#000"></stop></linearGradient><path fill="url(#BByzyhRg08SueoHenzjo7e_QxTCUohbBw9U_gr5)" d="M36.57,39.3l-4.43,4.44l-0.24,0.24 l-4.77-4.77c1.14-1.29,2.82-2.1,4.67-2.1c0.12,0,0.22,0.02,0.34,0.02C33.91,37.22,35.48,38.04,36.57,39.3z"></path><linearGradient id="BByzyhRg08SueoHenzjo7f_QxTCUohbBw9U_gr6" x1="31.846" x2="31.846" y1="-4.535" y2="62.706" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000"></stop><stop offset="1" stop-color="#000"></stop></linearGradient><path fill="url(#BByzyhRg08SueoHenzjo7f_QxTCUohbBw9U_gr6)" d="M31.9,45.278l-6.142-6.143l0.623-0.704 c1.369-1.549,3.344-2.438,5.419-2.438c0.091,0,0.175,0.006,0.258,0.014l0.133,0.007c1.997,0.102,3.82,0.994,5.135,2.515 l0.608,0.703L31.9,45.278z M28.562,39.112l3.337,3.337l3.25-3.258c-0.865-0.709-1.924-1.121-3.061-1.179 c-0.035,0.004-0.123-0.005-0.208-0.013c-0.007,0-0.015,0-0.021,0C30.619,38,29.474,38.398,28.562,39.112z"></path><linearGradient id="BByzyhRg08SueoHenzjo7g_QxTCUohbBw9U_gr7" x1="32.135" x2="32.135" y1="-3.418" y2="63.822" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000"></stop><stop offset="1" stop-color="#000"></stop></linearGradient><path fill="url(#BByzyhRg08SueoHenzjo7g_QxTCUohbBw9U_gr7)" d="M54,12.6H42.264 c-0.798-4.877-5.03-8.616-10.129-8.616S22.804,7.723,22.006,12.6H10.27c-0.55,0-1,0.45-1,1v40.42c0,0.55,0.45,1,1,1H38.1 c9.32,0,16.9-7.59,16.9-16.91V13.6C55,13.05,54.55,12.6,54,12.6z M32.135,5.984c4.025,0,7.384,2.89,8.122,6.703 c-2.603,0.367-5.616,1.906-8.117,4.172c-2.51-2.266-5.523-3.805-8.126-4.172C24.751,8.875,28.11,5.984,32.135,5.984z M53,38.11 c0,8.22-6.69,14.91-14.9,14.91H11.27V14.6h11.59c2.53,0,5.97,1.74,8.57,4.34c0.19,0.2,0.45,0.3,0.71,0.3c0.25,0,0.51-0.1,0.7-0.3 c2.6-2.6,6.04-4.34,8.57-4.34H53V38.11z"></path>
                </svg>
              </a>
              <a
                href="https://shopee.co.id/pinteknik"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-white p-3 rounded-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 5.0585938 14 L 15.832031 14 A 1.0001 1.0001 0 0 0 16.158203 14 L 33.832031 14 A 1.0001 1.0001 0 0 0 34.158203 14 L 44.941406 14 L 43.216797 44.171875 C 43.126254 45.7692 41.823461 47 40.222656 47 L 9.7773438 47 C 8.177784 47 6.8737281 45.768887 6.7832031 44.171875 L 5.0585938 14.001953 L 5.0585938 14 z M 25.074219 18.001953 C 20.760219 18.001953 17.507812 20.689906 17.507812 24.253906 C 17.507812 28.283906 21.2555 29.653328 24.5625 30.861328 C 28.5665 32.324328 30.998047 33.441516 30.998047 36.603516 C 30.998047 39.045516 28.267156 41.033203 24.910156 41.033203 C 21.155156 41.033203 17.973406 38.291672 17.941406 38.263672 L 16.826172 39.90625 C 17.638172 40.56425 20.921156 43.007812 24.910156 43.007812 C 29.430156 43.007813 32.972703 40.194516 32.970703 36.603516 C 32.970703 31.833516 28.864234 30.330813 25.240234 29.007812 C 21.657234 27.696812 19.480469 26.724906 19.480469 24.253906 C 19.480469 21.775906 21.833219 19.976562 25.074219 19.976562 C 27.235219 19.976562 29.115719 20.794703 30.136719 21.345703 C 30.308719 21.437703 30.761672 21.709906 31.013672 21.878906 L 32.035156 20.216797 C 31.801156 20.064797 28.921219 18.001953 25.074219 18.001953 z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Produk Populer</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="text-blue-400">•</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick CTA - Simplified */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <h5 className="font-bold mb-2">🔥 Promo Hari Ini!</h5>
              <p className="text-sm mb-3">Diskon 25% untuk order 100+ pcs</p>
              <div className="flex gap-2">
                <a
                  href="tel:+6281573420204"
                  className="bg-white text-blue-600 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Telepon</span>
                </a>
                <a
                  href="https://wa.me/6281573420204?text=Halo,%20saya%20mau%20tanya%20promo%20diskon%2025%25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Super Simple */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-gray-400 text-sm">
            © 2025 Pin Custom Bandung - Spesialis Pin Enamel & Souvenir Custom Berkualitas
          </div>
        </div>
      </div>
    </footer>
  );
}