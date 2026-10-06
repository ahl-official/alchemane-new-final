import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function StudioVisit() {
  return (
    <section id="studio" aria-labelledby="studio-title" className="grid md:grid-cols-2 md:items-stretch">
      <Reveal className="relative aspect-[16/9] w-full md:aspect-auto">
        <Image
          src="/assets/studio-visit/consultation-desktop-1774.webp"
          alt="A hair specialist helping a client compare a brunette hair extension in a private consultation"
          fill
          sizes="(max-width: 900px) 100vw, 58vw"
          className="object-cover"
        />
      </Reveal>
      <Reveal className="flex flex-col justify-center gap-4 bg-mist p-8 md:p-12">
        <h2 id="studio-title" className="font-display text-title text-ink">
          Want to Try Out
          <br />
          Our Hair Extensions
          <br />
          In-Person?
        </h2>
        <p className="text-body text-muted">Try and buy natural hair extensions, wigs and toppers that suit your hair needs.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#consultation" className="inline-flex min-h-[48px] items-center rounded-sm bg-ink px-6 text-small font-semibold text-white">
            Visit us <span aria-hidden="true">↗</span>
          </a>
          <a href="#consultation" className="text-small font-semibold text-ink underline-offset-4 hover:underline">
            Prefer to meet online?
          </a>
        </div>
      </Reveal>
    </section>
  );
}
