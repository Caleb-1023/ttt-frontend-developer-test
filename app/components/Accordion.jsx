"use client";
import { useState } from "react";
import caretDown from "../../public/assets/icon/caret-down.svg";
import Image from "next/image";
import Animation from "./animation/Animation";
import { slideInFromTop } from "../utils/animations";

const Accordion = ({ className, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full space-y-4 md:ml-auto md:max-w-lg ${className}`}>
      {items.map((item, index) => (
        <Animation key={index} variants={slideInFromTop(index * 0.2)}>
          <div  className="border-b border-lightGray">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between py-4 text-left text-lg font-medium focus:outline-none"
            >
              <span>{item.question}</span>
              <Image
                src={caretDown}
                className={`ml-4 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-2 font-bold">{item.answer}</div>
            </div>
          </div>
        </Animation>
      ))}
    </div>
  );
};

export default Accordion;
