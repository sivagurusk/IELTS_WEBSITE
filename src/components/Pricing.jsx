export default function Pricing() {
  const plans = [
    { name: "Free", price: "$0", features: ["Limited mock tests", "Basic study material"] },
    { name: "Pro", price: "$29", features: ["Unlimited mock tests", "Speaking practice", "AI Band Score"] },
    { name: "Premium", price: "$49", features: ["All Pro features", "1-on-1 Mentoring", "24/7 Support"] },
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-r from-gray-900 to-dark">
      <h3 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-neonPink/50 transition">
            <h4 className="text-2xl font-bold mb-4 text-neonPink">{plan.name}</h4>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6 text-gray-300">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>
            <button className="w-full py-3 bg-neonBlue text-dark font-bold rounded-lg hover:bg-neonPink hover:text-white transition">
              Get {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
