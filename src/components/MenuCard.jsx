import { Flame, MessageCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { rupee } from '../utils/format';
import { waPriceEnquiry } from '../utils/whatsapp';
import FoodImage from './FoodImage';

function VegDot() {
  return (
    <span className="veg-dot" title="Vegetarian" aria-label="Vegetarian">
      <i />
    </span>
  );
}

export default function MenuCard({ item, index = 0 }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 220, damping: 20 });

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      layout
      className="card-wrap"
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <motion.div
        className="card"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div className="card__media">
          <FoodImage imgKey={item.img} alt={item.en} />
          <span className="steam" aria-hidden="true" />
          <span className="steam" aria-hidden="true" />
          <span className="steam" aria-hidden="true" />
          <div className="card__badges">
            {item.signature && (
              <span className="badge badge--sig">
                <Flame size={12} /> Signature
              </span>
            )}
            {item.jain && <span className="badge badge--jain">Jain</span>}
            {item.swami && <span className="badge badge--swami">Swaminarayan</span>}
          </div>
        </div>

        <div className="card__body">
          <div className="card__title">
            <VegDot />
            <div>
              <h3>{item.en}</h3>
              <p className="gu">{item.gu}</p>
            </div>
          </div>
          <p className="card__desc">{item.desc}</p>

          <div className={`prices ${item.variants.length === 1 ? 'prices--one' : ''}`}>
            {item.onRequest ? (
              <>
                <span className="prices__ask">Price on request</span>
                <a
                  className="btn btn--wa btn--sm"
                  href={waPriceEnquiry(item.en)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} /> Ask Price
                </a>
              </>
            ) : (
              item.variants.map((v, i) => (
                <span key={v.label} className={`price-chip ${i === 1 ? 'price-chip--hi' : ''}`}>
                  <em>{v.label === 'Regular' ? 'Price' : v.label}</em>
                  <b>{rupee(v.price)}</b>
                </span>
              ))
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
