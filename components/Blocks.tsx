import Link from "next/link";
import Icon from "./Icon";
import { contact, products, type Product } from "@/lib/site";

export function PageHeader({
  crumbs,
  label,
  title,
  intro,
  children,
  image,
  imageAlt = "",
  imageKind = "photo",
}: {
  crumbs: { href?: string; label: string }[];
  label?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imageKind?: "cutout" | "photo";
}) {
  return (
    <section className={`page-head${image ? " has-image" : ""}`}>
      <div className="wrap page-head-in">
        <div className="page-head-copy">
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                {i < crumbs.length - 1 && <span className="crumb-sep">/</span>}
              </span>
            ))}
          </nav>
          {label && <p className="label">{label}</p>}
          <h1>{title}</h1>
          {intro && <p className="lead">{intro}</p>}
          {children}
        </div>
        {image && (
          <div className={`page-head-media media-${imageKind}`}>
            <img src={image} alt={imageAlt} />
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({
  label,
  title,
  text,
  action,
}: {
  label?: string;
  title: string;
  text?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <div>
        {label && <p className="label">{label}</p>}
        <h2>{title}</h2>
        {text && <p className="section-text">{text}</p>}
      </div>
      {action && <div className="section-action">{action}</div>}
    </div>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={"/" + p.slug} className="product-card">
      <span className="product-card-img">
        <img src={p.image} alt={p.name} loading="lazy" />
      </span>
      <span className="product-card-body">
        <strong>{p.name}</strong>
        <span className="product-card-text">{p.short}</span>
        <span className="product-card-range">{p.range}</span>
        <span className="text-link">
          View range <Icon name="arrow" size={16} />
        </span>
      </span>
    </Link>
  );
}

export function ProductRow({ exclude }: { exclude?: string }) {
  const list = products.filter((p) => p.slug !== exclude);
  return (
    <div className={`product-grid cols-${list.length}`}>
      {list.map((p) => (
        <ProductCard key={p.slug} p={p} />
      ))}
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((t) => (
        <li key={t}>
          <Icon name="check" size={18} />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Certifications() {
  return (
    <section className="section section-paper">
      <div className="wrap cert">
        <div>
          <p className="label">Quality</p>
          <h2 className="h3">Tested and officially certified</h2>
          <p>
            Our products are tested, certified and made to a high standard in Europe, so they clean effectively and
            are safe for the people who use them.
          </p>
        </div>
        <img src="/images/brand/certifications.jpg" alt="Certification marks: AWWA, European Environment Agency, SGS, FDA, HACCP" />
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Find the right system for your facility",
  text = "Tell us about your site and cleaning routine. We'll recommend products and arrange a demonstration on your own floors.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href="/contactus" className="btn btn-light">
            Request a quote
          </Link>
          <a href={contact.phoneHref} className="btn btn-ghost-light">
            <Icon name="phone" size={16} /> {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
