export default function CTA() {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6">Subscribe to our newsletter for latest products and deals.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-gray-800 w-full sm:w-auto flex-1"
          />
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-md hover:bg-gray-100 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
