import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { waGeneral } from '../utils/whatsapp';

/** Phones: sticky bottom bar (Call + WhatsApp). Desktop: floating WhatsApp button. */
export default function FloatingActions() {
  return (
    <div className="fa">
      <a className="fa__call" href={BUSINESS.phoneTel}>
        <Phone size={18} /> Call
      </a>
      <a className="fa__wa" href={waGeneral()} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={20} /> Order on WhatsApp
      </a>
    </div>
  );
}
