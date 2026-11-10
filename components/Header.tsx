"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { contact, products } from "@/lib/site";

const NAV = [
  { href: "/aboutus", label: "Company" },
  { href: "/cleaninglocation", label: "Cleaning areas" },
  { href: "/infondownload", label: "Info & downloads" },
  { href: "/contactus", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const productsActive = pathname === "/products" || products.some((p) => pathname === "/" + p.slug);

  // Close menus on navigation (reset during render, the React-recommended pattern)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMega(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="utility">
        <div className="wrap utility-in">
          <span>European cleaning systems for the UAE since 2011</span>
          <span className="utility-r">
            <a href={contact.phoneHref}>
              <Icon name="phone" size={14} />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Icon name="mail" size={14} />
              {contact.email}
            </a>
          </span>
        </div>
      </div>

      <header className="header" onMouseLeave={() => setMega(false)}>
        <div className="wrap header-in">
          <Link href="/" className="brand" aria-label="AvetCare home">
            <img src="/images/brand/logo.png" alt="AvetCare" width={98} height={60} />
          </Link>

          <nav className="nav" aria-label="Main">
            <button
              type="button"
              className={`nav-link${productsActive ? " is-active" : ""}`}
              aria-expanded={mega}
              aria-controls="mega"
              onMouseEnter={() => setMega(true)}
              onClick={() => setMega((v) => !v)}
            >
              Products <Icon name="chevron" size={14} />
            </button>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`nav-link${pathname === n.href ? " is-active" : ""}`}
                onMouseEnter={() => setMega(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={contact.phoneHref}>
              <Icon name="phone" size={16} />
              {contact.phone}
            </a>
            <Link href="/contactus" className="btn btn-primary btn-sm">
              Request a quote
            </Link>
            <button type="button" className="menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>

        <div id="mega" className={`mega${mega ? " is-open" : ""}`}>
          <div className="wrap mega-in">
            {products.map((p) => (
              <Link key={p.slug} href={"/" + p.slug} className="mega-item">
                <span className="mega-img">
                  <img src={p.image} alt="" />
                </span>
                <strong>{p.name}</strong>
                <span>{p.short}</span>
              </Link>
            ))}
            <div className="mega-side">
              <p className="label">Product overview</p>
              <Link href="/products" className="text-link">
                All product lines <Icon name="arrow" size={16} />
              </Link>
              <a href={contact.catalogue} target="_blank" rel="noopener" className="text-link">
                Catalogue (PDF) <Icon name="download" size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer-top">
          <Link href="/" className="brand" aria-label="AvetCare home">
            <img src="/images/brand/logo.png" alt="AvetCare" width={82} height={50} />
          </Link>
          <button type="button" className="menu-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Icon name="close" size={22} />
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Mobile">
          <Link href="/">Home</Link>
          <p className="drawer-label">Products</p>
          {products.map((p) => (
            <Link key={p.slug} href={"/" + p.slug} className="drawer-sub">
              <img src={p.image} alt="" />
              {p.name}
            </Link>
          ))}
          <Link href="/products" className="drawer-sub drawer-all">
            All products
          </Link>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-foot">
          <a className="btn btn-primary btn-block" href={contact.phoneHref}>
            <Icon name="phone" size={16} /> Call {contact.phone}
          </a>
          <a className="btn btn-outline btn-block" href={`mailto:${contact.email}`}>
            <Icon name="mail" size={16} /> {contact.email}
          </a>
        </div>
      </div>
    </>
  );
}
