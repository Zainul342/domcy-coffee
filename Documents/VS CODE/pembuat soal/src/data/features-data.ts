import { Zap, Music, Wifi, Car, Coffee, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        id: 1,
        icon: Zap,
        title: "Pre-Order System",
        description: "Pesan dari web sebelum datang, makanan siap saat kamu sampai. Anti nunggu club!"
    },
    {
        id: 2,
        icon: Music,
        title: "Free Live Music",
        description: "Setiap Sabtu malam. The real vibes, no cover charge. Request lagu favoritmu!"
    },
    {
        id: 3,
        icon: Wifi,
        title: "High-Speed Wi-Fi",
        description: "Koneksi ngebut 100Mbps. Cocok buat nugas, skripsi, atau WFC seharian."
    },
    {
        id: 4,
        icon: Car,
        title: "Luas & Aman",
        description: "Parkiran luas untuk mobil & motor. Lokasi strategis di pinggir jalan raya."
    },
    {
        id: 5,
        icon: Coffee,
        title: "Premium Beans",
        description: "100% Kopi Arabica & Robusta pilihan. Manual brew atau Es Kopi Susu gula aren."
    },
    {
        id: 6,
        icon: Users,
        title: "Community Hub",
        description: "Ruang luas (indoor & outdoor) cocok untuk gathering komunitas atau acara ulang tahun."
    }
];
