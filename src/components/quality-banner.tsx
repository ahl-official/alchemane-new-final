import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function QualityBanner() {
  return (
    <section id="alchemane-standard" aria-label="The Alchemane standard" className="relative">
      <div className="relative aspect-[3/2] w-full md:aspect-[3/2]">
        <Image
          src="/assets/quality/daylight-desktop-1536.webp"
          alt="A hand holding long wavy brown hair extensions in a bright studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="bg-ink py-8 text-white">
        <Reveal>
          <ul role="list" className="mx-auto flex max-w-content flex-col gap-6 px-5 text-center text-body font-semibold md:flex-row md:justify-between">
            <li>
              100% Pro-Grade
              <br />
              Human Hair
            </li>
            <li>
              Ethically Sourced &amp;
              <br />
              Carefully Treated
            </li>
            <li>
              Alchemane Quality
              <br />
              Guarantee
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
