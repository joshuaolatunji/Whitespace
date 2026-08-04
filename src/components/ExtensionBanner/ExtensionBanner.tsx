function ExtensionBanner() {
  return (
    <section className="bg-nav-bg w-full h-auto lg:h-189.75 p-6">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-10 px-4 sm:px-10 md:px-20 lg:px-55 py-12 md:py-20 lg:py-35">
        <div className="text-white gap-5 w-full lg:max-w-174.25 lg:max-h-73.5 justify-center text-center lg:text-left mb-0 lg:mb-25">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[72px] w-full lg:w-174.25 h-auto font-bold mb-6 lg:mb-12">
            Use as Extension
          </h1>
          <p className="text-base sm:text-[18px] w-full lg:w-174.25 h-auto font-light mb-5">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium">
            Let's Go
          </button>
        </div>
        <div className="bg-blue-200 w-full max-w-171.5 h-64 sm:h-80 md:h-96 lg:w-171.5 lg:h-119.75 rounded-sm" />
      </div>
    </section>
  );
}

export default ExtensionBanner;