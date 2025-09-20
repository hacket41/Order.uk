// ----------  Hero.tsx  (desktop, shorter) ----------
import React, { useState } from 'react';
import girlImg from '../../assets/girl.png';

export default function Hero() {
  const [postcode, setPostcode] = useState('');

  return (
    <section className="hidden md:block">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg min-h-[400px] ml-10">
          {/* LEFT - text + search */}
          <div className="px-8 py-10 space-y-5 bg-gradient-to-b from-[#FFF9F5] to-[#FFEEDD] flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              Feast Your Senses,<br />
              <span className="text-[#FF642D]">Fast and Fresh</span>
            </h1>

            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Enter a postcode to see what we deliver</p>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="e.g. EC4R 3TE"
                  className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF642D] focus:border-transparent text-sm"
                />
                <button
                  onClick={() => console.log('Search clicked')}
                  className="px-5 py-2.5 rounded-full bg-[#FF642D] text-white font-semibold hover:bg-[#e55629] transition text-sm"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT - girl image + floating cards */}
          <div className="relative bg-[#FFD8C1] flex items-center justify-center">
            {/* Girl image (smaller) */}
            <img
              src={girlImg}
              alt="Girl enjoying food"
              className="h-[600px] object-contain drop-shadow-lg pt-50 mr-190"
            />

            {/* Floating cards (compact) */}
            <div className="absolute top-6 right-6 space-y-3 mt-40">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-2.5 shadow-lg border border-gray-100 w-64">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-xs mb-0.5">Orders</h3>
                    <p className="text-green-600 font-medium text-xs mb-0.5">We&apos;ve received your order!</p>
                    <p className="text-gray-500 text-xs">Awaiting restaurant confirmation</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-2.5 shadow-lg border border-gray-100 w-64">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 bg-[#FF642D] rounded-full" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-xs mb-0.5">Orders</h3>
                    <p className="text-[#FF642D] font-medium text-xs mb-0.5">Order Accepted!</p>
                    <p className="text-gray-500 text-xs">Your order will be delivered shortly</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-2.5 shadow-lg border border-gray-100 w-64">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-xs mb-0.5">Orders</h3>
                    <p className="text-blue-600 font-medium text-xs mb-0.5">Your rider&apos;s nearby 🚴‍♂️</p>
                    <p className="text-gray-500 text-xs">They&apos;re almost there... get ready!</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
