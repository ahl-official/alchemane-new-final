import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function StudioVisit() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="relative grid overflow-hidden border-l-[9px] border-accent bg-[#f4f1eb] md:grid-cols-[0.82fr_1.18fr] md:items-stretch"
    >
      <Reveal className="order-2 flex flex-col justify-center gap-4 p-8 md:order-1 md:p-16">
        <h2 id="studio-title" className="font-display text-title text-ink text-balance">
          Want to Try Out
          <br />
          Our Hair Extensions
          <br />
          In-Person?
        </h2>
        <p className="max-w-md text-body text-muted">Try and buy natural hair extensions, wigs and toppers that suit your hair needs.</p>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#consultation" className="inline-flex min-w-[210px] min-h-[48px] items-center justify-between gap-4 bg-ink px-6 text-small font-semibold text-white">
            Visit us <span aria-hidden="true">↗</span>
          </a>
          <a href="#consultation" className="inline-flex min-h-[48px] items-center border-b border-line text-small text-ink">
            Prefer to meet online?
          </a>
        </div>
      </Reveal>
      <Reveal className="relative order-1 aspect-[16/9] w-full md:order-2 md:aspect-auto">
        <Image
          src="/assets/studio-visit/consultation-desktop-1774.webp"
          alt="A hair specialist helping a client compare a brunette hair extension in a private consultation"
          fill
          sizes="(max-width: 900px) 100vw, 58vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
