import React from "react";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[#0A2640] text-white">
      <Navbar />

      <Image
        src={"/hero-ellipse.svg"}
        alt=""
        width={600}
        height={600}
        className="absolute top-0 right-0 z-0"
      />

      <div className="relative w-full h-full px-5 md:px-25 flex flex-col-reverse lg:flex-row items-center justify-between z-10">
        <div className="basis-1/2">
          <h1 className="text-3xl md:text-5xl md:leading-18 mb-4">
            Save time by building fast with Boldo Template{" "}
          </h1>

          <p className="mb-10 leading-7">
            Funding handshake buyer business-to-business metrics iPad
            partnership. <br />First mover advantage innovator success deployment
            non-disclosure.
          </p>

          <div className="flex items-center gap-6">
            <button className="w-full px-5 md:px-14 py-4 bg-[#65E4A3] text-[#0A2640] font-bold rounded-full hover:bg-white transition duration-300 cursor-pointer">Buy template</button>
            <button className="w-full px-5 md:px-14 py-4 bg-transparent border-3 border-white rounded-full font-bold hover:bg-[#ffffff] hover:text-[#0A2640] transition duration-300 cursor-pointer">Explore</button>
          </div>
        </div>

        <div className="basis-1/2 flex items-center justify-end">
          <Image
            src="/hero-graphics.svg"
            alt="Hero Image"
            width={490}
            height={400}
            className="max-w-[70vw]"
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 w-full max-w-7xl mx-auto -translate-x-1/2">
        <div className="relative">
          <div className="absolute top-0 left-0 w-40 bg-gradient-to-tr from-[#0A2640] to-transparent z-20"></div>
          <div className="absolute top-0 right-0 w-40 bg-gradient-to-tr to-[#0A2640] from-transparent z-20"></div>

          <Marquee className="relative z-0">
            <div className="px-5 md:px-10">
              <Image src="/presto.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/boldo.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/presto.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/boldo.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/presto.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/boldo.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/presto.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/boldo.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/presto.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
            <div className="px-5 md:px-10">
              <Image src="/boldo.svg" alt="Client 1" width={145} height={40} className='max-w-[25vw]' />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
