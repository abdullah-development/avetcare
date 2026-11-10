import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { Checklist } from "@/components/Blocks";
import { getProduct } from "@/lib/site";

const p = getProduct("claraclean");

export const metadata: Metadata = { title: { absolute: p.metaTitle }, description: p.metaDescription };

export default function Page() {
  return (
    <ProductPage p={p}>
      <section className="section section-paper">
        <div className="wrap process">
          <div>
            <p className="label">How it works</p>
            <h2>No buckets, no dosing, no residue</h2>
            <p>
              After washing, the textiles are dry-loaded with surfactants. On site, your team adds plain water and the
              textile is ready. The cleaning agent stays bound to the fibre instead of building up on your floors, so
              surfaces look cleaner and stay clean for longer.
            </p>
            <Checklist
              items={[
                "Wash: textiles are laundered in a standard machine",
                "Treat: the ClaraClean® additive is loaded in the wash",
                "Dry and store: textiles are kept dry until needed",
                "Clean: activate with water only, no dosing on site",
              ]}
            />
          </div>
          <img
            src="/images/products/claraclean-process.jpg"
            alt="ClaraClean® Reload! washing process: treatment, drying, cleaning and return to laundry"
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap process">
          <img src="/images/products/claraclean-dosing.jpg" alt="ClaraClean® dosing units connected to a washing machine" />
          <div>
            <p className="label">In your laundry</p>
            <h2>Loaded in your own washing machines</h2>
            <p>
              For the Reload! system, ClaraClean® dosing units connect to your existing laundry machines and add the
              treatment automatically during the wash cycle. Ask us about the right setup for your laundry.
            </p>
          </div>
        </div>
      </section>
    </ProductPage>
  );
}
