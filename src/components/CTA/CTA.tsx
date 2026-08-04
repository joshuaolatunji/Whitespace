import {salesLogos} from "./salesLogo"

function CTA() {
  return (
    <section className="bg-[#043873] pt-16 md:pt-24 lg:pt-35 px-4 sm:px-10 md:px-20 lg:px-55 pb-8 lg:pb-8 text-center text-white justify-center w-full h-auto lg:h-176.25">
      <h2 className="text-[32px] sm:text-[44px] lg:text-[72px] font-bold w-full max-w-152 mx-auto leading-tight">Try Whitepace today</h2>
      <p className="text-base sm:text-[20px] lg:text-[24px] mb-2">Get started for free.</p>
      <p className="text-base sm:text-[20px] lg:text-[24px] mb-8">Add your whole team as your needs grow.</p>
      <button className="bg-blue-500 px-6 py-3 rounded-md font-medium mb-4">Try Today free</button>
      <p className="text-sm text-blue-200">On a big team? Contact sales</p>

      <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-10 flex-wrap h-auto w-full lg:w-65 lg:h-17.75 lg:mx-auto mt-10">
        {salesLogos.map((logo) => (
          <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 sm:h-10 object-contain" />
        ))}
      </div>
      
    </section>
  );
}

export default CTA;