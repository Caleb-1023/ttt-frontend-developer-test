import React from "react";
import Image from "next/image";
import Link from "../../Link";
import Animation from "../../animation/Animation";
import { fadeIn } from "@/app/utils/animations";

export default function ServiceCard({ index, title, description, image, url }) {
  return (
    <div className="group mb-10 flex justify-center">
      <div>
        <Animation variants={fadeIn(0.2 + index * 0.2)}>
          <div className="mb-6 aspect-[3/2]">
            <Image className="w-full" src={image} alt={title} />
          </div>
          <h3 className="md-2 text-2xl sm:mb-3">{title}</h3>
          <p className="mb-3 w-full text-base text-gray sm:mb-7 md:max-w-[300px] md:text-xl">
            {description}
          </p>
          <Link text="Explore page" url={url} />
        </Animation>
      </div>
    </div>
  );
}
