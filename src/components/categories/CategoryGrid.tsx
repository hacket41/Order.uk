import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CategoryCard from './CategoryCard';

import burgerImg from '../../assets/Rectangle 13.png';
import saladImg  from '../../assets/Rectangle 15.png';
import pastaImg  from '../../assets/Rectangle 17.png';
import pizzaImg  from '../../assets/Rectangle 19.png';
import breakImg  from '../../assets/Rectangle 21.png';
import soupImg   from '../../assets/Rectangle 23.png';

const categories = [
  { image: burgerImg, title: 'Burgers & Fast food', count: 21 },
  { image: saladImg,  title: 'Salads', count: 32 },
  { image: pastaImg,  title: 'Pasta & Casuals', count: 4 },
  { image: pizzaImg,  title: 'Pizza', count: 32 },
  { image: breakImg,  title: 'Breakfast', count: 4 },
  { image: soupImg,   title: 'Soups', count: 32 },
];

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2.5,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: 3000, min: 769 },
    items: 6,
    slidesToSlide: 6,
  },
};

/* ----------  custom arrow icons ---------- */
const CustomLeftArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="react-multicarousel-arrow react-multicarousel-arrow--left"
    aria-label="Previous"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="react-multicarousel-arrow react-multicarousel-arrow--right"
    aria-label="Next"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-6 py-10 md:px-25 md:py-15">
      <h2 className="text-lg font-semibold mb-4">Popular Categories</h2>

      {/* ------- MOBILE : carousel with arrows ------- */}
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
          {categories.map((c) => (
            <CategoryCard key={c.title} {...c} />
          ))}
        </Carousel>
      </div>

      {/* ------- DESKTOP : grid ------- */}
      <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
        {categories.map((c) => (
          <CategoryCard key={c.title} {...c} />
        ))}
      </div>

      {/* ------- optional arrow styling ------- */}
      <style jsx global>{`
        .react-multicarousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(0,0,0,.45);
          color: #fff;
          border-radius: 9999px;
          padding: 0.5rem;
          cursor: pointer;
          transition: background .2s;
        }
        .react-multicarousel-arrow:hover {
          background: rgba(0,0,0,.65);
        }
        .react-multicarousel-arrow--left  { left: -14px; }
        .react-multicarousel-arrow--right { right: -14px; }
      `}</style>
    </section>
  );
}
