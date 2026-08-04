import image from "../../assets/Apps.png"

function FavoriteApps() {
  return (
    <section className="bg-[#043873] py-12 md:py-20 lg:py-35 px-4 sm:px-10 md:px-20 lg:px-55 w-full h-auto lg:h-[750.8px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-25">

        <img src={image} alt="" className="h-auto w-40 sm:w-56 md:w-72 lg:h-[470.8px] lg:w-145.5" />
        {/* <div className="bg-blue-900 w-[260px] h-[220px] rounded-full" /> */}

        <div className="text-white w-full lg:w-199.5 h-auto lg:h-117 leading-tight text-center lg:text-left">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[72px] font-bold mb-4">Work with Your Favorite Apps Using whitepace</h2>
          <p className="text-base sm:text-[18px] font-light leading-tight mb-6">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <button className="bg-blue-500 px-5 py-3 rounded-md font-medium">Read more</button>
        </div>
      </div>
    </section>
  );
}

export default FavoriteApps;