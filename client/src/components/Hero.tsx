import React from "react";

const Hero: React.FC = () => {
  const scrollToDemonlist = () => {
    const demonlistSection = document.querySelector("section:nth-child(3)");
    if (demonlistSection) {
      demonlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="
      flex-1
      max-w-[1400px]
      w-full
      flex
      flex-wrap
      gap-6
      sm:gap-8
      lg:gap-16
      items-center
      justify-center
      py-16
      md:py-24
      animate-fade-in-up
      animation-fill-mode-both
      mx-auto
      px-4
      md:px-6
    ">
      {/* Left content section */}
      <div className="
          w-full
          sm:flex-1
          sm:basis-[45%]
          min-w-[250px]
          max-w-[580px]
          lg:max-w-[680px]
          flex
          flex-col
          gap-6
          sm:gap-8
          items-center
          sm:items-start
          text-center
          sm:text-left
          mx-auto
          order-2
          sm:order-1
        ">
        {/* Mobile heading */}
        <h1 className="
          sm:hidden 
          bg-[linear-gradient(180deg,#ffd600_-12.18%,#ff3c00_103.41%)] 
          bg-clip-text 
          text-transparent 
          text-[2.5rem] 
          font-semibold
          m-0 
          leading-tight 
          tracking-tighter 
          w-full
        ">
          The Most Popular<br />
          Geometry Dash<br />
          Game on Roblox
        </h1>

        {/* Desktop heading */}
        <h1 className="
          hidden 
          sm:block 
          bg-gradient-to-b from-[#ffd600] to-[#ff3c00]
          bg-clip-text 
          text-transparent 
          text-[4rem]
          font-semibold
          m-0 
          leading-[1.1]
          tracking-[-0.03em]
          w-full
        ">
          The Most Popular<br />
          Geometry Dash Game<br />
          on Roblox
        </h1>

        <p className="
          text-[rgba(255,255,255,0.9)]
          text-lg
          md:text-2xl
          leading-relaxed
          m-0
          w-full
          sm:w-[95%]
          md:w-[90%]
        ">
          Beat Bounce delivers smooth, colorful gameplay packed with unique
          mechanics and boundless creativity. Dive into endless possibilities
          with our advanced level editor and explore an ever-growing collection
          of community- made levels. Enjoy high-performance fun crafted for
          everyone!
        </p>

        <div className="
          flex
          flex-col
          sm:flex-row
          gap-3
          sm:gap-4
          md:gap-6
          w-full
          items-center
          justify-center
          sm:justify-start
        ">
          <a
            href="https://www.roblox.com/games/15598056478"
            className="
              w-full
              sm:w-auto
              px-5 py-4
              sm:px-6 sm:py-5
              md:px-8 md:py-6
              bg-[linear-gradient(45deg,#FF6B00_0%,#FF3D00_100%)]
              text-white
              rounded-xl
              font-semibold
              text-lg
              md:text-xl
              flex
              items-center
              justify-center
              gap-2
              border-2
              border-[rgba(255,255,255,0.15)]
              shadow-[0_4px_20px_rgba(255,107,0,0.3)]
              transition-all
              duration-300
              hover:transform
              hover:-translate-y-0.5
              hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)]
              whitespace-nowrap
            "
          >
            <img
              src="/roblox.png"
              alt="Roblox"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            Play Now
          </a>

          <a
            href="https://discord.gg/wUu8g9BJKT"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              sm:w-auto
              px-5 py-4
              sm:px-6 sm:py-5
              md:px-8 md:py-6
              bg-[linear-gradient(45deg,#5865F2_0%,#4752C4_100%)]
              text-white
              rounded-xl
              font-semibold
              text-lg
              md:text-xl
              flex
              items-center
              justify-center
              gap-2
              border-2
              border-[rgba(255,255,255,0.15)]
              shadow-[0_4px_20px_rgba(88,101,242,0.3)]
              transition-all
              duration-300
              hover:transform
              hover:-translate-y-0.5
              hover:shadow-[0_8px_30px_rgba(88,101,242,0.5)]
              whitespace-nowrap
            "
          >
            <img
              src="/discord.svg"
              alt="Discord"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            Join Discord
          </a>

          <button
            onClick={scrollToDemonlist}
            className="
              w-full
              sm:w-auto
              px-5 py-4
              sm:px-6 sm:py-5
              md:px-8 md:py-6
              bg-[linear-gradient(45deg,#ff0000_0%,#9a0000_100%)]
              text-white
              rounded-xl
              font-semibold
              text-lg
              md:text-xl
              flex
              items-center
              justify-center
              gap-2
              border-2
              border-[rgba(255,255,255,0.15)]
              shadow-[0_4px_20px_rgba(255,0,0,0.3)]
              transition-all
              duration-300
              hover:transform
              hover:-translate-y-0.5
              hover:shadow-[0_8px_30px_rgba(255,0,0,0.5)]
              whitespace-nowrap
              cursor-pointer
            "
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="white"
              />
            </svg>
            Demonlist
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="
        w-full
        sm:flex-1
        sm:basis-[45%]
        min-w-[250px]
        max-w-[350px]
        sm:max-w-[380px]
        md:max-w-[420px]
        lg:max-w-[600px]
        flex
        justify-center
        items-center
        order-1
        sm:order-2
        mx-auto
        animate-float
      ">
        <div className="w-full bg-gradient-to-tr from-[rgba(255,107,0,0.2)] to-[rgba(255,61,0,0.1)] rounded-3xl p-4 shadow-[0_0_60px_20px_rgba(255,107,0,0.15)] relative">
          <img
            src="/red-small.png"
            alt="Beat Bounce Game"
            className="
              w-full
              h-auto
              rounded-2xl
              filter
              drop-shadow-[0_0_30px_rgba(255,107,0,0.4)]
              contrast-110
              saturate-120
              transform-gpu
            "
            style={{
              transform: "perspective(1000px) rotateY(-5deg) rotateX(3deg)",
            }}
            loading="eager"
          />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,107,0,0.15)_0%,transparent_60%)] pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
