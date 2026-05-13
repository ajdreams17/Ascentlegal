// components/FounderSection.tsx
//
// SETUP — 3 steps:
// 1. Add photos to /public/images/april.jpg and /public/images/anthony.jpg
// 2. Import in app/page.tsx:
//      import FounderSection from "../components/FounderSection";
// 3. Paste <FounderSection /> between the COMMON DEALS section and the CTA STRIP section

import Image from "next/image";
import { Scale, TrendingUp } from "lucide-react";

const founders = [
  {
    name: "April",
    title: "Co-Founder · Entertainment & Contracts",
    photo: "/attorneys/April_Paredes.jpg",
    objectPosition: "top",
    icon: Scale,
    quote:
      "I come from entertainment and media — I've always lived in the world creators operate in. I've seen too many creators sign deals they didn't fully understand, losing rights to content they built from scratch. That's what this firm was built to prevent. I'm here to make sure every deal you sign actually works for you.",
    focus: [
      "Brand deals & influencer agreements",
      "Licensing & content protection",
      "Copyright & usage rights",
    ],
  },
  {
    name: "Anthony",
    title: "Co-Founder · Trademark & Business Formation",
    photo: "/attorneys/Anthony_Paredes.png",
    objectPosition: "center 15%",
    icon: TrendingUp,
    quote:
      "My background is in marketing and business — so I understand how much your brand is actually worth. I became a lawyer because I wanted to use legal knowledge the way I used to use marketing: as a tool to help people grow. Whether you're an individual creator or a growing company, I'm focused on making sure your business is built to last.",
    focus: [
      "Trademark strategy & USPTO filings",
      "Business formation & entity structure",
      "IP protection & brand strategy",
    ],
  },
];

export default function FounderSection() {
  return (
    <section className="border-t border-slate-200/60 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            The team behind Ascent Legal
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Two complementary practices, one shared mission — making sure your deals are right
            and your business is built to last.
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {founders.map(({ name, title, photo, objectPosition, icon: Icon, quote, focus }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] bg-slate-100">
                <Image
                  src={photo}
                  alt={`${name} — ${title}`}
                  fill
                  className="object-cover"
                  style={{ objectPosition }}
                />
                {/* Icon badge — matches practice area card style */}
                <div className="absolute top-4 left-4 h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center shadow-md">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name + title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                  <p className="text-sm font-medium text-indigo-600 mt-0.5">{title}</p>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-indigo-400 pl-4 mb-5 text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Focus areas */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                    Practice focus
                  </p>
                  <ul className="space-y-1.5">
                    {focus.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[10px] font-bold">→</span>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing banner — matches agency-friendly support box style */}
        <div className="rounded-2xl border border-slate-200/60 bg-white p-6 text-center">
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Together we cover the full picture —{" "}
            <span className="font-semibold text-slate-900">
              April protects the deal in front of you
            </span>
            ,{" "}
            <span className="font-semibold text-slate-900">
              Anthony protects the brand and business you&apos;re building for the future
            </span>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
