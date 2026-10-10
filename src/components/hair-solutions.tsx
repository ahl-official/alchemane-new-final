"use client";

import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { useMemo, useState } from "react";
import { categories, priceLabel, needsConsultation, productBelongsToCategory, type CategoryId } from "@/data/products";
import { products } from "@/data/products";
import { waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 4;

function enquiryUrl(name: string) {
  return waLink(`Hello Alchemane, I would like to know more about ${name}. Please share the price, available options and fitting details.`);
}

export function HairSolutions() {
  const [category, setCategory] = useState<CategoryId>(categories[0].id);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [shownCategory, setShownCategory] = useState(category);

  if (category !== shownCategory) {
    setShownCategory(category);
    setVisible(PAGE_SIZE);
  }

  const filtered = useMemo(() => products.filter((p) => productBelongsToCategory(p, category)), [category]);

  const shown = filtered.slice(0, visible);

  return (
    <section id="collection" aria-label="Find the right hair solution" className="section-wrap">
      <h2 className="font-display text-title text-ink">Find the right hair solution</h2>

      <Tabs.Root value={category} onValueChange={(v) => setCategory(v as CategoryId)} className="mt-6">
        <Tabs.List
          aria-label="Hair product categories"
          className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((c) => (
            <Tabs.Trigger
              key={c.id}
              value={c.id}
              className={cn(
                "min-h-[44px] shrink-0 whitespace-nowrap rounded-full border border-line px-5 text-small font-semibold text-ink transition-colors",
                "data-[state=active]:border-ink data-[state=active]:bg-ink data-[state=active]:text-white"
              )}
            >
              {c.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <div className="mt-6">
        <p role="status" aria-live="polite" aria-atomic="true" className="text-small text-muted">
          {filtered.length} product{filtered.length === 1 ? "" : "s"}
        </p>

        {filtered.length === 0 ? (
          <div className="py-12 text-center">
            <h3 className="font-display text-xl">No products found</h3>
            <p className="mt-2 text-muted">Choose another category above.</p>
            <a href="#consultation" className="mt-4 inline-block underline">
              Need Help
            </a>
          </div>
        ) : (
          <>
            <ul role="list" className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
              {shown.map((product) => {
                const consultation = needsConsultation(product);
                const showPrice = !consultation;
                const href = consultation ? "#consultation" : product.url ?? enquiryUrl(product.name);
                return (
                  <li key={product.handle} className="catalogue-card">
                    <a
                      href={href}
                      target={!consultation && product.isNew ? "_blank" : undefined}
                      rel={!consultation && product.isNew ? "noopener noreferrer" : undefined}
                      className="group flex flex-col gap-2"
                    >
                      <span className="relative block aspect-[4/5] w-full overflow-hidden bg-fog">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.alt ?? product.name}
                            fill
                            sizes="(max-width: 768px) 45vw, 22vw"
                            className="object-cover"
                          />
                        ) : (
                          <span className="sr-only">Product photograph not yet available</span>
                        )}
                        {product.isNew && (
                          <span className="absolute left-2 top-2 rounded-sm bg-accent px-2 py-1 text-caption font-semibold text-ink">
                            New addition
                          </span>
                        )}
                      </span>
                      <h3 className="font-body text-body font-semibold text-ink">{product.name}</h3>
                      {showPrice && <span className="text-small text-muted">{priceLabel(product)}</span>}
                      <span className="text-small font-semibold text-ink underline-offset-4 group-hover:underline">
                        {consultation ? "Need Consultation" : product.isNew ? "Ask for details" : "View product"}{" "}
                        <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {visible < filtered.length && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="min-h-[48px] rounded-sm border border-ink px-6 text-small font-semibold text-ink"
                >
                  Show more products ({filtered.length - visible} remaining) <span aria-hidden="true">↓</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
