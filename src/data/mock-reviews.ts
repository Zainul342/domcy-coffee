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
        comment: "Nasi Tempong pertama di DMC yang rasanya beneran juara! Pedas sambalnya fresh banget, bikin nagih parah. Wajib coba!",
        date: "2 hari lalu",
        verified: true
    },
    {
        id: 2,
        name: "Budi Santoso",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Satu-satunya cafe paling recommended di Donomulyo. Menu lengkap, harga mahasiswa banget, tapi rasa bintang lima.",
        date: "1 minggu lalu",
        verified: true
    },
    {
        id: 3,
        name: "Dinda Rahma",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Hidden Gem asli! Dari depan keliatan biasa, pas masuk ke belakang ternyata luas banget & cozy. Cocok buat acara keluarga.",
        date: "3 minggu lalu",
        verified: true
    },
    {
        id: 4,
        name: "Agus Pratama",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Ownernya ramah banget, pelayanan oke. Suasananya klasik dan nyaman, betah berjam-jam di sini.",
        date: "1 bulan lalu",
        verified: true
    },
    {
        id: 5,
        name: "Citra Kirana",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
        rating: 4,
        comment: "Tips buat yang mau ke sini pas Malam Minggu: Mending Reservasi dulu biar dapet tempat enak dan ga nunggu lama!",
        date: "1 bulan lalu",
        verified: true
    },
    {
        id: 6,
        name: "Rizky Firmansyah",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
        rating: 5,
        comment: "Markas nugas terbaik. Wi-Fi kencang, banyak colokan, kopi susu gula aren-nya bikin melek. Approved!",
        date: "2 bulan lalu",
        verified: true
    }
];
