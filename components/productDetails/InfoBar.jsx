import React from 'react'

function InfoBar({product}) {
  return (
      <div className="mt-4 bg-white border border-gray-200 rounded-sm shadow-sm p-5">
        <h3 className="text-base font-semibold text-gray-800 mb-3">Product Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
                <p className="text-gray-500 text-xs">Category</p>
                <p className="text-gray-800 font-medium capitalize">{product.category}</p>
            </div>
            <div>
                <p className="text-gray-500 text-xs">Rating</p>
                <p className="text-gray-800 font-medium">{product.rating?.rate} / 5</p>
            </div>
            <div>
                <p className="text-gray-500 text-xs">Total Reviews</p>
                <p className="text-gray-800 font-medium">{product.rating?.count}</p>
            </div>
            <div>
                <p className="text-gray-500 text-xs">Availability</p>
                <p className="text-green-600 font-medium">In Stock</p>
            </div>
        </div>
    </div>
  )
}

export default InfoBar