import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { createWhatsAppLink } from '../../../utils/whatsapp';
import { useNavigate, useLocation } from 'react-router-dom';

export const PreOrderModal = () => {
  const { isCartOpen, closeCart, items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const [pickupTime, setPickupTime] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // New State for Checkout Flow
  const [step, setStep] = useState<'cart' | 'details'>('cart');
  const [details, setDetails] = useState({
    name: '',
    serviceType: 'dine-in', // 'dine-in' | 'takeaway'
    locationDetail: '', // Table Number or Address
    note: '',
  });

  // Reset step when cart opens/closes
  if (!isCartOpen && step !== 'cart') {
    setTimeout(() => setStep('cart'), 500);
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleCheckout = () => {
    if (!pickupTime) {
      alert('Please select a pickup time first');
      return;
    }
    setStep('details');
  };

  const handleSendOrder = () => {
    // Validation
    if (!details.name.trim()) {
      alert('Mohon isi Nama Lengkap Anda');
      return;
    }
    if (!details.locationDetail.trim()) {
      alert(
        details.serviceType === 'dine-in' ? 'Mohon isi Nomor Meja' : 'Mohon isi Alamat Lengkap',
      );
      return;
    }

    const serviceLabel =
      details.serviceType === 'dine-in' ? 'Makan di Tempat' : 'Bawa Pulang / Delivery';
    const locationLabel = details.serviceType === 'dine-in' ? 'No Meja' : 'Alamat';

    let message = `Halo Domcy Coffee, saya mau pesan:\n`;
    message += `Nama: ${details.name}\n`;
    message += `Layanan: ${serviceLabel}\n`;
    message += `Detail: ${locationLabel} ${details.locationDetail}\n`;
    message += `Waktu Ambil: ${pickupTime}\n`;
    if (details.note) message += `Catatan: ${details.note}\n`;

    message += `\n*Daftar Pesanan:*\n`;
    items.forEach((item) => {
      const priceValue =
        parseInt(item.price.replace(/[^0-9]/g, '')) *
        (item.price.toLowerCase().includes('k') ? 1000 : 1);
      message += `- ${item.quantity}x ${item.name} (${formatCurrency(priceValue * item.quantity)})\n`;
    });

    message += `\n*Total Estimasi:* ${formatCurrency(totalPrice)}\n`;
    message += `\nTerima kasih!`;

    window.open(createWhatsAppLink(message), '_blank');
    closeCart();
    setStep('cart');
    setDetails({ name: '', serviceType: 'dine-in', locationDetail: '', note: '' });
  };

  const handleBrowseMenu = () => {
    closeCart();
    if (location.pathname !== '/') {
      navigate('/?scrollTo=menu');
    } else {
      setTimeout(() => {
        const element = document.getElementById('menu');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-domcy-black/80 backdrop-blur-sm z-[80]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-40%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-40%' }}
            className="fixed top-1/2 left-1/2 w-[90vw] sm:w-full max-w-md bg-domcy-green border-2 border-domcy-cream rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] z-[90] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 bg-domcy-cream text-domcy-green flex justify-between items-center border-b-2 border-domcy-green">
              <h2 className="font-display text-3xl uppercase tracking-wider flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                {step === 'cart' ? 'Pesanan Kamu' : 'Isi Data Diri'}
              </h2>
              <button
                onClick={closeCart}
                className="p-1 hover:bg-domcy-green/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto flex-1 text-domcy-cream">
              {step === 'cart' ? (
                // --- CART STEP ---
                <>
                  {items.length === 0 ? (
                    <div className="text-center py-12 flex flex-col items-center">
                      <div className="bg-domcy-cream/10 p-6 rounded-full mb-6">
                        <ShoppingBag className="w-12 h-12 opacity-60" />
                      </div>
                      <p className="font-display text-2xl uppercase tracking-wide mb-2">
                        Keranjangmu kosong
                      </p>
                      <p className="font-sans text-sm opacity-60 mb-8 max-w-[200px]">
                        Sepertinya kamu belum memilih menu apapun.
                      </p>

                      <button
                        onClick={handleBrowseMenu}
                        className="bg-domcy-cream text-domcy-green font-display text-lg uppercase tracking-wider px-8 py-3 rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                      >
                        Lihat Menu <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center bg-domcy-black/20 p-4 rounded-lg border border-domcy-cream/10"
                        >
                          <div className="flex-1">
                            <h4 className="font-display text-xl leading-none mb-1">{item.name}</h4>
                            <p className="font-sans text-sm opacity-70">{item.price}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-domcy-green border border-domcy-cream/30 rounded-lg px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:bg-white/10 rounded-full"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-sans font-bold w-4 text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:bg-white/10 rounded-full"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-400 hover:text-red-300 p-2"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // --- DETAILS / FORM STEP ---
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block font-sans font-bold text-sm mb-2 text-domcy-cream">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      value={details.name}
                      onChange={(e) => setDetails({ ...details, name: e.target.value })}
                      className="w-full bg-domcy-black/20 border border-domcy-cream/30 rounded-lg px-4 py-3 text-domcy-cream placeholder-domcy-cream/40 focus:outline-none focus:border-domcy-amber transition-colors"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block font-sans font-bold text-sm mb-3 text-domcy-cream">
                      Pilihan Layanan *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer bg-domcy-black/20 px-4 py-3 rounded-lg border border-domcy-cream/30 flex-1 hover:bg-domcy-white/5 transition-colors">
                        <input
                          type="radio"
                          name="serviceType"
                          value="dine-in"
                          checked={details.serviceType === 'dine-in'}
                          onChange={(e) => setDetails({ ...details, serviceType: e.target.value })}
                          className="accent-domcy-amber w-5 h-5"
                        />
                        <span className="font-sans text-domcy-cream">Makan di Tempat</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer bg-domcy-black/20 px-4 py-3 rounded-lg border border-domcy-cream/30 flex-1 hover:bg-domcy-white/5 transition-colors">
                        <input
                          type="radio"
                          name="serviceType"
                          value="takeaway"
                          checked={details.serviceType === 'takeaway'}
                          onChange={(e) => setDetails({ ...details, serviceType: e.target.value })}
                          className="accent-domcy-amber w-5 h-5"
                        />
                        <span className="font-sans text-domcy-cream">Bawa Pulang</span>
                      </label>
                    </div>
                  </div>

                  {/* Location Detail (Conditional) */}
                  <div>
                    <label className="block font-sans font-bold text-sm mb-2 text-domcy-cream">
                      {details.serviceType === 'dine-in' ? 'Nomor Meja *' : 'Alamat Lengkap *'}
                    </label>
                    <input
                      type="text"
                      placeholder={
                        details.serviceType === 'dine-in'
                          ? 'Contoh: Meja 12 (atau "Menunggu")'
                          : 'Contoh: Jln. Raya Donomulyo No. 1...'
                      }
                      value={details.locationDetail}
                      onChange={(e) => setDetails({ ...details, locationDetail: e.target.value })}
                      className="w-full bg-domcy-black/20 border border-domcy-cream/30 rounded-lg px-4 py-3 text-domcy-cream placeholder-domcy-cream/40 focus:outline-none focus:border-domcy-amber transition-colors"
                    />
                    <p className="text-xs text-domcy-cream/50 mt-1">
                      {details.serviceType === 'dine-in'
                        ? 'Jika belum ada meja, isi "Menunggu Meja"'
                        : 'Sertakan patokan jika perlu'}
                    </p>
                  </div>

                  {/* Additional Note */}
                  <div>
                    <label className="block font-sans font-bold text-sm mb-2 text-domcy-cream">
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      placeholder="Contoh: Kurangi pedas, jangan pakai daun bawang..."
                      value={details.note}
                      onChange={(e) => setDetails({ ...details, note: e.target.value })}
                      className="w-full bg-domcy-black/20 border border-domcy-cream/30 rounded-lg px-4 py-3 text-domcy-cream placeholder-domcy-cream/40 focus:outline-none focus:border-domcy-amber transition-colors h-24 resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-domcy-black/30 border-t border-domcy-cream/20 space-y-4">
                {step === 'cart' ? (
                  // --- CART FOOTER ---
                  <>
                    {/* Time Selector */}
                    <div>
                      <label className="block font-sans text-sm text-domcy-cream/70 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Waktu Ambil (Hari Ini)
                      </label>
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full bg-domcy-green border border-domcy-cream text-domcy-cream px-4 py-3 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-domcy-accent appearance-none"
                      />
                    </div>

                    <div className="flex justify-between items-end border-t border-domcy-cream/10 pt-4">
                      <div>
                        <p className="font-sans text-sm text-domcy-cream/60">Estimasi Total</p>
                        <p className="font-display text-3xl text-domcy-accent tracking-wider">
                          {formatCurrency(totalPrice)}
                        </p>
                      </div>
                      <button
                        onClick={handleCheckout}
                        data-testid="checkout-button"
                        className="bg-domcy-amber text-domcy-black font-display text-xl uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-white hover:text-domcy-green transition-colors shadow-lg flex items-center gap-2"
                      >
                        Lanjut <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                ) : (
                  // --- CHECKOUT FORM FOOTER ---
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep('cart')}
                      className="flex-1 border-2 border-domcy-cream/30 text-domcy-cream font-display text-lg uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      Kembali
                    </button>
                    <button
                      onClick={handleSendOrder}
                      data-testid="confirm-whatsapp-button"
                      className="flex-[2] bg-[#25D366] text-white font-display text-lg uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      Kirim via WhatsApp
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
