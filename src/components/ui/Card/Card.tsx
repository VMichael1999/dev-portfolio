import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/30',
        className,
      )}
    >
      {children}
    </div>
  )
}
