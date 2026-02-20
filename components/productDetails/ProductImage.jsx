import Image from 'next/image'
import React from 'react'

function ProductImage({ product }) {
    return (
        <div className='md:w-2/5 border-r border-gray-100 p-8 flex flex-col'>
            <div className='relative w-full h-80'>
                <Image src={product?.image} fill alt={product?.title} className='object-contain' />
            </div>
            <div className='w-full flex flex-col gap-3 mt-4'>
                <button className='w-full rounded-full py-3 px-6 text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition-colors textsm shadow-sm'>Add to Cart</button>
                <button className='w-full rounded-full py-3 px-6 text-center bg-amber-900 hover:bg-amber-700 text-gray-900 font-semibold transition-colors textsm shadow-sm'>Buy Now</button>
            </div>

        </div>
    )
}

export default ProductImage