import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Clock, Phone, Navigation, ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';

// Fix for default marker icon in Leaflet + Vite/Webpack
// We will use a custom DivIcon instead for cleaner look matching the design
const createCustomIcon = () => {
    return L.divIcon({
        className: 'custom-pin',
        html: `<div style="background-color: #F2F0E9; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #003D2E; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#003D2E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>
        </div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });
};

const locationsData = [
    {
        id: 1,
        name: 'Coffee & Warung Domcy',
        area: 'Donomulyo, Malang',
        address: 'Jl. Raya Dawung No.416, Kec. Donomulyo, Kab. Malang, Jawa Timur 65167',
        coordinates: [-8.2977513, 112.4301245] as [number, number],
        openStatus: 'OPEN NOW',
        hours: [
            { day: 'Senin - Minggu', time: '10:00 - 23:00' }
        ],
        phone: '0821-4184-0236',
        email: 'hello@domcy.com',
        googleMapsUrl: 'https://maps.app.goo.gl/WDyBY36Frhec2BGdA',
        highlights: ['Makan di tempat', 'Drive-through', 'Pesan antar']
    }
];

export const Locations = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(locationsData[0]);

    const filteredLocations = locationsData.filter(loc =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.area.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="locations" className="relative h-[80vh] w-full overflow-hidden bg-domcy-black border-t-4 border-domcy-cream">
            {/* Map Container - Full Background */}
            <div className="absolute inset-0 z-0">
                <MapContainer
                    center={selectedLocation.coordinates}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="w-full h-full grayscale-[0.5] contrast-[1.1]"
                    zoomControl={false} // Move zoom control if needed, or keep default top-left
                >
                    {/* Dark Mode Map Tiles */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />

                    {locationsData.map((loc) => (
                        <Marker
                            key={loc.id}
                            position={loc.coordinates}
                            icon={createCustomIcon()}
                        >
                            <Popup className="font-sans">
                                <div className="text-domcy-green font-bold">{loc.name}</div>
                                <div className="text-xs">{loc.address}</div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Sidebar Overlay */}
            <div className="absolute top-0 left-0 h-full w-full sm:w-[450px] bg-domcy-green z-[1000] flex flex-col shadow-2xl">
                {/* Header */}
                <div className="p-6 pb-4">
                    <div className="flex items-center gap-4 mb-6">
                        <Link
                            to="/"
                            className="text-domcy-cream/60 hover:text-domcy-cream transition-colors flex items-center gap-2 text-sm font-sans uppercase tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>
                    <h2 className="font-display text-4xl text-domcy-cream uppercase tracking-wide">Find Us</h2>
                </div>

                {/* Search */}
                <div className="px-6 mb-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-domcy-cream/40" />
                        <input
                            type="text"
                            placeholder="Search by city or area..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-domcy-black/20 border border-domcy-cream/10 rounded-lg py-3 pl-12 pr-4 text-domcy-cream placeholder-domcy-cream/30 focus:outline-none focus:border-domcy-cream/50 transition-colors font-sans"
                        />
                    </div>
                </div>

                {/* Locations List */}
                <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4 custom-scrollbar">
                    {filteredLocations.map((loc) => (
                        <div
                            key={loc.id}
                            className="bg-domcy-black/20 border border-domcy-cream/10 rounded-xl p-6 hover:bg-domcy-black/30 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-display text-2xl text-domcy-cream uppercase tracking-wide mb-1">{loc.name}</h3>
                                    <p className="font-sans text-domcy-cream/60 text-sm uppercase tracking-wider">{loc.area}</p>
                                </div>
                                <span className="bg-domcy-cream text-domcy-green text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                    {loc.openStatus}
                                </span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex gap-3 items-start text-domcy-cream/80">
                                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-domcy-accent" />
                                    <p className="text-sm leading-relaxed">{loc.address}</p>
                                </div>
                                <div className="flex gap-3 items-start text-domcy-cream/80">
                                    <Clock className="w-5 h-5 shrink-0 mt-0.5 text-domcy-accent" />
                                    <div className="text-sm">
                                        {loc.hours.map((h, i) => (
                                            <div key={i} className="flex justify-between gap-4">
                                                <span className="w-16 opacity-60">{h.day}</span>
                                                <span>{h.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <a
                                    href={loc.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-domcy-cream text-domcy-green py-3 rounded-lg font-display text-lg uppercase tracking-wider hover:bg-white transition-colors"
                                >
                                    <Navigation className="w-4 h-4" />
                                    Directions
                                </a>
                                <button className="flex items-center justify-center gap-2 border border-domcy-cream text-domcy-cream py-3 rounded-lg font-display text-lg uppercase tracking-wider hover:bg-domcy-cream hover:text-domcy-green transition-colors">
                                    Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
