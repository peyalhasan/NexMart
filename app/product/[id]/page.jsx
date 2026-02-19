"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({params:{id}}) {
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => { setProduct(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, [id]);

  if (loading) return (
    <div className="max-w-3xl mx-auto px-4 py-16 animate-pulse">
      <div className="h-64 bg-gray-200 rounded-2xl mb-6" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  );

  if (error) return (
    <p className="text-center text-red-500 mt-20">Error: {error}</p>
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/" className="text-indigo-600 text-sm mb-6 inline-block hover:underline">
        ← Back to Products
      </Link>
      <div className=" rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-64 h-64 shrink-0">
          <Image src={product.image} alt={product.title} fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase text-indigo-400 font-semibold">
            {product.category}
          </span>
          <h1 className="text-xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
          <p className="text-2xl font-bold text-indigo-600">${product.price}</p>
          <p className="text-sm text-yellow-500">
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </p>
          <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}