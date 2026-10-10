"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Gem, Sparkles, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRIVACY_URL, TERMS_URL, waLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const OFFER = "5%";
const DELAY_MS = 8000;

export function OfferPopup() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const [updates, setUpdates] = useState(false);

  useEffect(() => {
    const forced = searchParams.get("offer") === "1";
    const timer = setTimeout(() => setOpen(true), forced ? 300 : DELAY_MS);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const link = waLink(`Hello Alchemane, I'd like my ${OFFER} first-order code.\nMy number: +91 ${phone}${updates ? "\nPlease also send me offers and updates." : ""}`);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError(true);
      return;
    }
    window.open(link, "_blank", "noopener");
    setSent(true);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
        <Dialog.Content
          aria-describedby="offer-intro"
          className="fixed left-1/2 top-1/2 z-50 grid w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 grid-cols-1 overflow-hidden rounded-sm bg-white md:grid-cols-2"
        >
          <Dialog.Close aria-label="Close offer" className="absolute right-4 top-4 z-10">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </Dialog.Close>

          <div className="relative isolate flex flex-col gap-4 overflow-hidden bg-ink p-8 text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10"
            />
            <Image src="/icons/new-logo.svg" alt="Alchemane" width={150} height={38} className="brightness-0 invert" />
            <p className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight" aria-hidden="true">
              Get <span className="text-accent">{OFFER} off</span>
              <br />
              your first online order
            </p>
            <ul role="list" className="flex flex-col gap-3">
              <li className="flex items-start gap-3.5 rounded-[3px] border border-white/15 bg-white/5 p-3.5">
                <Sparkles className="mt-0.5 h-[22px] w-[22px] shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <strong className="block text-small font-semibold text-white">New products first</strong>
                  <span className="text-small text-white/75">Hear about new products before they launch</span>
                </span>
              </li>
              <li className="flex items-start gap-3.5 rounded-[3px] border border-white/15 bg-white/5 p-3.5">
                <Gem className="mt-0.5 h-[22px] w-[22px] shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <strong className="block text-small font-semibold text-white">100% human hair</strong>
                  <span className="text-small text-white/75">Made for a natural look</span>
                </span>
              </li>
              <li className="flex items-start gap-3.5 rounded-[3px] border border-white/15 bg-white/5 p-3.5">
                <UserCheck className="mt-0.5 h-[22px] w-[22px] shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <strong className="block text-small font-semibold text-white">Help choosing</strong>
                  <span className="text-small text-white/75">We help you choose the right product and colour</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 p-8">
            {!sent ? (
              <>
                <Dialog.Title className="font-display text-2xl text-ink">Get {OFFER} off</Dialog.Title>
                <p id="offer-intro" className="text-body text-muted">
                  Enter your number and we&rsquo;ll send your {OFFER} code on WhatsApp.
                </p>
                <form onSubmit={submit} className="flex flex-col gap-3" noValidate>
                  <label htmlFor="offer-phone" className="text-small font-semibold text-ink">
                    Mobile number
                  </label>
                  <div className="flex items-center gap-2 rounded-sm border border-line px-3">
                    <span className="text-small text-muted">IN +91</span>
                    <input
                      id="offer-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={10}
                      placeholder="10-digit number"
                      aria-describedby="offer-error"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                        setError(false);
                      }}
                      className="min-h-[48px] flex-1 bg-transparent text-body outline-none"
                    />
                  </div>
                  {error && (
                    <p id="offer-error" role="alert" className="text-small text-red-700">
                      Enter a 10-digit mobile number starting with 6, 7, 8 or 9.
                    </p>
                  )}
                  <label className="flex items-center gap-2 text-small text-muted">
                    <input type="checkbox" checked={updates} onChange={(e) => setUpdates(e.target.checked)} /> Send me offers and updates
                  </label>
                  <Button type="submit">Get my code</Button>
                </form>
                <a
                  href={waLink(`Hello Alchemane, I'd like the ${OFFER} first-order offer.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-small font-semibold text-ink underline-offset-4 hover:underline"
                >
                  <Image src="/icons/logos_whatsapp-icon.svg" alt="" width={22} height={22} />
                  Prefer WhatsApp? Chat with us
                </a>
                <p className="text-caption text-muted">
                  By submitting, I accept the{" "}
                  <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="underline">
                    Privacy Policy
                  </a>{" "}
                  &amp;{" "}
                  <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">
                    Terms &amp; Conditions
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <Dialog.Title className="font-display text-2xl text-ink">Almost there</Dialog.Title>
                <p className="text-body text-muted">
                  Send the message that just opened in WhatsApp, and our team will reply with your {OFFER} code.
                </p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-ink px-6 text-small font-semibold text-white">
                  Open WhatsApp
                </a>
                <Dialog.Close className="text-small text-muted underline">Continue browsing</Dialog.Close>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
