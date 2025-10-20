import React from 'react'
import Image from "next/image";

export default function TestimonialCard({ quote, name, role, imageSrc }) {
  return (
    <div className=" bg-white p-8 lg:p-10 rounded-lg shadow-lg flex flex-col space-y-4">
      <p className="text-xl text-primary leading-9">{`"${quote}"`}</p>
      <div className="flex items-center space-x-3">
        <Image
          src={imageSrc || "https://via.placeholder.com/40"}
          alt={name}
          width={58}
          height={58}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-primary">{name}</p>
          <p className="text-sm text-gray">{role}</p>
        </div>
      </div>
    </div>
  );
}
