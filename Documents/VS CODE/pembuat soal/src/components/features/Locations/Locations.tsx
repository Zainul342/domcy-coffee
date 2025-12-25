import { MapPin, Clock, Phone } from 'lucide-react';

export const Locations = () => {

    return (
        <section id="locations" className="py-20 bg-domcy-black text-domcy-cream font-sans relative border-t border-domcy-cream/10">
            <div className="container mx-auto px-6 sm:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left: Info & Events */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-12">
                        {/* Address Block */}
                        <div>
                            <h2 className="font-display text-5xl uppercase mb-8 text-domcy-cream">Find Us</h2>
                            <div className="border border-domcy-cream/20 p-8 hover:bg-white/5 transition-colors">
                                <h3 className="font-display text-3xl uppercase mb-6 text-domcy-cream">Domcy Main HQ</h3>
                                <div className="space-y-6 text-domcy-cream/80 text-lg">
                                    <div className="flex gap-4 items-start">
                                        <MapPin className="w-6 h-6 shrink-0 mt-1" />
                                        <div>
                                            <p className="leading-relaxed font-bold">Jl. Raya Donomulyo No. 45, Malang Selatan</p>
                                            <p className="text-sm opacity-70">(Sebelah Bank BRI)</p>
                                            <div className="mt-2 inline-flex items-center gap-2 bg-domcy-green border border-domcy-cream/20 px-3 py-1 rounded text-sm text-domcy-accent">
                                                <span>🌊 15 mins from Pantai Ngliyep</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <Clock className="w-6 h-6 shrink-0 mt-1" />
                                        <div>
                                            <p><span className="font-bold text-domcy-cream">Daily:</span> 10:00 - 23:00</p>
                                            <p className="text-domcy-accent"><span className="font-bold">Weekend:</span> Until 00:00</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <Phone className="w-6 h-6 shrink-0" />
                                        <p>+62 812-3456-7890</p>
                                    </div>
                                    <div className="flex gap-4 items-center pt-2 border-t border-domcy-cream/10">
                                        <div className="flex items-center gap-2 text-green-400">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="font-bold uppercase tracking-wider text-sm">Parking Available</span>
                                        </div>
                                        <span className="text-domcy-cream/50 text-sm">|</span>
                                        <span className="text-sm opacity-80">Car & Motorbike</span>
                                    </div>
                                </div>
                                <button className="w-full mt-8 py-4 border-2 border-domcy-cream text-domcy-cream uppercase font-display text-xl tracking-wider hover:bg-domcy-cream hover:text-domcy-green transition-colors">
                                    Get Directions
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right: Dark Map */}
                <div className="w-full lg:w-2/3 min-h-[500px] h-auto bg-domcy-green/20 border-2 border-domcy-cream/10 relative overflow-hidden group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.85532297136!2d112.4287532!3d-8.2816987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a2e58e08d6b9%3A0x7d6c6e759238380!2sDonomulyo%2C%20Malang%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1709620000000!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        className="absolute inset-0 grayscale invert-[.85] contrast-[1.1] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    {/* Overlay to tint the map green */}
                    <div className="absolute inset-0 bg-domcy-green/30 pointer-events-none mix-blend-overlay"></div>
                </div>

            </div>
        </div>
        </section >
    );
};
