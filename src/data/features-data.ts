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
    title: 'Anti Ribet: Pre-Order',
    description:
      'Pesan dulu lewat web, sampai sini tinggal makan. Solusi cerdas biar nggak nunggu lama!',
  },
  {
    id: 2,
    icon: Music,
    title: 'Live Music Tiap Sabtu',
    description:
      'Malam mingguan makin asik ditemani live music. Suasana cozy, lagu hits, pas buat nyantai.',
  },
  {
    id: 3,
    icon: Wifi,
    title: 'Wi-Fi Ngebut & Colokan Banyak',
    description: 'Surga buat mahasiswa nugas atau WFC. Koneksi stabil, suasana tenang bikin fokus.',
  },
  {
    id: 4,
    icon: Car,
    title: 'Parkir Luas & Gratis',
    description:
      'Bawa mobil atau motor gak perlu was-was. Area parkir kami luas, aman, dan tentunya gratis.',
  },
  {
    id: 5,
    icon: Coffee,
    title: 'Kopi & Nasi Tempong Juara',
    description:
      'Perpaduan unik: Ngopi cantik sambil makan Nasi Tempong pedas nampol. Cuma ada di Domcy!',
  },
  {
    id: 6,
    icon: Users,
    title: 'Hidden Gem Luas',
    description:
      'Dari depan terlihat mungil, di belakang ada area outdoor luas yang sejuk. Cocok buat acara komunitas!',
  },
];
