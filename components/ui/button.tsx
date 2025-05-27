import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  className?: string
  as?: any
  href?: string
}

export function Button({ children, className, variant = "primary", size = "md", as, href, ...props }: ButtonProps) {
  const Component = as || "button"
  const styles = cn(
    "font-medium rounded-md transition-all transform",
    variant === "primary" &&
      "bg-[#FFC459] text-white hover:bg-[#F9A826] hover:shadow-md hover:scale-[0.98] active:bg-[#FFD07B] active:shadow-md",
    variant === "secondary" &&
      "bg-[#1e3a8a] text-white hover:bg-[#15296a] hover:shadow-md hover:scale-[0.98] active:bg-[#2a4bb0] active:shadow-md",
    variant === "outline" &&
      "border border-[#FFC459] text-[#FFC459] hover:bg-[#F9A826] hover:text-white hover:shadow-md hover:scale-[0.98] active:bg-[#FFD07B] active:text-white active:shadow-md",
    size === "sm" && "px-3 py-1 text-xs",
    size === "md" && "px-5 py-1.5 text-sm",
    size === "lg" && "px-6 py-2 text-base",
    className,
  )

  if (as === Link) {
    return (
      <Component href={href} className={styles}>
        {children}
      </Component>
    )
  }

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  )
}
