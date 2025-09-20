import React from 'react';
import Carousel from 'react-multi-carousel';
import papa from '../../assets/Papa.png';
import shwarma from '../../assets/Shwarma.png';
import kfc from '../../assets/KFC.png';
import mc from '../../assets/McDonalds.png';
import bk from '../../assets/BK.png';
import texas from '../../assets/Texas.png';

type Brand = { name: string; image: string };

const brands: Brand[] = [
  { name: 'PAPA JOHNS', image: papa },
  { name: 'BURGER KING', image: bk },
  { name: 'Shaurma', image: shwarma },
  { name: "McDonald's London", image: mc },
  { name: 'KFCWestLondon', image: kfc },
  { name: 'TexasChicken', image: texas },
];

/* ---------- responsive rules ---------- */
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 6 },
  desktop: { breakpoint: { max: 1199, min: 768 }, items: 5 },
  tablet: { breakpoint: { max: 767, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 463, min: 0 }, items: 2 },
};

/* ---------- arrow components ---------- */
const CustomLeftArrow = ({ onClick }: any) => (
  <button onClick={onClick} className="react-multicarousel-arrow react-multicarousel-arrow--left">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }: any) => (
  <button onClick={onClick} className="react-multicarousel-arrow react-multicarousel-arrow--right">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

/* ---------- single card ---------- */
const BrandCard = ({ name, image }: Brand) => (
  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
    <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 bg-amber-500/90 text-white text-xs font-semibold px-2 py-1">
      {name}
    </div>
  </div>
);

/* ---------- main component ---------- */
export default function BrandStrip() {
  return (
    <section className="container mx-auto px-6 py-10 md:px-25 md:py-15">
      <h2 className="text-lg font-semibold mb-4">Popular Restaurants</h2>

      {/* ------- MOBILE : carousel ------- */}
      <div className="block md:hidden relative">
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
          {brands.map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}
        </Carousel>
      </div>

      {/* ------- DESKTOP : grid ------- */}
      <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(min(120px,25vw),1fr))] gap-3">
        {brands.map((b) => (
          <BrandCard key={b.name} {...b} />
        ))}
      </div>

      {/* ------- arrow styling (same as CategoryGrid) ------- */}
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
        .react-multicarousel-arrow:hover {
          background: rgba(0, 0, 0, 0.65);
        }
        .react-multicarousel-arrow--left { left: -14px; }
        .react-multicarousel-arrow--right { right: -14px; }
      `}</style>
    </section>
  );
}
