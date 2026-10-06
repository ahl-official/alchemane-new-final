import Image from "next/image";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, STUDIO_ADDRESS } from "@/lib/constants";

const socials = [
  { href: "https://www.facebook.com/", label: "Facebook", icon: "/icons/footer/facebook.svg" },
  { href: "https://www.instagram.com/", label: "Instagram", icon: "/icons/footer/instagram.svg" },
  { href: "https://x.com/", label: "X", icon: "/icons/footer/x.svg" },
  { href: "https://www.youtube.com/", label: "YouTube", icon: "/icons/footer/youtube.svg" },
];

export function SiteFooter() {
  return (
    <footer aria-label="Footer" className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-12 md:grid-cols-4 md:px-10">
        <div className="flex flex-col gap-4">
          <a href="#home" aria-label="Alchemane home">
            <Image src="/icons/new-logo.svg" alt="" width={160} height={40} />
          </a>
          <address className="text-small not-italic text-muted">
            <strong className="text-ink">Address</strong> – {STUDIO_ADDRESS}
          </address>
          <nav aria-label="Alchemane social media" className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <Image src={s.icon} alt="" width={28} height={28} />
              </a>
            ))}
          </nav>
        </div>

        <nav aria-label="Solutions" className="flex flex-col gap-2">
          <p className="text-small font-semibold text-ink">Solutions</p>
          <a href="#collection" className="text-small text-muted hover:text-ink">Hair Extensions</a>
          <a href="#collection" className="text-small text-muted hover:text-ink">Hair Wigs</a>
          <a href="#collection" className="text-small text-muted hover:text-ink">Hair Toppers</a>
        </nav>

        <nav aria-label="Quick links" className="flex flex-col gap-2">
          <p className="text-small font-semibold text-ink">Quick Links</p>
          <a href="#consultation" className="text-small text-muted hover:text-ink">Privacy Policy</a>
          <a href="#consultation" className="text-small text-muted hover:text-ink">Returns and Exchanges</a>
          <a href="#consultation" className="text-small text-muted hover:text-ink">Shipping and Delivery</a>
          <a href="#consultation" className="text-small text-muted hover:text-ink">Terms of Service</a>
          <a href="#questions" className="text-small text-muted hover:text-ink">Blogs</a>
        </nav>

        <div className="flex flex-col gap-2">
          <p className="text-small font-semibold text-ink">Contact Us</p>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-small text-muted hover:text-ink">
            <Image src="/icons/footer/call.svg" alt="" width={24} height={24} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-small text-muted hover:text-ink">
            <Image src="/icons/footer/mail.svg" alt="" width={24} height={24} />
            <span>{EMAIL}</span>
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-content items-center justify-between border-t border-line px-5 py-4 text-small text-muted md:px-10">
        <span>© 2026 - Alchemane Hair Extensions</span>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
