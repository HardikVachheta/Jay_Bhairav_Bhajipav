import { motion } from 'framer-motion';
import { MENU } from '../data/menuData';
import { rupee } from '../utils/format';
import Reveal from './Reveal';

const SECTIONS = [
  { id: 'pl-bhaji', title: 'Bhajipav', emoji: '🍛', gu: 'ભાજીપાંઉ', prefix: 'bp-', cols: ['Oil', 'Butter'] },
  { id: 'pl-pulav', title: 'Pulav', emoji: '🍚', gu: 'પુલાવ', prefix: 'pu-', cols: ['Oil', 'Butter'] },
  { id: 'pl-addon', title: 'Add-ons', emoji: '🥄', gu: 'એડ-ઓન', prefix: 'ad-', cols: ['Price'] },
  { id: 'pl-dosa', title: 'Dosa', emoji: '🥞', gu: 'ઢોસા', prefix: 'do-', cols: ['Oil', 'Butter'] },
  { id: 'pl-uttapam', title: 'Uttapam', emoji: '🫓', gu: 'ઉત્તપમ', prefix: 'ut-', cols: ['Oil', 'Butter'] },
  { id: 'pl-chinese', title: 'Indo-Chinese & Rice', emoji: '🍜', gu: 'ચાઈનીઝ', prefix: 'ch-', cols: ['Price'] },
  { id: 'pl-sandwich', title: 'Sandwiches', emoji: '🥪', gu: 'સેન્ડવીચ', prefix: 'sn-', cols: ['Regular', 'Grilled'] },
  { id: 'pl-pizza', title: 'Pizza', emoji: '🍕', gu: 'પિઝા', prefix: 'pz-', cols: ['Price'] },
];

const priceCell = (item) =>
  item.variants.map((v) => (
    <span className="opt" key={v.label}>
      {v.label !== 'Regular' && <i>{v.label}</i>}
      {rupee(v.price)}
    </span>
  ));

function jump(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Row({ item, cols }) {
  const named = cols[0] !== 'Price';
  return (
    <tr>
      <th scope="row">
        <span className="mt__name">{item.en}</span>
        {item.jain && <span className="tag tag--jain">Jain</span>}
        {item.swami && <span className="tag tag--swami">Swaminarayan</span>}
        {item.signature && <span className="tag tag--sig">★</span>}
        <small className="gu">{item.gu}</small>
      </th>
      {item.onRequest ? (
        <td className="num num--ask" colSpan={cols.length}>On request</td>
      ) : named ? (
        cols.map((c) => {
          const v = item.variants.find((x) => x.label === c);
          return (
            <td key={c} className="num">
              {v ? rupee(v.price) : <span className="dash">—</span>}
            </td>
          );
        })
      ) : (
        <td className="num num--text">{priceCell(item)}</td>
      )}
    </tr>
  );
}

export default function PriceList() {
  return (
    <section className="section pricelist" id="pricelist">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Menu Card</span>
          <h2>Complete Price List</h2>
          <p className="gu">સંપૂર્ણ ભાવ યાદી</p>
          <p className="muted">Every dish with its price in one place. Choose Oil or Butter when you order.</p>
        </Reveal>

        <motion.div
          className="board"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="board__top">
            <span className="board__title">
              {'🍛'} Jay Bhairav <em>Menu</em>
            </span>
            <span className="board__legend">All prices in ₹ · 100% Vegetarian</span>
          </div>

          <div className="jump" role="navigation" aria-label="Jump to a menu section">
            {SECTIONS.map((s) => (
              <button key={s.id} onClick={() => jump(s.id)}>
                <span aria-hidden="true">{s.emoji}</span> {s.title}
              </button>
            ))}
          </div>

          <div className="board__grid">
            {SECTIONS.map((s) => {
              const items = MENU.filter((i) => i.id.startsWith(s.prefix));
              return (
                <div className="tbl" id={s.id} key={s.id}>
                  <table className="mt">
                    <caption>
                      <span aria-hidden="true">{s.emoji}</span> {s.title} <small className="gu">{s.gu}</small>
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        {s.cols.map((c) => (
                          <th scope="col" className="num" key={c}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <Row key={item.id} item={item} cols={s.cols} />
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
