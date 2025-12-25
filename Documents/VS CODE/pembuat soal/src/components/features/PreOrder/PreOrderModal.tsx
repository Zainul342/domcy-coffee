import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { createWhatsAppLink } from '../../../utils/whatsapp';

export const PreOrderModal = () => {
    const { isCartOpen, closeCart, items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
    const [pickupTime, setPickupTime] = useState('');

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
    };

    const handleSendOrder = () => {
        if (!pickupTime) {
            alert('Please select a pickup time');
            return;
        }

        let message = `*NEW PRE-ORDER* 🚀\n\n`;
        message += `*Items:*\n`;
        items.forEach(item => {
            message += `- ${item.name} x${item.quantity} (${item.price})\n`;
        });
        message += `\n*Total Items:* ${totalItems}\n`;
        message += `*Total Price:* ${formatCurrency(totalPrice)}\n`;
        message += `*Pickup Time:* ${pickupTime}\n\n`;
        message += `Thank you!`;

        window.open(createWhatsAppLink(message), '_blank');
        closeCart();
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
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-domcy-green border-2 border-domcy-cream rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] z-[90] overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="p-6 bg-domcy-cream text-domcy-green flex justify-between items-center border-b-2 border-domcy-green">
                            <h2 className="font-display text-3xl uppercase tracking-wider flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6" /> Your Order
                            </h2>
                            <button onClick={closeCart} className="p-1 hover:bg-domcy-green/10 rounded-full transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto flex-1 text-domcy-cream">
                            {items.length === 0 ? (
                                <div className="text-center py-12 opacity-60">
                                    <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p className="font-sans text-xl">Your cart is empty.</p>
                                    <p className="text-sm">Go add some delicious items!</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center bg-domcy-black/20 p-4 rounded-lg border border-domcy-cream/10">
                                            <div className="flex-1">
                                                <h4 className="font-display text-xl leading-none mb-1">{item.name}</h4>
                                                <p className="font-sans text-sm opacity-70">{item.price}</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-2 bg-domcy-green border border-domcy-cream/30 rounded-full px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-1 hover:bg-white/10 rounded-full"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="font-sans font-bold w-4 text-center text-sm">{item.quantity}</span>
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
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 bg-domcy-black/30 border-t border-domcy-cream/20 space-y-4">
                                {/* Time Selector */}
                                <div>
                                    <label className="block font-sans text-sm text-domcy-cream/70 mb-2 flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> Pickup Time (Today)
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
                                        <p className="font-sans text-sm text-domcy-cream/60">Total Estimated</p>
                                        <p className="font-display text-3xl text-domcy-accent tracking-wider">
                                            {formatCurrency(totalPrice)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleSendOrder}
                                        className="bg-domcy-amber text-domcy-black font-display text-xl uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white hover:text-domcy-green transition-colors shadow-lg flex items-center gap-2"
                                    >
                                        Send Order
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
