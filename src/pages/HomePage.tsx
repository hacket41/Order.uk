import React from 'react';
import MainHero from '../components/hero/MainHero';
import CategoryGrid from '../components/categories/CategoryGrid';
import RestaurantStrip from '../components/restaurants/RestaurantStrip';
import BrandStrip from '../components/popular-restaurants/BrandStrip';
import ValueProp from '../components/value-prop/ValueProp';
import StatsStrip from '../components/stats/StatsStrip';
import FooterCta from '../components/footer-cta/FooterCta';
import AboutStrip from '../components/about/AboutStrip';

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
    <MainHero />
    <RestaurantStrip />
    <CategoryGrid />
    <BrandStrip />
    <ValueProp />
    <FooterCta />
    <AboutStrip />
    <StatsStrip />
  </div>
);

export default HomePage;
