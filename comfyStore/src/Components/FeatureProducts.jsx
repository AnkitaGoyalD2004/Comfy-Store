import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

export default function FeatureProducts() {
  return (
    <>
      <div className="pt-24">
        <SectionTitle text="Features" />
        <ProductsGrid />
      </div>
    </>
  );
}
