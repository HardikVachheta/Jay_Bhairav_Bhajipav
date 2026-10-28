export const BUSINESS = {
  name: 'Jay Bhairav Bhajipav & Chinese Corner',
  shortName: 'Jay Bhairav',
  gu: 'જય ભૈરવ ભાજીપાંઉ એન્ડ ચાઈનીઝ કોર્નર',
  proprietor: 'A. S. Rajput',
  phoneDisplay: '+91 94290 63554',
  phoneTel: 'tel:+919429063554',
  whatsappNumber: '919429063554',
  address:
    'Harivila Building, J.K. Park, Near Nilkanth Mahadev Mandir, Gota Road, Chandlodiya, Ahmedabad, Gujarat - 382481',
  hours: { open: { h: 16, m: 30 }, close: { h: 23, m: 30 }, label: 'Every day, 4:30 PM to 11:30 PM' },
  specialities: ['Live Bhajipav', 'South Indian', 'Indo-Chinese', 'Sandwiches', 'Pulav', 'Pizza', 'Catering'],
};

const q = encodeURIComponent(
  'Harivila Building, J.K. Park, Near Nilkanth Mahadev Mandir, Gota Road, Chandlodiya, Ahmedabad 382481'
);

export const MAP_EMBED = `https://www.google.com/maps?q=${q}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
export const MAP_SEARCH = `https://www.google.com/maps/search/?api=1&query=${q}`;
