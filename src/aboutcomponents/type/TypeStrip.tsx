// TypeStrip.tsx
import React from 'react';

interface FlashCard {
  heading: string;
  description: string;
}

interface TypeStripProps {
  flashcards?: FlashCard[];
}

const TypeStrip: React.FC<TypeStripProps> = ({
  flashcards = [
    {
      heading: 'Organic Foods',
      description:
        'Every pizza begins with dough made from certified-organic flour, topped with vine-ripened tomatoes and produce picked within 24 h from nearby farms. No additives, no shortcuts—just honest flavour you can taste in every bite.',
    },
    {
      heading: 'Qualified Chefs',
      description:
        'Our kitchen is led by chefs who trained in Naples and bring decades of combined experience. They fire each pie at 450 °C, balancing crust, sauce and garnish so the finished pizza needs nothing more than a quiet table and good company.',
    },
  ],
}) => {
  return (
    <section className="w-full bg-[#111111] px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        {flashcards.map((c, i) => (
          <div
            key={i}
            className="
              group
              rounded-3xl
              bg-[#1C1C1C]
              border
              border-[#2B2B2B]
              p-12
              transition
              hover:scale-[1.02]
              hover:border-orange-500
              md:p-16
            "
          >
            <h2 className="text-2xl font-medium text-white sm:text-2xl">{c.heading}</h2>
            <p className="mt-4 text-base text-neutral-300 sm:text-lg font-light leading-relaxed">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypeStrip;
