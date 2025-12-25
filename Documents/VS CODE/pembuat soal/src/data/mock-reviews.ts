export interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
}

export const reviews: Review[] = [
    {
        id: 1,
        name: "Siska Putri",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Nasi Tempongnya juara banget! Pedesnya nendang, ayamnya crispy. Wajib cobain kalau ke Donomulyo.",
        date: "2 days ago",
        verified: true
    },
    {
        id: 2,
        name: "Budi Santoso",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Tempat nongkrong paling asik di Malang Selatan. Kopi gula arennya pas, ga terlalu manis. Live music tiap Sabtu bikin betah!",
        date: "1 week ago",
        verified: true
    },
    {
        id: 3,
        name: "Dinda Rahma",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
        rating: 4,
        comment: "Suasananya cozy buat ngerjain tugas. Wifi kenceng, colokan banyak. Minumannya juga affordable buat kantong mahasiswa.",
        date: "3 weeks ago",
        verified: true
    },
    {
        id: 4,
        name: "Agus Pratama",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Pelayanannya ramah banget. Pesen lewat web buat pre-order ternyata praktis, dateng makanan udah siap. Mantap!",
        date: "1 month ago",
        verified: true
    },
    {
        id: 5,
        name: "Citra Kirana",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Hidden gem in Donomulyo! Design tempatnya aesthetic parah, bagus buat foto-foto Instagram.",
        date: "1 month ago",
        verified: true
    },
    {
        id: 6,
        name: "Rizky Firmansyah",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
        rating: 4,
        comment: "Makanannya enak-enak, terutama cemilannya. Cuma kadang kalau Sabtu rame banget sampe susah dapet meja, untung sekarang bisa reservasi.",
        date: "2 months ago",
        verified: true
    }
];
