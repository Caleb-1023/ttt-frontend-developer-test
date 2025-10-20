import React from "react";

export default function Container({ children, className=""}) {
  return <div className={`w-full max-w-[1200px] mx-auto ${className} px-8 xl:px-0`}>{children}</div>;
}
