export default function Testimonials() {
  const testimonials = [
    {
      name: "Arif Hossain",
      text: "Gadget-Hunter always delivers amazing gadgets quickly!",
    },
    {
      name: "Mina Rahman",
      text: "The products are high-quality and the prices are fair.",
    },
    {
      name: "Rakib Khan",
      text: "I love the variety of electronics available here.",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 font-display text-primary">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-xl flex-1 hover:scale-105 transition duration-300"
            >
              <div className="card-body">
                <p className="text-base-content/80 italic mb-4">
                  &quot;{t.text}&quot;
                </p>
                <h3 className="font-bold text-secondary text-lg">{t.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
