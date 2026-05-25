import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold text-preset-5-bold uppercase tracking-widest transition-all duration-150 focus-visibile:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        tab: [
          "rounded-none border-2 border-solid border-white text-white",
          "hover:bg-accent hover:border-accent hover:text-background",
          "active:bg-accent active:border-transparent active:text-background",
          "focus-visible:border-dashed focus-visible:border-accent focus-visible:text-white focus-visible:bg-transparent",
        ],
        filter: [
          "rounded-full border-2 border-solid border-border text-foreground",
          "hover:bg-accent hover:border-transparent hover:text-background",
          "active:bg-transparent active:border-accent active:text-accent",
          "focus-visible:border-dashed focus-visible:border-accent focus-visible:text-accent focus-visible:bg-transparent",
        ],
        toggle: [
          "rounded-full border-2 border-dashed border-accent text-accent",
          "hover:bg-accent hover:border-transparent hover:text-background",
          "active:bg-transparent active:border-dashed active:border-accent active:text-accent",
          "focus-visible:border-solid focus-visible:border-accent focus-visible:text-accent focus-visible:bg-transparent",
        ],
        clear: [
          "rounded-full border-2 border-solid border-dark-red text-dark-red",
          "hover:bg-dark-red hover:border-none hover:text-background",
          "active:bg-transparent active:border-dark-red active:text-dark-red",
          "focus-visible:border-dashed focus-visible:border-dark-red focus-visible:text-dark-red focus-visible:bg-transparent",
        ],
        primary: [
          "bg-background text-foreground border-2 border-solid border-accent",
          "hover:bg-accent hover:text-background",
          "focus-visible:border-dashed",
        ],
        secondary: [
          "bg-cyan text-background border-2 border-solid border-transparent",
          "hover:bg-background hover:text-foreground hover:border-border",
          "focus-visible:border-2 focus-visible:border-dashed focus-visible:border-border focus-visible:bg-cyan focus-visible:text-background",
        ],
      },
      size: {
        menu: "p-3",
        sm: "h-10 px-4",
        md: "h-14 px-8",
        lg: "h-16 px-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
