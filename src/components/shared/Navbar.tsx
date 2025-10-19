"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    // Function to handle click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    // Adding the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeDropdown]);

  return (
    <div className="absolute top-0 left-0 w-full px-5 md:px-10 lg:px-25 py-5 md:py-7 lg:py-14 flex items-center justify-between  bg-transparent z-20">
      <Link href="/">
        <Image
          src="/logo-1.svg"
          alt="Boldo Logo"
          width={160}
          height={40}
          className="max-w-[25vw]"
        />
      </Link>

      <div className="hidden lg:flex items-center justify-end gap-10">
        <Link href="/#product" className="">
          Product
        </Link>
        <Link href="/#services" className="">
          Services
        </Link>
        <Link href="/#about" className="">
          About
        </Link>
        <Link
          href="#"
          className="px-10 py-2 bg-white text-[#0A2640] font-bold rounded-full"
        >
          Log In
        </Link>
      </div>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="relative lg:hidden"
      >
        <MenuIcon className="text-white" />
      </button>

      <div
        className={`${
          isOpen ? "max-w-full" : "max-w-0"
        } fixed top-0 left-0 w-screen h-screen bg-[#0A2640] text-[#F5F5F7] transition-all duration-300 overflow-hidden`}
      >
        <div className="relative w-screen h-screen py-3 flex flex-col items-center justify-center gap-6 text-center text-2xl">
          <div className="absolute top-0 left-0 w-full p-5 md:px-10 flex items-center justify-between">
            <Link href={"/#home"}>
              <Image
                src={"/logo-1.svg"}
                // src="/logo.png"
                width={100}
                height={100}
                alt="Parallax Media Academy"
                className="object-contain"
              />
            </Link>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="relative lg:hidden z-50"
            >
              <X className="text-white" />
            </button>
          </div>

          <Link
            href="/#product"
            onClick={closeDropdown}
            className="w-full px-4 py-2 font-octarine"
          >
            Product
          </Link>
          <Link
            href="/#services"
            onClick={closeDropdown}
            className="w-full px-4 py-2 font-octarine"
          >
            Services
          </Link>
          <Link
            href="/#about"
            onClick={closeDropdown}
            className="w-full px-4 py-2 font-octarine"
          >
            About
          </Link>
          <Link
            href="/register"
            onClick={closeDropdown}
            className="px-10 py-2 bg-[#69E6A6] text-[#0A2640] rounded-lg transition-all duration-300 hover:bg-secondary"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
