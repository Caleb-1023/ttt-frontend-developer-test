import Image from "next/image";

type BlogItemProps = {
  title: string;
  category?: string;
  date?: string;
  author?: string;
  imageSrc?: string;
  authorImageSrc?: string;
};

export default function BlogItem({
  title,
  category = "Category",
  date = "November 22, 2021",
  author = "Author",
  imageSrc = "/logo-1.png",
    authorImageSrc = "/logo-1.png",
}: BlogItemProps) {
  return (
    <article className="">
      <div className="mb-6 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full"
        />
      </div>

      <div className="mb-5">
        <div className="mb-3 text-sm text-gray-500">
          <span className="font-bold text-[#0A2640]">{category}</span>
          <span className="ml-3 text-[#777777]">{date}</span>
        </div>

        <h3 className="text-lg text-black">{title}</h3>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Image
          src={authorImageSrc}
          alt={author}
          width={28}
          height={28}
          className="rounded-full"
        />
        <span className="text-sm text-black">{author}</span>
      </div>
    </article>
  );
}
