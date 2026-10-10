import { Reveal } from "@/components/ui/reveal";

export function ClientTransformations() {
  return (
    <section id="client-closeups" aria-labelledby="client-closeups-title" className="section-wrap text-center">
      <Reveal>
        <h2 id="client-closeups-title" className="font-display text-title text-ink">
          See real hair transformations
        </h2>
      </Reveal>
      <figure className="mx-auto mt-6 max-w-md md:max-w-2xl">
        <video
          className="w-full rounded-sm bg-ink"
          controls
          playsInline
          preload="metadata"
          aria-label="Real client hair transformations"
        >
          <source src="/assets/homepage/client-transformations-desktop.mp4" type="video/mp4" media="(min-width: 701px)" />
          <source src="/assets/homepage/client-transformations-mobile.mp4" type="video/mp4" media="(max-width: 700px)" />
          <a href="/assets/homepage/client-transformations-mobile.mp4">Watch the client transformation video</a>
        </video>
      </figure>
    </section>
  );
}
