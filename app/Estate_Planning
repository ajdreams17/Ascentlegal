import React from "react";
import { Check, Gavel, Shield, FileText, Scale, Calendar, Mail, Phone, MapPin, Quote, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EstatePlanningLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <div className="w-full bg-slate-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <span className="flex items-center gap-2"><Shield className="h-4 w-4"/> Secure. Confidential. California Compliant.</span>
          <a href="#contact" className="underline underline-offset-4 flex items-center gap-2"><Phone className="h-4 w-4"/> (555) 123‑4567</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">AL</div>
            <div className="leading-tight">
              <div className="font-semibold">Ascent Legal</div>
              <div className="text-xs text-slate-500">California Estate Planning</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900 text-slate-600">Services</a>
            <a href="#process" className="hover:text-slate-900 text-slate-600">Process</a>
            <a href="#pricing" className="hover:text-slate-900 text-slate-600">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">FAQ</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild>
              <a href="#contact" className="flex items-center">Book a Free Consult <ArrowRight className="ml-2 h-4 w-4"/></a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="max-w-7xl mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                California Estate Planning—Clear, Compliant, and Secure
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Wills, trusts, and powers of attorney designed for California families and professionals. Fixed-fee options, fast turnaround, and attorney oversight.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#contact" className="flex items-center">Schedule a Call <Calendar className="ml-2 h-4 w-4"/></a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#services">See Services</a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2"><Check className="h-4 w-4"/> Flat, transparent pricing</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4"/> California-barred attorneys</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4"/> Remote & in‑office notarization</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-slate-100 shadow-xl border grid place-items-center">
                <Scale className="h-16 w-16 text-slate-400"/>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border shadow-lg rounded-2xl p-4 max-w-sm">
                <div className="text-sm text-slate-600">Trusted by California families, founders, and professionals.</div>
                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                  <Users className="h-4 w-4"/> 500+ California plans completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services – add TOD deed mention */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Estate Planning Services</h2>
            <p className="mt-3 text-slate-600">Focused on California law. Start with a complimentary consultation and we’ll recommend the right scope for your goals and budget.</p>
          </div>
          <div className="mt-6 text-sm text-slate-600">
            <p className="mb-4">We also advise on California’s <strong>Revocable Transfer-on-Death (TOD) Deed</strong>, a tool that can simplify passing a home to heirs without probate, though it has important limitations.</p>
          </div>
        </div>
      </section>

      {/* FAQ with CA-specific questions */}
      <section id="faq" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-600">Have more questions? We’ll explain California’s rules on a quick call.</p>
          </div>
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>What are California witnessing and notarization rules?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Wills must be signed by you and witnessed by two adults; notarization isn’t required. A California Advance Health Care Directive and a Durable Power of Attorney must be either notarized or witnessed by two adults (with extra restrictions for health‑care facility residents). Many real‑property deeds and trust certifications should be notarized for recording.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>What are California small‑estate shortcuts?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  For deaths on or after Apr 1, 2025, heirs can often use affidavits when total probate assets are $208,850 or less. A primary residence up to $750,000 may qualify for a simplified court petition. Certain small‑value real property transfers may use affidavits—thresholds adjust over time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is a Transfer‑on‑Death (TOD) deed available in CA?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes. California’s Revocable TOD Deed program remains available with updated forms and notice requirements. It can be a useful tool, but it doesn’t fit every situation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Compliance in Footer */}
      <footer className="border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <div className="font-semibold text-slate-900">Ascent Legal</div>
            <div className="text-xs mt-2">California Estate Planning</div>
            <div className="text-xs mt-4">© {new Date().getFullYear()} Ascent Legal. All rights reserved.</div>
          </div>
          <div>
            <div className="font-medium text-slate-900">Compliance</div>
            <ul className="mt-3 space-y-2">
              <li>Attorney Advertising</li>
              <li>No legal advice until engagement signed</li>
              <li>Jurisdiction: California</li>
              <li>California State Bar #: Insert here</li>
              <li>Small‑estate thresholds: $208,850 personal property; $750,000 primary residence (for deaths after Apr 1, 2025)</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Ascent Legal – California Estate Planning",
        "url": "https://estate.ascentlegal.io",
        "areaServed": "California",
        "priceRange": "$$$",
        "telephone": "+1-555-123-4567",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main St, Suite 200",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "postalCode": "90001",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://www.linkedin.com/company/ascentlegal"
        ],
        "makesOffer": [
          {"@type": "Offer", "name": "California Will Package", "price": "1500", "priceCurrency": "USD"},
          {"@type": "Offer", "name": "California Trust Plan", "price": "3200", "priceCurrency": "USD"}
        ]
      }) }} />
    </div>
  );
}
