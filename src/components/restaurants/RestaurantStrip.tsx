import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import RestaurantCard from './RestaurantCard';
import rectangle7 from '../../assets/Rectangle 7.png';
import rectangle8 from '../../assets/Rectangle 8.png';
import rectangle9 from '../../assets/Rectangle 9.png';

/* ----------  data  ---------- */
type Category = { label: string; key: string };

const categories: Category[] = [
  { label: 'Pizza & Fast food', key: 'pizza' },
  { label: 'Vegan', key: 'vegan' },
  { label: 'Sushi', key: 'sushi' },
  { label: 'Others', key: 'others' },
];

/* dummy data – replace images with your own */
const restaurantsByCategory: Record<string, typeof restaurants> = {
  pizza: [
    { name: 'Chef Burgers London', discount: '40% OFF', image: rectangle7 },
    { name: 'Pizza Corner', discount: '35% OFF', image: rectangle8 },
    { name: 'Slice & Dice', discount: '15% OFF', image: rectangle9 },
  ],
  vegan: [
    { name: 'Green Goddess', discount: '25% OFF', image: rectangle7 },
    { name: 'Plant Power', discount: '18% OFF', image: rectangle8 },
    { name: 'Veggie Vibes', discount: '30% OFF', image: rectangle9 },
  ],
  sushi: [
    { name: 'Sushi Zen', discount: '22% OFF', image: rectangle7 },
    { name: 'Tokyo Rolls', discount: '19% OFF', image: rectangle8 },
    { name: ' Sake & Sushi', discount: '27% OFF', image: rectangle9 },
  ],
  others: [
    { name: 'Grand Ai Cafe London', discount: '20% OFF', image: rectangle7 },
    { name: 'Butterbrot Cafe London', discount: '17% OFF', image: rectangle8 },
    { name: 'Midnight Diner', discount: '12% OFF', image: rectangle9 },
  ],
};

/* ----------  carousel rules  ---------- */
const responsive = {
  mobile: { breakpoint: { max: 767, min: 0 }, items: 2.2, slidesToSlide: 1, partialVisibilityGutter: 16 },
  desktop: { breakpoint: { max: 4000, min: 768 }, items: categories.length, slidesToSlide: categories.length },
};

/* ----------  arrows  ---------- */
const CustomLeftArrow = ({ onClick }: any) => (
  <button onClick={onClick} className="react-multicarousel-arrow react-multicarousel-arrow--left">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);
const CustomRightArrow = ({ onClick }: any) => (
  <button onClick={onClick} className="react-multicarousel-arrow react-multicarousel-arrow--right">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

/* ----------  tag button  ---------- */
const Tag = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition
      ${active ? 'bg-amber-400 text-white border-amber-400' : 'bg-transparent text-gray-700 border-transparent hover:border-amber-400 hover:bg-amber-400 hover:text-white'}`}
  >
    {label}
  </button>
);

/* ----------  main component  ---------- */
const DealRestaurantStrip: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(categories[0].key);
  const restaurants = restaurantsByCategory[activeKey];

  return (
    <>
      {/* ======  DEAL STRIP  ====== */}
      <section className="px-6 py-6 md:px-25 mt-10 container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-black text-[28px] md:text-[30px] font-extrabold whitespace-nowrap">
            Up to -40% Order.uk exclusive deals
          </h2>

          {/* mobile carousel */}
          <div className="block md:hidden relative w-full">
            <Carousel
              responsive={responsive}
              infinite={false}
              arrows={false}
              renderArrowLeft={CustomLeftArrow}
              renderArrowRight={CustomRightArrow}
              showDots={false}
              swipeable
              draggable
              containerClass="-mx-2"
              itemClass="px-2"
            >
              {categories.map((c) => (
                <Tag key={c.key} label={c.label} active={c.key === activeKey} onClick={() => setActiveKey(c.key)} />
              ))}
            </Carousel>
          </div>

          {/* desktop row */}
          <div className="hidden md:flex items-center gap-3">
            {categories.map((c) => (
              <Tag key={c.key} label={c.label} active={c.key === activeKey} onClick={() => setActiveKey(c.key)} />
            ))}
          </div>
        </div>
      </section>

      {/* ======  RESTAURANT STRIP  ====== */}
      <section className="px-6 py-0 md:px-25 container mx-auto">
        <h2 className="text-lg font-semibold mb-4">Top Restaurants</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {restaurants.map((r) => (
            <RestaurantCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* arrow styling */}
      <style jsx global>{`
        .react-multicarousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          border-radius: 9999px;
          padding: 0.5rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .react-multicarousel-arrow:hover { background: rgba(0, 0, 0, 0.65); }
        .react-multicarousel-arrow--left { left: -14px; }
        .react-multicarousel-arrow--right { right: -14px; }
      `}</style>
    </>
  );
};

export default DealRestaurantStrip;
