import type { Metadata } from "next";
import { Checklist, CtaBand, PageHeader, SectionHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: { absolute: "About AvetCare Middle East | Company" },
  description:
    "Founded in 2011, AvetCare Middle East supplies European-made cleaning equipment to organisations across the UAE.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Company" }]}
        label="Company"
        title="Cleaning equipment the Middle East can rely on"
        intro="AvetCare Middle East supplies easy-to-use cleaning equipment made in Europe. Since 2011 we have helped organisations across the UAE meet high hygiene standards with less environmental impact."
        image="/images/stock/office-lobby.jpg"
        imageAlt="Bright, clean office lobby"
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="label">Our story</p>
            <h2>From Avet Middle East to AvetCare</h2>
            <p>
              We started in 2011 as Avet Middle East. In 2023 we became AvetCare, a name that reflects our focus on
              cleaning and hygiene.
            </p>
            <p>
              Our products use a colour-coded system, so teams can always match the right tool to the right task and
              avoid cross-contamination. We combine proven European products with long-term client relationships and
              dependable service.
            </p>
            <p>We also work to reduce our own carbon footprint and help clients adopt more sustainable cleaning practices.</p>
          </div>
          <div className="timeline" style={{ alignSelf: "end" }}>
            <div>
              <strong>2011</strong>
              <p>Founded in Dubai as Avet Middle East.</p>
            </div>
            <div>
              <strong>2023</strong>
              <p>Rebranded as AvetCare Middle East.</p>
            </div>
            <div>
              <strong>Today</strong>
              <p>Serving corporate, hospitality, education and healthcare clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap two-col">
          <div className="panel">
            <p className="label">Mission</p>
            <h3>What we do</h3>
            <p>
              To give our customers advanced, efficient cleaning equipment that helps them reach their cleanliness goals
              while lowering their environmental impact.
            </p>
          </div>
          <div className="panel">
            <p className="label">Vision</p>
            <h3>Where we&apos;re going</h3>
            <p>
              To be the preferred cleaning equipment provider in the Middle East, known for reliability, expertise and
              customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Values" title="What guides our work" />
          <div className="values">
            <div>
              <h3>Excellence</h3>
              <p>High-quality products and service in everything we do.</p>
            </div>
            <div>
              <h3>Innovation</h3>
              <p>We keep improving how we meet our customers&apos; changing needs.</p>
            </div>
            <div>
              <h3>Integrity</h3>
              <p>We work with honesty, transparency and respect.</p>
            </div>
            <div>
              <h3>Customer focus</h3>
              <p>Our customers&apos; needs and satisfaction come first.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <SectionHead
            label="Colour-coded system"
            title="The right tool for every area"
            text="Colour coding keeps cloths and mops in the zone they belong to, which stops germs travelling between areas. Your team can follow it without long training."
          />
          <div className="colour-codes">
            <div>
              <i style={{ background: "#2f6fe4" }} />
              <strong>Blue</strong>
              <span>General areas: offices, corridors, desks</span>
            </div>
            <div>
              <i style={{ background: "#e2483d" }} />
              <strong>Red</strong>
              <span>High risk: toilets and urinals</span>
            </div>
            <div>
              <i style={{ background: "#e8b320" }} />
              <strong>Yellow</strong>
              <span>Washrooms: sinks, tiles, showers</span>
            </div>
            <div>
              <i style={{ background: "#2fa968" }} />
              <strong>Green</strong>
              <span>Kitchens and food areas</span>
            </div>
          </div>
          <p className="note" style={{ marginTop: 14 }}>
            Typical colour allocation. We adapt it to your facility&apos;s hygiene plan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="split-media">
            <img src="/images/stock/team-cleaning-office.jpg" alt="Cleaning team at work in an office" loading="lazy" />
          </div>
          <div>
            <p className="label">Our team</p>
            <h2>Experienced people behind every delivery</h2>
            <p>
              Our team brings years of experience in professional cleaning. We advise on the right system, train your
              staff and stay on hand long after delivery.
            </p>
            <Checklist
              items={[
                "Site assessments and product recommendations",
                "On-site demonstrations and staff training",
                "Reliable supply and after-sales support",
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
