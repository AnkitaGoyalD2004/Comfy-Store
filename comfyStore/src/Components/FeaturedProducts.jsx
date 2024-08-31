import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="Features" />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
// import ProductsGrid from "./ProductsGrid";
// import SectionTitle from "./SectionTtitle";

// let FeaturedProducts = ()=>{
//     return (
//         <div className=" pt-24">
//             <SectionTitle text = 'Featured Products'></SectionTitle>
//             <ProductsGrid></ProductsGrid>
//         </div>
//     );
// }
// export default FeaturedProducts;