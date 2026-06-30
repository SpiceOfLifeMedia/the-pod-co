import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Creator",
    audience: "For individuals and solo creators",
    price: "Free to try",
    priceNote: "No credit card required",
    cta: "Get Started Free",
    ctaHref: "https://podsentral.vercel.app/sign-up",
    highlight: false,
    features: [
      "Up to 3 active projects",
      "Smart Audio processing",
      "AI transcription & show notes",
      "Local MP3 / AAC export",
      "PODcheck voice analysis",
      "1 workspace",
    ],
  },
  {
    name: "Team",
    audience: "For businesses and content teams",
    price: "Coming soon",
    priceNote: "Join the waitlist",
    cta: "Join Waitlist",
    ctaHref: "#contact",
    highlight: true,
    features: [
      "Unlimited projects",
      "Multi-member workspace",
      "Upload codes for contributors",
      "Review & approval workflows",
      "Full AI production suite",
      "Priority support",
    ],
  },
  {
    name: "Education & Enterprise",
    audience: "Schools, universities, councils and organisations",
    price: "Custom",
    priceNote: "Tailored to your team size",
    cta: "Contact Us",
    ctaHref: "#education",
    highlight: false,
    features: [
      "Bulk licences",
      "Admin controls & reporting",
      "Team onboarding",
      "Student / member portal",
      "Priority support",
      "Dedicated account manager",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#0D0F13] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-xl mb-16">
          <p className="font-mono text-[10px] text-[#3262DF] uppercase tracking-[0.22em] font-semibold mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-[#A0A5B2] text-base leading-relaxed">
            Start free. Scale when you're ready. No hidden fees — we'll always tell you what you're paying for.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                tier.highlight
                  ? "bg-[#1C2333] border border-[#3262DF]/50 shadow-lg shadow-[#3262DF]/10"
                  : "bg-[#13151A] border border-white/6"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-[#3262DF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs text-[#A0A5B2] font-semibold uppercase tracking-widest mb-2">{tier.name}</p>
                <p className="text-white text-2xl font-bold mb-1">{tier.price}</p>
                <p className="text-[#696E7C] text-sm">{tier.priceNote}</p>
              </div>

              <p className="text-[#A0A5B2] text-sm mb-6 leading-relaxed">{tier.audience}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#C8CDD8]">
                    <Check className="w-3.5 h-3.5 text-[#3262DF] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-[#3262DF] text-white hover:bg-[#284FC4]"
                    : "bg-white/6 text-white hover:bg-white/10 border border-white/8"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
