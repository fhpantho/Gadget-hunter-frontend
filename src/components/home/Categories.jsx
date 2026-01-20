export default function Categories() {
  const categories = [
    { name: "Smartphones", icon: "📱" },
    { name: "Laptops", icon: "💻" },
    { name: "Smart Home", icon: "🏠" },
    { name: "Accessories", icon: "🎧" },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 font-display text-primary">
          Shop by Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((c, idx) => (
            <div
              key={idx}
              className="card bg-base-200 hover:bg-primary hover:text-primary-content shadow-lg transition duration-300 w-40 cursor-pointer"
            >
              <div className="card-body items-center text-center p-6">
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="font-bold">{c.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
