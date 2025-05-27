import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Turrialba Logo" width={28} height={28} className="object-contain" />
      <div className="flex flex-col">
        <span className="text-[#1e3a8a] font-bold text-lg leading-none tracking-tight">TURRIALBA</span>
        <span className="text-[#f0b040] text-[10px] font-medium leading-none tracking-wide">AL DENTE</span>
      </div>
    </Link>
  )
}
