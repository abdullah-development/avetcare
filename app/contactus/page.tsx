import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { PageHeader } from "@/components/Blocks";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact AvetCare | Dubai, UAE" },
  description: "Contact AvetCare Middle East in Dubai for quotes, demonstrations and advice on professional cleaning systems.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        label="Contact"
        title="Talk to our team in Dubai"
        intro="Ask for a quote, book a demonstration or get advice on the right cleaning system. We reply within one working day."
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <h2 className="h3">Send an enquiry</h2>
            <p className="note" style={{ marginBottom: 24 }}>
              Fields marked * are required.
            </p>
            <ContactForm />
          </div>
          <aside>
            <h2 className="h3">Contact details</h2>
            <div className="contact-list" style={{ marginTop: 18 }}>
              <div className="contact-item">
                <Icon name="phone" />
                <div>
                  <strong>Phone</strong>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="mail" />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="pin" />
                <div>
                  <strong>Office</strong>
                  <span>
                    {contact.address.map((l) => (
                      <span key={l} style={{ display: "block" }}>
                        {l}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="clock" />
                <div>
                  <strong>Office hours</strong>
                  <span>{contact.hours}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <iframe
        className="map"
        title="AvetCare office location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=The%20Meydan%20Hotel%20Dubai&z=14&output=embed"
      />
    </main>
  );
}
