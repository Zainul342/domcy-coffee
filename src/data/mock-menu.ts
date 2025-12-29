export interface MenuItem {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    featured?: boolean;
    isSoldOut?: boolean;
    tags?: string[];
}

export const menuItems: MenuItem[] = [
    // --- Minuman Non-Kopi (Not Coffee) ---
    {
        id: 101,
        category: 'Non-Coffee',
        name: 'Teh Hangat',
        description: 'Teh manis hangat yang menenangkan.',
        price: 3000,
        image: '/images/menu/teh-hangat.svg',
        featured: false,
        tags: []
    },
    {
        id: 102,
        category: 'Non-Coffee',
        name: 'Es Teh',
        description: 'Teh manis dingin segar.',
        price: 4000,
        image: '/images/menu/es-teh.png',
        featured: false,
        tags: []
    },
    {
        id: 103,
        category: 'Non-Coffee',
        name: 'Milo Hangat',
        description: 'Susu coklat Milo hangat.',
        price: 6000,
        image: '/images/menu/milo-hangat.svg',
        featured: false,
        tags: []
    },
    {
        id: 104,
        category: 'Non-Coffee',
        name: 'Milo Dingin',
        description: 'Susu coklat Milo dingin segar.',
        price: 7000,
        image: '/images/menu/milo-dingin.svg',
        featured: true,
        tags: ['best-seller']
    },
    {
        id: 105,
        category: 'Non-Coffee',
        name: 'Chocolatos',
        description: 'Minuman coklat kental hangat.',
        price: 6000,
        image: '/images/menu/chocholatos.svg',
        featured: false,
        tags: []
    },
    {
        id: 106,
        category: 'Non-Coffee',
        name: 'Chocolatos Es',
        description: 'Minuman coklat kental dingin.',
        price: 7000,
        image: '/images/menu/chocholatos-es.svg',
        featured: false,
        tags: []
    },
    {
        id: 107,
        category: 'Non-Coffee',
        name: 'Susu Hangat Coklat',
        description: 'Susu kental manis coklat hangat.',
        price: 5000,
        image: '/images/menu/susu-hangat-coklat.svg',
        featured: false,
        tags: []
    },
    {
        id: 108,
        category: 'Non-Coffee',
        name: 'Susu Hangat Putih',
        description: 'Susu kental manis putih hangat.',
        price: 5000,
        image: '/images/menu/susu-hangat-putih.svg',
        featured: false,
        tags: []
    },
    {
        id: 109,
        category: 'Non-Coffee',
        name: 'Susu Jahe',
        description: 'Susu hangat dengan ekstrak jahe asli.',
        price: 6000,
        image: '/images/menu/susu-jahe.svg',
        featured: false,
        tags: []
    },
    {
        id: 110,
        category: 'Non-Coffee',
        name: 'Jeruk Hangat',
        description: 'Sari jeruk peras hangat.',
        price: 5000,
        image: '/images/menu/es-jeruk.svg', // Fallback to es-jeruk if warm ver not found, but checked logic
        featured: false,
        tags: []
    },
    {
        id: 111,
        category: 'Non-Coffee',
        name: 'Es Jeruk',
        description: 'Sari jeruk peras dingin segar.',
        price: 6000,
        image: '/images/menu/es-jeruk.svg',
        featured: false,
        tags: []
    },
    {
        id: 112,
        category: 'Non-Coffee',
        name: 'Lemon Teh Hangat',
        description: 'Teh lemon hangat kaya vitamin C.',
        price: 5000,
        image: '/images/menu/lemon-teh-anget.svg',
        featured: false,
        tags: []
    },
    {
        id: 113,
        category: 'Non-Coffee',
        name: 'Lemon Teh Es',
        description: 'Teh lemon dingin yang menyegarkan.',
        price: 6000,
        image: '/images/menu/lemon-teh-es.svg',
        featured: false,
        tags: []
    },

    // --- Kopi Panas (Hot Drink Coffee - Manual Brew & Espresso) ---
    {
        id: 201,
        category: 'Coffee',
        name: 'Vietnam Drip Original',
        description: 'Kopi hitam pekat metode drip. Bold.',
        price: 7000,
        image: '/images/menu/vietnam-drip.png',
        featured: false,
        tags: []
    },
    {
        id: 202,
        category: 'Coffee',
        name: 'Vietnam Drip Susu',
        description: 'Kopi drip dengan susu kental manis.',
        price: 8000,
        image: '/images/menu/vietnam-drip.png',
        featured: true,
        tags: ['best-seller']
    },
    {
        id: 203,
        category: 'Coffee',
        name: 'V60',
        description: 'Seduhan pour-over yang clean dan aromatik.',
        price: 8000,
        image: '/images/menu/v60.svg',
        featured: false,
        tags: ['vegan']
    },
    {
        id: 204,
        category: 'Coffee',
        name: 'Latte',
        description: 'Espresso dengan susu steamed yang lembut.',
        price: 8000,
        image: '/images/menu/latte.svg',
        featured: false,
        tags: []
    },
    {
        id: 205,
        category: 'Coffee',
        name: 'Latte Art',
        description: 'Latte dengan seni visual di atas foam.',
        price: 10000,
        image: '/images/menu/latte-art.svg',
        featured: false,
        tags: []
    },
    {
        id: 206,
        category: 'Coffee',
        name: 'Cappuccino',
        description: 'Keseimbangan pas espresso, susu, dan foam.',
        price: 8000,
        image: '/images/menu/cappuccino.svg',
        featured: false,
        tags: []
    },
    {
        id: 207,
        category: 'Coffee',
        name: 'Affogato',
        description: 'Es krim vanilla disiram espresso panas.',
        price: 11000,
        image: '/images/menu/affogato.svg',
        featured: false,
        tags: ['sweet', 'dessert']
    },
    {
        id: 208,
        category: 'Coffee',
        name: 'Kopi Tubruk Domcy',
        description: 'Kopi hitam klasik ampas, aroma nendang.',
        price: 6000,
        image: '/images/menu/coffe-tubruk-domcy.svg',
        featured: false,
        tags: []
    },
    {
        id: 209,
        category: 'Coffee',
        name: 'Espresso',
        description: 'Ekstrak kopi murni 30ml.',
        price: 8000,
        image: '/images/menu/espresso.svg',
        featured: false,
        tags: []
    },
    {
        id: 210,
        category: 'Coffee',
        name: 'Long Black',
        description: 'Espresso dituang ke air panas (tetap ada crema).',
        price: 9000,
        image: '/images/menu/long-black.svg',
        featured: false,
        tags: []
    },
    {
        id: 211,
        category: 'Coffee',
        name: 'Americano',
        description: 'Espresso ditambah air panas.',
        price: 9000,
        image: '/images/menu/americano.svg',
        featured: false,
        tags: []
    },
    {
        id: 212,
        category: 'Coffee',
        name: 'Macchiato',
        description: 'Espresso dengan sedikit foam susu.',
        price: 9000,
        image: '/images/menu/macchiato.svg',
        featured: false,
        tags: []
    },
    {
        id: 213,
        category: 'Coffee',
        name: 'Flat White',
        description: 'Espresso dengan microfoam susu tipis.',
        price: 9000,
        image: '/images/menu/flat-white.svg',
        featured: false,
        tags: []
    },
    {
        id: 214,
        category: 'Coffee',
        name: 'Mocca',
        description: 'Espresso dengan coklat dan susu.',
        price: 10000,
        image: '/images/menu/mocca.svg',
        featured: false,
        tags: []
    },
    {
        id: 215,
        category: 'Coffee',
        name: 'Latte Macchiato',
        description: 'Susu panas dengan espresso di atasnya.',
        price: 10000,
        image: '/images/menu/latte-macchiato.svg',
        featured: false,
        tags: []
    },
    {
        id: 216,
        category: 'Coffee',
        name: 'Ginger Coffee',
        description: 'Kopi dengan ekstrak jahe.',
        price: 10000,
        image: '/images/menu/ginger-coffee.svg',
        featured: false,
        tags: []
    },


    // --- Minuman Dingin & Milkshake (Cold Drink) ---
    {
        id: 301,
        category: 'Cold Drink',
        name: 'Cappuccino Milk Domcy',
        description: 'Es kopi susu cappuccino khas Domcy.',
        price: 12000,
        image: '/images/menu/capucino-milk-domcy.svg',
        featured: true,
        tags: ['signature']
    },
    {
        id: 302,
        category: 'Cold Drink',
        name: 'Red Velvet',
        description: 'Minuman rasa red velvet creamy.',
        price: 12000,
        image: '/images/menu/red-velvet.svg',
        featured: false,
        tags: []
    },
    {
        id: 303,
        category: 'Cold Drink',
        name: 'Red Velvet Milkshake',
        description: 'Blend red velvet premium, susu, dan es krim.',
        price: 15000,
        image: '/images/menu/red-velvet-milkshake.png',
        featured: true,
        tags: ['signature', 'sweet']
    },
    {
        id: 304,
        category: 'Cold Drink',
        name: 'Iced Watermelon Matcha',
        description: 'Unik! Segarnya semangka ketemu matcha.',
        price: 15000,
        image: '/images/menu/iced-watermelon-matcha.svg',
        featured: true,
        tags: ['signature']
    },
    {
        id: 305,
        category: 'Cold Drink',
        name: 'Dalgona',
        description: 'Foam kopi manis di atas susu cair dingin.',
        price: 15000,
        image: '/images/menu/dalgana.svg',
        featured: false,
        tags: ['trending']
    },
    {
        id: 306,
        category: 'Cold Drink',
        name: 'Iced Chocolate',
        description: 'Es coklat premium yang nyoklat banget.',
        price: 12000,
        image: '/images/menu/iced-chocolate.svg',
        featured: false,
        tags: []
    },
    {
        id: 307,
        category: 'Cold Drink',
        name: 'Coffeecrush Milk Domcy',
        description: 'Es kopi susu dengan tekstur crunchy.',
        price: 15000,
        image: '/images/menu/coffeecrush-milk-domcy.svg',
        featured: true,
        tags: ['signature']
    },
    {
        id: 308,
        category: 'Cold Drink',
        name: 'Coffee Candy Domcy',
        description: 'Es kopi dengan rasa manis permen karamel.',
        price: 15000,
        image: '/images/menu/coffee-candy-domcy.svg',
        featured: true,
        tags: ['signature']
    },
    {
        id: 309,
        category: 'Cold Drink',
        name: 'Coffee Honey Domcy',
        description: 'Es kopi susu dengan madu murni.',
        price: 15000,
        image: '/images/menu/coffee-honey-domcy.svg',
        featured: false,
        tags: ['healthy']
    },
    {
        id: 310,
        category: 'Cold Drink',
        name: 'Mojito',
        description: 'Soda, lime, dan mint (Non-alkohol).',
        price: 10000,
        image: '/images/menu/mojito.svg',
        featured: false,
        tags: ['vegan']
    },
    {
        id: 311,
        category: 'Cold Drink',
        name: 'Chococcino',
        description: 'Perpaduan Coklat dan Cappuccino dingin.',
        price: 12000,
        image: '/images/menu/chococcino.svg',
        featured: false,
        tags: []
    },

    // --- Kopi Nusantara (Brewed Drink) ---
    {
        id: 401,
        category: 'Manual Brew',
        name: 'Kopi Bali',
        description: 'Kopi Bali dengan karakter fruity dan acid yang segar.',
        price: 12000,
        image: '/images/menu/kopi-bali.svg',
        featured: false,
        tags: []
    },
    {
        id: 402,
        category: 'Manual Brew',
        name: 'Kopi Flores Lio',
        description: 'Kopi Flores dengan body tebal dan aroma coklat.',
        price: 13000,
        image: '/images/menu/kopi-flores-lio.svg',
        featured: false,
        tags: []
    },
    {
        id: 403,
        category: 'Manual Brew',
        name: 'Kopi Toraja',
        description: 'Kopi Toraja yang earthy dan spicy.',
        price: 13000,
        image: '/images/menu/kopi-toraja.svg',
        featured: false,
        tags: []
    },
    {
        id: 404,
        category: 'Manual Brew',
        name: 'Kopi Gayo',
        description: 'Kopi Aceh Gayo yang intens dan aromatik.',
        price: 13000,
        image: '/images/menu/kopi-gayo.svg',
        featured: false,
        tags: []
    },
    {
        id: 405,
        category: 'Manual Brew',
        name: 'Kopi Dampit',
        description: 'Kopi Dampit Malang.',
        price: 13000,
        image: '/images/menu/kopi-dampit.svg',
        featured: false,
        tags: []
    },
    {
        id: 406,
        category: 'Manual Brew',
        name: 'Kopi Enrekang',
        description: 'Kopi Enrekang Sulawesi.',
        price: 13000,
        image: '/images/menu/kopi-enrekang.svg',
        featured: false,
        tags: []
    },
    {
        id: 407,
        category: 'Manual Brew',
        name: 'Kopi Java Ijen Raung',
        description: 'Kopi Java Ijen Raung.',
        price: 13000,
        image: '/images/menu/kopi-java-ijen-raung.svg',
        featured: false,
        tags: []
    },
    {
        id: 408,
        category: 'Manual Brew',
        name: 'Kopi Preanger',
        description: 'Kopi Preanger Jawa Barat.',
        price: 13000,
        image: '/images/menu/kopi-preanger.svg',
        featured: false,
        tags: []
    },
    {
        id: 409,
        category: 'Manual Brew',
        name: 'Kopi Temanggung',
        description: 'Kopi Temanggung Jawa Tengah.',
        price: 13000,
        image: '/images/menu/kopi-temanggung.svg',
        featured: false,
        tags: []
    },


    // --- Makanan (Food Menu) ---
    {
        id: 501,
        category: 'Food',
        name: 'Ayam Geprek',
        description: 'Ayam crispy digeprek sambal bawang pedas + Nasi & Lalapan.',
        price: 13000,
        image: '/images/menu/ayam-geprek.png',
        featured: true,
        tags: ['best-seller', 'spicy']
    },
    {
        id: 502,
        category: 'Food',
        name: 'Nasi Tempong',
        description: 'Nasi dengan lauk lengkap (ikan asin, tempe, tahu) & sambal tempong khas.',
        price: 15000,
        image: '/images/menu/nasi-tempong.png',
        featured: true,
        tags: ['signature', 'spicy']
    },
    {
        id: 503,
        category: 'Food',
        name: 'Bebek Bakar',
        description: 'Bebek bakar bumbu meresap + sambal spesial.',
        price: 25000,
        image: '/images/menu/bebek-bakar.svg',
        featured: false,
        tags: ['chef-recommended']
    },
    {
        id: 504,
        category: 'Food',
        name: 'Chicken Katsu',
        description: 'Ayam fillet goreng tepung panko renyah + saus pilihan.',
        price: 18000,
        image: '/images/menu/chicken-katsu.svg',
        featured: false,
        tags: ['kids-friendly']
    },
    {
        id: 505,
        category: 'Food',
        name: 'Mie Pedas',
        description: 'Mie goreng/kuah dengan level pedas "setan" yang menantang.',
        price: 12000,
        image: '/images/menu/mie-pedas.svg',
        featured: false,
        tags: ['spicy']
    },
    {
        id: 506,
        category: 'Food',
        name: 'Nasi Goreng Keju',
        description: 'Nasi goreng gurih dengan topping parutan keju melimpah.',
        price: 15000,
        image: '/images/menu/nasi-goreng-toping-keju.svg',
        featured: false,
        tags: []
    },
    {
        id: 507,
        category: 'Food',
        name: 'Burger Ice Cream',
        description: 'Unik! Roti burger lembut diisi es krim dingin.',
        price: 15000,
        image: '/images/menu/burger.svg',
        featured: false,
        tags: ['dessert']
    },
    {
        id: 508,
        category: 'Food',
        name: 'Pisang Bakar Coklat Keju',
        description: 'Pisang bakar manis dengan topping coklat dan keju.',
        price: 10000,
        image: '/images/menu/pisang-bakar-coklat-keju.svg',
        featured: false,
        tags: ['snack']
    },
    {
        id: 509,
        category: 'Food',
        name: 'Es Campur',
        description: 'Es serut dengan aneka buah, agar-agar, dan sirup segar.',
        price: 12000,
        image: '/images/menu/es-campur.svg',
        featured: false,
        tags: ['dessert']
    },
    {
        id: 510,
        category: 'Food',
        name: 'Menu Prasmanan',
        description: 'Menu Prasmanan untuk grup atau acara.',
        price: 0, // Assuming variable price or inquiry only
        image: '/images/menu/menu-prasmanan.svg',
        featured: false,
        tags: ['event']
    },
    {
        id: 511,
        category: 'Food',
        name: 'Hotdog Ice Cream',
        description: 'Hotdog dengan es krim.',
        price: 15000,
        image: '/images/menu/hotdog-ice-cream.svg',
        featured: false,
        tags: ['dessert']
    }
];
