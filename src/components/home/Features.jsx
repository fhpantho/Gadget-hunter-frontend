export default function Features() {
  const features = [
    {
      title: "Wide Range of Gadgets",
      desc: "Find everything from smartphones to smart home devices.",
      icon: "📱",
    },
    {
      title: "Best Prices",
      desc: "Competitive pricing to fit every budget.",
      icon: "💰",
    },
    {
      title: "Fast Delivery",
      desc: "Quick and reliable shipping across Bangladesh.",
      icon: "🚚",
    },
    {
      title: "Quality Guarantee",
      desc: "All products are thoroughly tested for quality.",
      icon: "✅",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Gadget-Hunter?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
