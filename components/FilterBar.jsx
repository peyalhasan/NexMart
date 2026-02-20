'use client'
import useFilter from "@/hooks/useFilter";

export default function FilterBar() {

  const {categories,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,} = useFilter()
  return (
    <div className="flex bg-[#2d1810] flex-wrap gap-4 items-center mb-8  p-4 rounded-2xl shadow">
      <div>
        <label className="text-sm font-medium text-white mr-2">
          Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-white">
          Max Price: ${maxPrice}
        </label>
        <input
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="accent-indigo-600"
        />
      </div>
    </div>
  );
}