import React from 'react';
import Hero from '../aboutcomponents/hero/Hero';
import History from '../aboutcomponents/history/History';
import LocationStrip from '../aboutcomponents/locationstrip/LocationStrip';
import TypeStrip from '../aboutcomponents/type/TypeStrip';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Hero />
      <History />
      <LocationStrip />
      <TypeStrip />
    </div>
  );
};

export default AboutPage;
