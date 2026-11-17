'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'

type Countdown = { days: number; hours: number; minutes: number; seconds: number } | null
const firstLecture = new Date('2027-12-06T20:00:00+05:30')

function getCountdown(): Countdown {
  const remaining = firstLecture.getTime() - Date.now()
  if (remaining <= 0) return null
  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining % 86_400_000) / 3_600_000),
    minutes: Math.floor((remaining % 3_600_000) / 60_000),
    seconds: Math.floor((remaining % 60_000) / 1_000),
  }
}

export function IntakeSection() {
  const [countdown, setCountdown] = useState<Countdown>(null)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const update = () => {
      setCountdown(getCountdown())
      setHasLoaded(true)
    }
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="intake-section section-pad section-pad--navy" id="admissions" aria-labelledby="intake-title">
      <div className="site-container intake-section__grid">
        <div className="intake-section__copy">
          <SectionHeading
            eyebrow="Academic calendar · brochure date"
            titleId="intake-title"

            title={<>Plan your next<br />chapter.</>}
            description="The next intake begins in December 2027. Join the first lecture on 06 December 2027 at 8:00 PM Sri Lanka time."
            light
          />
          <a className="button button--gold" href="https://wa.link/bsc-psychology" target="_blank" rel="noreferrer noopener">
            Inquiry <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="intake-card">
          <div className="intake-card__heading">
            <div>
              <p className="intake-card__eyebrow"><Clock3 aria-hidden="true" size={15} /> First Lecture</p>
              <h3>06 <span>December</span> 2027</h3>
            </div>
            <CalendarDays aria-hidden="true" className="intake-card__calendar-icon" size={26} />
          </div>
          {countdown ? (
            <div className="countdown" aria-label={`${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes and ${countdown.seconds} seconds until the first lecture`}>
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds },
              ].map((unit) => (
                <div className="countdown__unit" key={unit.label} aria-hidden="true">
                  <strong>{String(unit.value).padStart(2, '0')}</strong>
                  <span>{unit.label}</span>
                </div>
              ))}
            </div>
          ) : hasLoaded ? (
            <p className="countdown-expired" role="status">The first lecture date has passed. Contact admissions to confirm the next intake.</p>
          ) : (
            <div className="countdown countdown--loading" aria-hidden="true">
              <span>—</span><span>—</span><span>—</span><span>—</span>
            </div>
          )}
          <details className="schedule-details">
            <summary>View class timetable &amp; course details <span aria-hidden="true">+</span></summary>
            <div className="schedule-details__content">
              <div><span>Class schedule</span><strong>Online via Zoom</strong></div>
              <div><span>Weekly class days</span><strong>Saturday &amp; Sunday</strong></div>
              <div><span>Class time</span><strong>7:00 PM – 10:00 PM<br /><small>Sri Lanka time · UTC +05:30</small></strong></div>
              <div><span>Learning support</span><strong>Live classes and recordings</strong></div>
              <div><span>Practical sessions</span><strong>Monthly, after the first six months</strong></div>
              <div><span>Course completion date listed</span><strong>24 December 2028</strong></div>
              <p className="schedule-details__note" lang="si">පන්ති Zoom හරහා පැවැත්වේ. සහභාගී වීම අනිවාර්ය වන අතර, පෝය සහ රජයේ නිවාඩු දිනවල පන්ති නොපැවැත්වේ. පළමු මාස 06න් පසු මසකට එක් සති අන්ත දිනයක ප්‍රායෝගික දේශන පැවැත්වේ.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
