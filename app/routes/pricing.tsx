import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import { 
  Check, 
  Minus, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  Lock,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router';

export function meta() {
  return [
    { title: "Pricing & Plans — Ruya3D Architecture" },
    { name: "description", content: "Transparent pricing tiers for independent architects, design studios, and enterprise firms. Unlimited 4K renders, commercial licenses, and team seats." },
    { name: "keywords", content: "architectural rendering pricing, 3D visualization subscription, floor plan render cost, Pro architect plan, commercial rendering license" },
    // Open Graph
    { property: "og:title", content: "Pricing & Plans — Ruya3D Architecture" },
    { property: "og:description", content: "Transparent, flexible pricing for solo architects, design studios, and enterprise firms." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ruya3d.com/pricing" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
    { property: "og:site_name", content: "Ruya3D" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@ruya3d" },
    { name: "twitter:title", content: "Pricing & Plans — Ruya3D Architecture" },
    { name: "twitter:description", content: "Unlimited 4K photorealistic architectural renders with commercial rights." },
    { name: "twitter:image", content: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  ];
}

const FAQS = [
  {
    q: "Do I retain commercial rights to rendered images?",
    a: "Yes, 100%. All Pro, Studio, and Enterprise renders include full commercial rights. You can use your 3D visualizations in client presentations, marketing collateral, real estate listings, and permit submissions."
  },
  {
    q: "How does the annual billing discount work?",
    a: "When you choose annual billing, you receive a 20% discount on all paid plans, charged upfront for 12 months."
  },
  {
    q: "Can I upgrade, downgrade, or cancel anytime?",
    a: "Absolutely. You can switch plans or cancel your subscription at any point from your account settings with zero cancellation fees."
  },
  {
    q: "How does Ruya3D protect proprietary architectural blueprints?",
    a: "All uploaded blueprints and generated 3D renders are encrypted at rest and in transit via Puter Cloud infrastructure. Private projects are never shared or used to train public models without explicit consent."
  },
  {
    q: "Do you offer academic or non-profit discounts?",
    a: "Yes! Architecture students, professors, and accredited academic institutions can apply for a 50% discount on Pro plans with a valid .edu email address."
  },
  {
    q: "What is custom AI model fine-tuning for Enterprise?",
    a: "We train a dedicated neural checkpoint on your firm's specific portfolio, proprietary CAD symbols, preferred millwork details, and signature lighting styles."
  }
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plans = [
    {
      name: "Starter",
      desc: "For architecture students, hobbyists, and early experimentation.",
      price: "$0",
      period: "forever",
      cta: "Get Started Free",
      ctaTo: "/#upload",
      variant: "outline",
      featured: false,
      badge: null,
      features: [
        "5 renders per month",
        "Standard 1080p resolution",
        "Core PBR material presets",
        "Public community sharing",
        "Standard queue speed (~30s)",
        "Puter cloud storage (500MB)"
      ],
      notIncluded: [
        "4K Ultra-HD raytracing",
        "Private unlisted projects",
        "Commercial usage license",
        "Priority GPU acceleration",
        "API & Webhook access"
      ]
    },
    {
      name: "Pro",
      desc: "For independent architects, interior designers, and visualizers.",
      price: annual ? "$24" : "$29",
      period: "per month, billed " + (annual ? "annually" : "monthly"),
      cta: "Start Pro Plan",
      ctaTo: "/#upload",
      variant: "primary",
      featured: true,
      badge: "Most Popular",
      features: [
        "Unlimited 2D-to-3D renders",
        "4K Ultra-HD photorealism",
        "Full 400+ PBR Material library",
        "Private & unlisted projects",
        "Full commercial rights & license",
        "Priority GPU inference (<15s)",
        "Watermark-free downloads",
        "Puter cloud storage (25GB)",
        "Direct image export (PNG, PDF)"
      ],
      notIncluded: [
        "Team seat management",
        "Custom AI model fine-tuning"
      ]
    },
    {
      name: "Studio",
      desc: "For architectural practices, interior design agencies, and teams.",
      price: annual ? "$64" : "$79",
      period: "per month, billed " + (annual ? "annually" : "monthly"),
      cta: "Upgrade to Studio",
      ctaTo: "/#upload",
      variant: "secondary",
      featured: false,
      badge: "Best for Teams",
      features: [
        "Everything in Pro, plus:",
        "5 included team seats",
        "Shared project workspace",
        "Centralized asset & texture library",
        "Expedited GPU render queue (<10s)",
        "Revision history & comparison slider",
        "REST API & Webhooks (1,000 req/mo)",
        "Custom firm branding on exports",
        "Priority support via private channel"
      ],
      notIncluded: [
        "Dedicated GPU cluster",
        "Custom AI fine-tuning"
      ]
    },
    {
      name: "Enterprise",
      desc: "For global architecture firms, real estate developers, and enterprises.",
      price: "Custom",
      period: "tailored billing & SLAs",
      cta: "Contact Enterprise",
      ctaTo: "/enterprise",
      variant: "outline",
      featured: false,
      badge: "Enterprise Grade",
      features: [
        "Everything in Studio, plus:",
        "Unlimited seats with SSO & SAML",
        "Custom AI model fine-tuning",
        "Dedicated private GPU cluster",
        "Revit, ArchiCAD & Rhino plugins",
        "SOC2 Type II compliance & audit logs",
        "99.9% uptime SLA guarantee",
        "Dedicated solutions architect & 24/7 SLA"
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs mb-6">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-700">
            Simple, Transparent Pricing
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-black max-w-4xl mx-auto leading-[0.95] mb-6">
          Pick the perfect plan for your spatial design vision.
        </h1>

        <p className="max-w-xl mx-auto text-sm font-mono uppercase tracking-wide text-zinc-500 mb-10 leading-relaxed">
          From solo concept rendering to enterprise firm pipelines. No hidden fees. Cancel anytime.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="inline-flex items-center bg-white p-1.5 rounded-xl border border-zinc-200 shadow-xs mb-12">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              !annual ? "bg-zinc-900 text-white shadow-xs" : "text-zinc-600 hover:text-black"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              annual ? "bg-primary text-white shadow-xs" : "text-zinc-600 hover:text-black"
            }`}
          >
            Annual Billing
            <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded font-mono font-bold">
              Save 20%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured
                  ? "bg-white border-2 border-primary shadow-2xl ring-4 ring-primary/10 -translate-y-2"
                  : "bg-white border border-zinc-200 shadow-md hover:border-zinc-300 hover:shadow-xl"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                    plan.featured
                      ? "bg-primary text-white shadow-md"
                      : "bg-zinc-900 text-white"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-serif font-bold text-black mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-zinc-500 mb-6 min-h-10 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-zinc-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-serif font-bold text-black">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-xs text-zinc-400 font-mono">/month</span>
                    )}
                  </div>
                  <span className="text-[11px] text-zinc-400 font-mono block mt-1">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                    Included Features:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-zinc-700 gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-zinc-400 gap-2.5 opacity-50">
                      <Minus className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  to={plan.ctaTo}
                  className={`w-full py-3 rounded-lg text-xs uppercase tracking-wider font-bold transition-all text-center flex items-center justify-center gap-2 ${
                    plan.featured
                      ? "bg-primary text-white hover:bg-[#3939BF] shadow-md"
                      : plan.name === "Enterprise"
                      ? "bg-zinc-900 text-white hover:bg-black"
                      : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 border border-zinc-300"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-white border-y border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              In-Depth Comparison
            </span>
            <h2 className="text-4xl font-serif text-black mt-2 mb-4">
              Compare All Plan Specifications
            </h2>
            <p className="text-zinc-500 text-sm">
              Everything you need to know about our architectural engine tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-[#fdfbf7]">
                  <th className="py-4 px-4 font-mono font-bold uppercase text-zinc-500">Feature</th>
                  <th className="py-4 px-4 font-bold text-zinc-900 text-center">Starter</th>
                  <th className="py-4 px-4 font-bold text-primary text-center bg-primary/5">Pro</th>
                  <th className="py-4 px-4 font-bold text-zinc-900 text-center">Studio</th>
                  <th className="py-4 px-4 font-bold text-zinc-900 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {[
                  { name: "Monthly Render Allowance", starter: "5", pro: "Unlimited", studio: "Unlimited", ent: "Unlimited" },
                  { name: "Max Resolution", starter: "1080p (FHD)", pro: "4K (UHD)", studio: "4K (UHD)", ent: "8K Ultra" },
                  { name: "Rendering Speed", starter: "~30s", pro: "< 15s", studio: "< 10s", ent: "Sub-5s Dedicated" },
                  { name: "Commercial License", starter: "No", pro: "Yes", studio: "Yes", ent: "Yes (Full Enterprise)" },
                  { name: "PBR Material Library", starter: "Basic (20)", pro: "Full (400+)", studio: "Full + Custom", ent: "Bespoke Firm Specs" },
                  { name: "Text & Symbol Cleansing", starter: "Standard", pro: "Advanced", studio: "Advanced", ent: "Custom OCR Rules" },
                  { name: "Team Seats", starter: "1", pro: "1", studio: "5 Included", ent: "Unlimited" },
                  { name: "Export Formats", starter: "PNG", pro: "PNG, JPG, PDF", studio: "PNG, PDF, GLTF", ent: "All + IFC, DWG, BIM" },
                  { name: "Custom AI Fine-Tuning", starter: "No", pro: "No", studio: "No", ent: "Yes (Dedicated)" },
                  { name: "SSO / SAML 2.0", starter: "No", pro: "No", studio: "No", ent: "Yes (Okta, Azure, Google)" },
                  { name: "Customer Support", starter: "Community", pro: "Priority Email", studio: "Private Discord", ent: "24/7 SLA + Dedicated Rep" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-zinc-900">{row.name}</td>
                    <td className="py-3.5 px-4 text-center text-zinc-600">{row.starter}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-primary bg-primary/5">{row.pro}</td>
                    <td className="py-3.5 px-4 text-center text-zinc-800">{row.studio}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-zinc-900">{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-xs">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-black mb-1">14-Day Guarantee</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Try Pro risk-free. If you are not satisfied, get a full refund within 14 days.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-xs">
              <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-black mb-1">Encrypted & Private</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Blueprints are stored securely on Puter with end-to-end access permissions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-xs">
              <Headphones className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-black mb-1">Architect Support</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Direct support from 3D visualization specialists and machine learning engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl font-serif text-black mt-2 mb-3">
              Questions & Answers
            </h2>
            <p className="text-zinc-500 text-sm">
              Have other questions? Contact our team anytime.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-zinc-200 bg-[#fdfbf7] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-zinc-900 cursor-pointer hover:bg-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
