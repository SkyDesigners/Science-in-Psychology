'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { banks } from '@/components/sitc/site-data'

export function PaymentSection() {
  const [activeBankId, setActiveBankId] = useState<(typeof banks)[number]['id']>(banks[0].id)
  const [copyStatus, setCopyStatus] = useState('')
  const activeBank = banks.find((bank) => bank.id === activeBankId) ?? banks[0]

  async function copyAccountNumber() {
    if (!navigator.clipboard) {
      setCopyStatus('Copy is unavailable in this browser. Select the account number to copy it manually.')
      return
    }

    try {
      await navigator.clipboard.writeText(activeBank.accountNumber)
      setCopyStatus(`${activeBank.name} account number copied.`)
    } catch {
      setCopyStatus('Copy is unavailable in this browser. Select the account number to copy it manually.')
    }
  }

  return (
    <section className="payment-section section-pad" id="payments" aria-labelledby="payments-title">
      <div className="site-container payment-section__grid">
        <div className="payment-section__copy">
          <SectionHeading
            eyebrow="Payment options"
            titleId="payments-title"

            title={<>Choose how you<br />would like to pay.</>}
            description="Pay your registration fee by online card payment or bank transfer. Both methods are listed in the programme brochure."
          />
          <h3 className="payment-method-label">Online card payment</h3>
          <p className="payment-section__sinhala" lang="si">
            ගෙවීමෙන් අනතුරුව රිසිට්පතේ පැහැදිලි ඡායාරූපයක් ඔබගේ නම සමඟ WhatsApp අංකයට යොමු කරන්න.
          </p>
          <a className="button button--primary" href="https://payhere.lk/pay/o4b4d0089" target="_blank" rel="noreferrer noopener">
            Pay registration fee <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="bank-card">
          <div className="bank-card__top">
            <p className="bank-card__eyebrow">Bank transfer · LKR</p>
            <span>Choose your bank</span>
          </div>
          <div className="bank-tabs" role="tablist" aria-label="Choose a bank account">
            {banks.map((bank, index) => (
              <button
                className={`bank-tab${activeBankId === bank.id ? ' is-active' : ''}`}
                type="button"
                role="tab"
                id={`${bank.id}-tab`}
                aria-selected={activeBankId === bank.id}
                aria-controls={`${bank.id}-panel`}
                tabIndex={activeBankId === bank.id ? 0 : -1}
                key={bank.id}
                onClick={() => {
                  setActiveBankId(bank.id)
                  setCopyStatus('')
                }}
                onKeyDown={(event) => {
                  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
                  event.preventDefault()
                  const direction = event.key === 'ArrowRight' ? 1 : -1
                  const nextIndex = (index + direction + banks.length) % banks.length
                  setActiveBankId(banks[nextIndex].id)
                  setCopyStatus('')
                  document.getElementById(`${banks[nextIndex].id}-tab`)?.focus()
                }}
              >
                <Image src={bank.logo} alt="" width={84} height={28} />
                <span className="sr-only">{bank.name}</span>
              </button>
            ))}
          </div>
          <article className="bank-details" id={`${activeBank.id}-panel`} role="tabpanel" aria-labelledby={`${activeBank.id}-tab`} tabIndex={0}>
            <div className="bank-details__heading">
              <div>
                <h3>{activeBank.name}</h3>
                <p lang="si">{activeBank.localName}</p>
              </div>
              <span className="bank-details__mark" aria-hidden="true">S</span>
            </div>
            <dl className="bank-details__list">
              <div className="bank-details__account">
                <dt>Account number</dt>
                <dd>{activeBank.accountNumber}</dd>
              </div>
              <div><dt>Account name</dt><dd>SITC Campus</dd></div>
              <div><dt>Branch</dt><dd>Gampola</dd></div>
            </dl>
            <button className="button button--quiet bank-details__copy" type="button" onClick={copyAccountNumber}>
              {copyStatus.includes('copied') ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}
              {copyStatus.includes('copied') ? 'Copied' : 'Copy account number'}
            </button>
            <p className="sr-only" role="status" aria-live="polite">{copyStatus}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
