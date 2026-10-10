import { PHONE_TEL, waLink } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  "Try It Risk-Free – If you're not satisfied, we'll adjust, restyle, or replace it.",
  "No Obligation Consultation – Just honest advice to find the best solution for you.",
];

export function RiskFreeBanner() {
  return (
    <section aria-labelledby="risk-free-title" className="relative isolate overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[26vw] -left-[18vw] aspect-square w-[min(42vw,620px)] rounded-full bg-accent/20"
      />
      <div className="section-wrap grid gap-10 md:grid-cols-[0.88fr_1.12fr] md:items-center">
        <Reveal>
          <h2 id="risk-free-title" className="font-display text-title text-white">
            Risk-Free Offer –<br />
            100% Satisfaction
            <br />
            Guarantee!
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-sm border border-white/20 bg-white/5 p-8 shadow-lg">
            <h3 className="font-display text-2xl text-white">Not Sure? We&rsquo;ve Got You Covered!</h3>
            <ul role="list" className="mt-6 grid gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="relative min-h-16 border border-white/15 bg-white/8 py-4 pl-14 pr-5 text-body text-white/90"
                >
                  <span className="absolute left-4 top-4 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-accent text-xs font-bold text-ink">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-stretch gap-4 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <p className="font-display text-xl">Zero Risk, Maximum Confidence – Let&rsquo;s Chat!</p>
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
                <a
                  href={waLink("Hello Alchemane, I'd like to know more.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[3px] bg-accent px-3 text-small font-semibold text-ink transition-colors hover:bg-white sm:justify-start sm:gap-4 sm:px-5"
                >
                  WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[3px] border border-white/50 px-3 text-small font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:justify-start sm:gap-4 sm:px-5"
                >
                  Call us <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
