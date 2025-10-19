import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-5 md:px-25 py-5 md:py-14 flex items-center justify-between  bg-transparent z-20">
      <Link href="/">
        <Image src="/logo-1.svg" alt="Boldo Logo" width={160} height={40} className="max-w-[25vw]" />
      </Link>

      <div className="hidden md:flex items-center justify-end gap-10">
        <Link href="/#product" className="">
          Product
        </Link>
        <Link href="/#services" className="">
          Services
        </Link>
        <Link href="/#about" className="">
          About
        </Link>
        <Link href="#" className="px-10 py-2 bg-white text-[#0A2640] font-bold rounded-full">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
