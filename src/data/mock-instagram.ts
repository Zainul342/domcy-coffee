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
        image: "/images/instagram/feed-1.png",
        caption: "Suasana malam di Kopi Donomulyo. Tempat ternyaman buat sharing cerita. ☕✨ #DomcyCoffee #MalangHits",
        likes: 124,
        link: "https://instagram.com/domcycoffee"
    },
    {
        id: 2,
        image: "/images/instagram/feed-2.png",
        caption: "Latte art crafted with passion. Coffee that tastes as good as it looks. ☕🎨 #LatteArt #Domcy",
        likes: 189,
        link: "https://instagram.com/domcycoffee"
    },
    {
        id: 3,
        image: "/images/instagram/feed-3.png",
        caption: "Interior baru dengan balutan aksen kayu dan industrial. Mewah tapi tetap 'ndeso' (lokal). 🌿🪵 #InteriorCafe #Donomulyo",
        likes: 215,
        link: "https://instagram.com/domcycoffee"
    },
    {
        id: 4,
        image: "/images/instagram/feed-4.png",
        caption: "Nasi Tempong legendaris Domcy. Pedasnya nendang, lauknya komplit! 🔥🍱 #NasiTempong #KulinerMalang",
        likes: 156,
        link: "https://instagram.com/domcycoffee"
    },
    {
        id: 5,
        image: "/images/instagram/feed-5.png",
        caption: "Ayam Geprek sambal bawang. Jagonya bikin gagal diet! 😂🍗 #AyamGeprek #DomcyFood",
        likes: 178,
        link: "https://instagram.com/domcycoffee"
    },
    {
        id: 6,
        image: "/images/instagram/feed-6.png",
        caption: "Vietnam Drip, pilihan tepat buat yang suka kopi strong. ☕⏳ #VietnamDrip #KopiHitam",
        likes: 243,
        link: "https://instagram.com/domcycoffee"
    }
];
