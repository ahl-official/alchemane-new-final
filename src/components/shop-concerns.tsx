import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  { label: "Top Area", mobile: "/assets/concerns/top-area-mobile.webp", desktop: "/assets/concerns/top-area-desktop.webp", alt: "A woman checking natural volume at the top of her hair" },
  { label: "Back Area", mobile: "/assets/concerns/back-area-mobile.webp", desktop: "/assets/concerns/back-area-desktop.webp", alt: "A stylist arranging long, naturally full hair at the back" },
  { label: "Hairline", mobile: "/assets/concerns/hairline-mobile.webp", desktop: "/assets/concerns/hairline-desktop.webp", alt: "A woman smoothing her natural-looking front hairline" },
  { label: "Crown Area", mobile: "/assets/concerns/crown-area.webp", desktop: "/assets/concerns/crown-area.webp", alt: "A woman checking the natural volume at her crown" },
];

export function ShopConcerns() {
  return (
    <section aria-labelledby="shop-concerns-title" className="section-wrap">
      <Reveal>
        <h2 id="shop-concerns-title" className="font-display text-title text-ink">
          Shop by Concerns
        </h2>
      </Reveal>
      <div role="list" className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {cards.map((card) => (
          <a key={card.label} href="#collection" role="listitem" className="group relative block aspect-[4/5] overflow-hidden">
            <picture>
              <Image src={card.mobile} alt={card.alt} fill sizes="50vw" className="object-cover md:hidden" />
            </picture>
            <Image src={card.desktop} alt={card.alt} fill sizes="25vw" className="hidden object-cover md:block" />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/70 to-transparent p-3 text-white">
              <span className="text-small font-semibold">{card.label}</span>
              <i aria-hidden="true">↗</i>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
