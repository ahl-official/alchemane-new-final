import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { HairSolutions } from "@/components/hair-solutions";
import { BestSellers } from "@/components/best-sellers";
import { ShopConcerns } from "@/components/shop-concerns";
import { CheckoutDiscount } from "@/components/checkout-discount";
import { VoicesRail } from "@/components/voices-rail";
import { SeeTheDifference } from "@/components/see-the-difference";
import { QualityBanner } from "@/components/quality-banner";
import { FounderSection } from "@/components/founder-section";
import { FeaturedIn } from "@/components/featured-in";
import { StudioVisit } from "@/components/studio-visit";
import { ClientTransformations } from "@/components/client-transformations";
import { RiskFreeBanner } from "@/components/risk-free-banner";
import { FaqSection } from "@/components/faq-section";
import { ConsultationSection } from "@/components/consultation-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import { OfferPopup } from "@/components/offer-popup";
import { clientFilms, celebrityFilmsPendingCount } from "@/data/testimonials";

export default function Home() {
  return (
    <main id="home">
      <a href="#collection" className="skip-link">
        Skip to hair solutions
      </a>
      <SiteHeader />
      <Hero />

      <HairSolutions />
      <BestSellers />
      <ShopConcerns />
      <CheckoutDiscount />

      <VoicesRail id="voices" title="Watch our clients’ stories" label="Client films" films={clientFilms} />

      <SeeTheDifference />
      <QualityBanner />
      <FounderSection />
      <FeaturedIn />

      <VoicesRail id="celebrity-picks" title="Celebrity Choice" label="Celebrity films" pendingCount={celebrityFilmsPendingCount} />

      <StudioVisit />
      <ClientTransformations />
      <RiskFreeBanner />
      <FaqSection />
      <ConsultationSection />
      <SiteFooter />

      <FloatingContact />
      <Suspense fallback={null}>
        <OfferPopup />
      </Suspense>
    </main>
  );
}
