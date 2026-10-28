import { Search, X } from 'lucide-react';
import { CATEGORIES, DIET_FILTERS } from '../data/menuData';

export default function FilterBar({ category, setCategory, diet, setDiet, query, setQuery }) {
  return (
    <div className="filters">
      <div className="search">
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search the menu, e.g. "Cheese" or "Manchurian"'
          aria-label="Search the menu"
        />
        {query && (
          <button className="search__clear" onClick={() => setQuery('')} aria-label="Clear search">
            <X size={16} />
          </button>
        )}
      </div>

      <div className="tabs" role="tablist" aria-label="Cuisine">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={category === c.id}
            className={`tab ${category === c.id ? 'is-active' : ''}`}
            onClick={() => setCategory(c.id)}
          >
            <span aria-hidden="true">{c.emoji}</span> {c.label}
          </button>
        ))}
      </div>

      <div className="diet" role="group" aria-label="Dietary preference">
        {DIET_FILTERS.map((d) => (
          <button
            key={d.id}
            className={`diet__pill ${diet === d.id ? 'is-active' : ''}`}
            aria-pressed={diet === d.id}
            onClick={() => setDiet(d.id)}
          >
            <span className="veg-dot veg-dot--sm" aria-hidden="true"><i /></span>
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}
