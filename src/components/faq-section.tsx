"use client";

import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import { faqTabs } from "@/data/faq";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  return (
    <section id="questions" aria-labelledby="faq-title" className="section-wrap">
      <Reveal>
        <header>
          <h2 id="faq-title" className="font-display text-title text-ink">
            Frequently Asked Questions
          </h2>
        </header>
      </Reveal>

      <Tabs.Root defaultValue={faqTabs[0].id} className="mt-6">
        <Tabs.List aria-label="Question categories" className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {faqTabs.map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "min-h-[44px] shrink-0 whitespace-nowrap rounded-full border border-line px-5 text-small font-semibold text-ink",
                "data-[state=active]:border-ink data-[state=active]:bg-ink data-[state=active]:text-white"
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {faqTabs.map((tab) => (
          <Tabs.Content key={tab.id} value={tab.id} className="mt-6">
            <Accordion.Root type="single" collapsible defaultValue={tab.items[0].q} className="divide-y divide-line border-y border-line">
              {tab.items.map((item) => (
                <Accordion.Item key={item.q} value={item.q}>
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-4 text-left text-body font-semibold text-ink">
                      <span>{item.q}</span>
                      <i aria-hidden="true" className="text-xl">+</i>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden pb-4 text-body text-muted data-[state=closed]:hidden">
                    <p>{item.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Tabs.Content>
        ))}
      </Tabs.Root>

      <aside aria-labelledby="faq-support-title" className="mt-10 flex flex-col items-start gap-4 rounded-sm bg-mist p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 id="faq-support-title" className="font-display text-xl text-ink">
            Still have questions?
          </h3>
          <p className="mt-1 text-body text-muted">Tell us what you are looking for. Our hair experts will guide you to the right solution.</p>
        </div>
        <a href="#consultation" className="whitespace-nowrap text-small font-semibold text-ink underline-offset-4 hover:underline">
          Ask an expert <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </section>
  );
}
