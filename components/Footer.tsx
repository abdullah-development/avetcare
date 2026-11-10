import Link from "next/link";
import Icon from "./Icon";
import { contact, products, sectors } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-col footer-company">
          <img src="/images/brand/logo.png" alt="AvetCare" width={98} height={60} className="footer-logo" />
          <p>
            {contact.company}
            <br />
            {contact.address.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
          </p>
          <p>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            {contact.hours}
          </p>
        </div>
        <div className="footer-col">
          <p className="footer-head">Products</p>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={"/" + p.slug}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-head">Cleaning areas</p>
          <ul>
            {sectors.map((s) => (
              <li key={s.id}>
                <Link href={`/cleaninglocation#${s.id}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-head">Company</p>
          <ul>
            <li>
              <Link href="/aboutus">About AvetCare</Link>
            </li>
            <li>
              <Link href="/infondownload">Info &amp; downloads</Link>
            </li>
            <li>
              <a href={contact.catalogue} target="_blank" rel="noopener">
                Product catalogue (PDF)
              </a>
            </li>
            <li>
              <Link href="/contactus">Contact</Link>
            </li>
          </ul>
          <div className="footer-social">
            <a href={contact.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <Icon name="linkedin" size={18} />
            </a>
            <a href={contact.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <Icon name="facebook" size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {contact.company}. All rights reserved.</span>
        <span>Products made in Europe · Supplied and supported in the UAE</span>
      </div>
    </footer>
  );
}
