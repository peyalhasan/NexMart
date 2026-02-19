import Navbar from "@/components/Navbar";
import "./globals.css";
import FilterProvider from "@/Providers/FilterProvider";
import { getAllProducts } from "@/lib";

export const metadata = {
  title: "NEXMART",
  description: "NexMart - All of the best products are here.",
};

export default async function RootLayout({ children }) {

  const products = await getAllProducts()
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen container mx-auto">
        <FilterProvider products={products}>
          <Navbar />
          {children}
        </FilterProvider>
      </body>
    </html>
  );
}