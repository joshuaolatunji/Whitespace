import { sponsorLogos } from "./sponsorLogo";

function Sponsors() {
  return (
    <section className="w-full h-auto lg:h-134.5 py-12 md:py-20 lg:py-35 px-4 sm:px-10 md:px-20 lg:px-55 text-center">
      <h2 className="text-[32px] sm:text-[44px] lg:text-[72px] font-bold mb-8 lg:mb-25 max-w-370.5 h-auto lg:max-h-21.75">Our sponsors</h2>
      <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-47 flex-wrap w-full lg:w-370.5 h-auto lg:h-17.75">
        {sponsorLogos.map((logo) => (
          <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 sm:h-10 object-contain" />
        ))}
      </div>
    </section>
  );
}

export default Sponsors;