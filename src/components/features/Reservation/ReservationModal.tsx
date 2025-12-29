import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Music } from 'lucide-react';
import { useState } from 'react';
import { createWhatsAppLink } from '../../../utils/whatsapp';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEvent?: {
    name: string;
    date: string;
    time: string;
  } | null;
}

export const ReservationModal = ({ isOpen, onClose, defaultEvent }: ReservationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pax: '2',
    date: defaultEvent?.date || '',
    time: defaultEvent?.time ? defaultEvent.time.split(' - ')[0] : '',
    isLiveEvent: !!defaultEvent,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `Halo Domcy! Saya ingin reservasi meja:%0A` +
      `👤 Nama: ${formData.name}%0A` +
      `📱 No HP: ${formData.phone}%0A` +
      `👥 Pax: ${formData.pax} orang%0A` +
      `📅 Tanggal: ${formData.date}%0A` +
      `⏰ Jam: ${formData.time}%0A` +
      `${formData.isLiveEvent ? '🎵 *Event Live Music*' : ''}`;

    window.open(createWhatsAppLink(message), '_blank');
    onClose();
    // Reset form logic if needed, but component unmounts likely or reused
  };

  const paxOptions = ['2', '4', '6', '8+'];
  const timeSlots = ['18:00', '19:00', '20:00', '21:00'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative bg-domcy-green border border-domcy-cream/20 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 bg-domcy-black/30 border-b border-domcy-cream/10 flex justify-between items-center">
              <div>
                <h3 className="font-display text-2xl text-domcy-cream uppercase tracking-wide">
                  Reserve a Table
                </h3>
                {defaultEvent && (
                  <p className="text-domcy-accent text-sm mt-1 flex items-center gap-1">
                    <Music className="w-3 h-3" /> {defaultEvent.name}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-domcy-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-domcy-cream/60 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-domcy-cream/20 rounded-lg px-4 py-3 text-domcy-cream placeholder-white/20 focus:outline-none focus:border-domcy-accent transition-colors font-sans"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-domcy-cream/60 mb-1.5">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-white/5 border border-domcy-cream/20 rounded-lg px-4 py-3 text-domcy-cream placeholder-white/20 focus:outline-none focus:border-domcy-accent transition-colors font-sans"
                    placeholder="0812..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-domcy-cream/60 mb-1.5">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-domcy-cream/40" />
                    <input
                      type="date"
                      required
                      className="w-full bg-white/5 border border-domcy-cream/20 rounded-lg pl-10 pr-4 py-3 text-domcy-cream placeholder-white/20 focus:outline-none focus:border-domcy-accent transition-colors font-sans"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-domcy-cream/60 mb-1.5">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-domcy-cream/40" />
                    <select
                      required
                      className="w-full bg-white/5 border border-domcy-cream/20 rounded-lg pl-10 pr-4 py-3 text-domcy-cream placeholder-white/20 focus:outline-none focus:border-domcy-accent transition-colors font-sans appearance-none cursor-pointer"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="" className="bg-domcy-green">
                        Select Time
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} className="bg-domcy-green text-domcy-cream">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-domcy-cream/60 mb-2">
                  Pax (People)
                </label>
                <div className="flex gap-2">
                  {paxOptions.map((pax) => (
                    <button
                      key={pax}
                      type="button"
                      onClick={() => setFormData({ ...formData, pax })}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-all ${
                        formData.pax === pax
                          ? 'bg-domcy-accent text-domcy-green border-domcy-accent shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] translate-y-[1px]'
                          : 'bg-transparent text-domcy-cream border-domcy-cream/20 hover:border-domcy-cream/50'
                      }`}
                    >
                      {pax}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkbox for Live Music */}
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-domcy-cream/10">
                <input
                  type="checkbox"
                  id="live-music"
                  checked={formData.isLiveEvent}
                  onChange={(e) => setFormData({ ...formData, isLiveEvent: e.target.checked })}
                  className="w-5 h-5 rounded border-domcy-cream/20 text-domcy-accent focus:ring-offset-0 focus:ring-0 bg-transparent"
                />
                <label
                  htmlFor="live-music"
                  className="text-sm text-domcy-cream font-sans cursor-pointer select-none flex-1"
                >
                  Reserve for Live Music
                </label>
                <Music
                  className={`w-4 h-4 ${formData.isLiveEvent ? 'text-domcy-accent' : 'text-domcy-cream/20'}`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-display text-xl uppercase py-4 rounded-lg hover:bg-amber-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-none"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
