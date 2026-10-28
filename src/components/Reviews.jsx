import { ExternalLink, MessageCircle, Star } from 'lucide-react';
import { MAP_SEARCH } from '../data/business';
import { waLink } from '../utils/whatsapp';

export default function Reviews() {
  return (
    <section className="section section--tint" id="reviews">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">
            <Star size={14} /> Loved by the neighbourhood
          </span>
          <h2>Reviews</h2>
          <p className="gu">ગ્રાહકોનો અભિપ્રાય</p>
        </div>

        <div className="reviews">
          <div className="reviews__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={28} fill="currentColor" />
            ))}
          </div>
          <p className="reviews__text">
            Eaten with us before? Read what other guests say on Google, or leave your own review. It helps other
            food lovers around Gota and Chandlodiya find us.
          </p>
          <div className="reviews__cta">
            <a className="btn btn--primary" href={MAP_SEARCH} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} /> Read &amp; write reviews on Google
            </a>
            <a
              className="btn btn--wa"
              href={waLink('Hello Jay Bhairav! I would like to share some feedback.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Send feedback on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
