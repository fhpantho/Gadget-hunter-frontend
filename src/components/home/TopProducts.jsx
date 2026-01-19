import Link from "next/link";

export default function TopProducts({ products }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products?.slice(0, 4).map((product) => (
            <div
              key={product._id}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
              <Link
                href={`/products/${product._id}`}
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
