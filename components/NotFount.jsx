import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-7xl">🔍</p>
            <h2 className="text-xl font-bold text-gray-800">Product not found!</h2>
            <Link href="/" className="bg-orange-500 text-white text-sm px-5 py-2 rounded-full">
                Go Home
            </Link>
        </div>
    )
}