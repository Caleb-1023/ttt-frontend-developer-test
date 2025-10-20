import React from "react";
import Container from "../../Container";
import FooterLink from "./FooterLink";
import Logo from "../../Logo";

export default function Footer(props) {
  const landingsList = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Products",
      url: "#",
    },
    {
      name: "Services",
      url: "#",
    },
  ];

  const companyList = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Career",
      url: "#",
      hiring: true
    },
    {
      name: "Services",
      url: "#",
    },
  ];

  const resourcesList = [
    {
      name: "Blog",
      url: "#",
    },
    {
      name: "Products",
      url: "#",
    },
    {
      name: "Services",
      url: "#",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-12 sm:gap-8">
          <div className="col-span-12 md:col-span-5">
            <Logo dark className="mb-10" />
            <p className="w-full sm:max-w-[300px] text-gray mb-8 sm:mb-0">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-9 md:col-span-7">
            <div className="col-span-9 flex flex-col justify-between sm:flex-row lg:col-span-7">
              <div className="mb-10 md:mb-0">
                <p className="mb-6 font-bold text-primary sm:mb-8">Landings</p>
                <ul>
                  {landingsList.map(({ name, url }, index) => (
                    <FooterLink key={index} name={name} url={url} />
                  ))}
                </ul>
              </div>
              <div className="mb-10 md:mb-0">
                <p className="mb-6 font-bold text-primary sm:mb-8">Company</p>
                <ul>
                  {companyList.map(({ name, url, hiring }, index) => (
                    <FooterLink
                      key={index}
                      name={name}
                      url={url}
                      hiring={hiring}
                    />
                  ))}
                </ul>
              </div>
              <div className="mb-10 md:mb-0">
                <p className="mb-6 font-bold text-primary sm:mb-8">Resources</p>
                <ul>
                  {resourcesList.map(({ name, url }, index) => (
                    <FooterLink key={index} name={name} url={url} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray">All rights reserved.</p>
      </Container>
    </section>
  );
}
