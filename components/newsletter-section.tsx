"use client"

import type React from "react"

import { useState } from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { SuccessModal } from "@/components/ui/success-modal"
import { ErrorModal } from "@/components/ui/error-modal"
import { Upload, Loader2 } from "lucide-react"
import type { ContactFormData, FormErrors } from "@/types/form"
import { validateContactForm, hasErrors } from "@/utils/form-validation"
import { submitToBackend } from "@/services/backend"

export default function NewsletterSection() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    ciudad: "",
    experiencia: "",
    foto: null,
    newsletter: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }))

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    setFormData((prev) => ({
      ...prev,
      foto: file,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Limpiar errores previos
    setErrors({})

    // Validar formulario
    const validationErrors = validateContactForm(formData)

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors)
      return
    }

    // Iniciar proceso de envío
    setIsSubmitting(true)

    try {
      // Llamar al backend
      const response = await submitToBackend(formData)

      if (response.success) {
        // Éxito: mostrar modal de confirmación y limpiar formulario
        setIsSuccessModalOpen(true)
        setFormData({
          nombre: "",
          email: "",
          ciudad: "",
          experiencia: "",
          foto: null,
          newsletter: false,
        })
        setSelectedFile(null)
        // Limpiar input de archivo
        const fileInput = document.getElementById("foto") as HTMLInputElement
        if (fileInput) {
          fileInput.value = ""
        }
      } else {
        // Error: mostrar modal de error
        setIsErrorModalOpen(true)
      }
    } catch (error) {
      // Error inesperado: mostrar modal de error
      setIsErrorModalOpen(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false)
  }

  const closeErrorModal = () => {
    setIsErrorModalOpen(false)
  }

  return (
    <>
      <AnimatedSection direction="left" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="ÚNETE A LA AVENTURA"
            description="Comparte tu experiencia con esta receta y sé parte de nuestra comunidad. Recibirás actualizaciones sobre nuevas recetas de Turrialba y promociones de productores locales."
          />

          <div className="max-w-3xl mx-auto bg-white rounded-sm p-6 md:p-10 mt-12 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-[#1e3a8a] font-medium">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.nombre ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[#FFC459]"
                    } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
                  />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[#1e3a8a] font-medium">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tucorreo@ejemplo.com"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[#FFC459]"
                    } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="ciudad" className="block text-[#1e3a8a] font-medium">
                    Ciudad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    placeholder="Tu ciudad"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.ciudad ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[#FFC459]"
                    } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
                  />
                  {errors.ciudad && <p className="text-red-500 text-xs mt-1">{errors.ciudad}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="foto" className="block text-[#1e3a8a] font-medium">
                    Foto de tu Receta <span className="text-gray-400">(opcional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="foto"
                      name="foto"
                      accept="image/*"
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="hidden"
                    />
                    <label
                      htmlFor="foto"
                      className={`w-full px-4 py-2 border border-gray-200 rounded-sm text-gray-600 flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                        isSubmitting ? "bg-gray-50 cursor-not-allowed" : "hover:bg-gray-50 hover:border-[#FFC459]"
                      }`}
                    >
                      <Upload size={18} />
                      <span>{selectedFile ? selectedFile.name : "Subir Foto"}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="experiencia" className="block text-[#1e3a8a] font-medium">
                  Tu Experiencia <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Cuéntanos cómo fue preparada tu receta..."
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 transition-colors resize-none ${
                    errors.experiencia ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[#FFC459]"
                  } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
                ></textarea>
                {errors.experiencia && <p className="text-red-500 text-xs mt-1">{errors.experiencia}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`mt-1 mr-3 h-4 w-4 rounded-sm border-gray-300 text-[#FFC459] focus:ring-[#FFC459] ${
                      isSubmitting ? "cursor-not-allowed" : ""
                    }`}
                  />
                  <label htmlFor="newsletter" className="text-gray-600 text-sm">
                    Me gustaría recibir actualizaciones sobre nuevas recetas y promociones de productores locales de
                    Turrialba. Entiendo que mis datos serán utilizados de acuerdo con la política de privacidad.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.newsletter && <p className="text-red-500 text-xs mt-1">{errors.newsletter}</p>}
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-2 rounded-sm transition-all ${
                    isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#FFC459] hover:bg-[#F9A826] text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="¡Gracias por Contactarnos!"
        message="Hemos recibido tu experiencia con la receta. Nos encanta saber cómo te fue preparándola. Te contactaremos pronto para compartir más aventuras gastronómicas de Turrialba."
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={closeErrorModal}
        title="Error al Enviar"
        message="Ocurrió un error al enviar tu experiencia. Por favor intentá más tarde."
      />
    </>
  )
}
