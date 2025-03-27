import React from "react";

const Demonlist: React.FC = () => {
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
        <h2 className="
          bg-[linear-gradient(180deg,#ff5e3a_-12.18%,#c20000_103.41%)]
          bg-clip-text
          text-transparent
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-semibold
          m-0
          leading-tight
          tracking-tight
          w-full
        ">
          Beat Bounce Demonlist
        </h2>

        <p className="
          text-[rgba(255,255,255,0.9)]
          text-lg
          md:text-xl
          leading-relaxed
          m-0
          w-full
          sm:w-[95%]
          md:w-[90%]
        ">
          Challenge yourself with the toughest levels in Beat Bounce. Our
          official Demonlist showcases the most difficult community creations,
          ranked by difficulty. Can you conquer the top demons and claim your
          spot among the elite players?
        </p>

        <div className="
          flex
          w-full
          sm:w-auto
          items-center
          justify-center
          sm:justify-start
        ">
          <a
            href="https://demonlist.beatbounce.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              md:px-8 md:py-4
              lg:px-10 lg:py-5
              bg-[linear-gradient(45deg,#ff0000_0%,#9a0000_100%)]
              text-white
              rounded-xl
              font-bold
              text-lg
              md:text-xl
              flex
              items-center
              justify-center
              gap-3
              w-full
              sm:w-auto
              border-2
              border-[rgba(255,255,255,0.15)]
              shadow-[0_4px_20px_rgba(255,0,0,0.3)]
              transition-all
              duration-300
              hover:transform
              hover:-translate-y-0.5
              hover:shadow-[0_8px_30px_rgba(255,0,0,0.5)]
            "
          >
            View Demonlist
          </a>
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
        lg:max-w-[500px]
        flex
        justify-center
        items-center
        order-1
        sm:order-2
        mx-auto
      ">
        <div className="w-full">
          <img
            src="/bbdl.png"
            alt="Beat Bounce Demonlist"
            className="
              w-full
              h-auto
              rounded-2xl
              shadow-[0_0_30px_rgba(255,0,0,0.3)]
              transition-all
              duration-300
              hover:shadow-[0_0_40px_10px_rgba(255,0,0,0.5)]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Demonlist;
