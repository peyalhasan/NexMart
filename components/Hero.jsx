export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white min-h-[460px] flex items-center justify-center mb-8 py-6">

      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }}
      />

      <div className="relative text-center px-6">
        <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
          New Arrivals — Updated Daily
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
          Shop
          <span className="block text-transparent"
            style={{ WebkitTextStroke: '2px #f97316' }}
          >
            Smarter.
          </span>
          <span className="block text-yellow-400">Live Better.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
          Thousands of products at unbeatable prices — all in one place.
        </p>
        
        <div className="flex gap-12 mt-12 justify-center">
          {[
            { value: '200+', label: 'Products' },
            { value: '4', label: 'Categories' },
            { value: '100%', label: 'Secure' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="text-gray-500 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}