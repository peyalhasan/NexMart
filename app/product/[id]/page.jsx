import ProductDetails from "@/components/ProductDetails";

export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Product({ params: { id } }) {

  return (
    <ProductDetails id={id} />
  );
}