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
        date: 'Every Week', // Changed from specific date
        day: 'Saturday Night',
        artist: 'Scala Acoustick',
        genre: 'Pop / Ambyar / Top 40',
        time: '19:00 - Selesai',
        image: '/images/events/scala-poster.png', // Local asset from user upload
        availableSeats: 50, // More generic capacity
        isFeatured: true
    },
    {
        id: 2,
        date: 'Every Week',
        day: 'Sunday',
        artist: 'Relaxing Coffee Time',
        genre: 'Chill Playlist',
        time: 'All Day',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop', // Temporary generic or keep unsplash for now if no poster
        coverCharge: 0,
        availableSeats: 20
    }
];
