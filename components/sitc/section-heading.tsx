import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  titleId?: string
  description?: ReactNode
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}${className ? ` ${className}` : ''}`}>
      <p className="section-kicker">
        <span className="section-kicker__rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}
