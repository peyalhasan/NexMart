import Navbar from "@/components/Navbar";
import "./globals.css";
import FilterProvider from "@/Providers/FilterProvider";
import { getAllProducts } from "@/lib";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NEXMART",
  description: "NexMart - All of the best products are here.",
};

export default async function RootLayout({ children, }) {
  
  let products = []

  try {
    products = await getAllProducts()
  } catch (error) {
    products = []
  }
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen ">
        <div>
          <FilterProvider products={products}>
            <Navbar />
            {children}
            <Footer />
          </FilterProvider>
        </div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}