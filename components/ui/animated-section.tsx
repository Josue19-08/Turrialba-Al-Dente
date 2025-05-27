"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  direction?: "left" | "right"
  className?: string
  delay?: number
}

export function AnimatedSection({ children, direction = "left", className, delay = 0 }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isIntersecting
          ? "opacity-100 translate-x-0"
          : cn("opacity-0", direction === "left" ? "-translate-x-16" : "translate-x-16"),
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
