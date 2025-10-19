"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ValueOne = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <div className={`lg:pb-30 flex flex-col lg:flex-row items-center gap-34 `}>
      {/* Images area */}
      <div
        ref={containerRef}
        className="relative md:w-1/2 w-full flex justify-center"
      >
        <style>{`
                    @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
                    @keyframes slideFadeLeft { from { opacity: 0; transform: translateX(-24px) } to { opacity: 1; transform: translateX(0) } }
                `}</style>

        {/* <div className="rounded-lg overflow-hidden w-64 h-64 md:w-100 md:h-100"> */}
        <Image
          src={"/value-1.png"}
          alt="Value One"
          width={490}
          height={530}
          className="object-cover"
          style={
            inView
              ? { animation: "fadeIn 600ms ease forwards" }
              : { opacity: 0 }
          }
        />
        {/* </div> */}

        <div
          className={`absolute -bottom-30 right-6 md:right-10 rounded-lg`}
          style={
            inView
              ? { animation: "slideFadeLeft 600ms ease forwards" }
              : { opacity: 0, transform: "translateX(-24px)" }
          }
        >
          {/* <div className="text-xs text-gray-500">30%</div>
                    <div className="text-sm font-semibold">More income in June</div> */}

          <Image
            src={"/value-11.svg"}
            alt="Value One"
            width={250}
            height={380}
            className=""
          />
        </div>
      </div>

      {/* Details area */}
      <div className="md:w-1/2 w-full">
        <p className="mb-10 text-black text-4xl leading-14">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>

        <div className="space-y-3 text-left">
          <ul className="mb-14 text-black text-lg space-y-6">
            <li className="flex items-center justify-start gap-6">
              <Image src={"/tick.svg"} alt="" width={28} height={28} />
              We connect our customers with the best.
            </li>
            <li className="flex items-center justify-start gap-6">
              <Image src={"/tick.svg"} alt="" width={28} height={28} />
              Advisor success customer launch party.
            </li>
            <li className="flex items-center justify-start gap-6">
              <Image src={"/tick.svg"} alt="" width={28} height={28} />
              Business-to-consumer long tail.
            </li>
          </ul>

          <button className="px-14 py-4 text-white font-bold bg-[#0A2640] rounded-full">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};
