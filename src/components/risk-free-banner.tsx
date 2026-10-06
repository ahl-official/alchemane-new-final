import { PHONE_TEL, waLink } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

export function RiskFreeBanner() {
  return (
    <section aria-labelledby="risk-free-title" className="section-wrap">
      <div className="grid gap-8 rounded-sm bg-ink p-8 text-white md:grid-cols-2 md:p-12">
        <Reveal>
          <header>
            <h2 id="risk-free-title" className="font-display text-title text-white">
              Risk-Free Offer –<br />
              100% Satisfaction
              <br />
              Guarantee!
            </h2>
          </header>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-display text-xl">Not Sure? We&rsquo;ve Got You Covered!</h3>
          <ul role="list" className="mt-4 flex flex-col gap-2 text-body text-white/85">
            <li>Try It Risk-Free – If you&rsquo;re not satisfied, we&rsquo;ll adjust, restyle, or replace it.</li>
            <li>No Obligation Consultation – Just honest advice to find the best solution for you.</li>
          </ul>
          <div className="mt-6">
            <p className="font-semibold">Zero Risk, Maximum Confidence – Let&rsquo;s Chat!</p>
            <div className="mt-3 flex gap-4">
              <a
                href={waLink("Hello Alchemane, I'd like to know more.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center rounded-sm bg-white px-6 text-small font-semibold text-ink"
              >
                WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-[48px] items-center rounded-sm border border-white px-6 text-small font-semibold text-white">
                Call us <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
