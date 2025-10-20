import React from "react";
import Header from "./Header";
import Hero from "./Hero";

export default function HeaderSection(props) {
  return (
    <header className="relative overflow-hidden bg-primary pt-14">
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
      <div className="absolute -right-[700px] -top-[1000px] z-[0] h-[1200px] w-[1200px] animate-float rounded-full bg-primary-light md:-right-[600px] md:-top-[700px]" />
    </header>
  );
}
