'use client'

import useFilter from "@/hooks/useFilter"
import ProductCard from "./ProductCard"

function ProductList() {

    const { paginated } = useFilter()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
        {
            paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }</div>
    )
}

export default ProductList