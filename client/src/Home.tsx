// Home.tsx
import React from "react";

import Hero from "./components/Hero.tsx";
import ParticlesBackground from "./components/ParticleBackground.tsx";
import Demonlist from "./components/Demonlist.tsx";

const Home: React.FC = () => {
  return (
    <div className="
      flex 
      flex-col 
      items-center 
      relative 
      overflow-hidden
      bg-[linear-gradient(135deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%),radial-gradient(circle_at_50%_100%,rgba(255,107,0,0.05)_0%,transparent_30%)]
      text-center 
      md:text-left
    ">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        px-4 
        py-6 
        sm:px-6 
        sm:py-8 
        md:p-16
        relative
        z-10
      ">
        <div className="
          flex 
          justify-center 
          items-center 
          w-full 
          max-w-[1400px] 
          mx-auto
          gap-6 
          sm:gap-10 
          md:gap-24
          flex-nowrap
          animate-fade-in-up
          animation-fill-mode-both
        ">
          <Hero />
        </div>
      </section>

      {/* Demonlist Section */}
      <section className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        px-4 
        py-6 
        sm:px-6 
        sm:py-8 
        md:p-16
        relative
        z-10
      ">
        <Demonlist />
      </section>
    </div>
  );
};

export default Home;
