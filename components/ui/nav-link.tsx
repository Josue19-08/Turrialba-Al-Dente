import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  active?: boolean
}

export function NavLink({ href, children, className, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[#1e3a8a] text-sm font-medium hover:text-[#1e3a8a]/80 transition-colors",
        active && "font-semibold",
        className,
      )}
    >
      {children}
    </Link>
  )
}
