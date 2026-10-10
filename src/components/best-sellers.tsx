import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

type BestSeller = { href: string; category: string; name: string; price: string; image: string | null; alt?: string };

const items: BestSeller[] = [
  { href: "#collection", category: "Hairline Series", name: "Hairline Toppers", price: "Enquire for price", image: null },
  { href: "https://alchemane.com/products/silk-hair-toppers", category: "Hair Toppers", name: "Silk Topper 5x3", price: "From ₹28,000", image: "/assets/range/silk-hair-toppers-a.webp", alt: "Silk base hair topper held beside the model's parting" },
  { href: "https://alchemane.com/products/skin-topper", category: "Hair Toppers", name: "Skin Topper 5x3", price: "From ₹28,000", image: "/assets/range/skin-topper-a.webp", alt: "Skin base hair topper held beside the model's parting" },
  { href: "https://alchemane.com/products/fringe-with-sides", category: "Fringes", name: "Fringe With Sides", price: "₹2,500", image: "/assets/range/fringe-with-sides-a.webp", alt: "Model holding a clip-in fringe with side pieces" },
];

export function BestSellers() {
  return (
    <section aria-labelledby="best-sellers-title" className="section-wrap">
      <Reveal>
        <h2 id="best-sellers-title" className="font-display text-title text-ink">
          Our Best Sellers
        </h2>
      </Reveal>
      <div role="list" aria-label="Best-selling hair products" className="mt-6 flex gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <article role="listitem" key={item.name} className="w-[220px] shrink-0 md:w-[260px]">
            <a href={item.href}>
              <span className="relative block aspect-[4/5] w-full bg-fog">
                {item.image && <Image src={item.image} alt={item.alt ?? item.name} fill sizes="260px" className="object-cover" />}
              </span>
              <span className="mt-2 block text-small text-muted">{item.category}</span>
              <h3 className="font-body text-body font-semibold text-ink">{item.name}</h3>
              <span className="block text-small text-muted">{item.price}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
