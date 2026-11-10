import Link from "next/link";
import Icon from "./Icon";
import { Certifications, Checklist, CtaBand, PageHeader, ProductRow, SectionHead } from "./Blocks";
import { contact, type Product } from "@/lib/site";

export default function ProductPage({ p, children }: { p: Product; children?: React.ReactNode }) {
  return (
    <main>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { label: p.name }]}
        label={p.name}
        title={p.title}
        intro={p.intro}
        image={p.heroImage}
        imageAlt={p.name}
        imageKind={p.heroKind ?? "cutout"}
      >
        <div className="actions">
          <Link href="/contactus" className="btn btn-primary">
            Request a demonstration
          </Link>
          <a href={contact.catalogue} target="_blank" rel="noopener" className="btn btn-outline">
            <Icon name="download" size={16} /> Catalogue (PDF)
          </a>
        </div>
      </PageHeader>

      <section className="section">
        <div className="wrap specs">
          <div>
            <h2 className="h3">Key facts</h2>
            <dl className="spec-table">
              {p.facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            {p.factsNote && <p className="note">{p.factsNote}</p>}
          </div>
          <aside className="side-box">
            <p className="label">Need advice?</p>
            <p>
              Our team in Dubai can recommend the right setup for your site and show your staff how to use it.
            </p>
            <a href={contact.phoneHref} className="side-line">
              <Icon name="phone" size={16} /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="side-line">
              <Icon name="mail" size={16} /> {contact.email}
            </a>
            <Link href="/contactus" className="btn btn-primary btn-block">
              Request a quote
            </Link>
          </aside>
        </div>
      </section>

      {children}

      {p.variants.length > 0 && (
        <section className="section section-paper">
          <div className="wrap">
            <SectionHead title={p.variantsTitle} />
            <div className="variants">
              {p.variants.map((v) => (
                <article key={v.name} className="variant">
                  <div className={`variant-media media-${v.imageKind ?? "cutout"}`}>
                    <img src={v.image} alt={v.imageAlt} loading="lazy" />
                  </div>
                  <div className="variant-body">
                    <h3>{v.name}</h3>
                    <p>{v.text}</p>
                    <Checklist items={v.points} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Certifications />

      <section className="section">
        <div className="wrap">
          <SectionHead
            label="Other product lines"
            title="Complete the system"
            action={
              <Link href="/products" className="text-link">
                All products <Icon name="arrow" size={16} />
              </Link>
            }
          />
          <ProductRow exclude={p.slug} />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
