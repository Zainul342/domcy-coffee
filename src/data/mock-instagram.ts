export interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  link: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: '/images/instagram/feed-4.jpg', // Nasi Tempong/Food
    caption:
      'Yuk yang mau order bisa langsung chat admin ya! Delivery & Dine in. Available menu: Gurami bakar, Ayam geprek, Varian mie, Nasi Tempong... 🍛🔥 #domcycoffee #donomulyo',
    likes: 124,
    link: 'https://www.instagram.com/p/DIazsoGy0Uw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 2,
    image: '/images/instagram/feed-5.jpg', // Ayam Geprek
    caption: 'Order sekarang 🔥 #fypage #domcycoffee #food',
    likes: 89,
    link: 'https://www.instagram.com/p/DIOBdgvypwD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 3,
    image: '/images/instagram/feed-3.jpg', // Interior/Location
    caption:
      'WE LOVE DOMCY COFFEE 📍 Jl raya Donomulyo RT 9 RW 3. Open: 08:00 - 23:00 (Every Day). Available Catering & Nasi Box! 🍱 #donomulyo #kulinermalang',
    likes: 215,
    link: 'https://www.instagram.com/p/DG-CUw-yjlL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 4,
    image: '/images/instagram/feed-2.jpg', // Coffee/Snack vibe
    caption:
      'Ada yang baru nih paket Snack rame rame 🍟 Tempong Bebek, Gurami Bakar. Yuk gas order! 🦋 #malanghits #nongkrongmalang',
    likes: 156,
    link: 'https://www.instagram.com/p/DGZpuC0SgFu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 5,
    image: '/images/instagram/feed-1.jpg', // Vibe/Reel
    caption: 'Luvvv 📍♥️ #domcycoffee #reels',
    likes: 178,
    link: 'https://www.instagram.com/reel/C-aE97RyHZs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];
