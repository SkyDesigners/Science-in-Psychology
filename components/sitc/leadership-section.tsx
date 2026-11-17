import Image from 'next/image'
import { SectionHeading } from '@/components/sitc/section-heading'

export function LeadershipSection() {
  return (
    <section className="leadership-section section-pad section-pad--wine" aria-labelledby="leadership-title">
      <div className="site-container leadership-section__grid">
        <div className="leadership-section__photo-wrap">
          <figure className="leadership-photo">
            <Image
              src="/sitc/vice-chancellor.jpg"
              alt="Emeritus Professor Upali Samarajeewa, Vice Chancellor"
              fill
              sizes="(max-width: 800px) 100vw, 42vw"
              className="leadership-photo__image"
            />
            <figcaption>Emeritus Professor Upali Samarajeewa · Vice Chancellor</figcaption>
          </figure>
        </div>
        <div className="leadership-section__copy">
          <SectionHeading
            eyebrow="A note for your next chapter"
            titleId="leadership-title"

            title={<>Message from the<br />Vice Chancellor.</>}
            description="Emeritus Professor Upali Samarajeewa"
            light
          />
          <div className="leadership-message" lang="en">
            <p className="leadership-message__salutation">Dear Students,</p>
            <p>It is my pleasure to welcome you to the Bachelor of Science in Psychology and Counselling programme at SITC Campus.</p>
            <p>Psychology and counselling offer a meaningful opportunity to understand human thoughts, emotions and behaviour, and to contribute to the wellbeing of individuals and communities. As these fields continue to evolve, the knowledge you gain will help you build a more compassionate, responsible and informed society.</p>
            <details className="leadership-message__details">
              <summary>Read the full message <span aria-hidden="true">↗</span></summary>
              <p>Your academic journey should extend beyond passing examinations and earning a degree. Use this opportunity to ask questions, think critically, evaluate evidence and listen to diverse perspectives. Approach the experiences of others with respect and openness. These habits will provide a strong foundation for your professional development and lifelong learning.</p>
              <p>Understanding people from different social and cultural backgrounds carries an important responsibility: to uphold their dignity and protect their privacy. As you develop your academic knowledge, I encourage you to nurture empathy, integrity and a commitment to the wellbeing of others.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
