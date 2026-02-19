'use client'
import useFilter from "@/hooks/useFilter";

export default function Pagination({ }) {

   const {currentPage, setCurrentPage, totalPages} = useFilter()
  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            currentPage === i + 1
              ? "bg-indigo-600 text-white"
              : " text-gray-700 border hover:bg-indigo-50"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}