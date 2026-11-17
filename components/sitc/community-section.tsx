'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { communityStories } from '@/components/sitc/site-data'

export function CommunitySection() {
  const [selectedStory, setSelectedStory] = useState<(typeof communityStories)[number] | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selectedStory && !dialog.open) dialog.showModal()
    if (!selectedStory && dialog.open) dialog.close()
  }, [selectedStory])

  return (
    <section className="community-section section-pad" aria-labelledby="community-title">
      <div className="site-container">
        <div className="community-section__header">
          <SectionHeading
            eyebrow="CSR programme"
            titleId="community-title"

            title={<>Knowledge with purpose.<br />Impact beyond campus.</>}
            description="Community and student initiatives included in the supplied programme materials."
          />
        </div>
        <div className="community-grid">
          {communityStories.map((story, index) => (
            <button className="community-card" type="button" key={story.title} onClick={() => setSelectedStory(story)} aria-label={`View details: ${story.title}`}>
              <span className="community-card__image">
                <Image
                  src={story.image}
                  alt={`Supplied programme photograph for ${story.title}`}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="community-card__photo"
                />
                <span className="community-card__open"><ArrowUpRight aria-hidden="true" size={18} /></span>
              </span>
              <span className="community-card__body">
                <span className="community-card__category">{story.category}</span>
                <span className="community-card__title">{story.title}</span>
                <span className="community-card__index">{String(index + 1).padStart(2, '0')}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <dialog
        className="story-dialog"
        ref={dialogRef}
        aria-labelledby="story-dialog-title"
        onCancel={(event) => { event.preventDefault(); setSelectedStory(null) }}
        onClose={() => setSelectedStory(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelectedStory(null) }}
      >
        {selectedStory ? (
          <div className="story-dialog__content">
            <div className="story-dialog__head">
              <div>
                <p className="section-kicker">{selectedStory.category}</p>
                <h3 id="story-dialog-title">{selectedStory.title}</h3>
              </div>
              <button className="icon-button" type="button" aria-label="Close story" onClick={() => setSelectedStory(null)}>
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <div className="story-dialog__photo">
              <Image src={selectedStory.image} alt={`Supplied programme photograph for ${selectedStory.title}`} fill sizes="min(90vw, 900px)" />
            </div>
            <p>{selectedStory.description}</p>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
