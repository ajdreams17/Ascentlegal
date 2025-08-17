"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check, Film, ShieldCheck, Briefcase, Building2, FileText,
  Users, MessageSquare, Stamp
} from "lucide-react";

function Shell({ children, onNavigate, current }) {
  const nav = [
    { k: "home", label: "Home" },
    { k: "about", label: "About" },
    { k: "services", label: "Services" },
    { k: "ip", label: "Intellectual Property" },
    { k: "resources", label: "Resources" },
    { k: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* top nav */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
         <Link href="/" className="flex items-center gap-3">
  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
  <span className="font-semibold tracking-tight">Ascent Legal</span>
</Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
        {nav.map((n) => (
  <Link
    key={n.k}
    href={`/${n.k === "home" ? "" : n.k}`} 
    className={`transition-colors ${
      current === n.k ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"
    }`}
  >
    {n.label}
  </Link>
))}

            <button
              onClick={() => onNavigate("contact")}
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white shadow"
            >
              Book Consultation
            </button>
          </nav>
        </div>
      </header>

      {children}

     import Link from "next/link";

{/* footer */}
<footer className="border-t border-gray-100 mt-20">
  <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
    <div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
        <span className="font-semibold">Ascent Legal</span>
      </div>
      <p className="mt-3 text-gray-600">
        We combine integrity, excellence, and personalized legal strategy to safeguard your intellectual property, contracts, and business growth.
      </p>
    </div>
    <div>
      <h4 className="font-medium">Firm</h4>
      <ul className="mt-3 space-y-2 text-gray-600">
        <li>
          <Link href="/about" className="hover:text-indigo-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/#practice" className="hover:text-indigo-600">
            Practice Areas
          </Link>
        </li>
        <li>
          <Link href="/resources" className="hover:text-indigo-600">
            Resources
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-medium">Legal</h4>
      <ul className="mt-3 space-y-2 text-gray-600">
        <li>Terms & Conditions</li>
      </ul>
    </div>
    <div>
      <h4 className="font-medium">Contact</h4>
      <ul className="mt-3 space-y-2 text-gray-600">
        <li>3780 Kilroy Airport Way</li>
        <li>Suite 200</li>
        <li>Long Beach, CA 90806</li>
        <li>info@ascentlegal.io</li>
        <li>(714)203-3535y</li>
      </ul>
    </div>
  </div>
  <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Ascent Legal. All rights reserved.
  </div>
</footer>


/* ---------- PAGES ---------- */
function Home() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-400 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Modern Counsel for{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                Ambitious Businesses
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Practical, proactive legal guidance for founders and operators—delivered with the
              polish you expect and the speed you need.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow-lg hover:opacity-90">
                Schedule a Call
              </button>
              <a href="#practice" className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
                Explore practice areas
                <span className="h-[2px] w-8 bg-gradient-to-r from-indigo-500 to-teal-400 transition-all group-hover:w-14" />
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              {["Transparent pricing", "Responsive team", "Business-first advice"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-indigo-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* trademark client-matter style card (static showcase) */}
          <div className="md:justify-self-end">
            <div className="relative rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
              <div className="absolute -top-6 -left-6 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
                <Stamp className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Client matter</p>
                  <p className="font-medium">Trademark Protection</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {[
                    { label: "Search", icon: FileText },
                    { label: "USPTO Filing", icon: Stamp },
                    { label: "Monitoring", icon: ShieldCheck },
                  ].map(({ label, icon: Icon }) => (
                    <div key={label} className="rounded-xl border border-gray-100 p-4 shadow-sm flex items-center gap-2">
                      <Icon className="h-4 w-4 text-indigo-500" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* practice preview */}
      <section id="practice" className="border-t border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Practice Areas</h2>
            <span className="text-sm text-gray-500">Preview of services</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Corporate & Formation", icon: Building2, desc: "Entity setup, founder agreements, and governance." },
              { title: "Contracts Drafting", icon: FileText, desc: "Drafting and reviewing contracts that protect your interests." },
              { title: "Employment", icon: Users, desc: "Offers, handbooks, compliance, and disputes." },
              { title: "Trademark Protection", icon: ShieldCheck, desc: "Registration, search, and industry-specific guidance." },
              { title: "Entertainment Law", icon: Film, desc: "Entertainment contracts, licensing, and royalties for artists & creators." },
              { title: "Tailed Legal Services", icon: Briefcase, desc: "Customized solutions for startups, media, and more." },
            ].map(({ title, icon: Icon, desc }) => (
              <div key={title} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section className="py-20 bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      How Ascent Legal Protects What You’ve Built
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">1. Schedule a Consultation</h3>
        <p className="text-sm text-white/90">
          Book a free intro call. We’ll learn about your goals and assess your legal needs.
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">2. Get a Tailored IP Strategy</h3>
        <p className="text-sm text-white/90">
          We provide customized legal services for trademarks, copyrights, and contracts tailored to your business or brand.
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">3. Secure & Grow</h3>
        <p className="text-sm text-white/90">
          We handle filings, enforcement, and advisory so you can focus on building with confidence.
        </p>
      </div>
      
    </div>

    <div className="text-center mt-12">
      <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
        Protect Your Brand
      </button>
    </div>
  </div>
</section>

    </>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">
        About <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">Ascent Legal</span>
      </h1>
      <p className="mt-6 text-gray-600 max-w-3xl">
        Use this section to introduce the firm—mission, values, and what makes your counsel practical and business-first.
      </p>
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {[
          { label: "Years experience", value: "15+" },
          { label: "Clients served", value: "300+" },
          { label: "Avg. response", value: "<4h" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-gray-100 p-6 text-center">
            <div className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">{s.value}</div>
            <div className="mt-1 text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold">Our approach</h3>
          <p className="mt-2 text-sm text-gray-600">Clear communication, predictable fees, pragmatic advice.</p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold">Who we serve</h3>
          <p className="mt-2 text-sm text-gray-600">Startups, SMBs, and mid-market operators in tech, commerce, and regulated industries.</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { title: "Corporate & Formation", desc: "Entity setup, founder agreements, governance." },
    { title: "Commercial Contracts", desc: "MSAs, SaaS, vendor, and partnership agreements." },
    { title: "Employment", desc: "Offers, handbooks, compliance, and disputes." },
    { title: "Regulatory & Compliance", desc: "Privacy, data, and industry-specific guidance." },
    { title: "Dispute Strategy", desc: "Risk assessment and efficient resolution." },
    { title: "General Counsel Services", desc: "Flexible support for scaling companies." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Practice Areas</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">Overview of services. Replace with your exact copy and add/remove areas as needed.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{it.desc}</p>
            <button className="mt-4 text-sm font-medium text-gray-700 hover:text-indigo-600 inline-flex items-center gap-2">
              Learn more
              <span className="h-[2px] w-8 bg-gradient-to-r from-indigo-500 to-teal-400 group-hover:w-12 transition-all" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function IP() {
  const steps = ["Search", "File", "Monitor"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Intellectual Property</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        Protect brand and creative assets. Outline benefits and process; cross-link to Trademark Registration.
      </p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={s} className="rounded-2xl border border-gray-100 p-6">
            <div className="text-sm text-gray-500">Step {i + 1}</div>
            <h3 className="mt-1 font-semibold">{s}</h3>
            <p className="mt-2 text-sm text-gray-600">Short description of the {s.toLowerCase()} phase.</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white">Start Trademark</button>
      </div>
    </section>
  );
}

function Trademark() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Trademark Services</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Landing page for trademark offerings. Summarize packages, timelines, and outcomes.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {["Search & Opinion", "Application Filing", "Office Action Response"].map((t) => (
          <div key={t} className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-gray-600">Brief description of what is included.</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white">Begin Registration</button>
      </div>
    </section>
  );
}

function TrademarkRegistration() {
  const faqs = [
    { q: "How long does registration take?", a: "Typical timelines and what to expect." },
    { q: "What are the government fees?", a: "Breakdown of USPTO costs and legal fees." },
    { q: "Do I need a search first?", a: "Why comprehensive search reduces risk." },
  ];
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Trademark Registration</h1>
      <ol className="mt-6 list-decimal list-inside space-y-2 text-gray-700">
        <li>Discovery & search</li>
        <li>Application drafting</li>
        <li>USPTO filing</li>
        <li>Monitoring & maintenance</li>
      </ol>
      <div className="mt-10">
        <h2 className="text-xl font-semibold">FAQs</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-gray-100 p-4">
              <div className="font-medium">{f.q}</div>
              <div className="mt-1 text-sm text-gray-600">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white">Book a Consult</button>
      </div>
    </section>
  );
}

function Copyright() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Copyright</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Protect original works. Outline registration, enforcement, and licensing support.</p>
    </section>
  );
}

function BusinessStartup() {
  const packages = [
    { name: "Starter", price: "$X,XXX", items: ["Entity formation", "EIN guidance", "Operating Agreement"] },
    { name: "Growth", price: "$X,XXX", items: ["Everything in Starter", "Founder equity docs", "First contracts bundle"] },
    { name: "Scale", price: "Custom", items: ["GC support", "Policy suite", "Compliance roadmap"] },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Business Startup</h1>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className="rounded-2xl border border-gray-100 p-6">
            <div className="text-sm text-gray-500">Package</div>
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="mt-2 text-2xl bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent font-bold">{p.price}</div>
            <ul className="mt-4 space-y-1 text-sm text-gray-600">
              {p.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <Check className="h-4 w-4 text-indigo-500" /> {i}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white">Choose</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Entertainment() {
  const verticals = ["TV/Film", "Digital Media", "Fashion", "Publishing"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Entertainment</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {verticals.map((v) => (
          <div key={v} className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">{v}</h3>
            <p className="mt-2 text-sm text-gray-600">Representative matters and services offered.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Resources() {
  const tiles = Array.from({ length: 4 }).map((_, i) => ({
    title: `Featured Article ${i + 1}`,
    desc: "Short summary of the guide or post.",
  }));
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Resources</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {tiles.map((t) => (
          <div key={t.title} className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            <button className="mt-3 text-sm text-indigo-600 hover:underline">Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Let's talk</h1>
        <p className="mt-4 text-gray-600">
          Tell us about your matter and we'll get back within one business day.
        </p>
        <div className="mt-8 space-y-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-indigo-500" /> Transparent flat-fee options
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-teal-400" /> Dedicated point of contact
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-indigo-500" /> Secure client portal
          </div>
        </div>
      </div>
      <form className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4">
          <input className="h-11 rounded-md border border-gray-300 px-3" placeholder="Your name" />
          <input type="email" className="h-11 rounded-md border border-gray-300 px-3" placeholder="Email" />
          <input className="h-11 rounded-md border border-gray-300 px-3" placeholder="Company" />
          <textarea rows={5} className="rounded-md border border-gray-300 px-3 py-2" placeholder="How can we help?" />
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-3 text-white">
              Send message
            </button>
          </motion.div>
        </div>
        <p className="mt-3 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
      </form>
    </section>
  );
}

/* ---------- APP (client-side page switcher) ---------- */
export default function Page() {
  const [page, setPage] = useState("home");
  const go = (p) => setPage(p);

  return (
    <Shell onNavigate={go} current={page}>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "ip" && <IP />}
      {page === "trademark" && <Trademark />}
      {page === "trademark-registration" && <TrademarkRegistration />}
      {page === "copyright" && <Copyright />}
      {page === "startup" && <BusinessStartup />}
      {page === "entertainment" && <Entertainment />}
      {page === "resources" && <Resources />}
      {page === "contact" && <Contact />}
    </Shell>
  );
}
