"use client";
import Image from "next/image";
import CustomOne from "./CustomOne";
import CustomTwo from "./CustomTwo";
import { ReactNode, useEffect, useRef, useState } from "react";

type ValueItemProps = {
  title?: string;
  reverse?: boolean;
  custom?: ReactNode;
  imageSrc?: string;
  smallImageSrc?: string;
  description?: string;
};

function ValueItem({
  title = "We connect our customers with the best",
  reverse = false,
  custom,
  imageSrc = "/logo-1.png",
  smallImageSrc = "/logo-1.png",
  description,
}: ValueItemProps) {
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
    <div
      className={`flex flex-col md:flex-row items-center gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
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
            src={imageSrc}
            alt={title}
            width={450}
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
          className={`absolute -bottom-25 ${
            reverse ? "left-6 md:left-20" : "right-6 md:right-20"
          } w-44 rounded-lg`}
          style={
            inView
              ? { animation: "slideFadeLeft 600ms ease forwards" }
              : { opacity: 0, transform: "translateX(-24px)" }
          }
        >
          {/* <div className="text-xs text-gray-500">30%</div>
					<div className="text-sm font-semibold">More income in June</div> */}

          <Image
            src={smallImageSrc}
            alt={title}
            width={300}
            height={400}
            className=""
          />
        </div>
      </div>

      {/* Details area */}
      <div className="md:w-1/2 w-full">
        <p className="mb-10 text-black text-4xl leading-14">{description}</p>
        
        {custom}
      </div>
    </div>
  );
}

export default function ValuesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-40 space-y-30">
      <ValueItem
        custom={<CustomOne />}
        imageSrc="/value-1.png"
        smallImageSrc="/value11.png"
        description="We connect our customers with the best, and help them keep up-and stay open."
      />

      <ValueItem
        reverse
        custom={<CustomTwo />}
        imageSrc="/value-2.png"
        smallImageSrc="/value22.png"
        description="We connect our customers with the best, and help them keep up-and stay open."
      />
    </section>
  );
}
