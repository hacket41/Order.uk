// AboutUs.tsx
import React from "react";

interface AboutUsProps {
  backgroundImage?: string; // url to the hero image
}

export const AboutUs: React.FC<AboutUsProps> = ({
  backgroundImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1950&q=80",
}) => {
  return (
    <section
      className="relative w-full h-[480px] md:h-[560px] bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* dark overlay so white text is readable */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          ABOUT US
        </h2>

        <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed">
          Crafting unforgettable culinary experiences is what drives us every
          day.
        </p>

        <p className="mt-2 max-w-2xl text-base md:text-lg">
          Welcome to Food Corp, where passion meets flavor in every bite.
        </p>

        <button
          onClick={() => alert("Redirect to order page")}
          className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
        >
          ORDER NOW
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
