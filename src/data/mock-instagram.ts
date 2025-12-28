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
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
        caption: "Friday vibes at Domcy! ☕✨ Siapa yang udah siap weekend-an? #DomcyCoffee #MalangHits",
        likes: 124,
        link: "https://instagram.com"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1529156349544-6663ce951478?q=80&w=600&auto=format&fit=crop",
        caption: "Nasi Tempong Ayam + Es Teh = Perfect Combo 🔥 Pedesnya bikin nagih! #KulinerMalang #Pedas",
        likes: 89,
        link: "https://instagram.com"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
        caption: "Live Music tonight starting at 7 PM! Don't miss out 🎸🎤 #LiveMusicMalang #NongkrongAsik",
        likes: 215,
        link: "https://instagram.com"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
        caption: "Ngopi santai sambil ngerjain tugas? Gas ke Domcy aja, WiFi kenceng! 💻☕ #StudyCafe #WorkFromCafe",
        likes: 156,
        link: "https://instagram.com"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop",
        caption: "Our signature Domcy Aren Latte. Creamy, sweet using real gula aren. 🌴 #KopiSusuGulaAren",
        likes: 178,
        link: "https://instagram.com"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1542181961-9523d76bd785?q=80&w=600&auto=format&fit=crop",
        caption: "Full house last night! Thank you for coming everyone! See you again soon 👋 #DomcyCommunity",
        likes: 243,
        link: "https://instagram.com"
    }
];
