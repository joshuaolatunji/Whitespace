// import { Quote } from "lucide-react";
import { testimonials } from "./testimonials";


function Testimonials() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Clients Says</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 text-left ${
              i === 0 ? "bg-white border" : "bg-[#043873] text-white"
            }`}
          >
            <p className="text-3xl mb-4">"</p>
            <p className="text-sm mb-6">{t.quote}</p>
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-xs opacity-70">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;