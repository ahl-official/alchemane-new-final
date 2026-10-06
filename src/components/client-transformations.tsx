import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function ClientTransformations() {
  return (
    <section id="client-closeups" aria-labelledby="client-closeups-title" className="section-wrap text-center">
      <Reveal>
        <h2 id="client-closeups-title" className="font-display text-title text-ink">
          See real hair transformations
        </h2>
      </Reveal>
      <figure className="mx-auto mt-6 max-w-md">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src="/assets/client-portrait-collage-v2.webp"
            alt="Illustrative group portrait of five women showing different hair lengths and textures"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
          />
          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
              <svg viewBox="0 0 32 32" className="h-6 w-6 text-ink">
                <path d="M7.1244 4 28.1244 16.1244 7.1244 28.2487Z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </div>
        <figcaption className="sr-only">Concept imagery for design preview</figcaption>
      </figure>
    </section>
  );
}
