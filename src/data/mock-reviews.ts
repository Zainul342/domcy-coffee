export interface Review {
    id: number;
    name: string;
    comment: string;
    rating: number;
    avatar: string;
    date: string;
    verified: boolean;
}

export const reviews: Review[] = [
    {
        id: 1,
        name: "Adyra Vrga",
        comment: "Asik banget buat nongkrong! Suasananya nyaman pol, bikin betah berlama-lama. Cocok buat nugas atau ngumpul bareng temen.",
        rating: 5,
        avatar: "/images/avatars/avatar-adyra.png",
        date: "2 minggu yang lalu",
        verified: true
    },
    {
        id: 2,
        name: "Tsabitatur Rohmawati",
        comment: "Pilihan menunya komplit banget dan harganya ramah di kantong. Best deal sih di Donomulyo, apalagi biasanya buka jam 11 siang pas buat makan siang.",
        rating: 4,
        avatar: "/images/avatars/avatar-tsabitatur.png",
        date: "1 bulan yang lalu",
        verified: true
    },
    {
        id: 3,
        name: "Heru Aremania",
        comment: "Pelayanan ramah, makanan enak, dan sangat memuaskan. Pokoknya mantap jiwa! Salam satu jiwa!",
        rating: 5,
        avatar: "/images/avatars/avatar-heru.png",
        date: "3 minggu yang lalu",
        verified: true
    }
];
