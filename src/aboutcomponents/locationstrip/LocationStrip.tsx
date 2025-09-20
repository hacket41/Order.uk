// LocationsStrip.tsx
import React from "react";
import Res1 from "../../assets/res-1.jpg";
import Res2 from "../../assets/res-2.jpg";

export const LocationsStrip: React.FC = () => (
  <section className="bg-black text-white mt-10">
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* brand headline */}
      <h2 className="text-5xl md:text-6xl font-black tracking-wider mb-10">
        FOODCORP
      </h2>

      {/* location cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Nerang */}
        <div className="border border-neutral-700 rounded-xl p-12 flex items-start gap-6">
          {/* text block */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Nerang</h3>
            <p className="text-neutral-300">
              Shop 1/31 Station St<br />
              Nerang QLD 4211
            </p>

            {/* hours ribbon */}
            <div className="bg-neutral-800 rounded-full px-4 py-2 inline-block text-sm font-semibold">
              4:30 pm – late
            </div>
          </div>

          {/* image block */}
          <div className="shrink-0 w-24 h-24 md:w-32 md:h-32">
            <img
              src={Res1}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Southport */}
        <div className="border border-neutral-700 rounded-xl p-12 flex items-start gap-6">
          {/* text block */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Southport</h3>
            <p className="text-neutral-300">
              29 Coolibah St<br />
              Southport QLD 4215
            </p>

            {/* hours ribbon */}
            <div className="bg-neutral-800 rounded-full px-4 py-2 inline-block text-sm font-semibold">
              4:30 pm – late
            </div>
          </div>

          {/* image block */}
          <div className="shrink-0 w-24 h-24 md:w-32 md:h-32">
            <img
              src={Res2}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationsStrip;
