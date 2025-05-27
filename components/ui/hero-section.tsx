import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonHref: string
  backgroundImage: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[600px] w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-6 z-10 max-w-3xl">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-5xl font-bold">
            {title} <span className="text-[#f0b040]">{subtitle}</span>
          </h1>
          <div className="w-24 h-1 bg-[#f0b040]" />
          <p className="text-white text-lg max-w-2xl">{description}</p>
          <div className="mt-4">
            <Button
              as={Link}
              href={buttonHref}
              className="bg-[#f0b040] hover:bg-[#f0b040]/90 text-white px-6 py-3 rounded-md"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
