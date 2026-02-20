import { User, ShoppingCart } from "lucide-react";
import Search from "./Search";

export default function Navbar() {
    return (
        <nav className="bg-[#2d1810] border-b border-[#3a2020] shadow-md sticky top-0 z-50 max-w-7xl mx-auto px-4">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-yellow-400">
                    Nex<span className="text-white">Mart</span>
                </h1>

                <Search />
                {/* Right Side */}
                <div className="flex items-center gap-5">
                    <button className="text-gray-300 hover:text-yellow-400 transition">
                        <User size={22} />
                    </button>
                    <button className="text-gray-300 hover:text-yellow-400 transition">
                        <ShoppingCart size={22} />
                    </button>
                </div>

            </div>
        </nav>
    );
}