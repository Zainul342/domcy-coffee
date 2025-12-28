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
    // --- FOOD (Domcy Special) ---
    {
        id: 1,
        category: 'Domcy Special',
        name: 'Nasi Tempong Ayam',
        description: 'Sensasi pedas yang "nendang", sambal segar ulek dadakan, dipadukan ayam goreng gurih & lalapan fresh.',
        price: 15000,
        image: '/hero-nasi-transparent.png',
        featured: true,
        tags: ['spicy', 'best-seller']
    },
    {
        id: 2,
        category: 'Domcy Special',
        name: 'Ayam Geprek Original',
        description: 'Ayam crispy di luar lembut di dalam, digeprek dengan sambal bawang super pedas yang bikin merem melek.',
        price: 13000,
        image: 'https://images.unsplash.com/photo-1645696301019-35adcc18521d?q=80&w=2000&auto=format&fit=crop',
        featured: true,
        tags: ['spicy']
    },
    {
        id: 3,
        category: 'Domcy Special',
        name: 'Ayam Geprek Sambal Matah',
        description: 'Ayam geprek renyah topping sambal matah khas Bali. Perpaduan pedas, asam, dan segar irisan bawang.',
        price: 13000,
        image: 'https://images.unsplash.com/photo-1563539958744-88f58334468f?q=80&w=2000&auto=format&fit=crop',
        featured: false,
        tags: ['spicy', 'chef-recommended']
    },
    {
        id: 4,
        category: 'Domcy Special',
        name: 'Nasi Tempong Lele',
        description: 'Lele goreng kering yang kriuk, dicocol sambal tempong super pedas + lalapan segar.',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1599573860007-8ec4f67d4c8d?q=80&w=2070&auto=format&fit=crop',
        featured: false,
        tags: ['spicy']
    },

    // --- COFFEE (Manual Brew & Espresso) ---
    {
        id: 10,
        category: 'Coffee',
        name: 'Vietnam Drip Original',
        description: 'Kopi hitam pekat hasil tetesan lambat. Rasa bold yang bikin bangun.',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1565457635676-e175058dc0ac?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },
    {
        id: 11,
        category: 'Coffee',
        name: 'Vietnam Drip Susu',
        description: 'Perpaduan sempurna pahitnya kopi & manis creamy susu kental. Best seller buat nongkrong lama.',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1565457635676-e175058dc0ac?q=80&w=2000&auto=format&fit=crop',
        featured: true,
        tags: ['best-seller']
    },
    {
        id: 12,
        category: 'Coffee',
        name: 'V60 Manual Brew',
        description: 'Seduhan tangan yang menonjolkan karakter biji kopi. Bersih, aromatik, dan elegan.',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
        featured: false,
        tags: ['vegan']
    },
    {
        id: 13,
        category: 'Coffee',
        name: 'Kopi Tubruk Domcy',
        description: 'Kopi hitam klasik tanpa ampas rasa basa-basi. Aroma kuat, rasa autentik.',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },
    {
        id: 14,
        category: 'Coffee',
        name: 'Espresso',
        description: 'Suntikan kafein murni. Kental, intens, dan berkarakter.',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },
    {
        id: 15,
        category: 'Coffee',
        name: 'Cappuccino',
        description: 'Keseimbangan espresso, steamed milk, dan foam tebal yang lembut di mulut.',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2000&auto=format&fit=crop',
        featured: true
    },
    {
        id: 16,
        category: 'Coffee',
        name: 'Latte',
        description: 'Dominasi susu hangat nan creamy dengan sentuhan espresso yang smooth.',
        price: 8000,
        image: '/hero-coffee-transparent.png',
        featured: false
    },
    {
        id: 17,
        category: 'Coffee',
        name: 'Affogato',
        description: 'Dessert kopi: Satu scoop es krim vanilla manis "tenggelam" siraman espresso panas.',
        price: 13000,
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=2000&auto=format&fit=crop',
        featured: false,
        tags: ['sweet', 'dessert']
    },
    {
        id: 18,
        category: 'Coffee',
        name: 'Long Black / Americano',
        description: 'Espresso yang ditenangkan air panas. Tetap kuat tapi lebih ringan dinikmati.',
        price: 9000,
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },

    // --- NON-COFFEE ---
    {
        id: 30,
        category: 'Non-Coffee',
        name: 'Es Teh',
        description: 'Teh manis dingin segar.',
        price: 4000,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },
    {
        id: 31,
        category: 'Non-Coffee',
        name: 'Milo Dingin',
        description: 'Susu coklat Milo dingin dengan taburan bubuk Milo.',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e7d4?q=80&w=2000&auto=format&fit=crop',
        featured: true
    },
    {
        id: 32,
        category: 'Non-Coffee',
        name: 'Susu Jahe',
        description: 'Susu hangat dengan ekstrak jahe asli. Menghangatkan badan.',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },
    {
        id: 33,
        category: 'Non-Coffee',
        name: 'Es Jeruk',
        description: 'Sari jeruk peras asli dengan es batu.',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1621538997095-2dfbba4c4e20?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },
    {
        id: 34,
        category: 'Non-Coffee',
        name: 'Chocolatos Es',
        description: 'Minuman coklat classic dingin.',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2000&auto=format&fit=crop',
        featured: false
    },

    // --- SIGNATURE / COLD DRINKS (Assumed prices based on range) ---
    {
        id: 50,
        category: 'Signature',
        name: 'Red Velvet Milkshake',
        description: 'Blend red velvet premium, susu, dan es krim.',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1548507205-04874d8122d2?q=80&w=2000&auto=format&fit=crop',
        featured: true,
        tags: ['sweet']
    },
    {
        id: 51,
        category: 'Signature',
        name: 'Oreo Cappuccino',
        description: 'Kopi cappuccino blend dengan kepingan biskuit Oreo.',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2000&auto=format&fit=crop',
        featured: false,
        tags: ['sweet']
    },
    {
        id: 52,
        category: 'Signature',
        name: 'Mojito',
        description: 'Minuman soda dengan lime dan mint yang menyegarkan (Non-Alkohol).',
        price: 10000,
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32d?q=80&w=2000&auto=format&fit=crop',
        featured: false,
        tags: ['vegan']
    }
];
