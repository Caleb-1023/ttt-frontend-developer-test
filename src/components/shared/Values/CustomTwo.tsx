import Image from "next/image";

export default function CustomTwo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center juatify-start gap-3 bg-[#0A2640] text-white font-semibold px-5 py-4 rounded shadow-lg">
        <Image src={"/leaf.svg"} alt="" width={28} height={28} />
        <p>We connect our customers with the best.</p>
      </div>
      <div className="flex items-center juatify-start gap-3 font-semibold px-5 py-4 rounded shadow">
        <Image src={"/eye.svg"} alt="" width={28} height={28} />
        <p>We connect our customers with the best.</p>
      </div>
      <div className="flex items-center juatify-start gap-3 font-semibold px-5 py-4 rounded shadow">
        <Image src={"/sun.svg"} alt="" width={28} height={28} />
        <p>We connect our customers with the best.</p>
      </div>
    </div>
  );
}
