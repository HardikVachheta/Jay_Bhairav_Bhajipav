import { Flame } from 'lucide-react';
import { MENU } from '../data/menuData';
import MenuCard from './MenuCard';
import Reveal from './Reveal';

export default function Specials() {
  const specials = MENU.filter((i) => i.signature && !i.onRequest).slice(0, 6);
  return (
    <section className="section section--tint" id="specials">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">
            <Flame size={14} /> House Signatures
          </span>
          <h2>Bhairav Specials</h2>
          <p className="gu">ભૈરવ સ્પેશિયલ</p>
        </Reveal>
        <div className="grid">
          {specials.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
