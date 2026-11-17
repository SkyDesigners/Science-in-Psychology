'use client'

import { ArrowUpRight } from 'lucide-react'

export function CookieSettingsButton() {
  return <button className="footer-link footer-link--button" type="button" onClick={() => window.dispatchEvent(new Event('sitc:open-cookie-settings'))}>Cookie settings</button>
}

const locations = [
  { label: 'Head office', city: 'Colombo, Sri Lanka', address: ['World Trade Center, Level 26', 'East Tower, Colombo 01', 'Sri Lanka'], phones: ['+94 11 453 2139', '+94 11 759 8568'], query: 'World Trade Center Colombo Sri Lanka' },
  { label: 'Digital Affairs branch', city: 'Gampola, Sri Lanka', address: ['No. 285, Hospital Road', 'Gampola', 'Sri Lanka'], phones: ['+94 81 313 8993'], query: '285 Hospital Road Gampola Sri Lanka', visit: true },
  { label: 'Overseas branch', city: 'United Arab Emirates', address: ['Al Majaz 2, Faya Business Park Tower', 'Level 7, Office 704', 'Sharjah, UAE'], phones: ['+971 54 774 2498'], query: 'Faya Business Park Tower Al Majaz 2 Sharjah UAE', visit: true },
  { label: 'Malaysia location', city: 'Kuala Lumpur, Malaysia', address: ['The Gardens North Tower', 'Mid Valley City', '59200 Kuala Lumpur', 'Malaysia'], phones: [], query: 'The Gardens North Tower Mid Valley City Kuala Lumpur Malaysia' },
]
const teams = [
  { name: 'Diploma admissions', phone: '+94 71 525 8653', whatsapp: true },
  { name: 'Undergraduate admissions', phone: '+94 77 216 2461', whatsapp: true },
  { name: 'Digital Affairs', phone: '+94 81 316 4986', whatsapp: false },
  { name: 'Digital Affairs', phone: '+94 81 313 7618', whatsapp: false },
]
const arrow = <ArrowUpRight size={13} aria-hidden="true" />

export function SiteFooter() {
  return (
    <footer className="campus-footer" id="contact">
      <div className="site-container">
        <div className="campus-footer__top">
          <div className="campus-footer__brand">
            <a href="#top" className="campus-footer__wordmark" aria-label="SITC Campus home">
              <span lang="si">විද්‍යා හා තොරතුරු තාක්ෂණ පරිශ්‍රය, ශ්‍රී ලංකාව</span>
              <span lang="ta">விஞ்ஞான மற்றும் தகவல் தொழில்நுட்பப் பல்கலைக்கழகம், இலங்கை</span>
              <strong>SCIENCE AND INFORMATION TECHNOLOGY CAMPUS, SRI LANKA</strong>
            </a>
            <p className="campus-footer__tagline">Knowledge that opens doors.<br />Education that moves you forward.</p>
            <a className="campus-footer__primary" href="mailto:info@sitc.lk">info@sitc.lk {arrow}</a>
            <a className="campus-footer__primary" href="tel:+94114532139">+94 11 453 2139</a>
            <div className="campus-footer__socials">
              {['Facebook', 'LinkedIn', 'YouTube'].map((name, index) => <a key={name} href={['https://www.facebook.com/sitccampus', 'https://www.linkedin.com/school/sitc-campus/', 'https://www.youtube.com/@SITCCampus'][index]} target="_blank" rel="noopener noreferrer">{name} {arrow}</a>)}
            </div>
          </div>
          <nav className="campus-footer__nav" aria-label="Explore SITC">
            <h2>Explore SITC</h2>
            <a href="#about">About SITC</a>
            <a href="https://sitc.lk/" target="_blank" rel="noopener noreferrer">Vice Chancellor</a>
            <a href="#programme">Academic programmes</a>
            <a href="#recognition-title">Academic partners</a>
            <a href="https://sitc.lk/" target="_blank" rel="noopener noreferrer">News</a>
          </nav>
          <nav className="campus-footer__nav" aria-label="For our students">
            <h2>For our students</h2>
            <a href="https://sitc.lk/" target="_blank" rel="noopener noreferrer">Student portal {arrow}</a>
            <a href="https://sitc.lk/" target="_blank" rel="noopener noreferrer">Verify a certificate {arrow}</a>
            <a href="#admissions">Enquire about a programme {arrow}</a>
            <a href="mailto:info@sitc.lk">Contact SITC {arrow}</a>
          </nav>
        </div>
        <section className="campus-footer__locations" aria-labelledby="footer-locations-title">
          <p className="campus-footer__eyebrow">Our locations</p>
          <h2 id="footer-locations-title">Connected. <em>Wherever you are.</em></h2>
          <div className="campus-footer__location-grid">
            {locations.map((location, index) => <article className="campus-footer__location" key={location.city}>
              <p className="campus-footer__branch"><span>{String(index + 1).padStart(2, '0')}</span>{location.label}</p>
              <h3>{location.city}</h3>
              <address>{location.address.map(line => <span key={line}>{line}</span>)}</address>
              <div className="campus-footer__phones">{location.phones.map(phone => <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>)}</div>
              <div className="campus-footer__actions">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.query)}`} target="_blank" rel="noopener noreferrer">View on map {arrow}</a>
                {location.visit && <a href={`mailto:info@sitc.lk?subject=${encodeURIComponent(`Book a visit: ${location.city}`)}`}>Book a visit {arrow}</a>}
              </div>
            </article>)}
          </div>
        </section>
        <section className="campus-footer__teams" aria-labelledby="footer-teams-title">
          <h2 className="campus-footer__eyebrow" id="footer-teams-title">Speak to the right team</h2>
          <div className="campus-footer__team-grid">{teams.map(team => <div className="campus-footer__team" key={team.phone}>
            <p>{team.name}</p>
            <a href={team.whatsapp ? `https://wa.me/${team.phone.replace(/\D/g, '')}` : `tel:${team.phone.replace(/\s/g, '')}`} target={team.whatsapp ? '_blank' : undefined} rel={team.whatsapp ? 'noopener noreferrer' : undefined}>{team.phone} {arrow}</a>
            <span>{team.whatsapp ? 'WhatsApp' : 'Telephone'}</span>
          </div>)}</div>
        </section>
        <div className="campus-footer__bottom">
          <p>© 2026 SITC Campus. All rights reserved.</p>
          <div><a href="https://sitc.lk/privacy-policy/">Privacy policy</a><a href="https://sitc.lk/refund-policy/">Refund policy</a><a href="https://sitc.lk/terms-and-conditions/">Terms &amp; conditions</a><CookieSettingsButton /></div>
        </div>
      </div>
    </footer>
  )
}
