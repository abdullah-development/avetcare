import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { getProduct } from "@/lib/site";

const p = getProduct("cleaningtextiles");

export const metadata: Metadata = { title: { absolute: p.metaTitle }, description: p.metaDescription };

export default function Page() {
  return <ProductPage p={p} />;
}
