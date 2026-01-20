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
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 font-display text-primary">
          Why Choose Gadget-Hunter?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition hover:-translate-y-2 duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="card-title text-xl mb-2">{f.title}</h3>
                <p className="text-base-content/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
