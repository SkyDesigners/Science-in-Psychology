'use client'

import { type KeyboardEvent, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { programmeYears } from '@/components/sitc/site-data'

export function ProgrammeSection() {
  const [activeYearId, setActiveYearId] = useState(programmeYears[0].id)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeYear = programmeYears.find((year) => year.id === activeYearId) ?? programmeYears[0]

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = (currentIndex + direction + programmeYears.length) % programmeYears.length
    setActiveYearId(programmeYears[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="programme-section section-pad section-pad--navy" id="programme" aria-labelledby="programme-title">
      <div className="site-container">
        <div className="programme-section__header">
          <SectionHeading
            eyebrow="The academic journey"
            titleId="programme-title"

            title={<>Explore a world<br />of understanding.</>}
            description="From the foundations of counselling to an independent research dissertation. Explore all 24 modules in the supplied programme brochure."
            light
          />
          <a className="button button--light-outline" href="#pathway">
            Check your entry pathway <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="programme-tabs" role="tablist" aria-label="Academic year">
          {programmeYears.map((year, index) => (
            <button
              key={year.id}
              ref={(element) => { tabRefs.current[index] = element }}
              className={`programme-tabs__tab${activeYearId === year.id ? ' is-active' : ''}`}
              type="button"
              role="tab"
              id={`${year.id}-tab`}
              aria-selected={activeYearId === year.id}
              aria-controls={`${year.id}-panel`}
              tabIndex={activeYearId === year.id ? 0 : -1}
              onClick={() => setActiveYearId(year.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span>{year.label}</span>
              <span className="programme-tabs__count">0{index + 1}</span>
            </button>
          ))}
        </div>
        <div
          className="module-panel"
          id={`${activeYear.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeYear.id}-tab`}
          tabIndex={0}
        >
          <div className="module-panel__topline">
            <p>{activeYear.label} <span>·</span> Core modules</p>
            <span>{activeYear.modules.length} modules listed</span>
          </div>
          <ol className="module-grid">
            {activeYear.modules.map((module, index) => (
              <li className="module-card" key={module.code}>
                <span className="module-card__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="module-card__content">
                  <p className="module-card__code">{module.code}</p>
                  <h3>{module.title}</h3>
                </div>
                <span className="module-card__credits">{module.credits} <small>credits</small></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
