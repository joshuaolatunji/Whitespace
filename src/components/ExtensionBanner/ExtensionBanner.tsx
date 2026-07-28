function ExtensionBanner() {
  return (
    <section className="bg-nav-bg w-[1921px] h-189.75 p-6">
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center lg:justify-evenly gap-10 px-55 py-35">
        <div className="text-white  gap-5 max-w-174.25 max-h-73.5 justify-center mb-25">
          <h1 className="text-[72px] w-174.25 h-21.75 font-bold mb-12">
            Use as Extension
          </h1>
          <p className="text-[18px] w-174.25 h-15 font-light mb-5">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium">
            Let's Go
          </button>
        </div>
        <div className="bg-blue-200 w-105 h-70 rounded-md" />
      </div>
    </section>
  );
}

export default ExtensionBanner;