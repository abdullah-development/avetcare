import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, PageHeader } from "@/components/Blocks";
import { sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cleaning Areas: Healthcare, Offices, Schools, Hotels | AvetCare" },
  description:
    "Cleaning and hygiene systems for healthcare, offices, schools, hotels, malls and sports facilities across the UAE.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Cleaning areas" }]}
        label="Cleaning areas"
        title="Hygiene solutions for every environment"
        intro="Our range covers floors, surfaces, glass, washrooms and areas with the highest hygiene requirements. Here's how we support each sector."
      >
        <div className="actions">
          {sectors.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="btn btn-outline btn-sm">
              {s.name}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="section">
        <div className="wrap sector-rows">
          {sectors.map((s) => (
            <article key={s.id} id={s.id} className="sector-row">
              <div className="sector-row-media">
                <img src={s.image} alt={s.name} loading="lazy" />
              </div>
              <div>
                <p className="label">{s.short}</p>
                <h2>{s.name}</h2>
                <p>{s.text}</p>
                <Link href="/contactus" className="text-link">
                  Ask about {s.name.toLowerCase()} <Icon name="arrow" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Let's plan your cleaning system"
        text="Share your facility type and size, and we'll recommend the right products for each area."
      />
    </main>
  );
}
