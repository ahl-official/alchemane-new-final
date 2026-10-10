import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const claims = ["100% Pro-Grade\nHuman Hair", "Ethically Sourced &\nCarefully Treated", "Alchemane Quality\nGuarantee"];

export function QualityBanner() {
  return (
    <section id="alchemane-standard" aria-label="The Alchemane standard" className="relative isolate overflow-hidden">
      <div className="relative min-h-[575px] w-full sm:min-h-[400px] md:aspect-[21/9] md:min-h-0">
        <Image
          src="/assets/quality/daylight-desktop-1536.webp"
          alt="A hand holding long wavy brown hair extensions in a bright studio"
          fill
          sizes="100vw"
          className="object-cover object-[54%_center] md:object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <Reveal>
            <ul
              role="list"
              className="mx-auto grid max-w-content grid-cols-1 items-center gap-[88px] text-center text-[clamp(1.375rem,2vw,1.875rem)] font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgb(35_41_40_/_0.85),0_0_9px_rgb(35_41_40_/_0.6)] md:grid-cols-3 md:gap-0 md:divide-x md:divide-white"
            >
              {claims.map((claim, i) => (
                <li key={claim} className="relative px-6">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-[-68px] h-12 w-px -translate-x-1/2 bg-white md:hidden"
                    />
                  )}
                  {claim.split("\n").map((line, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
