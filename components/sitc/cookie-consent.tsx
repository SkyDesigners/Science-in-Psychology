'use client'

import { type FormEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowUpRight, X } from 'lucide-react'

type CookieConsentProps = { initialAnalyticsConsent: boolean; initialHasConsent: boolean }

export function CookieConsent({ initialAnalyticsConsent, initialHasConsent }: CookieConsentProps) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [hasChoice, setHasChoice] = useState(initialHasConsent)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [analyticsAllowed, setAnalyticsAllowed] = useState(initialAnalyticsConsent)
  const [error, setError] = useState('')

  useEffect(() => {
    const openPreferences = () => {
      setAnalyticsAllowed(initialAnalyticsConsent)
      setDialogOpen(true)
    }
    window.addEventListener('sitc:open-cookie-settings', openPreferences)
    return () => window.removeEventListener('sitc:open-cookie-settings', openPreferences)
  }, [initialAnalyticsConsent])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (dialogOpen && !dialog.open) dialog.showModal()
    if (!dialogOpen && dialog.open) dialog.close()
  }, [dialogOpen])

  function saveChoice(allowAnalytics: boolean) {
    setError('')
    const value = allowAnalytics ? 'all' : 'essential'
    const secure = window.location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `sitc-consent=${value}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`
    const stored = document.cookie.split(';').some((item) => item.trim() === `sitc-consent=${value}`)

    if (!stored) {
      setError('Your browser did not save this preference. Check its cookie settings and try again.')
      return
    }

    setHasChoice(true)
    setDialogOpen(false)
    router.refresh()
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    saveChoice(analyticsAllowed)
  }

  return (
    <>
      {!hasChoice ? (
        <aside className="cookie-banner" aria-label="Cookie preferences">
          <div className="cookie-banner__copy">
            <p className="cookie-banner__eyebrow">Your privacy choices</p>
            <h2>We respect your privacy.</h2>
            <p>The essential cookie remembers your choice. Vercel Analytics loads only if you opt in, and only in production.</p>
            <button className="cookie-banner__policy" type="button" onClick={() => setDialogOpen(true)}>
              Cookies and privacy <ArrowUpRight aria-hidden="true" size={14} />
            </button>
          </div>
          <div className="cookie-banner__actions">
            <button className="button button--primary" type="button" onClick={() => saveChoice(true)}>Accept all cookies</button>
            <button className="button button--quiet" type="button" onClick={() => setDialogOpen(true)}>Manage preferences</button>
          </div>
        </aside>
      ) : null}
      <dialog
        className="cookie-dialog"
        ref={dialogRef}
        aria-labelledby="cookie-dialog-title"
        onCancel={(event) => { event.preventDefault(); setDialogOpen(false) }}
        onClose={() => setDialogOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setDialogOpen(false) }}
      >
        <div className="cookie-dialog__content">
          <div className="cookie-dialog__header">
            <div>
              <p className="section-kicker">Privacy controls</p>
              <h2 id="cookie-dialog-title">Your privacy choices</h2>
            </div>
            <button className="icon-button" type="button" aria-label="Close cookie preferences" onClick={() => setDialogOpen(false)}>
              <X aria-hidden="true" size={20} />
            </button>
          </div>
          <p>This prototype does not collect enquiry or application data. The essential <code>sitc-consent</code> cookie stores your choice for one year and is sent with requests to this site. Vercel Analytics loads only in production if you opt in; no marketing trackers are currently enabled.</p>
          <form onSubmit={handleSubmit}>
            <div className="cookie-choice cookie-choice--locked">
              <div><strong>Essential preference</strong><span>Required to remember your choice</span></div>
              <input aria-label="Essential preference cookie is always active" type="checkbox" checked disabled readOnly />
            </div>
            <label className="cookie-choice" htmlFor="analytics-choice">
              <span><strong>Optional analytics</strong><span>Helps understand aggregate page visits</span></span>
              <input id="analytics-choice" type="checkbox" checked={analyticsAllowed} onChange={(event) => setAnalyticsAllowed(event.target.checked)} />
            </label>
            <p className="cookie-dialog__note">No marketing trackers are currently enabled in this preview.</p>
            {error ? <p className="field-error" role="alert">{error}</p> : null}
            <div className="cookie-dialog__actions">
              <button className="button button--primary" type="submit">Save my choices</button>
              <button className="button button--quiet" type="button" onClick={() => saveChoice(false)}>Essential only</button>
              <button className="button button--text" type="button" onClick={() => saveChoice(true)}>Accept all</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}
