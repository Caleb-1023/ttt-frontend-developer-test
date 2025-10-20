import React from "react";
import Image from "next/image";
import rightIcon from "../../public/assets/icon/arrow-right.svg"

export default function Link({ url, text }) {
  return (
    <a href={url} className="inline-flex border-b-[1px] self-start py-1">
      <p className="text-base md:text-xl leading-9 text-primary font-bold mr-2 group-hover:mr-4 transition-all ease-in-out">
        {text}
      </p>
      <Image src={rightIcon} />
    </a>
  );
}
