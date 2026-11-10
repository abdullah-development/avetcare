import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Certifications, CtaBand, PageHeader } from "@/components/Blocks";
import { contact, products } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Products | AvetCare" },
  description: "ClaraClean, DRiZZ spray mops, cleaning textiles, trolleys and SYR tools from AvetCare Middle East.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Products" }]}
        label="Products"
        title="Complete cleaning systems, built to work together"
        intro="Five product lines cover everything from dry-loaded textiles to the trolley that carries them. Combine them to suit each area of your facility."
      >
        <div className="actions">
          <a href={contact.catalogue} target="_blank" rel="noopener" className="btn btn-outline">
            <Icon name="download" size={16} /> Download catalogue (PDF)
          </a>
        </div>
      </PageHeader>

      <section className="section">
        <div className="wrap variants">
          {products.map((p) => (
            <article key={p.slug} className="variant">
              <Link href={"/" + p.slug} className="variant-media media-cutout">
                <img src={p.image} alt={p.name} loading="lazy" />
              </Link>
              <div className="variant-body">
                <p className="label">{p.range}</p>
                <h2 className="h3" style={{ fontSize: "1.8rem" }}>
                  <Link href={"/" + p.slug} style={{ color: "inherit" }}>
                    {p.name}
                  </Link>
                </h2>
                <p>{p.intro}</p>
                <dl className="spec-table" style={{ marginTop: 20 }}>
                  {p.facts.slice(0, 3).map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <Link href={"/" + p.slug} className="text-link">
                  View {p.name} <Icon name="arrow" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Certifications />
      <CtaBand />
    </main>
  );
}
