import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold font-body transition-colors focus:outline-none focus:ring-2 focus:ring-vigor-orange-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-vigor-orange-500 text-white",
        secondary: "border-transparent bg-vigor-silver-100 text-vigor-silver-800",
        outline: "border-vigor-silver-200 text-vigor-silver-700",
        glow: "border-transparent bg-white/10 text-white backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
