"use client";

import { useState } from "react";
import { contact, sectors } from "@/lib/site";

// No backend yet: compose an email in the visitor's mail app.
// Replace with a route handler or form service when ready.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    const d = new FormData(f);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    const subject = `Website enquiry from ${g("name")}${g("company") ? ` (${g("company")})` : ""}`;
    const body = [
      `Name: ${g("name")}`,
      `Company: ${g("company")}`,
      `Email: ${g("email")}`,
      `Phone: ${g("phone")}`,
      `Sector: ${g("sector")}`,
      `Interested in: ${d.getAll("interest").join(", ")}`,
      "",
      g("message"),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label>
          Full name *
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email *
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Phone *
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+971" />
        </label>
      </div>
      <label>
        Sector
        <select name="sector" defaultValue="">
          <option value="">Select your sector</option>
          {sectors.map((s) => (
            <option key={s.id}>{s.name}</option>
          ))}
          <option>Other</option>
        </select>
      </label>
      <fieldset>
        <legend>Interested in</legend>
        <div className="checks">
          {["ClaraClean®", "DRiZZ® spray mops", "Cleaning textiles", "Trolleys", "SYR tools", "Demonstration"].map((t) => (
            <label key={t} className="check">
              <input type="checkbox" name="interest" value={t} /> {t}
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        Message *
        <textarea name="message" required rows={5} placeholder="Tell us about your facility, floor area and current cleaning routine." />
      </label>
      <div className="form-foot">
        <button type="submit" className="btn btn-primary">
          Send enquiry
        </button>
        <span className="note">We reply within one working day.</span>
      </div>
      {sent && (
        <p className="form-ok" role="status">
          Your email app should now be open with your message. If it didn&apos;t open, email us at{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      )}
    </form>
  );
}
