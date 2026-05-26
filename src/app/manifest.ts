import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Noble Collectors',
    short_name: 'Noble',
    description: 'Private access to the finest luxury artifacts — heritage passports, curatorial intelligence, and discreet acquisition.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF6F1',
    theme_color: '#1A1A1A',
    orientation: 'portrait-primary',
    categories: ['collectibles', 'luxury', 'art'],
    icons: [
      { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
