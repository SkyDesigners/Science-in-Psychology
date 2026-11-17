import Image from 'next/image'

const logos = [
  ['ugc.png', 'UGC Sri Lanka recognised'],
  ['dec.png', 'Distance Education Council'],
  ['source-logos.png', 'PSB University Cambodia and International Association of Universities'],
  ['ieac.jpg', 'International Education Accreditation Council'],
  ['wes.png', 'World Education Services'],
  ['inqaahe.png', 'INQAAHE'],
  ['asic.svg', 'ASIC'],
  ['cpd.jpeg', 'The CPD Certification Service member'],
  ['uk-accredited.png', 'UK accredited university'],
  ['unesco.png', 'UNESCO'],
  ['whed.png', 'World Higher Education Database'],
  ['the.png', 'Times Higher Education'],
] as const

export function RecognitionSection() {
  return (
    <section className="recognition-section" aria-labelledby="recognition-title">
      <div className="site-container recognition-section__heading">
        <p className="section-kicker">Institutional standing</p>
        <h2 id="recognition-title">Recognition, Memberships &amp; Accreditations</h2>
      </div>
      <div className="recognition-marquee">
        <div className="recognition-marquee__track">
          {[0, 1].map((copy) => (
            <ul className="recognition-marquee__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {logos.map(([file, name]) => (
                <li className="recognition-marquee__logo" key={file}>
                  <Image src={`/sitc/recognition/${file}`} alt={copy === 0 ? name : ''} width={156} height={90} sizes="156px" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

    </section>
  )
}
