"use client";

import Image from "next/image";
import { useState } from "react";
import { stories } from "@/data/testimonials";

export function SeeTheDifference() {
  const [index, setIndex] = useState(0);
  const story = stories[index];

  const move = (dir: 1 | -1) => setIndex((i) => (i + dir + stories.length) % stories.length);

  return (
    <section aria-labelledby="stories-title" className="section-wrap">
      <h2 id="stories-title" className="font-display text-title text-ink">
        See the difference
      </h2>
      <div role="region" aria-roledescription="carousel" aria-label="Client transformations" className="mt-6">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-sm bg-[#e5e5e5]">
          <Image key={story.id} src={`/assets/stories/${story.id}.webp`} alt={story.alt} fill sizes="(max-width: 768px) 100vw, 672px" className="object-cover" />
        </div>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="sr-only" aria-live="polite">
            Showing transformation {index + 1} of {stories.length}
          </span>
          <div role="group" aria-label="Browse transformations" className="flex gap-2">
            <button type="button" aria-label="Previous transformation" onClick={() => move(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line">
              ←
            </button>
            <button type="button" aria-label="Next transformation" onClick={() => move(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
