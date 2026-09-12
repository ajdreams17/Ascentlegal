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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86a2e]">The attorneys</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0e2a47] sm:text-5xl">
            Two complementary practices. One business-minded approach.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#0e2a47]/65">
            Ascent Legal combines entertainment, intellectual property, contracts, and corporate counsel
            so clients can protect the opportunity in front of them and the business they are building next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {founders.map(({ name, title, photo, href, objectPosition }) => (
            <Link key={name} href={href} className="group overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#dedbd6]">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e2a47]/55 to-transparent p-6 pt-16 text-white md:hidden">
                  <h3 className="font-serif text-3xl">{name}</h3>
                </div>
              </div>
              <div className="border-t border-[#0e2a47]/10 px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#0e2a47]">{name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase leading-5 tracking-[0.12em] text-[#0e2a47]/60">{title}</p>
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
