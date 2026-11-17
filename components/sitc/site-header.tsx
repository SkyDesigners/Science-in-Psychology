'use client'

import Image from 'next/image'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'About SITC', href: '#about' },
  { label: 'Programme', href: '#programme' },
  { label: 'Fees & entry', href: '#fees' },
  { label: 'Student life', href: '#student-life' },
  { label: 'FAQs', href: '#faq' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="topline">
        <div className="site-container topline__inner">
          <span>Sciences &amp; Information Technology City Campus</span>
          <a href="tel:+94114532139">
            Admissions · +94 11 453 2139 <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container site-header__inner">
          <a className="site-brand" href="#top" aria-label="SITC Campus home">
            <Image
              src="/sitc/sitc-campus-logo.jpg"
              alt="SITC Campus"
              width={300}
              height={74}
              priority
              sizes="(max-width: 640px) 136px, 174px"
            />
          </a>
          <nav
            className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button--nav" href="https://wa.link/bsc-psychology" target="_blank" rel="noreferrer noopener">
            Inquiry <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        </div>
      </header>
    </>
  )
}
