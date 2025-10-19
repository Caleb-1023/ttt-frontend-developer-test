import Image from "next/image";

export default function CustomOne() {
  return (
    <div className="space-y-3 text-left">
      <ul className="mb-14 text-black text-lg space-y-6">
        <li className="flex items-center justify-start gap-6">
          <Image src={"/tick.svg"} alt="" width={36} height={36} />
          We connect our customers with the best.
        </li>
        <li className="flex items-center justify-start gap-6">
          <Image src={"/tick.svg"} alt="" width={36} height={36} />
          Advisor success customer launch party.
        </li>
        <li className="flex items-center justify-start gap-6">
          <Image src={"/tick.svg"} alt="" width={36} height={36} />
          Business-to-consumer long tail.
        </li>
      </ul>

      <button className="px-14 py-4 text-white font-bold bg-[#0A2640] rounded-full">
        Start Now
      </button>
    </div>
  );
}
