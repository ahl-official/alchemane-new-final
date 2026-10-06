"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Cloud layer geometry (top/left/width offsets, the white backing below each
// layer) is carried over from the proven implementation in the previous
// build's src/styles.css — a plain object-cover crop of this photo produces
// hard rectangular edges instead of a soft cloud bank, which is what made the
// first version of this animation look broken.
export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const heroArtRef = useRef<HTMLDivElement>(null);
  const heroActionsRef = useRef<HTMLDivElement>(null);
  const cloudFarRef = useRef<HTMLDivElement>(null);
  const cloudNearRef = useRef<HTMLDivElement>(null);
  const cloudFrontRef = useRef<HTMLDivElement>(null);
  const whiteoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1001px)").matches;
    if (reduceMotion || !isDesktop || !stageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const layers = [cloudFarRef.current, cloudNearRef.current, cloudFrontRef.current];

    const ctx = gsap.context(() => {
      gsap.set(layers, { y: 0, xPercent: 0 });
      gsap.set(whiteoutRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 1.8)}`,
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(heroArtRef.current, { scale: 1.045, yPercent: -3, duration: 0.52 }, 0)
        .to(heroActionsRef.current, { opacity: 0, y: -22, duration: 0.16 }, 0)
        .to(cloudFarRef.current, { y: () => -window.innerHeight * 1.22, xPercent: 4, duration: 0.52 }, 0)
        .to(cloudNearRef.current, { y: () => -window.innerHeight * 1.4, xPercent: -4, duration: 0.49 }, 0.025)
        .to(cloudFrontRef.current, { y: () => -window.innerHeight * 1.58, xPercent: 3, duration: 0.47 }, 0.055)
        .to(whiteoutRef.current, { opacity: 1, duration: 0.1 }, 0.38)
        .set([stageRef.current], { autoAlpha: 0 }, 0.49)
        .to(whiteoutRef.current, { opacity: 0, duration: 0.01 }, 0.5);
    }, stageRef);

    return () => ctx.revert();
  }, []);

  const cloudLayerClass =
    "absolute h-[max(70vh,54vw)] after:absolute after:left-0 after:top-[calc(100%-2px)] after:h-[160vh] after:w-full after:bg-white after:content-['']";

  return (
    <div ref={stageRef} className="relative h-[100svh] w-full overflow-hidden">
      <h1 className="sr-only">Natural-looking human hair toppers, extensions and wigs.</h1>
      <div ref={heroArtRef} className="absolute inset-0">
        <Image
          src="/assets/hero-mobile-portrait-1024.webp"
          alt="Three women showing Alchemane's ponytail, hair topper and halo extension"
          fill
          priority
          className="object-cover md:hidden"
          sizes="100vw"
        />
        <Image
          src="/assets/hero.webp"
          alt="Three women showing Alchemane's ponytail, hair topper and halo extension"
          fill
          priority
          className="hidden object-cover md:block"
          sizes="100vw"
        />
      </div>
      <div ref={heroActionsRef} className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-4 pb-10">
        <a
          href="#collection"
          className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-ink px-8 text-small font-semibold text-white"
        >
          Find your hair solution
        </a>
        <a href="#collection" className="flex flex-col items-center gap-1 text-small text-white">
          <span>See your options</span>
          <svg viewBox="0 0 20 28" aria-hidden="true" className="h-5 w-4">
            <path d="M10 1v24m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </a>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden overflow-hidden md:block">
        <div ref={cloudFarRef} className={`${cloudLayerClass} -left-[28%] top-[57%] w-[150%] opacity-70`}>
          <Image src="/assets/cloud.webp" alt="" fill className="object-fill" />
        </div>
        <div ref={cloudNearRef} className={`${cloudLayerClass} -left-[4%] top-[73%] w-[130%]`}>
          <Image src="/assets/cloud.webp" alt="" fill className="object-fill" />
        </div>
        <div ref={cloudFrontRef} className={`${cloudLayerClass} -left-[23%] top-[79%] w-[146%]`}>
          <Image src="/assets/cloud.webp" alt="" fill className="object-fill" />
        </div>
        <div ref={whiteoutRef} className="absolute inset-0 bg-white opacity-0" />
      </div>
    </div>
  );
}
