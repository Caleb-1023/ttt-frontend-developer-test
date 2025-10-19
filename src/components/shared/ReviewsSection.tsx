import Image from "next/image";
// import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ReviewItem({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="p-2.5">
      <div className="bg-white rounded-lg p-10 shadow-lg w-full flex flex-col justify-between">
        <p className="mb-10 text-2xl text-slate-900">{quote}</p>

        <div className="flex items-center gap-3">
          <Image
            src="/a-1.png"
            alt={name}
            width={58}
            height={58}
            className="rounded-full"
          />
          <div>
            <div className="mb-1.5 text-sm text-[#0A2640] font-bold">{name}</div>
            <div className="text-sm text-[#0A2640]">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const items = [
    {
      quote:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      name: "Albus Dumbledore",
      title: "Manager @ Howarts",
    },
    {
      quote:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      name: "Severus Snape",
      title: "Manager @ Slytherin",
    },
    {
      quote:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      name: "Harry Potter",
      title: "Team Leader @ Gryffindor",
    },
    {
      quote:
        "“User experience iPad gen-z marketing network effects value proposition”",
      name: "Hermione Granger",
      title: "Head of Magic @ Hogwarts",
    },
  ];

  return (
    <Carousel className="py-20" style={{ backgroundColor: "#0B3250" }}>
      <div className="max-w-6xl mx-auto px-6 text-white">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-5xl leading-18">
              An enterprise template to ramp <br />
              up your company website
            </h2>
          </div>

          <div className="flex items-center gap4">
            <CarouselPrevious className="relative text-[#0A2640] size-16" />
            <CarouselNext className="relative text-[#0A2640] size-16" />
          </div>
        </div>

        <CarouselContent className="-ml-1">
          {items.map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 bg-transparent"
            >
              <ReviewItem quote={_.quote} name={_.name} title={_.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
}
