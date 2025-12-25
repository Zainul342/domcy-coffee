export const createWhatsAppLink = (message: string) => {
    const phoneNumber = '6281234567890'; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const RESERVATION_MESSAGE = "Halo Domcy, saya ingin melakukan reservasi meja untuk...";
export const ORDER_MESSAGE = "Halo Domcy, saya ingin memesan menu...";
