"use client";

// Subtle, purposeful motion for v2:
//  - blocks fade up as they enter the viewport (staggered within a group)
//  - figures count up once when first seen
//  - header gains a shadow once the page scrolls
// Content is fully visible without JavaScript, and all motion is skipped
// for visitors who prefer reduced motion.

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL = [
  ".section-head",
  ".split > *",
  ".product-card",
  ".sector-card",
  ".figure",
  ".step",
  ".variant",
  ".panel",
  ".values > div",
  ".timeline > div",
  ".colour-codes > div",
  ".item",
  ".doc",
  ".sector-row > *",
  ".specs > *",
  ".process > *",
  ".cert > *",
  ".cta-in > *",
  ".contact-grid > *",
].join(",");

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector(".header");
    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("motion");

    const els = Array.from(document.querySelectorAll<HTMLElement>(`main :is(${REVEAL})`));
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; // already on screen: don't hide it
      const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => c.matches(REVEAL));
      const i = Math.max(0, sibs.indexOf(el));
      el.style.setProperty("--d", `${Math.min(i, 6) * 70}ms`);
      el.classList.add("reveal");
    });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.filter((el) => el.classList.contains("reveal")).forEach((el) => io.observe(el));

    // Count-up for figures such as "90%", "700+", "80 m²"
    const rafs: number[] = [];
    const counters = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          counters.unobserve(e.target);
          const el = e.target as HTMLElement;
          const m = /^(\D*)(\d+)([\s\S]*)$/.exec(el.dataset.final ?? "");
          if (!m) return;
          const [, pre, num, suf] = m;
          const end = parseInt(num, 10);
          const t0 = performance.now();
          const dur = 1400;
          const step = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const v = Math.round(end * (1 - Math.pow(1 - p, 3)));
            el.textContent = `${pre}${v}${suf}`;
            if (p < 1) rafs.push(requestAnimationFrame(step));
          };
          rafs.push(requestAnimationFrame(step));
        }),
      { threshold: 0.6 },
    );
    const nums = Array.from(document.querySelectorAll<HTMLElement>("main .figure strong"));
    nums.forEach((n) => {
      n.dataset.final = n.textContent ?? "";
      counters.observe(n);
    });

    return () => {
      io.disconnect();
      counters.disconnect();
      rafs.forEach(cancelAnimationFrame);
      nums.forEach((n) => {
        if (n.dataset.final) n.textContent = n.dataset.final;
      });
      els.forEach((el) => el.classList.remove("reveal", "is-in"));
    };
  }, [pathname]);

  return null;
}
