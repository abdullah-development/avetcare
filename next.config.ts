import type { NextConfig } from "next";

// Old static-site URLs (e.g. /aboutus.html) are permanently redirected to the
// new clean routes so existing links and search rankings keep working.
const legacyPages = [
  "aboutus",
  "claraclean",
  "spraymopsysteme",
  "cleaningtextiles",
  "cleaningtrolley",
  "syr",
  "cleaninglocation",
  "infondownload",
  "contactus",
  "products",
];

const nextConfig: NextConfig = {
  // Dev only: lets the dev server be opened from other devices on the LAN.
  allowedDevOrigins: ["192.168.100.244"],
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...legacyPages.map((p) => ({
        source: `/${p}.html`,
        destination: `/${p}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
