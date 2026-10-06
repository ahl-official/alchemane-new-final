import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm px-6 text-small font-semibold transition-colors duration-fast ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-ink text-white hover:bg-ink/90",
        outline: "border border-ink bg-transparent text-ink hover:bg-ink/5",
        ghost: "text-ink hover:bg-ink/5",
      },
    },
    defaultVariants: { variant: "solid" },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants>;

export function LinkButton({ className, variant, ...props }: LinkButtonProps) {
  return <a className={cn(buttonVariants({ variant }), className)} {...props} />;
}
