"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(1, "Enter your name.").max(80),
  phone: z.string().regex(/^[+0-9 ()-]{7,20}$/, "Enter a phone number with 7–20 digits or phone symbols."),
  city: z.string().max(80).optional(),
  meeting: z.enum(["Khar West studio", "Online"]),
});
type FormValues = z.infer<typeof schema>;

export function ConsultationSection() {
  const [link, setLink] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { meeting: "Khar West studio" } });

  const onSubmit = (values: FormValues) => {
    setLink(
      waLink(
        [
          "Hello Alchemane, I would like to book a consultation.",
          `Name: ${values.name}`,
          `Phone: ${values.phone}`,
          values.city ? `City: ${values.city}` : "City: not sure yet",
          `Preferred meeting: ${values.meeting}`,
        ].join("\n")
      )
    );
  };

  return (
    <section id="consultation" aria-labelledby="consultation-title" className="bg-mist">
      <div className="section-wrap grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 id="consultation-title" className="font-display text-title text-ink">
            Book Your Private Consultation
          </h2>
          <p className="mt-2 text-body text-muted">Meet us online or at our Mumbai studio.</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-4 inline-block text-small font-semibold text-ink underline-offset-4 hover:underline">
            Prefer to call us? {PHONE_DISPLAY} ↗
          </a>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-small font-semibold text-ink">
              Your name
              <input
                autoComplete="name"
                placeholder="Full name"
                maxLength={80}
                className="min-h-[48px] rounded-sm border border-line px-4 text-body font-normal"
                {...register("name")}
              />
              {errors.name && <span className="text-caption text-red-700">{errors.name.message}</span>}
            </label>
            <label className="flex flex-col gap-1 text-small font-semibold text-ink">
              Phone number
              <input
                type="tel"
                autoComplete="tel"
                placeholder="+91"
                maxLength={20}
                className="min-h-[48px] rounded-sm border border-line px-4 text-body font-normal"
                {...register("phone")}
              />
              {errors.phone && <span className="text-caption text-red-700">{errors.phone.message}</span>}
            </label>
          </div>

          <label className="flex flex-col gap-1 text-small font-semibold text-ink">
            Your city
            <input
              autoComplete="address-level2"
              placeholder="City"
              maxLength={80}
              className="min-h-[48px] rounded-sm border border-line px-4 text-body font-normal"
              {...register("city")}
            />
          </label>

          <fieldset>
            <legend className="text-small font-semibold text-ink">How would you like to meet?</legend>
            <div className="mt-2 flex gap-6">
              <label className="flex items-center gap-2 text-body">
                <input type="radio" value="Khar West studio" {...register("meeting")} /> Khar West studio
              </label>
              <label className="flex items-center gap-2 text-body">
                <input type="radio" value="Online" {...register("meeting")} /> Online
              </label>
            </div>
          </fieldset>

          <Button type="submit" className="self-start">
            Submit <span aria-hidden="true">↗</span>
          </Button>

          {isSubmitSuccessful && (
            <div role="status" className="rounded-sm border border-line bg-fog p-4">
              <p className="text-body text-ink">Your request is ready. Open WhatsApp, check the message and press send.</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[48px] items-center rounded-sm bg-ink px-6 text-small font-semibold text-white"
              >
                Open WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
