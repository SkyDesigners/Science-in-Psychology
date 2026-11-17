import Image from 'next/image'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/sitc/section-heading'
import { locations } from '@/components/sitc/site-data'

export function LocationsSection() {
  return (
    <section className="locations-section section-pad" id="locations" aria-labelledby="locations-title">
      <div className="site-container">
        <div className="locations-section__header">
          <SectionHeading
            eyebrow="Get in touch"
            titleId="locations-title"

            title={<>Closer to you.<br />Here for your next step.</>}
            description="Contact details and directions as listed in the supplied programme materials. Confirm current office hours before visiting."
          />
          <figure className="locations-strip">
            <div className="locations-strip__cities">
              <Image
                src="/sitc/locations-triptych.png"
                alt="Colombo World Trade Center and Dubai skyline"
                fill
                sizes="(max-width: 850px) 70vw, 32vw"
                className="locations-strip__image"
              />
            </div>
            <div className="locations-strip__campus">
              <Image
                src="/sitc/campus-gampola.png"
                alt="SITC Campus Digital Affairs branch in Gampola"
                fill
                sizes="(max-width: 850px) 30vw, 15vw"
                className="locations-strip__campus-image"
              />
            </div>
          </figure>
        </div>
        <div className="location-grid">
          {locations.map((location, index) => (
            <article className="location-card" key={location.name}>
              <p className="location-card__index">0{index + 1} <span>·</span> CAMPUS CONTACT</p>
              <h3>{location.name}</h3>
              <p className="location-card__address"><MapPin aria-hidden="true" size={16} />{location.address}</p>
              <a className="location-card__phone" href={`tel:${location.tel}`}>
                <Phone aria-hidden="true" size={16} />{location.phone}
              </a>
              <a className="location-card__directions" href={location.directions} target="_blank" rel="noreferrer noopener">
                Directions <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
