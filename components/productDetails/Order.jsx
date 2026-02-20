import React from 'react'

function Order({ product }) {
    return (
        <div className="md:w-1/5 p-5">
            <div className='border border-gray-200 rounded-sm p-4 flex flex-col gap-4'>
                <p className="text-xl font-semibold text-gray-900">
                    ${product?.price}
                </p>
                <div>
                    <p className="text-sm text-gray-700">
                        <span className="text-green-700 font-semibold">FREE Delivery</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Delivery by <span className="font-semibold text-gray-800">Tomorrow</span>
                    </p>
                </div>
                <p className="text-green-700 font-semibold text-sm">In Stock</p>
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-600">Quantity:</label>
                    <select className="border border-gray-300 rounded-sm text-sm px-2 py-1.5 bg-gray-50 w-full">
                        {[1, 2, 3, 4, 5].map(n => (
                            <option key={n}>{n}</option>
                        ))}
                    </select>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full transition-colors text-sm">
                    Add to Cart
                </button>
                <button className='w-full rounded-full py-3 px-6 text-center bg-amber-900 hover:bg-amber-700 text-gray-900 font-semibold transition-colors textsm shadow-sm'>Buy Now</button>

                <hr className="border-gray-200" />

                <div className="text-xs text-gray-600 flex flex-col gap-1">
                    <p><span className="font-semibold">Sold by:</span> NexMart Official</p>
                    <p><span className="font-semibold">Returns:</span> 30-day return policy</p>
                </div>
            </div>
        </div>
    )
}

export default Order