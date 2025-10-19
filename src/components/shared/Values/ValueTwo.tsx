"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ValueTwo = () => {
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
    <div className={`flex flex-col-reverse lg:flex-row items-center gap-34 `}>
      {/* Details area */}
      <div className="md:w-1/2 w-full">
        <p className="mb-10 text-black text-4xl leading-14">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>

        <div className="space-y-6">
          <div className="flex items-center juatify-start gap-3 bg-[#0A2640] text-white font-semibold px-5 py-4 rounded shadow-lg">
            <Image src={"/leaf.svg"} alt="" width={28} height={28} />
            <p>We connect our customers with the best.</p>
          </div>
          <div className="flex items-center juatify-start gap-3 font-semibold px-5 py-4 rounded shadow">
            <Image src={"/eye.svg"} alt="" width={28} height={28} />
            <p>We connect our customers with the best.</p>
          </div>
          <div className="flex items-center juatify-start gap-3 font-semibold px-5 py-4 rounded shadow">
            <Image src={"/sun.svg"} alt="" width={28} height={28} />
            <p>We connect our customers with the best.</p>
          </div>
        </div>
      </div>

      {/* Images area */}
      <div
        ref={containerRef}
        className="relative md:w-1/2 w-full flex justify-center"
      >
        <style>{`
                    @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
                    @keyframes slideFadeLeft { from { opacity: 0; transform: translateX(-24px) } to { opacity: 1; transform: translateX(0) } }
                `}</style>

        <Image
          src={"/value-2.png"}
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

        <div
          className={`absolute -bottom-40 left-6 md:left-10 rounded-lg`}
          style={
            inView
              ? { animation: "slideFadeLeft 600ms ease forwards" }
              : { opacity: 0, transform: "translateX(-24px)" }
          }
        >
          <Image
            src={"/value-22.svg"}
            alt="Value One"
            width={290}
            height={380}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
