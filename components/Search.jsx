'use client'

import useFilter from "@/hooks/useFilter"
import { SearchIcon, X } from "lucide-react"

function Search() {
    const { searchQuery, setSearchQuery } = useFilter()
    return (
        <div className="hidden sm:block">
            <div
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200  shadow-sm"
            >
                <SearchIcon className="text-white" size={16} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your product..."
                    className="bg-transparent text-sm text-white w-64 focus:outline-none"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        className="pr-3 text-gray-400 hover:text-yellow-400 transition"
                    >
                        <X className="text-white" size={16} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Search