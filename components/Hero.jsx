import Link from "next/link";

export default function Hero({ searchQuery, setSearchQuery }) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
            🛍️ New Arrivals Available
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Shop Smarter, <br />
            <span className="text-yellow-300">Live Better.</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-md">
            Discover thousands of products at unbeatable prices. From electronics to fashion — all in one place.
          </p>

          {/* Search Bar */}
          <div className="flex items-center  rounded-xl overflow-hidden shadow-lg max-w-md mx-auto md:mx-0">
            <span className="pl-4 text-gray-400 text-lg">🔍</span>
        
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 justify-center md:justify-start">
            <div>
              <p className="text-2xl font-bold">200+</p>
              <p className="text-white/70 text-sm">Products</p>
            </div>
            <div>
              <p className="text-2xl font-bold">4</p>
              <p className="text-white/70 text-sm">Categories</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-white/70 text-sm">Secure</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 flex justify-center">
          <div className="relative /10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 w-72">
            <div className="/20 rounded-2xl h-48 flex items-center justify-center mb-4">
              <span className="text-7xl">🛒</span>
            </div>
            <div className="space-y-2">
              <div className="/20 h-3 rounded-full w-3/4" />
              <div className="/20 h-3 rounded-full w-1/2" />
              <div className="flex justify-between items-center mt-3">
                <div className="bg-yellow-300 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
                  Best Deal
                </div>
                <span className="text-white font-bold text-lg">$29.99</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Wave Bottom */}
      <div className="overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path fill="#f3f4f6" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}