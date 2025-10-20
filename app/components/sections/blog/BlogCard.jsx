import React from "react";
import Image from "next/image";
import Animation from "../../animation/Animation";
import { fadeIn } from "@/app/utils/animations";

export default function BlogCard({
  index,
  summary,
  imgUrl,
  date,
  author,
  authorImgUrl,
  category,
}) {
  return (
    <Animation variants={fadeIn(index * 0.2)} className="group mx-auto w-full sm:max-w-[300px] mb-20">
      <div className="relative aspect-[3/2] w-full mb-6">
        <Image src={imgUrl} fill alt={summary}/>
      </div>
      <div className="flex mb-3">
        <p className="text-primary font-bold mr-3">{category}</p>
        <p className="text-gray">{date}</p>
      </div>
      <p className="mb-5 text-xl">{summary}</p>
      <div className="flex align-middle">
        <Image
          className="mr-3"
          src={authorImgUrl}
          width={32}
          height={32}
          alt={author}
        />
        <p>{author}</p>
      </div>
    </Animation>
  );
}
