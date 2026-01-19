export default function Categories() {
  const categories = [
    { name: "Smartphones", icon: "📱" },
    { name: "Laptops", icon: "💻" },
    { name: "Smart Home", icon: "🏠" },
    { name: "Accessories", icon: "🎧" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Shop by Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((c, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg w-40 text-center transition"
            >
              <div className="text-5xl mb-4">{c.icon}</div>
              <h3 className="font-semibold">{c.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
