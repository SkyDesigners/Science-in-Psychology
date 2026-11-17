import { AboutSection, AtAGlance, HeroSection, StudentLifeSection } from './overview-sections'
import { SiteHeader } from './site-header'
import { ProgrammeSection } from './programme-section'
import { PathwaySection } from './pathway-section'
import { FeesSection } from './fees-section'
import { ConvocationGallery } from './convocation-gallery'
import { LeadershipSection } from './leadership-section'
import { FacultySection } from './faculty-section'
import { CommunitySection } from './community-section'
import { IntakeSection } from './intake-section'
import { PaymentSection } from './payment-section'
import { FaqSection } from './faq-section'
import { SiteFooter } from './site-footer'
import { CookieConsent } from './cookie-consent'
import { QuickGuide } from './quick-guide'

type SitcLandingPageProps = {
  initialHasConsent: boolean
  initialAnalyticsConsent: boolean
}

export function SitcLandingPage({ initialHasConsent, initialAnalyticsConsent }: SitcLandingPageProps) {
  return (
    <div className="sitc-site">
      <SiteHeader />
      <main id="main" className="site-main">
        <HeroSection />
        <AtAGlance />
        <AboutSection />
        <ProgrammeSection />
        <PathwaySection />
        <FeesSection />
        <StudentLifeSection />
        <ConvocationGallery />
        <LeadershipSection />
        <FacultySection />
        <CommunitySection />
        <IntakeSection />
        <PaymentSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <CookieConsent initialHasConsent={initialHasConsent} initialAnalyticsConsent={initialAnalyticsConsent} />
      <QuickGuide />
    </div>
  )
}
