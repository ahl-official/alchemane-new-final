"use client";

import { useRef } from "react";
import { clock, spoken } from "@/data/testimonials";

type Film = { id: string; seconds: number; dir?: string };

export function VoicesRail({
  id,
  title,
  sub,
  label,
  films,
  pendingCount,
}: {
  id: string;
  title: string;
  sub?: string;
  label: string;
  films?: readonly Film[];
  pendingCount?: number;
}) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section aria-labelledby={`${id}-title`} className="section-wrap">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 id={`${id}-title`} className="font-display text-title text-ink">
            {title}
          </h2>
          {sub && <p className="mt-1 text-body text-muted">{sub}</p>}
        </div>
        <div role="group" aria-label="Scroll the films" className="hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous films"
            onClick={() => scrollBy(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next films"
            onClick={() => scrollBy(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
          </button>
        </div>
      </div>

      <ul ref={trackRef} role="list" aria-label={label} className="mt-6 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {films?.map((film, i) => {
          const dir = film.dir ?? "testimonials";
          const videoLabel = `Client film ${i + 1} of ${films.length}`;
          return (
            <li key={film.id} className="relative w-[180px] shrink-0 overflow-hidden rounded-sm bg-ink md:w-[220px]">
              <video
                preload="none"
                playsInline
                poster={`/assets/${dir}/${film.id}.webp`}
                aria-label={videoLabel}
                controls
                className="aspect-[9/16] w-full object-cover"
              >
                <source src={`/assets/${dir}/${film.id}.mp4`} type="video/mp4" />
              </video>
              <span className="pointer-events-none absolute right-2 top-2 rounded-sm bg-ink/70 px-2 py-0.5 text-caption text-white">
                {clock(film.seconds)}
              </span>
              <span className="sr-only">{spoken(film.seconds)}</span>
            </li>
          );
        })}
        {!films &&
          Array.from({ length: pendingCount ?? 2 }).map((_, i) => (
            <li
              key={i}
              className="flex aspect-[9/16] w-[180px] shrink-0 items-center justify-center bg-fog md:w-[220px]"
            >
              <span className="text-small font-semibold text-muted">Film coming soon</span>
              <span className="sr-only">
                Celebrity film {i + 1} of {pendingCount ?? 2}
              </span>
            </li>
          ))}
      </ul>
    </section>
  );
}
