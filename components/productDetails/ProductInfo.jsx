import React from 'react'

function ProductInfo({ product }) {
    return (
        <div className='md:w-2/5 p-6 border-r border-gray-100'>
            <p className=' text-xs text-blue-600 uppercase tracking-widest font-semibold mb-2' >{product?.category}</p>

            <h1 className='text-lg font-semibold leading-snug text-gray-900 mb-3 '>{product?.title}</h1>

            <div className='flex items-center gap-2 mb-3'>
                <div>
                    {
                        [1, 2, 3, 4, 5].map((star) => {
                            const rate = product?.rating?.rate || 0;
                            const filled = star <= Math.floor(rate)
                            const partial = !filled && Math.ceil(rate) === star
                            return (
                                <span key={star} className='relative inline-block text-lg'>
                                    <span className='text-gray-300'>
                                        ★
                                    </span>
                                    <span className='absolute inset-0 overflow-hidden text-orange-400' style={{ width: filled ? '100%' : partial ? `${(rate % 1) * 100}%` : '0%' }}>
                                        ★
                                    </span>

                                </span>
                            )
                        })
                    }
                </div>
                <span className="text-blue-600 text-sm hover:text-orange-500 cursor-pointer">
                    {product.rating?.rate} ({product.rating?.count} ratings)
                </span>
            </div>
            <hr className="border-gray-200 mb-4" />

            <div className='mb-4'>
                <span className='text-xs text-gray-500'>
                    Price:
                </span>
                <div className='flex items-baseline gap-2'>
                    <span className="text-3xl font-medium text-gray-900">
                        ${Math.floor(product?.price)}
                    </span>
                    <span className="text-lg text-gray-900">
                        .{String(product.price.toFixed(2)).split('.')[1]}
                    </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
            </div>

            <hr className="border-gray-200 mb-4" />

            {/* About */}
            <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">About this item</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                </p>
            </div>
        </div>
    )
}

export default ProductInfo