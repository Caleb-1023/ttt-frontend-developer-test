import HeaderSection from "./components/sections/header/HeaderSection";
import ServicesSection from "./components/sections/services/ServicesSection";
import BlogSection from "./components/sections/blog/BlogSection";
import Footer from "./components/sections/footer/Footer";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </>
  );
}
