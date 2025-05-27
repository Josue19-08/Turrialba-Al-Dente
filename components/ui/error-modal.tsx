"use client"

import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export function ErrorModal({
  isOpen,
  onClose,
  title = "Error al Enviar",
  message = "Ocurrió un error al enviar tu experiencia. Por favor intentá más tarde.",
}: ErrorModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-sm">
      <div className="text-center">
        {/* Error Icon */}
        <div className="mx-auto flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{title}</h3>

        {/* Message */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{message}</p>

        {/* Action Button */}
        <Button onClick={onClose} className="w-full bg-red-500 hover:bg-red-600 text-white">
          Intentar de Nuevo
        </Button>
      </div>
    </Modal>
  )
}
