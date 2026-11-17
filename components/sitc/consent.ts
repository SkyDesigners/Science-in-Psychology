export type ConsentState = {
  hasChoice: boolean
  analyticsAllowed: boolean
}

export function parseConsentCookie(value?: string): ConsentState {
  if (value === 'all') {
    return { hasChoice: true, analyticsAllowed: true }
  }

  if (value === 'essential') {
    return { hasChoice: true, analyticsAllowed: false }
  }

  return { hasChoice: false, analyticsAllowed: false }
}
