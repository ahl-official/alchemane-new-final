import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function QualityBanner() {
  return (
    <section id="alchemane-standard" aria-label="The Alchemane standard" className="relative isolate overflow-hidden">
      <div className="relative min-h-[400px] w-full md:aspect-[21/9]">
        <Image
          src="/assets/quality/daylight-desktop-1536.webp"
          alt="A hand holding long wavy brown hair extensions in a bright studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <Reveal>
            <ul
              role="list"
              className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 text-center text-[clamp(1.375rem,2vw,1.875rem)] font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgb(35_41_40_/_0.85),0_0_9px_rgb(35_41_40_/_0.6)] md:grid-cols-3 md:gap-0 md:divide-x md:divide-white"
            >
              <li className="px-6">
                100% Pro-Grade
                <br />
                Human Hair
              </li>
              <li className="px-6">
                Ethically Sourced &amp;
                <br />
                Carefully Treated
              </li>
              <li className="px-6">
                Alchemane Quality
                <br />
                Guarantee
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
