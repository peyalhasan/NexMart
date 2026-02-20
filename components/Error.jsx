'use client'

import Link from 'next/link'

export default function Error({ reset }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
      <p className="text-7xl">⚠️</p>
      <h2 className="text-xl font-bold text-gray-800">Something went wrong!</h2>
      <div className="flex gap-3">
        <button onClick={reset} className="bg-orange-500 text-white text-sm px-5 py-2 rounded-full">
          Try again
        </button>
        <Link href="/" className="bg-gray-100 text-gray-700 text-sm px-5 py-2 rounded-full">
          Go Home
        </Link>
      </div>
    </div>
  )
}