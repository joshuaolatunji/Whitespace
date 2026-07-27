import { plans } from "./plans";

function Pricing() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, whitepace has the right plan for you.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-8 text-left border ${
              plan.highlight ? "bg-[#043873] text-white scale-105" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-2">{plan.price}</p>
            <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>
              {plan.description}
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-md font-medium ${
                plan.highlight ? "bg-blue-500 text-white" : "border border-gray-300"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;