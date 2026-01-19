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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition flex-1"
            >
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h3 className="font-semibold text-indigo-600">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
