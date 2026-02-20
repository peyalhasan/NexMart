import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col h-full cursor-pointer">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
          {product.title}
        </h2>
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="mt-auto">
          <span className="text-amber-950 font-bold text-lg">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}