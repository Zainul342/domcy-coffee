export const createWhatsAppLink = (message: string) => {
  const phoneNumber = '6282116898236'; // Domcy Official
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const RESERVATION_MESSAGE = 'Halo Domcy, saya ingin melakukan reservasi meja untuk...';
export const ORDER_MESSAGE = 'Halo Domcy, saya ingin memesan menu...';
