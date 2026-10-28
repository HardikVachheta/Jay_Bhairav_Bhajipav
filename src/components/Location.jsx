import { useState } from 'react';
import { Check, Clock, MapPin, Navigation, Phone, Share2 } from 'lucide-react';
import { BUSINESS, MAP_DIRECTIONS, MAP_EMBED } from '../data/business';
import { getOpenStatus } from '../utils/format';

export default function Location() {
  const [shared, setShared] = useState(false);
  const status = getOpenStatus(BUSINESS.hours);

  const share = async () => {
    const data = {
      title: BUSINESS.name,
      text: `${BUSINESS.name}, ${BUSINESS.address}. Call ${BUSINESS.phoneDisplay}`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(`${data.text}\n${data.url}`);
        setShared(true);
        setTimeout(() => setShared(false), 2200);
      }
    } catch {
      /* share dismissed by the user */
    }
  };

  return (
    <section className="section" id="location">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Find us</span>
          <h2>Location &amp; Timings</h2>
          <p className="gu">સરનામું અને સમય</p>
        </div>

        <div className="loc">
          <div className="loc__info">
            <div className="loc__row">
              <MapPin size={20} />
              <div>
                <b>Address</b>
                <p>{BUSINESS.address}</p>
              </div>
            </div>
            <div className="loc__row">
              <Clock size={20} />
              <div>
                <b>Opening hours</b>
                <p>{BUSINESS.hours.label}</p>
                <span className={`chip ${status.isOpen ? 'chip--open' : 'chip--closed'}`}>{status.text}</span>
              </div>
            </div>
            <div className="loc__row">
              <Phone size={20} />
              <div>
                <b>Call us</b>
                <p>{BUSINESS.phoneDisplay}</p>
              </div>
            </div>

            <div className="loc__actions">
              <a className="btn btn--primary" href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer">
                <Navigation size={18} /> Get Directions
              </a>
              <a className="btn btn--ghost" href={BUSINESS.phoneTel}>
                <Phone size={18} /> Call
              </a>
              <button className="btn btn--ghost" onClick={share}>
                {shared ? <Check size={18} /> : <Share2 size={18} />} {shared ? 'Copied' : 'Share'}
              </button>
            </div>
          </div>

          <div className="loc__map">
            <iframe
              title="Map of Jay Bhairav Bhajipav & Chinese Corner, Chandlodiya, Ahmedabad"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
