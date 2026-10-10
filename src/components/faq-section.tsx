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

      <Tabs.Root defaultValue={faqTabs[0].id} className="mt-7">
        <div className="flex justify-center">
          <Tabs.List
            aria-label="Question categories"
            className="flex max-w-full gap-1.5 overflow-x-auto rounded-full border border-line bg-white/60 p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {faqTabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "min-h-[46px] shrink-0 whitespace-nowrap rounded-full px-[18px] text-small font-semibold text-muted transition-colors",
                  "data-[state=active]:bg-ink data-[state=active]:text-white data-[state=active]:shadow-[0_7px_16px_rgb(35_41_40_/_0.15)]"
                )}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>

        {faqTabs.map((tab) => (
          <Tabs.Content key={tab.id} value={tab.id} className="mt-6">
            <Accordion.Root type="single" collapsible defaultValue={tab.items[0].q} className="divide-y divide-line border-y border-line">
              {tab.items.map((item) => (
                <Accordion.Item key={item.q} value={item.q}>
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left text-body font-semibold text-ink">
                      <span>{item.q}</span>
                      <i
                        aria-hidden="true"
                        className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-line text-lg not-italic text-accent-ink transition-transform group-data-[state=open]:rotate-45 group-data-[state=open]:border-ink group-data-[state=open]:bg-ink group-data-[state=open]:text-white"
                      >
                        +
                      </i>
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

      <aside aria-labelledby="faq-support-title" className="mt-5 flex flex-col items-start gap-6 bg-ink p-8 text-white md:flex-row md:items-end md:justify-between">
        <div>
          <h3 id="faq-support-title" className="font-display text-2xl text-white">
            Still have questions?
          </h3>
          <p className="mt-2 max-w-md text-body text-mist">Tell us what you are looking for. Our hair experts will guide you to the right solution.</p>
        </div>
        <a
          href="#consultation"
          className="inline-flex min-h-[48px] shrink-0 items-center gap-4 whitespace-nowrap bg-white px-5 text-small font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          Ask an expert <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </section>
  );
}
