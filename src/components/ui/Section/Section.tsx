import { cn } from '@/utils/cn'

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-20', className)}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-white">
          <span className="text-cyan-400">/</span> {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
