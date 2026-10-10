"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { waLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const schema = z.object({
  phone: z.string().regex(/^[+0-9 ()-]{7,20}$/, "Enter a valid phone number."),
  updates: z.boolean().optional(),
});
type FormValues = z.infer<typeof schema>;

export function CheckoutDiscount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const message = `Hello Alchemane, I'd like my checkout discount code.\nMy number: ${values.phone}${values.updates ? "\nPlease also send me offers and updates." : ""}`;
    window.open(waLink(message), "_blank", "noopener");
  };

  return (
    <section aria-labelledby="checkout-discount-title" className="relative isolate overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[22vw] -right-[8vw] aspect-square w-[min(44vw,580px)] rounded-full border border-accent/44"
      />
      <div className="section-wrap grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <h2 id="checkout-discount-title" className="font-display text-title text-ink">
          Get special discounts
          <br />
          on checkout
        </h2>
        {isSubmitSuccessful ? (
          <p className="text-body text-ink">Your request is ready in WhatsApp. Please tap Send to share it with our team.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <div className="grid grid-cols-[1fr_auto] gap-3">
              <label className="sr-only" htmlFor="checkout-discount-phone">
                Phone number
              </label>
              <input
                id="checkout-discount-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone number"
                maxLength={20}
                className="min-h-[54px] rounded-[3px] border border-line bg-white px-4 text-body"
                {...register("phone")}
              />
              <Button type="submit" className="min-w-[142px] rounded-[3px] tracking-[0.1em]">
                UNLOCK
              </Button>
            </div>
            {errors.phone && (
              <p role="alert" className="text-small text-red-700">
                {errors.phone.message}
              </p>
            )}
            <label className="flex items-center gap-2.5 text-small text-muted">
              <input type="checkbox" className="h-[18px] w-[18px] accent-ink" {...register("updates")} />
              <span>Get updates on WhatsApp. You may opt out anytime.</span>
            </label>
          </form>
        )}
      </div>
    </section>
  );
}
