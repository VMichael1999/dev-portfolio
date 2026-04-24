interface SectionHeaderProps {
  subtitle: string
  title: string
  highlightLastWord?: boolean
  allGreen?: boolean
  className?: string
}

export function SectionHeader({
  subtitle,
  title,
  highlightLastWord = true,
  allGreen = false,
  className,
}: SectionHeaderProps) {
  const words = title.split(' ')
  const lastWord = words.pop()
  const rest = words.join(' ')

  return (
    <div className={`text-center mb-16 ${className ?? ''}`}>
      <p className="font-mono text-sm mb-3" style={{ color: 'var(--green)' }}>
        {subtitle}
      </p>
      <h2 className="text-4xl font-bold" style={{ color: allGreen ? 'var(--green)' : 'var(--text)' }}>
        {!allGreen && highlightLastWord && lastWord ? (
          <>
            {rest}{rest ? ' ' : ''}
            <span style={{ color: 'var(--green)' }}>{lastWord}</span>
          </>
        ) : (
          title
        )}
      </h2>
    </div>
  )
}
