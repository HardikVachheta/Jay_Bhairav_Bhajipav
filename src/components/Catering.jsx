import { motion } from 'framer-motion';
import { MessageCircle, PartyPopper, Users } from 'lucide-react';
import { waCatering } from '../utils/whatsapp';

export default function Catering() {
  return (
    <section className="section" id="catering">
      <div className="container">
        <motion.div
          className="catering"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="catering__copy">
            <span className="eyebrow eyebrow--light">
              <Users size={14} /> Catering &amp; Bulk Orders
            </span>
            <h2>We Accept All Catering, Wedding, Party &amp; Corporate Orders</h2>
            <p className="gu gu--light">શુભ પ્રસંગે ઓર્ડર લેવામાં આવશે</p>
            <p>
              Live bhajipav, pulav, South Indian and Indo-Chinese counters for marriages, family functions, parties
              and office events. Tell us the date and guest count and we will take it from there.
            </p>
            <a className="btn btn--wa btn--lg" href={waCatering()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> Enquire for Catering on WhatsApp
            </a>
          </div>
          <div className="catering__art" aria-hidden="true">
            <PartyPopper size={72} />
            <span>🍛 🥞 🍜 🥪</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
