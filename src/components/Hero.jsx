import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChefHat, Clock, MessageCircle, Phone, Sparkles, UtensilsCrossed } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { FALLBACK, IMAGES } from '../data/menuData';
import { getOpenStatus } from '../utils/format';
import { waGeneral } from '../utils/whatsapp';
import { scrollToId } from './Header';

const SLIDES = [
  { key: 'pavbhaji', name: 'Live Pav Bhaji', gu: 'લાઈવ ભાજીપાંઉ' },
  { key: 'dosa', name: 'Crispy Dosa', gu: 'ક્રિસ્પી ઢોસા' },
  { key: 'manchurian', name: 'Sizzling Indo-Chinese', gu: 'ચાઈનીઝ' },
  { key: 'sandwich', name: 'Grilled Sandwich', gu: 'ગ્રિલ્ડ સેન્ડવીચ' },
  { key: 'pizza', name: 'Cheesy Pizza', gu: 'ચીઝી પિઝા' },
];
const SLIDE_MS = 5500;

const WORDS = [
  ["Ahmedabad's"], ['Favorite'], ['Pav', 1], ['Bhaji,', 1], ['Crispy'], ['Dosas', 1], ['&'], ['Spicy'], ['Chinese.', 1],
];

const TRUST = [
  { icon: '🧄', text: '100% Pure Jain & Swaminarayan Options Available' },
  { icon: '🧈', text: 'Pure Amul Butter Delicacies' },
  { icon: '⚡', text: 'Super Fast Live Preparation' },
  { icon: '🥘', text: 'Bulk Catering Orders Undertaken' },
];

const SPICES = ['🌶️', '🧈', '🧅', '🍅', '✨', '🌿', '🧄'];
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  e: SPICES[i % SPICES.length],
  left: (i * 37 + 8) % 100,
  delay: -((i * 1.9) % 15),
  dur: 10 + ((i * 3) % 8),
  size: 14 + ((i * 5) % 16),
}));

const big = (url) => url.replace('w=700', 'w=1600');

function Slide({ slide }) {
  const [failed, setFailed] = useState(false);
  const fb = FALLBACK[slide.key];
  return (
    <motion.div
      className="hero2__slide"
      style={{ background: `linear-gradient(135deg, ${fb.from}, ${fb.to})` }}
      initial={{ opacity: 0, scale: 1.18 }}
      animate={{ opacity: 1, scale: 1.02, transition: { opacity: { duration: 1.3 }, scale: { duration: 8, ease: 'linear' } } }}
      exit={{ opacity: 0, transition: { duration: 1.3 } }}
    >
      {!failed && <img src={big(IMAGES[slide.key])} alt="" onError={() => setFailed(true)} />}
    </motion.div>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const status = getOpenStatus(BUSINESS.hours);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  useEffect(() => {
    if (reduce) return undefined;
    const t = setTimeout(() => setIdx((i) => (i + 1) % SLIDES.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [idx, reduce]);

  const slide = SLIDES[idx];

  return (
    <section className="hero2" id="top" ref={ref}>
      <motion.div className="hero2__media" style={{ y }} aria-hidden="true">
        <AnimatePresence initial={false}>
          <Slide key={slide.key} slide={slide} />
        </AnimatePresence>
      </motion.div>
      <div className="hero2__shade" aria-hidden="true" />

      <div className="hero2__fx" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="spice"
            style={{ left: `${p.left}%`, fontSize: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }}
          >
            {p.e}
          </span>
        ))}
        <span className="steam-big steam-big--a" />
        <span className="steam-big steam-big--b" />
        <span className="steam-big steam-big--c" />
      </div>

      <div className="container hero2__inner">
        <div className="hero2__copy">
          <motion.div
            className="hero2__chips"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="chip chip--glass">
              <Sparkles size={14} /> Live Cooking
            </span>
            <span className={`chip ${status.isOpen ? 'chip--open' : 'chip--closed'}`}>
              <Clock size={14} /> {status.text}
            </span>
          </motion.div>

          <motion.p
            className="hero2__gu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {BUSINESS.gu}
          </motion.p>

          <h1 className="hero2__title" aria-label="Ahmedabad's Favorite Pav Bhaji, Crispy Dosas & Sizzling Chinese.">
            {WORDS.map(([w, hl], i) => (
              <span className="word" key={i} aria-hidden="true">
                <motion.span
                  className={hl ? 'hl' : ''}
                  initial={{ y: '115%', rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {w}
                </motion.span>
                {' '}
              </span>
            ))}
          </h1>

          <motion.p
            className="hero2__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Freshly prepared with authentic spices and rich Amul butter. Order live takeaway or book catering for
            your special events.
          </motion.p>

          <motion.div
            className="hero2__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
          >
            <button className="btn btn--primary btn--lg" onClick={() => scrollToId('menu')}>
              <UtensilsCrossed size={18} /> View Full Menu
            </button>
            <a className="btn btn--wa btn--lg" href={waGeneral()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> Order on WhatsApp
            </a>
            <a className="btn btn--ghost-light btn--lg hero2__call" href={BUSINESS.phoneTel}>
              <Phone size={18} /> Call
            </a>
          </motion.div>

          <div className="hero2__now">
            <div className="hero2__nowtext">
              <small>Now serving</small>
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <b>{slide.name}</b> <span className="gu--light">{slide.gu}</span>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="hero2__dots" role="tablist" aria-label="Featured dishes">
              {SLIDES.map((s, i) => (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={s.name}
                  className={`hero2__dot ${i === idx ? 'is-active' : ''}`}
                  onClick={() => setIdx(i)}
                >
                  <i />
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="hero2__badge"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, type: 'spring', damping: 14 }}
        >
          <svg viewBox="0 0 200 200" className="spin">
            <defs>
              <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#circ" textLength="480" lengthAdjust="spacing">
                100% AMUL BUTTER • LIVE COOKING • FRESH & SIZZLING •
              </textPath>
            </text>
          </svg>
          <span className="hero2__badgeemoji">🧈</span>
        </motion.div>
      </div>

      <div className="container">
        <ul className="hero2__trust">
          {TRUST.map((t, i) => (
            <motion.li
              key={t.text}
              className="hero2__trustitem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <span aria-hidden="true">{t.icon}</span>
              <span>{t.text}</span>
            </motion.li>
          ))}
        </ul>
        <p className="hero2__owner">
          <ChefHat size={15} /> Proprietor: {BUSINESS.proprietor}
        </p>
      </div>
    </section>
  );
}
