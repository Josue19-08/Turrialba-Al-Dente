import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Globe } from "lucide-react"
import type { Collaborator } from "@/types/collaborator"

interface CollaboratorCardProps {
  collaborator: Collaborator
}

export function CollaboratorCard({ collaborator }: CollaboratorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col items-center relative">
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
        <Image
          src={collaborator.image || "/placeholder.svg"}
          alt={`Fotografía de ${collaborator.name} - ${collaborator.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 160px"
        />
      </div>

      <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">{collaborator.name}</h3>

      <div className="text-[#FFC459] uppercase text-sm font-medium mb-4">{collaborator.title}</div>

      <p className="text-gray-600 text-center mb-6">{collaborator.description}</p>

      <div className="flex items-center gap-4 mt-auto">
        {collaborator.socialLinks.instagram && (
          <Link
            href={collaborator.socialLinks.instagram}
            className="text-[#FFC459] hover:text-[#B77E18] active:text-[#FFD78F] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
          </Link>
        )}
        {collaborator.socialLinks.youtube && (
          <Link
            href={collaborator.socialLinks.youtube}
            className="text-[#FFC459] hover:text-[#B77E18] active:text-[#FFD78F] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={20} />
          </Link>
        )}
        {collaborator.socialLinks.website && (
          <Link
            href={collaborator.socialLinks.website}
            className="text-[#FFC459] hover:text-[#B77E18] active:text-[#FFD78F] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={20} />
          </Link>
        )}
      </div>

      {collaborator.logo && (
        <div className="absolute bottom-4 right-4">
          <Image
            src={collaborator.logo || "/placeholder.svg"}
            alt={`Logo de ${collaborator.name}`}
            width={32}
            height={32}
            className="opacity-60"
          />
        </div>
      )}
    </div>
  )
}
