import Navbar from "@/components/Navbar";
import "./globals.css";
import FilterProvider from "@/Providers/FilterProvider";

import Footer from "@/components/Footer";

export const metadata = {
  title: "NEXMART",
  description: "NexMart - All of the best products are here.",
};

export default async function RootLayout({ children, }) {

 
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen ">
        <div>
          <FilterProvider >
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