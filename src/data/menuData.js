const OB = (o, b) => [
  { label: 'Oil', price: o },
  { label: 'Butter', price: b },
];
const ONE = (p, label = 'Regular') => [{ label, price: p }];

export const CATEGORIES = [
  { id: 'all', label: 'All', gu: 'બધું', emoji: '🍽️' },
  { id: 'bhajipav', label: 'Bhajipav & Pulav', gu: 'ભાજીપાંઉ & પુલાવ', emoji: '🍛' },
  { id: 'south', label: 'South Indian', gu: 'સાઉથ ઇન્ડિયન', emoji: '🥞' },
  { id: 'chinese', label: 'Indo-Chinese & Rice', gu: 'ચાઈનીઝ', emoji: '🍜' },
  { id: 'snacks', label: 'Sandwiches & Pizza', gu: 'સેન્ડવીચ & પિઝા', emoji: '🥪' },
];

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=70`;

export const IMAGES = {
  pavbhaji: u('photo-1606491956689-2ea866880c84'),
  pulav: u('photo-1603133872878-684f208fb84b'),
  dosa: u('photo-1668236543090-82eba5ee5976'),
  uttapam: u('photo-1668236543090-82eba5ee5976'),
  manchurian: u('photo-1585032226651-759b368d7246'),
  noodles: u('photo-1585032226651-759b368d7246'),
  rice: u('photo-1603133872878-684f208fb84b'),
  bhel: u('photo-1585032226651-759b368d7246'),
  paneer: u('photo-1585032226651-759b368d7246'),
  sandwich: u('photo-1528735602780-2552fd46c7af'),
  pizza: u('photo-1513104890138-7c749659a591'),
  addon: u('photo-1606491956689-2ea866880c84'),
};

export const FALLBACK = {
  pavbhaji: { emoji: '🍛', from: '#B91C1C', to: '#F59E0B' },
  pulav: { emoji: '🍚', from: '#D97706', to: '#FCD34D' },
  dosa: { emoji: '🥞', from: '#B45309', to: '#FBBF24' },
  uttapam: { emoji: '🥞', from: '#92400E', to: '#F59E0B' },
  manchurian: { emoji: '🥡', from: '#7F1D1D', to: '#DC2626' },
  noodles: { emoji: '🍜', from: '#B91C1C', to: '#FB923C' },
  rice: { emoji: '🍚', from: '#9A3412', to: '#FDBA74' },
  bhel: { emoji: '🥗', from: '#DC2626', to: '#FCD34D' },
  paneer: { emoji: '🧀', from: '#C2410C', to: '#FDE68A' },
  sandwich: { emoji: '🥪', from: '#CA8A04', to: '#FDE047' },
  pizza: { emoji: '🍕', from: '#B91C1C', to: '#FBBF24' },
  addon: { emoji: '🥄', from: '#A16207', to: '#FDE68A' },
};

/**
 * Item shape:
 * id, cat, en, gu, desc, img, variants[{label, price}], jain?, swami?, signature?, onRequest?
 * `onRequest` items have no listed price: they open a WhatsApp enquiry instead of adding to the plate.
 */
export const MENU = [
  // ---------- Bhajipav & Pulav ----------
  { id: 'bp-regular', cat: 'bhajipav', en: 'Regular Bhajipav', gu: 'રેગ્યુલર ભાજીપાંઉ', img: 'pavbhaji', desc: 'Live-cooked bhaji with toasted pav, onion and lemon.', variants: OB(90, 130) },
  { id: 'bp-special', cat: 'bhajipav', en: 'Special Bhajipav', gu: 'સ્પેશિયલ ભાજીપાંઉ', img: 'pavbhaji', desc: 'Loaded bhaji with extra butter and masala.', variants: OB(160, 180) },
  { id: 'bp-jain', cat: 'bhajipav', en: 'Jain Bhajipav', gu: 'જૈન ભાજીપાંઉ', img: 'pavbhaji', desc: 'Prepared without onion, garlic and root vegetables.', variants: OB(140, 160), jain: true },
  { id: 'bp-swami', cat: 'bhajipav', en: 'Swaminarayan Bhajipav', gu: 'સ્વામિનારાયણ ભાજીપાંઉ', img: 'pavbhaji', desc: 'Swaminarayan-friendly, no onion or garlic.', variants: OB(120, 140), swami: true },
  { id: 'bp-cheese', cat: 'bhajipav', en: 'Cheese Bhajipav', gu: 'ચીઝ ભાજીપાંઉ', img: 'pavbhaji', desc: 'Topped with a generous blanket of melted cheese.', variants: OB(140, 160) },
  { id: 'bp-bhairav', cat: 'bhajipav', en: 'Special Bhairav Bhajipav', gu: 'સ્પેશિયલ ભૈરવ ભાજીપાંઉ', img: 'pavbhaji', desc: 'The house signature, our richest and most loaded plate.', variants: OB(200, 220), signature: true },
  { id: 'bp-boil', cat: 'bhajipav', en: 'Boil Bhajipav', gu: 'બોઇલ ભાજીપાંઉ', img: 'pavbhaji', desc: 'Lightly cooked, boiled-style bhaji with soft pav.', variants: OB(140, 160) },
  { id: 'bp-khali', cat: 'bhajipav', en: 'Khali Bhaji', gu: 'ખાલી ભાજી', img: 'pavbhaji', desc: 'Just the bhaji, served hot.', variants: OB(80, 100) },
  { id: 'bp-masalapav', cat: 'bhajipav', en: 'Masala Pav', gu: 'મસાલા પાંઉ', img: 'pavbhaji', desc: 'Pav tossed in spicy bhaji masala.', variants: OB(90, 120) },
  { id: 'bp-chatni', cat: 'bhajipav', en: 'Lasan ni Chatni', gu: 'લસણ ની ચટણી', img: 'addon', desc: 'Fiery garlic chutney, made fresh.', variants: OB(50, 80) },

  { id: 'pu-regular', cat: 'bhajipav', en: 'Regular Pulav', gu: 'રેગ્યુલર પુલાવ', img: 'pulav', desc: 'Fragrant vegetable pulav tossed in bhaji masala.', variants: OB(100, 130) },
  { id: 'pu-jain', cat: 'bhajipav', en: 'Jain Pulav', gu: 'જૈન પુલાવ', img: 'pulav', desc: 'Jain-style pulav, no onion or garlic.', variants: OB(140, 160), jain: true },
  { id: 'pu-swami', cat: 'bhajipav', en: 'Swaminarayan Pulav', gu: 'સ્વામિનારાયણ પુલાવ', img: 'pulav', desc: 'Swaminarayan-friendly pulav.', variants: OB(110, 130), swami: true },
  { id: 'pu-cheese', cat: 'bhajipav', en: 'Cheese Pulav', gu: 'ચીઝ પુલાવ', img: 'pulav', desc: 'Pulav finished with melted cheese.', variants: OB(140, 160) },
  { id: 'pu-bhairav', cat: 'bhajipav', en: 'Special Bhairav Pulav', gu: 'સ્પેશિયલ ભૈરવ પુલાવ', img: 'pulav', desc: 'Our signature pulav, loaded and buttery.', variants: OB(200, 220), signature: true },

  { id: 'ad-chaash', cat: 'bhajipav', en: 'Masala Chaash', gu: 'મસાલા છાશ', img: 'addon', desc: 'Spiced buttermilk to cool the heat.', variants: ONE(20, 'Glass') },
  { id: 'ad-papad', cat: 'bhajipav', en: 'Papad', gu: 'પાપડ', img: 'addon', desc: 'Crisp papad, roasted or fried.', variants: [{ label: 'Roasted', price: 10 }, { label: 'Fry', price: 20 }] },
  { id: 'ad-salad', cat: 'bhajipav', en: 'Tomato Salad', gu: 'ટામેટા સલાડ', img: 'addon', desc: 'Fresh tomato salad on the side.', variants: ONE(40, 'Plate') },

  // ---------- Dosa & Uttapam ----------
  { id: 'do-masala', cat: 'south', en: 'Masala Dosa', gu: 'મસાલા ઢોસા', img: 'dosa', desc: 'Crispy golden dosa with potato masala, sambar and chutney.', variants: OB(100, 130) },
  { id: 'do-paper', cat: 'south', en: 'Paper Masala Dosa', gu: 'પેપર મસાલા ઢોસા', img: 'dosa', desc: 'Extra thin, extra crisp, rolled long.', variants: OB(140, 160) },
  { id: 'do-maisoor', cat: 'south', en: 'Maisoor Masala Dosa', gu: 'મૈસૂર મસાલા ઢોસા', img: 'dosa', desc: 'Spread with red chutney, filled with masala.', variants: OB(140, 170) },
  { id: 'do-rava', cat: 'south', en: 'Rava Masala Dosa', gu: 'રવા મસાલા ઢોસા', img: 'dosa', desc: 'Lacy, crunchy semolina dosa with masala.', variants: OB(180, 200) },
  { id: 'do-swami', cat: 'south', en: 'Swaminarayan Dosa', gu: 'સ્વામિનારાયણ ઢોસા', img: 'dosa', desc: 'Swaminarayan-friendly dosa.', variants: OB(120, 140), swami: true },
  { id: 'do-bhairav', cat: 'south', en: 'Bhairav Masala Dosa', gu: 'ભૈરવ મસાલા ઢોસા', img: 'dosa', desc: 'The house special dosa, loaded.', variants: OB(200, 230), signature: true },
  { id: 'do-spring', cat: 'south', en: 'Spring Dosa', gu: 'સ્પ્રિંગ ઢોસા', img: 'dosa', desc: 'Indo-Chinese style vegetable filling in a crisp dosa.', variants: OB(180, 190) },
  { id: 'do-cheese-sada', cat: 'south', en: 'Cheese Sada Dosa', gu: 'ચીઝ સાદા ઢોસા', img: 'dosa', desc: 'Plain dosa with cheese.', variants: [], onRequest: true },
  { id: 'do-cheese-masala', cat: 'south', en: 'Cheese Masala Dosa', gu: 'ચીઝ મસાલા ઢોસા', img: 'dosa', desc: 'Masala dosa with cheese.', variants: [], onRequest: true },
  { id: 'do-cheese-maisoor', cat: 'south', en: 'Cheese Maisoor Dosa', gu: 'ચીઝ મૈસૂર ઢોસા', img: 'dosa', desc: 'Maisoor dosa with cheese.', variants: [], onRequest: true },
  { id: 'ut-sada', cat: 'south', en: 'Sada Uttapam', gu: 'સાદા ઉત્તપમ', img: 'uttapam', desc: 'Soft, thick, classic uttapam.', variants: OB(90, 110) },
  { id: 'ut-mix', cat: 'south', en: 'Veg Mix Uttapam', gu: 'વેજ મિક્સ ઉત્તપમ', img: 'uttapam', desc: 'Topped with mixed fresh vegetables.', variants: OB(130, 150) },
  { id: 'ut-bhairav', cat: 'south', en: 'Bhairav Special Uttapam', gu: 'ભૈરવ સ્પેશિયલ ઉત્તપમ', img: 'uttapam', desc: 'Our signature loaded uttapam.', variants: OB(180, 200), signature: true },

  // ---------- Indo-Chinese & Rice ----------
  { id: 'ch-manch', cat: 'chinese', en: 'Veg Manchurian', gu: 'મંચુરિયન', img: 'manchurian', desc: 'Crisp vegetable balls in a fiery Indo-Chinese sauce.', variants: [{ label: 'Dry', price: 100 }, { label: 'Gravy', price: 120 }] },
  { id: 'ch-manch-jain', cat: 'chinese', en: 'Jain Manchurian Dry', gu: 'જૈન મંચુરિયન ડ્રાય', img: 'manchurian', desc: 'Jain-style dry manchurian.', variants: ONE(120, 'Dry'), jain: true },
  { id: 'ch-manch-noodles', cat: 'chinese', en: 'Manchurian Noodles', gu: 'મંચુરિયન નૂડલ્સ', img: 'noodles', desc: 'Wok-tossed noodles with manchurian.', variants: ONE(120) },
  { id: 'ch-hakka', cat: 'chinese', en: 'Hakka Noodles', gu: 'હક્કા નૂડલ્સ', img: 'noodles', desc: 'Classic wok-tossed hakka noodles.', variants: ONE(100) },
  { id: 'ch-manch-rice', cat: 'chinese', en: 'Manchurian Rice', gu: 'મંચુરિયન રાઈસ', img: 'rice', desc: 'Fried rice with manchurian.', variants: ONE(130) },
  { id: 'ch-triple', cat: 'chinese', en: 'Triple Fry Rice', gu: 'ટ્રિપલ ફ્રાય રાઈસ', img: 'rice', desc: 'Rice, noodles and gravy in one sizzling plate.', variants: ONE(180), signature: true },
  { id: 'ch-bhel', cat: 'chinese', en: 'Chinese Bhel', gu: 'ચાઈનીઝ ભેળ', img: 'bhel', desc: 'Crunchy fried noodles tossed in tangy sauces.', variants: ONE(140) },
  { id: 'ch-bhel-swami', cat: 'chinese', en: 'Swaminarayan Chinese Bhel', gu: 'સ્વામિનારાયણ ચાઈનીઝ ભેળ', img: 'bhel', desc: 'Swaminarayan-friendly Chinese bhel.', variants: ONE(150), swami: true },
  { id: 'ch-paneer-chilli', cat: 'chinese', en: 'Paneer Chilli', gu: 'પનીર ચીલી', img: 'paneer', desc: 'Paneer cubes with peppers in a spicy chilli sauce.', variants: [{ label: 'Dry', price: 140 }, { label: 'Gravy', price: 160 }] },
  { id: 'ch-paneer-rice', cat: 'chinese', en: 'Paneer Manchurian Rice', gu: 'પનીર મંચુરિયન રાઈસ', img: 'rice', desc: 'Fried rice with paneer manchurian.', variants: ONE(160) },

  // ---------- Sandwiches, Pizza & Slices ----------
  { id: 'sn-veg', cat: 'snacks', en: 'Vegetable Sandwich', gu: 'વેજિટેબલ સેન્ડવીચ', img: 'sandwich', desc: 'Fresh vegetables, green chutney and butter.', variants: [{ label: 'Regular', price: 50 }, { label: 'Grilled', price: 80 }] },
  { id: 'sn-alu', cat: 'snacks', en: 'Alu Mutter Sandwich', gu: 'આલુ મટર સેન્ડવીચ', img: 'sandwich', desc: 'Spiced potato and green peas filling.', variants: [{ label: 'Regular', price: 50 }, { label: 'Grilled', price: 80 }] },
  { id: 'sn-cheese', cat: 'snacks', en: 'Cheese Sandwich', gu: 'ચીઝ સેન્ડવીચ', img: 'sandwich', desc: 'Loaded with cheese, grilled until it stretches.', variants: [{ label: 'Regular', price: 80 }, { label: 'Grilled', price: 100 }] },
  { id: 'sn-bhairav', cat: 'snacks', en: 'Special Jay Bhairav Sandwich', gu: 'સ્પેશિયલ જય ભૈરવ સેન્ડવીચ', img: 'sandwich', desc: 'Our signature grilled sandwich, stacked high.', variants: ONE(180, 'Grilled'), signature: true },
  { id: 'pz-italian', cat: 'snacks', en: 'Italian Pizza', gu: 'ઇટાલિયન પિઝા', img: 'pizza', desc: 'Classic veg pizza with cheese.', variants: ONE(100) },
  { id: 'pz-jain', cat: 'snacks', en: 'Jain Pizza', gu: 'જૈન પિઝા', img: 'pizza', desc: 'Jain-friendly pizza, no onion or garlic.', variants: ONE(120), jain: true },
  { id: 'pz-onion', cat: 'snacks', en: 'Onion Pizza', gu: 'ઓનિયન પિઝા', img: 'pizza', desc: 'Topped with crunchy onion and cheese.', variants: ONE(120) },
  { id: 'pz-double', cat: 'snacks', en: 'Double Cheese Pizza', gu: 'ડબલ ચીઝ પિઝા', img: 'pizza', desc: 'Twice the cheese, twice the pull.', variants: ONE(160) },
  { id: 'pz-bhairav', cat: 'snacks', en: 'Bhairav Special Pizza', gu: 'ભૈરવ સ્પેશિયલ પિઝા', img: 'pizza', desc: 'The house special pizza, fully loaded.', variants: ONE(200), signature: true },
];

export const DIET_FILTERS = [
  { id: 'veg', label: 'All Veg' },
  { id: 'jain', label: 'Pure Jain Available' },
  { id: 'swami', label: 'Swaminarayan Friendly' },
];
