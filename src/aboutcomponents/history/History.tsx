// History.tsx
import React from 'react';

export const History: React.FC = () => {
  return (
    <section className="bg-stone-50 text-stone-800 py-16 px-6 pt-30">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left – text block */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-600">
            Our Rich History
          </h2>

          <p className="text-lg leading-relaxed">
            Embark on a journey with <span className="font-semibold">OrderUK</span>, where our story began with two brothers honing their skills in their father’s shop at a young age. Their passion for authentic Italian cuisine fueled their ambition, leading them to establish their own venture.
          </p>

          <p className="text-lg leading-relaxed">
            From humble beginnings, <span className="font-semibold">OrderUK</span> emerged as a testament to their dedication and love for the craft. Today, we continue to uphold the values instilled by our founders, offering fresh and tasty Italian meals to our local community.
          </p>

          <p className="text-sm uppercase tracking-widest text-stone-500">
            We keep it simple but tasty.
          </p>
        </div>

        {/* Right – locations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 md:h-[400px]">
          <h3 className="text-2xl font-bold text-amber-700 pt-10">Visit Us</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-700">Nerang</h4>
              <p className="text-sm text-stone-600">
                Shop 1/31 Station St, Nerang QLD 4211
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-stone-700">Southport</h4>
              <p className="text-sm text-stone-600">
                29 Coolibah St, Southport QLD 4215
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 text-sm text-stone-600">
            Open from 4:30 pm every day until late.
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
