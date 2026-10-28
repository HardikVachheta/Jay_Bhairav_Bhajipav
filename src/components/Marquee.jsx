const ITEMS = [
  '🍛 Live Pav Bhaji',
  '🥞 Crispy Masala Dosa',
  '🍜 Hakka Noodles',
  '🧈 Amul Butter Special',
  '🥪 Grilled Sandwich',
  '🍕 Cheesy Pizza',
  '🍚 Bhairav Pulav',
  '🥡 Paneer Chilli',
  '🥘 Wedding Catering',
];

export default function Marquee() {
  const list = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {list.map((t, i) => (
          <span className="marquee__item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
