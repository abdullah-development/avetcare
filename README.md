# AvetCare website (v2)

Website for AvetCare Middle East LLC, a Dubai-based supplier of European-made professional cleaning systems
(ClaraClean®, DRiZZ® spray mops, cleaning textiles, trolleys and SYR tools).

Built with Next.js (App Router), React and TypeScript. Static pages, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

- `lib/site.ts`: all content (contact details, products, sectors, clients)
- `components/`: header, footer, shared blocks, product page template, contact form, motion
- `app/`: one folder per page; URLs match the old site (`/claraclean`, `/aboutus`, …)
- `next.config.ts`: permanent redirects from the old `*.html` URLs
- `public/images`, `public/videos`: all media is stored locally

## Notes

- The contact form opens the visitor's email app (no server handler yet).
- Sector and lifestyle photos are from Pexels (free for commercial use). Product photos are AvetCare/AVET material.
- `allowedDevOrigins` in `next.config.ts` only affects the dev server.
