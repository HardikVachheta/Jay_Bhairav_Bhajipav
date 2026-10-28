import { useState } from 'react';
import { FALLBACK, IMAGES } from '../data/menuData';

/** Unsplash photo with a warm gradient + emoji fallback if the image fails to load. */
export default function FoodImage({ imgKey, alt, eager = false, small = false }) {
  const [failed, setFailed] = useState(false);
  const fb = FALLBACK[imgKey] || FALLBACK.pavbhaji;

  if (failed) {
    return (
      <div
        className={`food-fallback ${small ? 'food-fallback--small' : ''}`}
        style={{ background: `linear-gradient(135deg, ${fb.from}, ${fb.to})` }}
        role="img"
        aria-label={alt}
      >
        <span>{fb.emoji}</span>
      </div>
    );
  }

  return (
    <img
      className="food-img"
      src={IMAGES[imgKey]}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
