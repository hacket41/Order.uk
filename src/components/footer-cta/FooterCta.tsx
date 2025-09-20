import React from 'react';
import ChefImg from '../../assets/Chef.png';
import CoffeeImg from '../../assets/Coffee.png';

export default function FooterCta() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        <FlashCard
          title="Partner with us"
          subtitle="Earn more with lower fees"
          desc="Signup as a business"
          btn="Get Started"
          textColor="text-white"
          buttonColor="bg-orange-500"
          image={ChefImg}
        />

        <FlashCard
          title="Ride with us"
          subtitle="Avail exclusive perks"
          desc="Signup as a rider"
          btn="Get Started"
          textColor="text-white"
          buttonColor="bg-orange-500"
          image={CoffeeImg}
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
type FlashCardProps = {
  title: string;
  subtitle: string;
  desc: string;
  btn: string;
  textColor: string;
  buttonColor: string;
  image: string;
};

function FlashCard({
  title,
  subtitle,
  desc,
  btn,
  textColor,
  buttonColor,
  image,
}: FlashCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden shadow-lg
        h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96
        bg-cover bg-center
        flex flex-col justify-between
      `}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* dark scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* text block — grows so button stays underneath */}
      <div className="relative p-6 flex-1 flex flex-col justify-center">
        <p className="text-xs font-semibold text-white/80 mb-1">{subtitle}</p>
        <h4 className={`text-2xl font-bold ${textColor} mb-2`}>{title}</h4>
        <p className="text-sm text-white/90">{desc}</p>
      </div>

      {/* button — always below text */}
      <div className="relative px-6 pb-6">
        <button
          className={`
            w-full sm:w-auto px-6 py-2.5 rounded-full
            ${buttonColor} text-white text-sm font-semibold
            hover:opacity-90 transition-opacity
          `}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}
