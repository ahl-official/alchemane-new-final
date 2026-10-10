import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function FounderSection() {
  return (
    <section id="our-story" aria-labelledby="founder-title" className="bg-ink text-white">
      <div className="section-wrap">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            <Image
              src="/assets/founder-vinitt-1200.webp"
              alt="Vinitt Dessai, founder of Alchemane"
              fill
              sizes="(max-width: 700px) 92vw, 45vw"
              className="object-cover"
            />
          </div>
          <Reveal>
            <h2 id="founder-title" className="font-display text-title text-white">
              Meet your hair expert
            </h2>
            <p className="mt-3 text-body text-mist">Vinitt Dessai and his team help you find the right hair, colour and fit.</p>
            <div className="mt-8 flex gap-12 border-y border-white/20 py-6">
              <div>
                <strong className="block font-display text-4xl text-white">15+</strong>
                <span className="text-small text-mist">Years of experience</span>
              </div>
              <div>
                <strong className="block font-display text-4xl text-white">6,330+</strong>
                <span className="text-small text-mist">Clients helped</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
