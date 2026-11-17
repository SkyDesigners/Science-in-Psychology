'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Info } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'

const options = [
  { value: 'gce-advanced-level', label: 'G.C.E. Advanced Level Completed' },
  { value: 'sitc-diploma', label: 'SITC Psychology & Counselling Diploma' },
  { value: 'slqf-diploma', label: 'Relevant SLQF Level 3 Diploma' },
  { value: 'one-year-diploma', label: 'Relevant one-year diploma with 30 credits' },
  { value: 'other', label: 'Another qualification / not sure yet' },
]

export function PathwaySection() {
  const [qualification, setQualification] = useState('')
  const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  function checkPathway(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!qualification) {
      setResult({ type: 'error', message: 'Choose a qualification to see the preliminary guidance.' })
      return
    }

    if (qualification === 'gce-advanced-level') {
      setResult({
        type: 'success',
        message: 'Completed your G.C.E. Advanced Level? Contact SITC admissions with your results to discuss your entry pathway for Psychology and Counselling.',
      })
      return
    }

    if (qualification === 'other') {
      setResult({
        type: 'success',
        message: 'The supplied brochure does not confirm an entry route for this qualification. Contact SITC admissions for an individual assessment.',
      })
      return
    }

    setResult({
      type: 'success',
      message: 'The brochure lists this type of diploma for consideration. SITC must review your qualification, subject relevance and credits before confirming entry or any exemption.',
    })
  }

  return (
    <section className="pathway-section section-pad" id="pathway" aria-labelledby="pathway-title">
      <div className="site-container pathway-section__grid">
        <div className="pathway-section__intro">
          <SectionHeading
            eyebrow="Start with what you know"
            titleId="pathway-title"

            title={<>Find your<br />starting point.</>}
            description="Explore your next step based on your current qualifications."
          />
        </div>
        <div className="pathway-card">
          <p className="pathway-card__step">YOUR ENTRY PATHWAY <span>01 / 01</span></p>
          <form onSubmit={checkPathway} noValidate>
            <label className="field-label" htmlFor="qualification">What qualification do you currently hold?</label>
            <select
              id="qualification"
              className="field-control"
              value={qualification}
              aria-describedby="qualification-help"
              aria-invalid={result?.type === 'error'}
              onChange={(event) => {
                setQualification(event.target.value)
                setResult(null)
              }}
            >
              <option value="">Choose a qualification</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <p className="field-help" id="qualification-help">Select the closest match; admissions can confirm how it applies to you.</p>
            <button className="button button--primary pathway-card__submit" type="submit">
              Check my pathway <ArrowRight aria-hidden="true" size={17} />
            </button>
          </form>
          {result ? (
            <div className={`pathway-result pathway-result--${result.type}`} role={result.type === 'error' ? 'alert' : 'status'} aria-live="polite">
              {result.type === 'success' ? <Check aria-hidden="true" size={18} /> : <Info aria-hidden="true" size={18} />}
              <p>{result.message}</p>
            </div>
          ) : (
            <p className="pathway-card__empty">Your guidance will appear here after you make a selection.</p>
          )}
          <a className="text-link" href="https://wa.link/bsc-psychology" target="_blank" rel="noreferrer noopener">
            Ask admissions to review my qualification <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
