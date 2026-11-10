import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Checklist, CtaBand, ProductCard, SectionHead } from "@/components/Blocks";
import { clients, contact, products, sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "AvetCare | Professional Cleaning & Hygiene Systems in the UAE" },
  description:
    "AvetCare Middle East supplies European-made cleaning systems to hospitals, offices, schools, hotels and malls across the UAE. ClaraClean®, DRiZZ®, textiles, trolleys and SYR tools.",
};

export default function Home() {
  return (
    <main>
      <section className="hero">
        <video autoPlay muted loop playsInline preload="auto" poster="/videos/hero-poster.jpg" aria-hidden="true">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="wrap hero-in">
          <p className="label">AvetCare Middle East · Dubai</p>
          <h1>
            Professional cleaning systems for <span>UAE facilities</span>
          </h1>
          <p className="lead">
            European-made mops, dry-loaded textiles, trolleys and tools for hospitals, offices, schools, hotels and
            malls. Supplied, demonstrated and supported by our team in Dubai since 2011.
          </p>
          <div className="actions">
            <Link href="/products" className="btn btn-light">
              View products
            </Link>
            <Link href="/contactus" className="btn btn-ghost-light">
              Book a demonstration
            </Link>
          </div>
        </div>
      </section>

      <nav className="range" aria-label="Product lines">
        <div className="wrap range-in">
          {products.map((p) => (
            <Link key={p.slug} href={"/" + p.slug} className="range-item">
              <img src={p.image} alt="" />
              <span>
                <strong>{p.name}</strong>
                <span>{p.range}</span>
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <section className="section">
        <div className="wrap split">
          <div className="split-media">
            <img src="/images/stock/cleaning-team.jpg" alt="Professional cleaning team with mops" />
          </div>
          <div>
            <p className="label">About AvetCare</p>
            <h2>One supplier for the whole cleaning process</h2>
            <p>
              We help facility teams across the Middle East keep their buildings clean, safe and healthy. From
              colour-coded mops to modular trolleys, every product we supply is chosen for performance, ease of use
              and a lower environmental impact, and comes with training and after-sales support.
            </p>
            <Checklist
              items={[
                "European-made, certified products",
                "Colour-coded system that reduces cross-contamination",
                "Reusable and single-use options for every environment",
                "Site assessment, demonstration and staff training",
              ]}
            />
            <Link href="/aboutus" className="text-link">
              About the company <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="wrap">
          <SectionHead
            label="ClaraClean® in figures"
            title="Less water and chemicals on every floor"
            text="ClaraClean® textiles are dry-loaded with cleaning agent and activated with plain water just before use."
          />
          <div className="figures">
            <div className="figure">
              <strong>90%</strong>
              <span>less water than conventional wet mopping*</span>
            </div>
            <div className="figure">
              <strong>80%</strong>
              <span>fewer cleaning chemicals*</span>
            </div>
            <div className="figure">
              <strong>700+</strong>
              <span>wash-and-wipe cycles per Reload! mop</span>
            </div>
            <div className="figure">
              <strong>80 m²</strong>
              <span>of floor cleaned per mop cover</span>
            </div>
          </div>
          <p className="note" style={{ marginTop: 14 }}>
            *Up to. Manufacturer figures for the ClaraClean® system compared with conventional cleaning.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            label="Products"
            title="Five product lines that work together"
            action={
              <Link href="/products" className="text-link">
                All products <Icon name="arrow" size={16} />
              </Link>
            }
          />
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <SectionHead
            label="Cleaning areas"
            title="Systems matched to your sector"
            text="Each environment has its own hygiene standards. We match the products, colour plan and routine to yours."
            action={
              <Link href="/cleaninglocation" className="text-link">
                All cleaning areas <Icon name="arrow" size={16} />
              </Link>
            }
          />
          <div className="sector-grid">
            {sectors.map((s) => (
              <Link key={s.id} href={`/cleaninglocation#${s.id}`} className="sector-card">
                <img src={s.image} alt={s.name} loading="lazy" />
                <strong>{s.name}</strong>
                <span>{s.short}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="How we work" title="From site visit to daily routine" />
          <div className="steps">
            <div className="step">
              <h3>Site assessment</h3>
              <p>We visit your facility, look at floor types, traffic and current routines.</p>
            </div>
            <div className="step">
              <h3>Recommendation</h3>
              <p>You get a product and colour-coding plan for each area, with clear costs.</p>
            </div>
            <div className="step">
              <h3>Demonstration & training</h3>
              <p>We show the system on your own floors and train your cleaning staff.</p>
            </div>
            <div className="step">
              <h3>Supply & support</h3>
              <p>Reliable deliveries from Dubai and a team on hand long after the first order.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap split reverse">
          <div className="split-media">
            <img src="/images/stock/sustainability-seedling.jpg" alt="Hands holding a young seedling" loading="lazy" />
          </div>
          <div>
            <p className="label">Sustainability</p>
            <h2>Better for your people and the planet</h2>
            <p>
              Because ClaraClean® textiles are dry-loaded, the cleaning agent is bound to the fibre. Nothing is
              over-dosed, nothing is poured away, and no residue is left on your floors.
            </p>
            <Checklist
              items={[
                "Eco mop covers and cloths made from 100% recycled polyester",
                "Very low microplastic content",
                "ClaraClean® trolleys made from 90% recycled PET",
                "Nordic Swan ecolabel and HACCP-compliant textiles",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Clients" title="Trusted by organisations across the UAE" />
        </div>
        <div className="logo-marquee" aria-label="Our clients">
          <div className="logo-track">
            {/* the list is rendered twice so the loop is seamless; the copy is hidden from screen readers */}
            {[0, 1].map((copy) =>
              clients.map((c) => (
                <div key={`${copy}-${c.name}`} className="client" aria-hidden={copy === 1 || undefined}>
                  <img src={c.logo} alt={copy === 0 ? c.name : ""} />
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap cert">
          <div>
            <p className="label">Quality</p>
            <h2 className="h3">Tested and officially certified</h2>
            <p>
              Our products are tested, certified and made to a high standard in Europe. Product documents and safety
              data sheets are available on request.
            </p>
            <div className="actions">
              <a href={contact.catalogue} target="_blank" rel="noopener" className="btn btn-outline">
                <Icon name="download" size={16} /> Catalogue (PDF)
              </a>
            </div>
          </div>
          <img src="/images/brand/certifications.jpg" alt="Certification marks: AWWA, European Environment Agency, SGS, FDA, HACCP" />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
