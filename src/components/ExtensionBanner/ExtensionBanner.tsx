function ExtensionBanner() {
  return (
    <section className="bg-[#043873] py-20 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        <div className="text-white max-w-md">
          <h2 className="text-3xl font-bold mb-4 ml-25">
            Use as Extension
          </h2>
          <p className="text-blue-100 mb-6 ml-25">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium ml-25">
            Let's Go
          </button>
        </div>
        <div className="bg-blue-200 w-[420px] h-[280px] rounded-md" />
      </div>
    </section>
  );
}

export default ExtensionBanner;