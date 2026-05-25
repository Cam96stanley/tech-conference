import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-150 focus-visibile:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: [
            "bg-background text-foreground border-2 border-solid border-accent",
            "hover:bg-accent hover:text-background hover:shadow-[4px_4px_0px_#c8f135",
            "focus-visible:border-dashed",
        ],
        secondary: [
            "bg-cyan text-background border-2 border-solid border-transparent",
            "hover:bg-background hover:text-foreground hover:border-border",
            "focus-visible:border-2 focus-visible:border-dashed focus-visible:border-border focus-visible:bg-cyan focus-visible:text-background"
        ]
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-14 px-8 text-sm",
        lg: "h-16 px-10 text-base",
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
