"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/permanent-extensions", label: "Permanent Extensions" },
  { href: "/toppers", label: "Hair Toppers" },
  { href: "/wigs", label: "Wigs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Link href="/" aria-label="Alchemane home" className="shrink-0">
          <Image src="/icons/new-logo.svg" alt="" width={160} height={40} priority />
        </Link>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={cn(
            "font-body text-small",
            "md:flex md:items-center md:gap-8",
            open ? "absolute inset-x-0 top-full flex flex-col gap-1 bg-white px-5 py-4 shadow-md" : "hidden md:flex"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className="min-h-[44px] py-2 text-ink underline-offset-4 hover:underline"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#consultation"
            className="hidden min-h-[44px] items-center text-small font-semibold text-ink underline-offset-4 hover:underline md:flex"
          >
            Need Consultation
          </a>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-controls="main-navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
