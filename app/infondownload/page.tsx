import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, PageHeader, SectionHead } from "@/components/Blocks";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Info & Downloads | AvetCare" },
  description: "Download the AvetCare product catalogue and request safety data sheets and application guides.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Info & downloads" }]}
        label="Info centre"
        title="Product information and downloads"
        intro="Check that products meet your safety guidelines, review ingredients and get guidance on how to use them."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Downloads" title="Brochures and documents" />
          <div className="doc-list">
            <div className="doc">
              <span className="doc-ic">PDF</span>
              <div>
                <strong>AvetCare Product Catalogue</strong>
                <span>English · All product lines · PDF, 6 MB</span>
              </div>
              <a href={contact.catalogue} target="_blank" rel="noopener" className="btn btn-primary">
                <Icon name="download" size={16} /> Download
              </a>
            </div>
            <div className="doc">
              <span className="doc-ic">SDS</span>
              <div>
                <strong>Safety Data Sheets</strong>
                <span>Available on request for every product</span>
              </div>
              <Link href="/contactus" className="btn btn-outline">
                Request
              </Link>
            </div>
            <div className="doc">
              <span className="doc-ic">CERT</span>
              <div>
                <strong>Certificates and test reports</strong>
                <span>Nordic Swan, HACCP and product test documents</span>
              </div>
              <Link href="/contactus" className="btn btn-outline">
                Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <SectionHead label="Support" title="Using our products safely" />
          <div className="info-grid">
            <div className="panel">
              <h3>Safety guidelines</h3>
              <p>Check whether a product meets your site&apos;s safety requirements before you order.</p>
            </div>
            <div className="panel">
              <h3>Ingredients</h3>
              <p>Review the ingredients in our cleaning products and textiles.</p>
            </div>
            <div className="panel">
              <h3>Application guides</h3>
              <p>Short guides that show your team how to use each system correctly.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Can't find what you need?"
        text="Our team can send product documents, certificates and application guides."
      />
    </main>
  );
}
