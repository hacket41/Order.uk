// in your page/layout component
import MobileHero from './MobileHero';
import Hero from './Hero';

export default function MainHero() {
  return (
  <>
    <MobileHero />   {/* shows only on mobile */}
    <Hero />         {/* your existing desktop hero */}
  </>
);
}

