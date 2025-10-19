import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#777777]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Left: Logo + description */}
          <div className="md:w-1/3">
            <Link href="/" className="block mb-10">
              <Image
                src="/logo-2.svg"
                alt="Boldo Logo"
                width={160}
                height={40}
              />
            </Link>

            <p className=" text-gray-500 leading-relaxed mb-8">
              Social media validation business model <br /> canvas graphical
              user interface launch <br /> party creative facebook iPad twitter.
            </p>

            <p className="text-xs text-[#777777]">All rights reserved.</p>
            <p className="text-xs text-[#777777]">Signed Caleb Okpaheifufue</p>
          </div>

          {/* Right: Link groups */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  Landings
                </h3>
                <ul className="space-y-5 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  Company
                </h3>
                <ul className="space-y-5 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <Link
                        href="#"
                        className="text-[#777777] hover:text-gray-900"
                      >
                        Careers
                      </Link>
                      <span className="inline-block bg-[#65E4A3] text-[#0A2640] text-sm font-bold px-3.5 py-1 rounded-full">
                        Hiring!
                      </span>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  Resources
                </h3>
                <ul className="space-y-5 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#777777] hover:text-gray-900"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
