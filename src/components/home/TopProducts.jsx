import Link from "next/link";

export default function TopProducts({ products }) {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 font-display text-primary">
          Top Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products?.slice(0, 4).map((product) => (
            <div
              key={product._id}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body text-left">
                <h3 className="card-title text-base">{product.name}</h3>
                <p className="text-primary font-bold text-lg">
                  ${product.price}
                </p>
                <div className="card-actions justify-end mt-2">
                  <Link
                    href={`/products/${product._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
