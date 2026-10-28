import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { waGeneral } from '../utils/whatsapp';

const NAV = [
  { id: 'specials', label: 'Specials' },
  { id: 'menu', label: 'Menu' },
  { id: 'pricelist', label: 'Price List' },
  { id: 'catering', label: 'Catering' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  const go = (id) => {
    setDrawer(false);
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <a
            href="#top"
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label={BUSINESS.name}
          >
            <span className="brand__logo" aria-hidden="true">🍛</span>
            <span className="brand__text">
              <span className="brand__name">{BUSINESS.shortName}</span>
              <span className="brand__sub">Fresh • Sizzling • 100% Amul Butter</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <button key={n.id} className="nav__link" onClick={() => go(n.id)}>
                {n.label}
              </button>
            ))}
          </nav>

          <div className="header__actions">
            <a href={BUSINESS.phoneTel} className="pill pill--ghost hide-sm" aria-label="Call now">
              <Phone size={16} /> Direct Call
            </a>
            <a href={waGeneral()} target="_blank" rel="noopener noreferrer" className="pill pill--wa hide-sm">
              <MessageCircle size={16} /> WhatsApp Order
            </a>
            <button className="icon-btn burger" onClick={() => setDrawer(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
            />
            <motion.aside
              className="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              aria-label="Navigation"
            >
              <div className="drawer__head">
                <span className="brand__name">{BUSINESS.shortName}</span>
                <button className="icon-btn" onClick={() => setDrawer(false)} aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>
              <div className="drawer__links">
                {NAV.map((n) => (
                  <button key={n.id} className="drawer__link" onClick={() => go(n.id)}>
                    {n.label}
                  </button>
                ))}
              </div>
              <div className="drawer__cta">
                <a href={BUSINESS.phoneTel} className="btn btn--ghost btn--block">
                  <Phone size={18} /> Direct Call
                </a>
                <a href={waGeneral()} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--block">
                  <MessageCircle size={18} /> WhatsApp Order
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
