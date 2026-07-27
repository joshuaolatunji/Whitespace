import { sponsorLogos } from "./sponsorLogo";

function Sponsors() {
  return (
    <section className="py-26 px-6 text-center">
      <h2 className="text-4xl font-bold mb-15">Our sponsors</h2>
      <div className="flex items-center justify-center gap-47 flex-wrap">
        {sponsorLogos.map((logo) => (
          <img key={logo.name} src={logo.src} alt={logo.name} className="h-10 object-contain" />
        ))}
      </div>
    </section>
  );
}

export default Sponsors;