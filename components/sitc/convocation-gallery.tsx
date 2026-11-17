'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Image as ImageIcon, X } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { convocationEvents } from '@/components/sitc/site-data'

type ConvocationEvent = (typeof convocationEvents)[number]
const years = ['All years', 2026, 2025, 2024, 2023, 2022] as const

export function ConvocationGallery() {
  const [activeYear, setActiveYear] = useState<(typeof years)[number]>('All years')
  const [showAll, setShowAll] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<ConvocationEvent | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const filteredEvents = useMemo(
    () => activeYear === 'All years' ? [...convocationEvents] : convocationEvents.filter((event) => event.year === activeYear),
    [activeYear],
  )
  const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6)
  const featuredEventId = visibleEvents.find((event) => event.image)?.id

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selectedEvent && !dialog.open) dialog.showModal()
    if (!selectedEvent && dialog.open) dialog.close()
  }, [selectedEvent])

  function changeYear(year: (typeof years)[number]) {
    setActiveYear(year)
    setShowAll(false)
    setSelectedEvent(null)
  }

  function moveGallery(direction: -1 | 1) {
    if (!selectedEvent) return
    const currentIndex = filteredEvents.findIndex((event) => event.id === selectedEvent.id)
    const nextIndex = (currentIndex + direction + filteredEvents.length) % filteredEvents.length
    setSelectedEvent(filteredEvents[nextIndex])
  }

  return (
    <section className="convocation-section section-pad" id="convocation-gallery" aria-labelledby="convocation-title">
      <div className="site-container">
        <div className="convocation-section__header">
          <SectionHeading
            eyebrow="A record of the journey"
            titleId="convocation-title"

            title={<>A celebration<br />of achievement.</>}
            description="Browse the convocation dates and photographs included in the supplied SITC materials."
          />
          <span className="convocation-section__count">14 <small>galleries</small></span>
        </div>
        <div className="gallery-controls" role="group" aria-label="Filter convocation galleries by year">
          {years.map((year) => (
            <button
              key={year}
              className={`gallery-filter${activeYear === year ? ' is-active' : ''}`}
              type="button"
              aria-pressed={activeYear === year}
              onClick={() => changeYear(year)}
            >
              {year}
            </button>
          ))}
          <p className="gallery-controls__status" aria-live="polite">
            Showing {visibleEvents.length} of {filteredEvents.length} {filteredEvents.length === 1 ? 'gallery' : 'galleries'}
          </p>
        </div>
        <div className="gallery-grid">
          {visibleEvents.map((event, index) => (
            <button
              className={`gallery-card${event.id === featuredEventId ? ' gallery-card--feature' : ''}${event.image ? '' : ' gallery-card--no-image'}`}
              key={event.id}
              type="button"
              aria-label={`Open ${event.date} convocation gallery`}
              onClick={() => setSelectedEvent(event)}
            >
              <span className="gallery-card__image">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={`SITC Campus convocation photographs, ${event.date}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="gallery-card__photo"
                  />
                ) : (
                  <span className="gallery-card__no-photo">
                    <ImageIcon aria-hidden="true" size={28} />
                    <span>Photograph not included in supplied materials</span>
                  </span>
                )}
                <span className="gallery-card__open"><ArrowRight aria-hidden="true" size={18} /></span>
              </span>
              <span className="gallery-card__meta">
                <span>{event.date}</span>
                <span>Convocation <span aria-hidden="true">↗</span></span>
              </span>
            </button>
          ))}
        </div>
        {filteredEvents.length > 6 ? (
          <button className="button button--quiet gallery-more" type="button" onClick={() => setShowAll((current) => !current)}>
            {showAll ? 'Show fewer galleries' : 'Explore more convocations'} <ArrowRight aria-hidden="true" size={17} />
          </button>
        ) : null}
      </div>
      <dialog
        className="gallery-dialog"
        ref={dialogRef}
        aria-labelledby="gallery-dialog-title"
        onCancel={(event) => { event.preventDefault(); setSelectedEvent(null) }}
        onClose={() => setSelectedEvent(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelectedEvent(null) }}
      >
        {selectedEvent ? (
          <div className="gallery-dialog__content">
            <div className="gallery-dialog__topline">
              <div>
                <p className="section-kicker">SITC Campus · Convocation gallery</p>
                <h3 id="gallery-dialog-title">{selectedEvent.date}</h3>
              </div>
              <button className="icon-button" type="button" aria-label="Close convocation gallery" onClick={() => setSelectedEvent(null)}>
                <X aria-hidden="true" size={21} />
              </button>
            </div>
            {selectedEvent.image ? (
              <div className="gallery-dialog__image">
                <Image
                  src={selectedEvent.image}
                  alt={`SITC Campus convocation photographs from ${selectedEvent.date}`}
                  fill
                  sizes="min(90vw, 1100px)"
                  className="gallery-dialog__photo"
                />
              </div>
            ) : (
              <div className="gallery-dialog__empty">
                <ImageIcon aria-hidden="true" size={32} />
                <p>No photograph for this date was included in the supplied materials.</p>
              </div>
            )}
            <div className="gallery-dialog__footer">
              <button className="button button--quiet" type="button" onClick={() => moveGallery(-1)}>
                <ArrowLeft aria-hidden="true" size={17} /> Previous gallery
              </button>
              <span>{filteredEvents.findIndex((event) => event.id === selectedEvent.id) + 1} / {filteredEvents.length}</span>
              <button className="button button--quiet" type="button" onClick={() => moveGallery(1)}>
                Next gallery <ArrowRight aria-hidden="true" size={17} />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
