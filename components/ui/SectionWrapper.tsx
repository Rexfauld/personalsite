interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({
  id,
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 px-6 max-w-5xl mx-auto scroll-mt-20 ${className}`}>
      {children}
    </section>
  )
}
