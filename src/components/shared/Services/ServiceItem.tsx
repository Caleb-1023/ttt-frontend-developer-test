import Image from "next/image";

type ServiceItemProps = {
  title: string;
  description?: string;
  imageSrc?: string;
};

export default function ServiceItem({
  title,
  description = "Learning curve network effects return on investment.",
  imageSrc = "/logo-1.png",
}: ServiceItemProps) {
  return (
    <article className="space-y-4">
      <div className="rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={350}
          className="objectcover w-full"
        />
      </div>

      <h3 className="text-xl text-slate-900">{title}</h3>

    <p className="text-[#777777]">{description}</p>

      <div className="mt-4">
        <button className="pb-2 text-[#0A2640] font-bold inline-flex items-center gap-2 border-b border-[#0A2640]">
          Explore page <Image src="/explore-a.svg" alt="" width={24} height={24} />
        </button>
      </div>
    </article>
  );
}
