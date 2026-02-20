import { getProductById } from '@/lib'
import Link from 'next/link'
import React from 'react'
import ProductInfo from './productDetails/ProductInfo'
import ProductImage from './productDetails/ProductImage'
import Order from './productDetails/Order'
import InfoBar from './productDetails/InfoBar'

async function ProductDetails({ id }) {

    const product = await getProductById(id)

    return (
        <main className="min-h-screen bg-gray-50">

            <div className="bg-white border-b border-gray-200 px-4 py-2">
                <div className="max-w-6xl mx-auto">
                    <Link
                        href="/"
                        className="text-blue-600 text-sm hover:underline transition-colors"
                    >
                        ← Back to Products
                    </Link>
                </div>
            </div>

            <div className='max-w-6xl mx-auto px-4 py-6'>
                <div className='bg-white rounded-sm shadow-sm border border-gray-200'>
                    <div className='flex flex-col md:flex-row gap-0'>
                        {/* Image Section */}
                        <ProductImage product={product} />

                        {/* Product Info */}

                        <ProductInfo product={product} />

                        {/* Delivery & Stock */}
                        <Order product={product} />
                    </div>
                </div>
            </div>

            <InfoBar product={product} />
        </main>
    )
}

export default ProductDetails