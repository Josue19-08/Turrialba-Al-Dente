"use client"

import { CollaboratorCard } from "@/components/ui/collaborator-card"
import { SectionTitle } from "@/components/ui/section-title"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useCollaborators } from "@/hooks/use-collaborators"

export default function CollaboratorsSection() {
  const { collaborators } = useCollaborators()

  return (
    <AnimatedSection direction="left" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="NUESTROS COLABORADORES"
          description="Detrás de esta aventura gastronómica hay personas apasionadas por descubrir y compartir los sabores auténticos de Costa Rica."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {collaborators.map((collaborator) => (
            <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
