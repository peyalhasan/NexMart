import ProductDetails from "@/components/ProductDetails";



export default async function Product({ params: { id } }) {

  return (
    <ProductDetails id={id} />
  );
}