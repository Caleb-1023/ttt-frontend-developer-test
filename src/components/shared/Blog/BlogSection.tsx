import SectionHeader from "../SectionHeader";
import BlogItem from "./BlogItem";

export default function BlogSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <SectionHeader
        title="Our Blogs"
        subtitle="Value proposition accelerator product management venture"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <BlogItem
          title="Pitch termsheet backing validation focus release."
          category="Category"
          date="November 22, 2021"
          author="Chandler Bing"
          imageSrc="/blog-1.png"
          authorImageSrc="/a-1.png"
        />
        <BlogItem
          title="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
          category="Category"
          date="November 22, 2021"
          author="Rachel Green"
          imageSrc="/blog-2.png"
          authorImageSrc="/a-2.png"
        />
        <BlogItem
          title="Beta prototype sales iPad gen-z marketing network effects value proposition"
          category="Category"
          date="November 22, 2021"
          author="Monica Geller"
          imageSrc="/blog-3.svg"
          authorImageSrc="/a-3.png"
        />
      </div>

      <div className="mt-21 flex justify-center">
        <button className="px-14 py-4 rounded-full border-2 border-[#0A2640] text-xl font-bold hover:bg-[#0A2640] hover:text-white transition duration-300">
          Load more
        </button>
      </div>
    </section>
  );
}
