interface SectionTitleProps {
  title: string
  description?: string
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{title}</h2>
      <div className="w-32 h-1 bg-[#FFC459] mx-auto mb-6"></div>
      {description && <p className="text-gray-600 max-w-3xl mx-auto text-center">{description}</p>}
    </div>
  )
}
