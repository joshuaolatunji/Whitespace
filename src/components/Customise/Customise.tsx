function Customise() {
  return (
    <section className="py-12 md:py-20 lg:py-35 px-6 sm:px-10 md:px-20 lg:px-55 w-full h-auto lg:h-203">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="bg-blue-200 w-full max-w-178.5 h-64 sm:h-80 md:h-96 lg:w-178.5 lg:h-133 rounded-md" />
        <div className="w-full lg:max-w-167.25 lg:max-h-102.75 text-center lg:text-left">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-4 leading-tight">
            Customise it to your needs
          </h1>
          <p className="text-gray-600 mb-6 text-base sm:text-[18px] w-full lg:w-167.25 h-auto leading-tight">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium">
            Let's Go
          </button>
        </div>
      </div>
    </section>
  );
}

export default Customise;
