import React from 'react';

const stats = [
  { figure: '546+', label: 'Registered Riders' },
  { figure: '789,900+', label: 'Orders Delivered' },
  { figure: '690+', label: 'Restaurants Partnered' },
  { figure: '17,457+', label: 'Food Items' },
];

export default function StatsStrip() {
  return (
    <section className="px-4 py-8 md:py-10">
      <div className="max-w-[1250px] mx-auto bg-amber-500 rounded-3xl px-4 md:px-6 py-8 md:py-10 shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`
                relative
                after:content-[''] 
                after:absolute 
                after:top-1/2 
                after:left-full 
                after:-translate-y-1/2 
                after:w-px 
                after:h-10 
                after:bg-white 
                after:hidden
                md:after:block
                ${idx === stats.length - 1 ? 'after:hidden' : ''}
              `}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{s.figure}</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-700 mt-1 md:mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

