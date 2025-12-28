export interface LiveEvent {
    id: number;
    date: string;
    day: string;
    artist: string;
    genre: string;
    time: string;
    image: string;
    coverCharge?: number;
    availableSeats?: number;
    isFeatured?: boolean;
}

export const events: LiveEvent[] = [
    {
        id: 1,
        date: '25 Oct',
        day: 'Saturday',
        artist: 'Acoustic Night feat. Dio',
        genre: 'Pop / Top 40',
        time: '19:00 - 22:00',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
        availableSeats: 8,
        isFeatured: true
    },
    {
        id: 2,
        date: '26 Oct',
        day: 'Sunday',
        artist: 'Sunday Jazz: The Groovers',
        genre: 'Jazz / Soul',
        time: '18:00 - 21:00',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
        coverCharge: 0,
        availableSeats: 15
    },
    {
        id: 3,
        date: '01 Nov',
        day: 'Saturday',
        artist: 'Rock Ballads: Mr. X',
        genre: 'Classic Rock',
        time: '20:00 - 23:00',
        image: 'https://images.unsplash.com/photo-1459749411177-d4a428c3ea6a?q=80&w=2074&auto=format&fit=crop',
        availableSeats: 3
    }
];
