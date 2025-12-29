import { motion } from 'framer-motion';
import { Calendar, Clock, Music } from 'lucide-react';
import { useState } from 'react';
import { ReservationModal } from '../Reservation/ReservationModal';
import { events } from '../../../data/events';

export const LiveMusicSection = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{
    name: string;
    date: string;
    time: string;
  } | null>(null);

  const handleReserve = (event: (typeof events)[0]) => {
    setSelectedEvent({
      name: event.artist,
      date: event.date,
      time: event.time,
    });
    setIsReservationOpen(true);
  };

  return (
    <section id="events" className="py-20 bg-domcy-black text-domcy-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-domcy-green/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-domcy-amber text-domcy-amber px-4 py-1 rounded-full uppercase tracking-widest text-sm font-bold mb-4"
          >
            <Music className="w-4 h-4" /> Upcoming Shows
          </motion.div>
          <h2 className="font-display text-5xl sm:text-7xl uppercase text-domcy-cream tracking-tight">
            Live at Domcy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-domcy-amber/50 transition-colors"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-domcy-black to-transparent z-10 opacity-60"></div>
                <img
                  src={event.image}
                  alt={event.artist}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20 bg-domcy-green/90 backdrop-blur border border-domcy-cream/20 px-3 py-1 rounded text-center">
                  <span className="block font-display text-xl leading-none">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="block font-sans text-xs uppercase opacity-80">
                    {event.date.split(' ')[1]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 -mt-12">
                <div className="inline-block bg-domcy-accent text-white font-bold text-xs uppercase px-2 py-1 rounded mb-2 shadow-sm">
                  {event.genre}
                </div>
                <h3 className="font-display text-3xl uppercase mb-2 leading-none group-hover:text-domcy-amber transition-colors">
                  {event.artist}
                </h3>
                <div className="flex items-center gap-4 text-sm opacity-70 mb-6 font-sans">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {event.day}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {event.time}
                  </span>
                </div>

                <button
                  onClick={() => handleReserve(event)}
                  className="block w-full text-center py-3 bg-domcy-amber text-domcy-black rounded-lg hover:bg-white hover:text-domcy-green transition-all font-display uppercase tracking-wider font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                >
                  Reserve Table
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        defaultEvent={selectedEvent}
      />
    </section>
  );
};
