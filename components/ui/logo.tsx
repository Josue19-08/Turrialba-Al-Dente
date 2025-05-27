import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  href?: string
  variant?: "default" | "white"
}

export function Logo({ href = "/", variant = "default" }: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Logo de Turrialba Al Dente - Olla de cocina con hierbas"
        width={56}
        height={56}
        className="object-contain"
      />
      <div className="flex items-baseline">
        <span className={`font-bold text-2xl ${variant === "white" ? "text-white" : "text-[#1e3a8a]"}`}>TURRIALBA</span>
        <span className={`text-sm font-medium ml-2 ${variant === "white" ? "text-[#FFC459]" : "text-[#FFC459]"}`}>
          AL DENTE
        </span>
      </div>
    </Link>
  )
}
