export default function CTA() {
  return (
    <section className="py-16 bg-primary text-primary-content">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 font-display">Stay Updated!</h2>
        <p className="mb-8 text-lg opacity-90">
          Subscribe to our newsletter for latest products and deals.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-80 text-base-content"
          />
          <button className="btn btn-secondary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
