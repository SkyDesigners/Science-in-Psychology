import { ArrowUpRight, Download } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { faqs } from '@/components/sitc/site-data'

export function FaqSection() {
  return (
    <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
      <div className="site-container faq-section__grid">
        <div className="faq-section__intro">
          <SectionHeading
            eyebrow="Frequently asked"
            titleId="faq-title"

            title={<>Let&apos;s make your<br />next step easier.</>}
            description="Answers drawn from the supplied programme brochure. Admissions can confirm how the details apply to you."
          />
          <a className="text-link" href="https://wa.link/bsc-psychology" target="_blank" rel="noreferrer noopener">
            Speak with SITC admissions <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <div className="faq-brochure">
            <a className="button button--primary" href="/sitc/psychology-counselling-programme.pdf" download="SITC-Psychology-and-Counselling-Programme.pdf">
              Download programme PDF <Download aria-hidden="true" size={17} />
            </a>
            <p>Full programme brochure · 28 pages · PDF, 7.2 MB</p>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span className="faq-item__number">{String(index + 1).padStart(2, '0')}</span>
                <span>{faq.question}</span>
                <span className="faq-item__toggle" aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
