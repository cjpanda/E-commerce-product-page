import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

const Product = () => {
  return (
    <div className="max-width mx-auto lg:flex-row flex-col flex justify-between pt-20 pb-10 gap-20">
      <ProductImage />
      <ProductDetails />
    </div>
  );
};

export default Product;
