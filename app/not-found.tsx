import Link from "next/link";
import { ProductRow } from "@/components/Blocks";

export default function NotFound() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap page-head-in">
          <p className="label">Error 404</p>
          <h1>Page not found</h1>
          <p className="lead">The page you&apos;re looking for has moved or no longer exists.</p>
          <div className="actions">
            <Link href="/" className="btn btn-primary">
              Go to the homepage
            </Link>
            <Link href="/contactus" className="btn btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="label">Our products</p>
          <ProductRow />
        </div>
      </section>
    </main>
  );
}
