import Link from "next/link";
import { Panel } from "@/components/ui/panel";
import { Logo } from "@/components/ui/logo";
import { site, waLink } from "@/content/site";
import { systems } from "@/content/systems";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Panel
      as="footer"
      tone="dark"
      className="mt-3 mb-3 max-[680px]:mt-2 max-[680px]:mb-2"
    >
      <div className="px-[clamp(20px,4vw,56px)] pt-[clamp(40px,5vw,72px)]">
        <div className="grid grid-cols-12 gap-6">
          {/* BRAND COLUMN */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
            <Logo size="footer" href="/" priority={false} />
            <p className="text-[15px] max-w-[30ch] text-on-dark-2 leading-relaxed">
              AI systems engineered in Nairobi for businesses across Africa.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-line-dark flex items-center justify-center text-on-dark-2 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {s.label === "LinkedIn" && (
                    <LinkedinIcon className="h-4 w-4" />
                  )}
                  {s.label === "Instagram" && (
                    <InstagramIcon className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 1: COMPANY */}
          <div className="col-span-6 sm:col-span-4 lg:col-start-7 lg:col-span-2">
            <div className="text-[13px] text-on-dark-3 mb-3.5 font-medium tracking-wide">
              Company
            </div>
            <ul className="grid gap-2.5 text-[14.5px] text-white">
              <li>
                <Link href="/about" className="hover:text-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: SYSTEMS */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className="text-[13px] text-on-dark-3 mb-3.5 font-medium tracking-wide">
              Systems
            </div>
            <ul className="grid gap-2.5 text-[14.5px] text-white">
              {systems.map((sys) => (
                <li key={sys.id}>
                  <Link
                    href={`/services#${sys.id}`}
                    className="hover:text-cyan transition-colors"
                  >
                    {sys.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <div className="text-[13px] text-on-dark-3 mb-3.5 font-medium tracking-wide">
              Contact
            </div>
            <ul className="grid gap-2.5 text-[14.5px] text-white">
              <li className="text-on-dark-2">{site.location}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-cyan transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="hover:text-cyan transition-colors"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* GIANT WORDMARK */}
        <div className="text-white font-sans">
          <svg
            viewBox="0 0 1000 150"
            aria-hidden="true"
            className="mt-[clamp(48px,7vw,96px)] block h-auto w-full select-none"
          >
            <text
              x="0"
              y="128"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fontWeight="500"
              fontSize="170"
              fill="currentColor"
            >
              NeuroGrowth
            </text>
          </svg>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-wrap justify-between gap-3 border-t border-line-dark px-[clamp(20px,4vw,56px)] py-5 text-[13px] text-on-dark-3">
        <div>
          © {currentYear} {site.legalName}. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </Panel>
  );
}

export default SiteFooter;
