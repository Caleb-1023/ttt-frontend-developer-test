"use client";
import Image from "next/image";
import { useState } from "react";

export default function StartNow() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full max-w-8xl mx-auto px-25 flex justify-center py-21">
      <div
        className="relative w-full py-18 rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#0A2640" }}
      >
        <Image
          src="/start-ellipse.svg"
          alt="Start Now Background"
          width={600}
          height={600}
          className="object-cover absolute top-0 right-0"
        />

        <div className="relative px-8 py-10 text-center text-white z-10">
          <h2 className="text-3xl sm:text-5xl mb-12 leading-18">
            An enterprise template to ramp <br />up your company website
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-72 sm:w-96 rounded-full px-8 py-4 text-black text-xl outline-none"
              style={{ backgroundColor: "white" }}
            />

            <button
              type="button"
              className="rounded-full px-14 py-4 font-bold text-xl text-[#0A2640]"
              style={{ backgroundColor: "#65E4A3" }}
              onClick={() => {
                // placeholder action
                window.alert(`Starting with ${email || "no email"}`);
              }}
            >
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
