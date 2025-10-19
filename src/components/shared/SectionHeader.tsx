import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-20">
      <p className="mb-3 text-lg text-[#777777]">{title}</p>
      <h2 className="text-3xl md:text-5xl md:leading-18">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeader;
