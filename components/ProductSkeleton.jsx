export default function ProductSkeleton() {
  return (
    <div className=" rounded-2xl shadow p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-xl mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="h-6 bg-gray-200 rounded w-1/4" />
    </div>
  );
}