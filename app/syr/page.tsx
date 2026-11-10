import type { Metadata } from "next";
import Link from "next/link";
import ProductPage from "@/components/ProductPage";
import { getProduct, syrItems } from "@/lib/site";

const p = getProduct("syr");

export const metadata: Metadata = { title: { absolute: p.metaTitle }, description: p.metaDescription };

export default function Page() {
  return (
    <ProductPage p={p}>
      <section className="section section-paper">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label">Range</p>
              <h2>SYR tools and accessories</h2>
            </div>
          </div>
          <div className="item-grid">
            {syrItems.map((it) => (
              <div key={it.name} className="item">
                <img src={it.image} alt={it.name} loading="lazy" />
                <strong>{it.name}</strong>
                <span>{it.type}</span>
              </div>
            ))}
            <div className="item item-cta">
              <strong>Need a full kit?</strong>
              <p>Tell us your areas and we&apos;ll put together the right colour-coded set.</p>
              <Link href="/contactus" className="btn btn-primary btn-sm">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ProductPage>
  );
}
