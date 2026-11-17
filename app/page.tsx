import { cookies } from 'next/headers'
import { SitcLandingPage } from '@/components/sitc/sitc-landing-page'
import { parseConsentCookie } from '@/components/sitc/consent'

export default async function Page() {
  const consent = parseConsentCookie((await cookies()).get('sitc-consent')?.value)

  return (
    <SitcLandingPage
      initialHasConsent={consent.hasChoice}
      initialAnalyticsConsent={consent.analyticsAllowed}
    />
  )
}

