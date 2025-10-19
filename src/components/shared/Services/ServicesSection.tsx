import ServiceItem from "./ServiceItem";

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-20">
        <p className="mb-3 text-lg text-[#777777]">Our Services</p>
        <h2 className="text-3xl md:text-5xl md:leading-18">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-25">
        <ServiceItem title="Cool feature title" imageSrc="/service-1.png" />
        <ServiceItem title="Even cooler feature" imageSrc="/service-2.png" />
        <ServiceItem title="Cool feature title" imageSrc="/service-3.png" />
      </div>
    </section>
  );
}
