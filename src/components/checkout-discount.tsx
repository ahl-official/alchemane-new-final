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
    <section aria-labelledby="checkout-discount-title" className="section-wrap">
      <div className="rounded-sm bg-mist p-8 text-center">
        <h2 id="checkout-discount-title" className="font-display text-title text-ink">
          Get special discounts
          <br />
          on checkout
        </h2>
        {isSubmitSuccessful ? (
          <p className="mx-auto mt-4 max-w-md text-body text-ink">
            Your request is ready in WhatsApp. Please tap Send to share it with our team.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3">
            <label className="sr-only" htmlFor="checkout-discount-phone">
              Phone number
            </label>
            <div className="flex w-full gap-2">
              <input
                id="checkout-discount-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone number"
                maxLength={20}
                className="min-h-[48px] flex-1 rounded-sm border border-line bg-white px-4 text-body"
                {...register("phone")}
              />
              <Button type="submit">UNLOCK</Button>
            </div>
            {errors.phone && (
              <p role="alert" className="text-small text-red-700">
                {errors.phone.message}
              </p>
            )}
            <label className="flex items-start gap-2 text-left text-small text-muted">
              <input type="checkbox" className="mt-1" {...register("updates")} />
              <span>Get updates on WhatsApp. You may opt out anytime.</span>
            </label>
          </form>
        )}
      </div>
    </section>
  );
}
