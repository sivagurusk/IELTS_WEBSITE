export default function Testimonials() {
  const reviews = [
    { name: "Amit Sharma", text: "Scored 8.0 Band thanks to mock tests and mentoring." },
    { name: "Sophia Lee", text: "Speaking sessions were amazing, boosted my confidence." },
    { name: "Ali Mohammed", text: "AI feedback helped me get 7.5 in first attempt!" },
  ];

  return (
    <section className="py-20 px-8 bg-dark">
      <h3 className="text-3xl font-bold text-center mb-12">What Our Students Say</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-neonBlue/40 transition">
            <p className="italic mb-4 text-gray-300">"{r.text}"</p>
            <h4 className="text-neonBlue font-semibold">- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
