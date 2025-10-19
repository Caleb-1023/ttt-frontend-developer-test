// import Image from "next/image";

import Hero from "@/components/home/Hero";
import BlogSection from "@/components/shared/Blog/BlogSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/shared/Footer";
import ReviewsSection from "@/components/shared/ReviewsSection";
import ServicesSection from "@/components/shared/Services/ServicesSection";
import StartNow from "@/components/shared/StartNow";
import ValuesSection from "@/components/shared/Values/ValuesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ValuesSection />
      <ReviewsSection />
      <FaqSection />
      <BlogSection />
      <StartNow />
      <Footer />
    </>
  );
}
