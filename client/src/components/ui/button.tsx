import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-label! shadow-down inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-background-100 hover:bg-primary-200",
        outline: "text-primary-100 border-primary-100 border bg-transparent",
        "icon-outline":
          "text-text-100 border-background-300 hover:bg-background-200 border bg-transparent",
      },
      size: {
        default: "h-10 p-3",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants, Button };
