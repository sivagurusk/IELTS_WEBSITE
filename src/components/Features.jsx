export default function Features() {
  const features = [
    { title: "Speaking Practice", desc: "Live sessions to improve fluency & pronunciation." },
    { title: "Mock Tests", desc: "Simulated tests with instant scoring." },
    { title: "AI Band Score", desc: "Get AI-evaluated feedback instantly." },
    { title: "Premium Mentoring", desc: "One-on-one personalized coaching." },
  ];

  return (
    <section className="py-20 px-8 bg-dark">
      <h3 className="text-3xl font-bold text-center mb-12">The Best Quality IELTS Training</h3>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-neonBlue/50 hover:scale-105 transition">
            <h4 className="text-xl font-semibold text-neonBlue mb-4">{f.title}</h4>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
