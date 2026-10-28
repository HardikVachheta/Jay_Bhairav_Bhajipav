import { useState } from 'react';
import FilterBar from './FilterBar';
import MenuGrid from './MenuGrid';
import Reveal from './Reveal';

export default function MenuSection() {
  const [category, setCategory] = useState('all');
  const [diet, setDiet] = useState('veg');
  const [query, setQuery] = useState('');

  const reset = () => {
    setCategory('all');
    setDiet('veg');
    setQuery('');
  };

  return (
    <section className="section" id="menu">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">100% Vegetarian</span>
          <h2>Our Menu</h2>
          <p className="gu">અમારું મેનુ</p>
          <p className="muted">Oil and Butter prices are shown on every dish. Everything is freshly made to order.</p>
        </Reveal>
        <FilterBar
          category={category}
          setCategory={setCategory}
          diet={diet}
          setDiet={setDiet}
          query={query}
          setQuery={setQuery}
        />
        <MenuGrid category={category} diet={diet} query={query} onReset={reset} />
      </div>
    </section>
  );
}
