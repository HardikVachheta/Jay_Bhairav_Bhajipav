import { BUSINESS } from '../data/business';

export const waLink = (text) => `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const waGeneral = () => waLink('Hello Jay Bhairav! I would like to place an order.');

export const waCatering = () =>
  waLink(
    'Hello Jay Bhairav! I would like to enquire about catering.\nEvent type: \nDate: \nApprox. number of guests: \nLocation: '
  );

export const waPriceEnquiry = (itemName) =>
  waLink(`Hello Jay Bhairav! Please share the price and availability of ${itemName}.`);
