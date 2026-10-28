import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { CATEGORIES, MENU } from '../data/menuData';
import { matchesQuery } from '../utils/format';
import MenuCard from './MenuCard';

export function filterMenu({ category, diet, query }) {
  return MENU.filter((i) => {
    if (category !== 'all' && i.cat !== category) return false;
    if (diet === 'jain' && !i.jain) return false;
    if (diet === 'swami' && !i.swami) return false;
    return matchesQuery(i, query.trim());
  });
}

export default function MenuGrid({ category, diet, query, onReset }) {
  const items = filterMenu({ category, diet, query });

  if (items.length === 0) {
    return (
      <div className="empty">
        <Search size={28} />
        <p>No dishes match your search.</p>
        <button className="btn btn--ghost" onClick={onReset}>
          Reset filters
        </button>
      </div>
    );
  }

  const groups =
    category === 'all'
      ? CATEGORIES.filter((c) => c.id !== 'all')
          .map((c) => ({ ...c, items: items.filter((i) => i.cat === c.id) }))
          .filter((g) => g.items.length)
      : [{ id: category, items }];

  return (
    <div>
      {groups.map((g) => (
        <div key={g.id} className="group">
          {category === 'all' && (
            <h3 className="group__title">
              <span aria-hidden="true">{g.emoji}</span> {g.label} <small className="gu">{g.gu}</small>
            </h3>
          )}
          <div className="grid">
            <AnimatePresence mode="popLayout">
              {g.items.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}
