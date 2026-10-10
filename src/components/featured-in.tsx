import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const logos = [
  { src: "/icons/Vouge.svg", alt: "Vogue", w: 1544, h: 410 },
  { src: "/icons/PB.png", alt: "Professional Beauty", w: 2481, h: 982 },
  { src: "/icons/ET.svg", alt: "The Economic Times", w: 930, h: 94 },
];

export function FeaturedIn() {
  return (
    <section aria-labelledby="media-coverage-title" className="bg-fog">
      <div className="section-wrap text-center">
        <Reveal>
          <h2 id="media-coverage-title" className="font-display text-title text-ink">
            Featured In
          </h2>
        </Reveal>
        <ul role="list" className="mx-auto mt-8 grid max-w-xs grid-cols-1 items-center justify-items-center gap-7 sm:max-w-none sm:grid-cols-3 sm:gap-10">
          {logos.map((logo) => (
            <li key={logo.alt} className="relative h-10 w-28">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="112px" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
