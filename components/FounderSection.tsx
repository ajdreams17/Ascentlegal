import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const founders = [
  {
    name: "Anthony Paredes",
    title: "Trademark · Corporate · Business Formation · IP",
    photo: "/attorneys/Anthony_Paredes.png",
    href: "/attorneys/Anthony-Paredes",
    objectPosition: "center 15%",
  },
  {
    name: "April Paredes",
    title: "Entertainment · Brand Deals · Production · Contracts",
    photo: "/attorneys/April_Paredes.jpg",
    href: "/attorneys/april-paredes",
    objectPosition: "top",
  },
];

export default function FounderSection() {
  return (
    <section className="bg-[#f7f6f3]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86a2e]">
            The Attorneys
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0e2a47] sm:text-5xl">
            Two complementary practices. One business-minded approach.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#0e2a47]/65">
            Ascent Legal combines entertainment, intellectual property,
            contracts, and corporate counsel so clients can protect the
            opportunity in front of them and the business they are building next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {founders.map(({ name, title, photo, href, objectPosition }) => (
            <Link
              key={name}
              href={href}
              className="group overflow-hidden bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#dedbd6]">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition }}
                />

                {/* MOBILE OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091f34] via-[#091f34]/90 to-transparent px-6 pb-5 pt-24 md:hidden">
                  <h3
                    className="font-serif text-[29px] font-semibold leading-tight drop-shadow-lg"
                    style={{ color: "#ffffff" }}
                  >
                    {name}
                  </h3>

                  <p
                    className="mt-2 max-w-[95%] text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.11em]"
                    style={{ color: "#e3a06a" }}
                  >
                    {title}
                  </p>

                  <div className="mt-3 flex items-center text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* DESKTOP INFO */}
              <div className="hidden border-t border-[#0e2a47]/10 px-6 py-5 md:block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#0e2a47]">
                      {name}
                    </h3>

                    <p className="mt-1 text-xs font-medium uppercase leading-5 tracking-[0.12em] text-[#0e2a47]/60">
                      {title}
                    </p>
                  </div>

                  <ArrowRight className="mt-1 h-5 w-5 flex-none text-[#b86a2e] transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}