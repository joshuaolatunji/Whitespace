import { Quote } from "lucide-react";
import { testimonials } from "./testionials";

function Testimonials () {
        return (
         <section className="py-20 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What Our Clients{" "}
        <span className="relative inline-block">
          <span className="relative z-10">Says</span>
          <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-200 -z-0" />
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => {
          const isLight = i === 0;
          return (
            <div
              key={i}
              className={`rounded-2xl p-8 text-left shadow-sm ${
                isLight ? "bg-white border border-gray-100" : "bg-blue-500 text-white"
              }`}
            >
              <Quote
                size={40}
                className={isLight ? "text-[#043873] mb-6" : "text-white mb-6"}
                fill={isLight ? "#043873" : "#ffffff"}
              />
              <p className={`text-sm mb-6 ${isLight ? "text-gray-700" : "text-blue-50"}`}>
                {t.quote}
              </p>
              <hr className={`mb-6 ${isLight ? "border-gray-200" : "border-blue-300"}`} />
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${t.avatarColor}`} />
                <div>
                  <p className={`font-semibold text-sm ${isLight ? "text-gray-900" : "text-white"}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${isLight ? "text-gray-500" : "text-blue-100"}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === 1 ? "bg-[#043873] w-3 h-3" : "bg-blue-300"}`}
          />
        ))}
      </div>
    </section>
  );
            
}

export default Testimonials;