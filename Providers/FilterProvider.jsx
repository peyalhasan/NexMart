"use client"

import { FilterContext } from "@/context"
import { useMemo, useState } from "react"

const ITEMS_PER_PAGE = 8;

function FilterProvider({ children }) {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [maxPrice, setMaxPrice] = useState(1000);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(() => setProducts([]))
    }, [])

    const categories = useMemo(() => {
        return [...new Set(products.map(product => product.category))]
    }, [products])

    const filtered = useMemo(() => {
        return products.filter((product) => {
            const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
            const priceMatch = product.price <= maxPrice;
            const searchMatch = product.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
            return categoryMatch && priceMatch && searchMatch
        })
    }, [maxPrice, searchQuery, products, selectedCategory])


    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    const paginated = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    return (
        <FilterContext.Provider value={{
            categories,
            selectedCategory,
            setSelectedCategory,
            maxPrice,
            setMaxPrice,
            currentPage,
            setCurrentPage,
            searchQuery,
            setSearchQuery,
            filtered,
            totalPages,
            paginated,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider