import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vigor-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-vigor-orange-600 to-vigor-orange-500 text-white hover:shadow-vigor-lg hover:scale-[1.02] active:scale-[0.98]",
        secondary: "border-2 border-vigor-orange-500 text-vigor-orange-600 bg-transparent hover:bg-vigor-orange-500 hover:text-white hover:shadow-vigor",
        outline: "border border-white/20 text-white hover:bg-white/5",
        ghost: "text-vigor-silver-600 hover:bg-vigor-silver-100 hover:text-vigor-silver-800",
        link: "text-vigor-orange-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4 text-base",
        sm: "px-5 py-2.5 text-sm",
        lg: "px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
