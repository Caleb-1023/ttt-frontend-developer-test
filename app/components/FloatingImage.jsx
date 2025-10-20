import React from "react";
import Image from "next/image";
import Animation from "./animation/Animation";
import { fadeIn, slideInFromBottom } from "../utils/animations";

export default function FloatingImage({ url, secondaryUrl, alt, position }) {
  const floatingImageStyles = {
    right: "right-8",
    left: "left-8",
  };
  return (
    <div className="relative mx-auto mb-24 aspect-[9/10] max-w-[500px] lg:mb-32">
      <Animation variants={fadeIn()}>
        <Image className="rounded-3xl object-cover" fill src={url} alt={alt} />
      </Animation>
      <div
        className={`absolute -bottom-1/4 ${floatingImageStyles[position]} w-[150px] animate-float sm:w-auto md:w-[200px] lg:w-auto`}
      >
        <Animation variants={slideInFromBottom(0.2)}>
          <Image className="w-full" src={secondaryUrl} />
        </Animation>
      </div>
    </div>
  );
}
