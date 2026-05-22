import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Work from '@/components/sections/Work';
import CaseStudy from '@/components/sections/CaseStudy';
import Capabilities from '@/components/sections/Capabilities';
import Stack from '@/components/sections/Stack';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Work />
      <CaseStudy />
      <Capabilities />
      <Stack />
      <About />
      <Contact />
    </>
  );
}
