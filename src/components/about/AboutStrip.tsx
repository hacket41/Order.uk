import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AboutStrip = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(0);
  const [activeTab, setActiveTab] = useState('faq'); // faq | who | partner | help

  const tabs = [
    { key: 'faq', label: 'Frequent Questions' },
    { key: 'who', label: 'Who we are' },
    { key: 'partner', label: 'Partner Program' },
    { key: 'help', label: 'Help & Support' },
  ];

  const faqs = [
    { q: 'How does Order.uk work?', a: 'Order.uk provides quick, simple & transparent food ordering with advanced tech and reliable infrastructure.' },
    { q: 'What payment methods are accepted?', a: 'We accept all major credit cards, bank transfers, direct debit, and digital wallets.' },
    { q: 'Can I track my order?', a: 'Yes, real-time tracking is available on our website and mobile app.' },
    { q: 'Are there special discounts?', a: 'Yes – check the “Deals” section for ongoing promotions and partner offers.' },
    { q: 'Is Order.uk available in my area?', a: 'Enter your postcode on the homepage to see available restaurants and riders near you.' },
  ];

  const infoCards = [
    { icon: '📍', title: 'Place an Order', subtitle: 'Order through our website or mobile app' },
    { icon: '🚛', title: 'Track Progress', subtitle: 'Follow your order in real time' },
    { icon: '📦', title: 'Get your Food', subtitle: 'Receive at your door or pick up' },
  ];

  return (
    <section className="px-4 py-10">
      <div className="flex justify-center">
        <div className="w-[1250px] max-w-full">
          {/* Header + Tabs aligned with gray rectangle */}
          <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
              Know more about us!
            </h2>
            <div className="flex gap-4 text-sm md:text-base">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`pb-1 border-b-2 transition ${
                    activeTab === t.key
                      ? 'text-orange-500 border-orange-500'
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Centered light gray rectangle */}
          <div className="bg-gray-100 rounded-3xl p-8 md:p-8">
            {/* Navy inner section */}
            <div className="bg-[#001f3f] rounded-3xl p-8 md:p-10 grid lg:grid-cols-2 gap-8 text-white">
              {/* LEFT – FAQ */}
              <div className={`${activeTab === 'faq' ? 'block' : 'hidden'}`}>
                {faqs.map((f, i) => (
                  <div key={i} className="mb-4">
                    <button
                      onClick={() =>
                        setExpandedQuestion(expandedQuestion === i ? -1 : i)
                      }
                      className="w-full flex flex-col items-center text-center"
                    >
                      <span className="font-extrabold text-lg">{f.q}</span>
                      {expandedQuestion === i ? (
                        <ChevronUp className="h-5 w-5 text-gray-200 mt-1" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-200 mt-1" />
                      )}
                    </button>
                    {expandedQuestion === i && (
                      <p className="pt-2 text-gray-300 leading-relaxed text-center">
                        {f.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* RIGHT – info cards */}
              <div className="flex flex-col items-center justify-between">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 justify-items-center">
                  {infoCards.map((c, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-10 w-44 h-56 flex flex-col items-center justify-center text-center text-gray-900 shadow-lg"
                    >
                      <div className="text-4xl mb-4">{c.icon}</div>
                      <h3 className="font-bold text-lg">{c.title}</h3>
                      <p className="text-sm text-gray-700 mt-2">{c.subtitle}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed text-center max-w-md">
                  Order.uk offers the best shopping program & most through our diverse menu
                  which can choose phone and get personal & checkout. You also can recut use
                  as know of our shopping incentive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;

