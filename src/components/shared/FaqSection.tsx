import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <div className="px-40 py-30 space-y-14">
      <div className="relative h-0 min-h-[400px] w-full">
        <Image src={"/faq.png"} alt="" fill className="object-cover rounded-3xl" />
      </div>

      <div className="flex items-start justify-between gap-25">
        <p className="basis-1/2 text-4xl text-black leading-14">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <div className="basis-1/2">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-8"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl">
                We connect our customers with the best?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl">
                Android research & development rockstar?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
