import Image from 'next/image'
import { Award } from 'lucide-react'

const showPartnershipCard = false

const cards = [
  {
    image: 'awarding-convocation-upscaled.jpg',
    alt: 'Graduates and academic staff on stage at the SITC general convocation',
    eyebrow: 'Academic direction',
    title: 'University-linked awarding pathway',
    description: 'The programme document identifies PSB University as the awarding body for the degree pathway.',
    className: '',
  },
  {
    image: 'ugc-letter.webp',
    alt: 'UGC recognition letter dated 11 August 2023, included on page 2 of the programme document',
    eyebrow: 'Recognition',
    title: 'UGC Recognition',
    description: 'The programme PDF includes a UGC recognition letter for PSB University, dated 11 August 2023.',
    className: ' credibility-card__image--letter',
  },
  {
    image: 'certificate-profile.webp',
    alt: 'PSB University sample degree certificate from page 12 of the programme document',
    eyebrow: 'Verification',
    title: 'Certificate & transcript profile',
    description: 'The course material includes certificate, transcript and online verification examples.',
    className: '',
  },
  {
    image: 'psb-university-campus.jpg',
    alt: 'PSB University campus building in Cambodia',
    eyebrow: 'Academic partnership',
    title: 'SITC × PSB University',
    description: 'SITC Campus partners with PSB University, Cambodia, for the Bachelor of Science in Psychology and Counselling pathway, with PSB University as the awarding body.',
    className: ' credibility-card__image--university',
  },
]

export function CredibilitySection() {
  return (
    <section className="credibility-section section-pad" aria-labelledby="credibility-title">
      <div className="site-container">
        <div className="credibility-section__intro">
          <p className="section-kicker">Recognition &amp; credibility</p>
          <h2 id="credibility-title">A credible foundation for your<br className="credibility-section__break" /> professional future</h2>
          <p>The programme document identifies PSB University as the awarding body and describes its recognition by the University Grants Commission of Sri Lanka and accreditation by ASIC, United Kingdom.</p>
        </div>
        <div className={`credibility-section__cards${showPartnershipCard ? ' credibility-section__cards--with-partnership' : ''}`}>
          {cards.filter((card) => showPartnershipCard || card.image !== 'psb-university-campus.jpg').map((card) => (
            <article className="credibility-card" key={card.image}>
              <a className={`credibility-card__image${card.className}`} href={`/sitc/recognition/${card.image}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${card.title} image in a new tab`}>
                {card.image === 'certificate-profile.webp' ? (
                  <span className="credibility-card__certificate-crop">
                    <Image src={`/sitc/recognition/${card.image}`} alt={card.alt} fill sizes="450px" />
                  </span>
                ) : (
                  <Image src={`/sitc/recognition/${card.image}`} alt={card.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 25vw" />
                )}
              </a>
              <div className="credibility-card__body">
                <p className="credibility-card__eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="credibility-section__note">
          <Award size={27} aria-hidden="true" />
          <p>This course is provided by SITC Campus, with PSB University, Cambodia, as the awarding body.</p>
        </div>
      </div>
    </section>
  )
}
