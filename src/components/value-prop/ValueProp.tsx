import React from 'react';
import friends from '../../assets/friends.png';

export default function ValueProp() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg px-6 py-10 md:px-10 md:py-12 relative overflow-visible">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* LEFT - picture (no amber) shifted toward text */}
          <div className="relative w-full aspect-[4/3]">
            {/* HEAD STICKS OUT */}
            <img
              src={friends}
              alt="Couple with phones"
              className="absolute -bottom-6 -right-6 w-full h-full object-contain object-left-bottom drop-shadow-2xl"
            />
          </div>

          {/* RIGHT - content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Order<span className="text-orange-500">.</span>ing is more
            </h2>

            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full mb-6">
              <span className="text-orange-500 font-semibold">Personalised</span>
              <span>&</span>
              <span className="font-semibold">Instant</span>
            </div>

            <p className="text-gray-600 mb-8 text-lg">
              Download the Order.uk app for faster ordering
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <StoreBadge platform="App Store" />
              <StoreBadge platform="Google Play" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* store badge (unchanged) */
function StoreBadge({ platform }: { platform: 'App Store' | 'Google Play' }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
    >
      <span className="text-2xl">{platform === 'App Store' ? '' : '▶'}</span>
      <div className="text-left">
        <div className="text-xs text-gray-300">
          {platform === 'App Store' ? 'Download on the' : 'Get it on'}
        </div>
        <div className="text-sm font-semibold">{platform}</div>
      </div>
    </a>
  );
}
