"use client"

import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "¡Mensaje Enviado!",
  message = "Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.",
}: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-sm">
      <div className="text-center">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{title}</h3>

        {/* Message */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{message}</p>

        {/* Action Button */}
        <Button onClick={onClose} className="w-full bg-[#FFC459] hover:bg-[#F9A826] text-white">
          Continuar
        </Button>
      </div>
    </Modal>
  )
}
