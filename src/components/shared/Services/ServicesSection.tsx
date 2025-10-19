import SectionHeader from "../SectionHeader";
import ServiceItem from "./ServiceItem";

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        title="Our Services"
        subtitle="Handshake infographic mass market crowdfunding iteration."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-25">
        <ServiceItem title="Cool feature title" imageSrc="/service-1.png" />
        <ServiceItem title="Even cooler feature" imageSrc="/service-2.png" />
        <ServiceItem title="Cool feature title" imageSrc="/service-3.png" />
      </div>
    </section>
  );
}
