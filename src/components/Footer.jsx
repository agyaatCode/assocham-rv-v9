import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { LOGO_URL } from "../data/navData";

const QUICK = [
  "About Us",
  "Initiatives",
  "Sectors",
  "Regions",
  "International",
  "Knowledge",
  "Events",
  "Membership",
  "Foundation",
];
const RESOURCES = [
  "Media Room",
  "Press Releases",
  "Press Coverage",
  "Annual Reports",
  "Financials",
  "Careers",
  "RTI",
  "Privacy Policy",
  "Terms of Use",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      data-testid="footer-section"
      className="bg-[#0f0709] text-white/80 border-t-4 border-[#E8A83A]"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-3 inline-block">
            <img src={LOGO_URL} alt="ASSOCHAM" className="h-16 w-auto" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            The Associated Chambers of Commerce and Industry of India — the
            country&apos;s oldest apex chamber, serving the Indian industry since 1920.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[#E8A83A] shrink-0" />
              <span>4th Floor, YMCA Cultural Centre, 1 Jai Singh Road, New Delhi — 110001</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#E8A83A]" />
              <span>+91-11-4655 0555</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#E8A83A]" />
              <span>assocham@nic.in</span>
            </div>
          </div>
        </div>

        {/* Quick */}
        <div>
          <div className="text-[11px] tracking-[0.25em] text-[#E8A83A] font-bold">NAVIGATE</div>
          <ul className="mt-5 space-y-2.5">
            {QUICK.map((q) => (
              <li key={q}>
                <a
                  href={`#${q.toLowerCase().replace(/s+/g, "-")}`}
                  className="text-sm hover:text-[#F4C95D] transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {q}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <div className="text-[11px] tracking-[0.25em] text-[#E8A83A] font-bold">RESOURCES</div>
          <ul className="mt-5 space-y-2.5">
            {RESOURCES.map((q) => (
              <li key={q}>
                <a
                  href="#"
                  className="text-sm hover:text-[#F4C95D] transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {q}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <div className="text-[11px] tracking-[0.25em] text-[#E8A83A] font-bold">GET IN TOUCH</div>
          <p className="mt-5 text-sm text-white/70">
            Interested in partnering, joining a sector council or speaking at our events?
          </p>
          <a
            href="#membership"
            data-testid="footer-cta"
            className="mt-5 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#E8A83A] text-[#0f0709] text-sm font-bold rounded-full hover:bg-[#F4C95D] transition-colors"
          >
            Apply for Membership
          </a>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center justify-center gap-2 w-full px-5 py-3 border border-white/20 text-white text-sm font-semibold rounded-full hover:border-[#E8A83A] transition-colors"
          >
            Contact the Secretariat
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} The Associated Chambers of Commerce and Industry of India. All Rights Reserved.
          </div>
          <div className="text-xs text-white/40 font-serif italic">
            Ideate · Innovate · Impact
          </div>
        </div>
      </div>
    </footer>
  );
}
