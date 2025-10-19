import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-25 py-14 flex items-center justify-between  bg-transparent z-20">
      <Link href="/">
        <Image src="/logo-1.png" alt="Boldo Logo" width={160} height={40} />
      </Link>

      <div className="flex items-center justify-end gap-10">
        <Link href="#" className="">
          Product
        </Link>
        <Link href="#" className="">
          Services
        </Link>
        <Link href="#" className="">
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
