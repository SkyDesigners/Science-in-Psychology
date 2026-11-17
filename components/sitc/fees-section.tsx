'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { courseFees, discountedFee, programmeAndRegistration, formatLkr, feeTranslations, type FeeLanguage } from './fee-data'

export function FeesSection() {
  const [language, setLanguage] = useState<FeeLanguage>('mixed')
  const t = feeTranslations[language]
  const rows = [
    [t.original, formatLkr(courseFees.original)],
    [t.discount, `− ${formatLkr(courseFees.discount)}`],
    [t.discounted, formatLkr(discountedFee)],
    [t.registration, formatLkr(courseFees.registration)],
    [t.summary, formatLkr(programmeAndRegistration)],
  ]
  const steps = [
    [t.registration, formatLkr(courseFees.registration)],
    [t.instalments, `${formatLkr(courseFees.monthly)} × ${t.instalmentPeriod}`],
  ]

  return (
    <section className="fees-section section-pad fees-refined" id="fees" aria-labelledby="fees-title" lang={language === 'mixed' ? 'si-LK' : language}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="site-container">
        <div className="fees-section__header">
          <SectionHeading eyebrow={t.eyebrow} titleId="fees-title" title={t.heading} description={t.introduction} />
          <label className="fee-language">
            <span>{t.language}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value as FeeLanguage)}>
              <option value="mixed">සිංහල + English</option>
              <option value="en">English</option>
              <option value="si">සිංහල</option>
              <option value="ta">தமிழ்</option>
            </select>
          </label>
        </div>
        <div className="fee-layout">
          <div className="fee-breakdown">
            <p className="fee-breakdown__label">{t.plan}</p>
            <div className="fee-breakdown__monthly"><strong>{formatLkr(courseFees.monthly)}</strong><span>{t.perMonth}</span></div>
            <p className="fee-plan-period">{t.months}</p>
            <div className="fee-line"><span>{t.discounted}</span><strong>{formatLkr(discountedFee)}</strong></div>
            <div className="fee-line"><span>{t.registration}</span><strong>{formatLkr(courseFees.registration)}</strong></div>
            <div className="fee-total"><span>{t.summary}</span><strong>{formatLkr(programmeAndRegistration)}</strong></div>
            <p className="fee-instalment-note">{t.instalmentNote}</p>
          </div>
          <div className="fee-calculator">
            <h3>{t.rightHeading}</h3>
            <dl className="fee-detail-rows">
              {rows.map(([label, amount], index) => <div className={index === rows.length - 1 ? 'fee-detail-rows__total' : ''} key={label}><dt>{label}</dt><dd>{amount}</dd></div>)}
            </dl>
          </div>
        </div>
        <div className="fee-timeline">
          <h3>{t.timeline}</h3>
          <ol>{steps.map(([title, amount], index) => <li key={title}><span className="fee-timeline__step">{t.step} {String(index + 1).padStart(2, '0')}</span><h4>{title}</h4><p>{amount}</p></li>)}</ol>
        </div>
        <div className="fee-admissions"><div><h3>{t.help}</h3></div><a className="button button--primary" href="https://wa.link/bsc-psychology" target="_blank" rel="noreferrer noopener">{t.cta}<ArrowUpRight aria-hidden="true" size={17} /></a></div>
      </div>
    </section>
  )
}
