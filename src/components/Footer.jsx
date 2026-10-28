import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { waGeneral } from '../utils/whatsapp';
import { scrollToId } from './Header';

const LINKS = [
  ['specials', 'Specials'],
  ['menu', 'Menu'],
  ['pricelist', 'Price List'],
  ['catering', 'Catering'],
  ['reviews', 'Reviews'],
  ['location', 'Location'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__logo" aria-hidden="true">🍛</span>
            <span className="brand__name">{BUSINESS.name}</span>
          </div>
          <p className="gu gu--light">{BUSINESS.gu}</p>
          <p className="footer__story">
            A Chandlodiya favourite for live bhajipav, crispy dosas and sizzling Indo-Chinese, cooked fresh with
            Amul butter and served with a lot of heart. Jain and Swaminarayan options always available.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer__links">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <button onClick={() => scrollToId(id)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="footer__addr">{BUSINESS.address}</p>
          <p className="footer__addr">{BUSINESS.hours.label}</p>
          <div className="footer__cta">
            <a className="btn btn--ghost-light btn--sm" href={BUSINESS.phoneTel}>
              <Phone size={16} /> {BUSINESS.phoneDisplay}
            </a>
            <a className="btn btn--wa btn--sm" href={waGeneral()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bar">
        <span>
          © {new Date().getFullYear()} {BUSINESS.name}. Proprietor: {BUSINESS.proprietor}. All rights reserved.
        </span>
        <span>Website crafted with care for the Jay Bhairav family.</span>
      </div>
    </footer>
  );
}
