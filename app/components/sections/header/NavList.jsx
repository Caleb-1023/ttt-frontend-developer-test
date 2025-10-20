"use client";
import React, { useState } from "react"; // Add FontAwesome icons for hamburger and close icons
import Button from "../../Button";

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

function NavListItem({ text }) {
  return (
    <li className="self-center">
      <a href="#" className="hover:text-gray-300 text-base text-white">
        {text}
      </a>
    </li>
  );
}

export default function NavList() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex">
      <ul className="hidden space-x-6 md:flex">
        {["Product", "Services", "About"].map((item) => (
          <NavListItem text={item} key={item} />
        ))}
        <Button text="Log In" variant="light" />
      </ul>

      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <div>{closeIcon}</div> : <div>{hamburgerIcon}</div>}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute right-0 top-14 w-full space-y-6 bg-primary p-4 text-center md:hidden">
          {["Product", "Services", "About"].map((item) => (
            <NavListItem text={item} key={item} />
          ))}
          <Button text="Log In" variant="light" />
        </ul>
      )}
    </nav>
  );
}
