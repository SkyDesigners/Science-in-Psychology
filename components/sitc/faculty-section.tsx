'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { facultyMembers } from '@/components/sitc/site-data'

export function FacultySection() {
  const [activeIndex, setActiveIndex] = useState(7)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchStart = useRef<number | null>(null)
  // Stable portrait keys let each card glide to its next position.
  const positionedMembers = facultyMembers.map((member, index) => {
    let offset = (index - activeIndex + facultyMembers.length) % facultyMembers.length
    if (offset > facultyMembers.length / 2) offset -= facultyMembers.length
    return { member, offset }
  })

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % facultyMembers.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  function move(direction: -1 | 1) {
    setActiveIndex((index) => (index + direction + facultyMembers.length) % facultyMembers.length)
  }

  return (
    <section className="faculty-section section-pad" aria-labelledby="faculty-title">
      <div className="site-container">
        <div className="faculty-section__header">
          <SectionHeading
            eyebrow="Guidance along the way"
            titleId="faculty-title"

            title="Meet your academic community."
            description="Meet the people who guide and inspire your learning journey."
          />

        </div>
        <div className="faculty-carousel" role="region" aria-roledescription="carousel" tabIndex={0} onKeyDown={(event) => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) } if (event.key === 'ArrowRight') { event.preventDefault(); move(1) } }} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }} onTouchEnd={(event) => { if (touchStart.current !== null) { const distance = touchStart.current - event.changedTouches[0].clientX; if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1); touchStart.current = null } }} aria-label="Associate teaching faculty">
          {positionedMembers.map(({ member, offset }) => (
            <article className={`faculty-card faculty-card--position-${offset + 2}${offset === 0 ? ' faculty-card--featured' : ''}${Math.abs(offset) > 2 ? ' faculty-card--hidden' : ''}`} key={member.name} aria-hidden={offset !== 0}>
              <div className="faculty-card__photo">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 620px) 76vw, (max-width: 980px) 36vw, 350px"
                  className="faculty-card__image"
                />
              </div>
              <div className="faculty-card__info">
                <span>Associate teaching faculty</span>
                <h3>{member.name}</h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
