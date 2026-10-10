"use client";

import Image from "next/image";
import { useRef } from "react";
import { stories } from "@/data/testimonials";

export function SeeTheDifference() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector("li");
    const amount = item ? item.getBoundingClientRect().width + 20 : track.clientWidth;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="stories-title" className="section-wrap">
      <h2 id="stories-title" className="font-display text-title text-ink">
        See the difference
      </h2>
      <div role="region" aria-roledescription="carousel" aria-label="Client transformations" className="mt-6">
        <ul
          ref={trackRef}
          role="list"
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {stories.map((story) => (
            <li
              key={story.id}
              className="aspect-[4/3] w-full shrink-0 snap-start overflow-hidden bg-fog md:w-[calc((100%-40px)/3)]"
            >
              <div className="relative h-full w-full">
                <Image src={`/assets/stories/${story.id}.webp`} alt={story.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end gap-2 border-t border-line pt-4">
          <button type="button" aria-label="Previous transformations" onClick={() => scrollBy(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line">
            ←
          </button>
          <button type="button" aria-label="Next transformations" onClick={() => scrollBy(1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
