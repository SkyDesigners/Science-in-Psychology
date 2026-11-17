import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { RecognitionSection } from './recognition-section'
import { CredibilitySection } from './credibility-section'

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="site-container hero-section__grid">
        <div className="hero-copy">
          <p className="section-kicker hero-copy__kicker">
            <span className="section-kicker__rule" aria-hidden="true" />
            SITC · Psychology &amp; Counselling
          </p>
          <h1 id="hero-title">
            Understand minds.
            <span>Transform lives.</span>
          </h1>
          <p className="hero-copy__sinhala" lang="si">
            මනෝවිද්‍යාව හා උපදේශනය තුළින් ඔබේ අනාගතයට අර්ථවත් ආරම්භයක්.
          </p>
          <p className="hero-copy__programme">Bachelor of Science in Psychology and Counselling.</p>
          <p className="hero-copy__description">A pathway built around knowledge, empathy and purpose.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#programme">
              Explore the programme <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a className="button button--quiet" href="#pathway">
              Check your pathway <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
          <p className="hero-copy__footnote">Your next chapter starts with understanding.</p>
        </div>
        <div className="hero-collage" aria-label="Moments from the SITC student journey">
          <span className="hero-collage__orbit" aria-hidden="true" />
          <figure className="hero-memory hero-memory--main">
            <div className="hero-memory__photo">
              <Image src="/sitc/hero-convocation-upscaled.jpg" alt="SITC graduate receiving her diploma at the general convocation" fill priority sizes="(max-width: 620px) 72vw, (max-width: 850px) 38vw, 36vw" />
            </div>
            <figcaption>A moment to be proud of.</figcaption>
          </figure>
          <figure className="hero-memory hero-memory--portrait">
            <div className="hero-memory__photo">
              <Image src="/sitc/graduate-regalia-upscaled.jpg" alt="SITC student wearing graduation regalia" fill sizes="(max-width: 620px) 30vw, 17vw" />
            </div>
            <figcaption>Your next chapter</figcaption>
          </figure>
          <figure className="hero-memory hero-memory--family">
            <div className="hero-memory__photo">
              <Image src="/sitc/graduate-family-upscaled.jpg" alt="A SITC graduate celebrating with her family" fill sizes="(max-width: 620px) 46vw, 24vw" />
            </div>
            <figcaption>Shared with the ones you love.</figcaption>
          </figure>
          <div className="hero-collage__note">
            <span aria-hidden="true">&#10022;</span>
            <p>Big dreams.<br /><strong>Real beginnings.</strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AtAGlance() {
  return (
    <section className="at-a-glance site-container" aria-label="Programme overview from supplied brochure">
      <div className="at-a-glance__items">
        <div className="at-a-glance__item">
          <strong>3 years</strong>
          <span>Full academic programme</span>
        </div>
        <div className="at-a-glance__item">
          <strong>2 years*</strong>
          <span>With eligible diploma exemption</span>
        </div>
        <div className="at-a-glance__item">
          <strong>24</strong>
          <span>Academic modules</span>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <>
      <section className="about-section section-pad" id="about" aria-labelledby="about-title">
        <div className="site-container about-section__grid">
          <div className="about-section__copy">
            <SectionHeading
              eyebrow="A future with purpose"
              titleId="about-title"

              title={<>Your curiosity.<br />Someone&apos;s better tomorrow.</>}
            />
            <p className="body-copy">
              Study the science behind human thoughts, emotions and behaviour. Build a foundation in psychological theory, ethical counselling practice and research through SITC&apos;s degree pathway.
            </p>
            <p className="body-copy body-copy--sinhala" lang="si">
              දැනුම සමඟ සංවේදී බව සහ වගකීම වර්ධනය කරගනිමින් ඔබේ අධ්‍යයන ගමන ආරම්භ කරන්න.
            </p>
            <a className="text-link" href="#programme">
              Discover what you&apos;ll study <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
          <figure className="about-image">
            <Image
              src="/sitc/campus-community-clean.png"
              alt="SITC Campus graduates celebrating together at the September 2023 general convocation"
              fill
              sizes="(max-width: 760px) 100vw, 47vw"
              className="about-image__photo"
            />
          </figure>
        </div>
      </section>
      <RecognitionSection />
      <CredibilitySection />
    </>
  )
}

export function StudentLifeSection() {
  return (
    <section className="student-life-section section-pad" id="student-life" aria-labelledby="student-life-title">
      <div className="site-container">
        <div className="student-life-section__intro">
          <SectionHeading
            eyebrow="Student life"
            titleId="student-life-title"

            title={<>Small moments.<br />Milestones for life.</>}
            description="A look at the people and moments shared in the supplied SITC programme materials."
          />
          <a className="text-link student-life-section__link" href="#convocation-gallery">
            View the convocation gallery <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="student-photo-grid">
          <figure className="student-photo student-photo--large">
            <Image
              src="/sitc/graduate-family-upscaled.jpg"
              alt="A graduate celebrating with family"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
              className="student-photo__image"
            />
            <figcaption><span>01</span> A milestone shared</figcaption>
          </figure>
          <figure className="student-photo student-photo--portrait">
            <Image
              src="/sitc/graduate-certificate-upscaled.jpg"
              alt="A graduate receiving a certificate at the SITC ceremony"
              fill
              sizes="(max-width: 760px) 100vw, 26vw"
              className="student-photo__image"
            />
            <figcaption><span>02</span> A moment on stage</figcaption>
          </figure>
          <figure className="student-photo student-photo--portrait">
            <Image
              src="/sitc/graduate-regalia-upscaled.jpg"
              alt="A SITC graduate in academic regalia"
              fill
              sizes="(max-width: 760px) 100vw, 26vw"
              className="student-photo__image"
            />
            <figcaption><span>03</span> Looking ahead</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
