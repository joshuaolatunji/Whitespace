import { plans } from "./plans";

function Pricing() {
  return (
    <section className="py-12 md:py-20 px-6 sm:px-10 md:px-20 lg:px-55 text-center w-full h-auto lg:h-318">
      <div className="w-full flex flex-col items-center justify-center mb-10 lg:mb-15">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-2">Choose Your Plan</h2>

      <p className="text-base sm:text-[18px] w-full max-w-244.75 h-auto mx-auto">
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, whitepace has the right plan for you.
      </p>
      </div>


      <div className="max-w-370.25 items-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl border-amber-300 border p-8 text-left w-full lg:w-[472.33px] h-auto lg:h-158.5  ${
              plan.highlight ? "bg-[#043873] lg:h-190.25 border-0 text-white scale-100 lg:scale-105" : "bg-white text-gray-800 "
            }`}
          >
            <div className="w-full lg:max-w-[384.33px] mt-6 lg:mt-10">
              <h3 className="text-[24px] font-semibold mb-5">{plan.name}</h3>
            <p className="text-[36px] font-bold mb-5">{plan.price}</p>
            <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>
              {plan.description}
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {plan.features.map((feature) => ( 
                <li key={feature} className="mb-5">✓ {feature} </li>
              ))}
            </ul>
            </div>
            <button
              className={`w-full py-2 rounded-md font-medium border-grey-200 border-2 ${
                plan.highlight ? "bg-blue-500 border-0 text-white" : "border border-amber-200"
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