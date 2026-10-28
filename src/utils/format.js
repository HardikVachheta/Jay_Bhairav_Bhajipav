export const rupee = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

export const lineKey = (itemId, variantLabel) => `${itemId}::${variantLabel}`;

/** Open / closed status in IST, regardless of the visitor's timezone. */
export function getOpenStatus(hours, now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const h = Number(parts.find((p) => p.type === 'hour').value) % 24;
  const m = Number(parts.find((p) => p.type === 'minute').value);
  const mins = h * 60 + m;
  const open = hours.open.h * 60 + hours.open.m;
  const close = hours.close.h * 60 + hours.close.m;
  const isOpen = mins >= open && mins < close;
  return {
    isOpen,
    text: isOpen ? 'Open now' : 'Closed now, opens 4:30 PM',
  };
}

export function matchesQuery(item, q) {
  if (!q) return true;
  const hay = `${item.en} ${item.gu} ${item.desc} ${item.variants.map((v) => v.label).join(' ')}`.toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((w) => hay.includes(w));
}
