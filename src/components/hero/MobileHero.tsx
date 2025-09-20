// ----------  MobileHero.tsx  (already correct) ----------
import React, { useState } from 'react';

export default function MobileHero() {
  const [postcode, setPostcode] = useState('');

  return (
    <section className="md:hidden px-6 py-10 bg-gradient-to-b from-[#FFF9F5] to-[#FFEEDD]">
      <h1 className="text-4xl font-bold leading-tight text-gray-900">
        Feast Your Senses,<br />
        <span className="text-[#FF642D]">Fast and Fresh</span>
      </h1>

      <div className="mt-6 space-y-2">
        <p className="text-sm text-gray-600">Enter a postcode to see what we deliver</p>
        <div className="flex gap-2 max-w-sm">
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="e.g. EC4R 3TE"
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF642D]"
          />
          <button
            onClick={() => console.log('Search:', postcode)}
            className="px-6 py-3 rounded-full bg-[#FF642D] text-white font-semibold hover:bg-[#e55629] transition"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
