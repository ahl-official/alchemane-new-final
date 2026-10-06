"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PHONE_TEL, WHATSAPP_NUMBER, waLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Enter your name using at least 2 characters.").max(80),
  mobile: z.string().min(7, "Enter a valid mobile number with 7 to 15 digits.").max(20),
  email: z.string().email("Enter a valid email address, such as you@example.com.").or(z.literal("")).optional(),
});
type FormValues = z.infer<typeof schema>;

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [link, setLink] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const url = waLink(
      [
        "Hello Alchemane, I would like to request a callback.",
        `Name: ${values.name}`,
        `Mobile: ${values.mobile}`,
        values.email ? `Email: ${values.email}` : null,
      ]
        .filter(Boolean)
        .join("\n")
    );
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <div
          id="floating-contact-actions"
          aria-hidden={!open}
          inert={!open}
          className={cn("flex flex-col items-end gap-3 transition-opacity", open ? "opacity-100" : "pointer-events-none opacity-0")}
        >
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={() => {
              setOpen(false);
              setDialogOpen(true);
            }}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md"
          >
            <span className="text-small font-semibold text-ink">Call us back</span>
            <Image src="/icons/callback.svg" alt="" width={32} height={32} />
          </button>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
            <span className="text-small font-semibold text-ink">WhatsApp</span>
            <Image src="/icons/new-whatsapp-icon.svg" alt="" width={32} height={32} />
          </a>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
            <span className="text-small font-semibold text-ink">Call now</span>
            <Image src="/icons/new-call.svg" alt="" width={32} height={32} />
          </a>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="floating-contact-actions"
          onClick={() => setOpen((v) => !v)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-ink shadow-lg"
        >
          <span className="sr-only">{open ? "Close contact options" : "Open contact options"}</span>
          <Image src={open ? "/icons/main-cross.svg" : "/icons/main.svg"} alt="" width={32} height={32} />
        </button>
      </aside>

      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white p-6">
            <Dialog.Close className="absolute right-4 top-4" aria-label="Close callback form">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Dialog.Close>
            <div className="flex items-center gap-3">
              <Image src="/icons/callback-form.svg" alt="" width={40} height={40} />
              <Dialog.Title className="font-display text-xl text-ink">Request a callback</Dialog.Title>
            </div>

            {isSubmitSuccessful ? (
              <div className="mt-4">
                <p className="text-body text-ink">Your callback request is ready in WhatsApp. Please tap Send to share it with our team.</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-small font-semibold text-ink underline">
                  Open WhatsApp again
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-4">
                <label className="flex flex-col gap-1 text-small font-semibold text-ink">
                  Name <span aria-hidden="true">*</span>
                  <input
                    autoComplete="name"
                    placeholder="Your full name"
                    className="min-h-[48px] rounded-sm border border-line px-4 text-body font-normal"
                    {...register("name")}
                  />
                  {errors.name && <span className="text-caption text-red-700">{errors.name.message}</span>}
                </label>
                <label className="flex flex-col gap-1 text-small font-semibold text-ink">
                  Mobile number <span aria-hidden="true">*</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className="min-h-[48px] rounded-sm border border-line px-4 text-body font-normal"
                    {...register("mobile")}
                  />
                  {errors.mobile && <span className="text-caption text-red-700">{errors.mobile.message}</span>}
                </label>
                <label className="flex flex-col gap-1 text-small font-semibold text-ink">
                  Email ID <span className="font-normal text-muted">Optional</span>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="min-h-[48px] rounded-sm border border-line px-4 text-body font-normal"
                    {...register("email")}
                  />
                  {errors.email && <span className="text-caption text-red-700">{errors.email.message}</span>}
                </label>
                <Button type="submit">
                  Request my callback <span aria-hidden="true">→</span>
                </Button>
              </form>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
