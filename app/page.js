import FilterBar from "@/components/FilterBar";
import Pagination from "@/components/Pagination";
import Hero from "@/components/Hero";

import ProductList from "@/components/ProductList";
import Error from "@/components/Error";


export default async function Home() {


  return (
    <main className="max-w-7xl mx-auto  px-4 py-8">
      <Hero />
      <FilterBar />

      <div >
       <ProductList />
      </div>

       <Pagination  />
    </main>
  );
}