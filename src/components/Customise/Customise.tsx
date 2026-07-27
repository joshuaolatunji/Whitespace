function Customise() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        <div className="bg-blue-200 w-[420px] h-[280px] rounded-md ml-25" />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            Customise it to your needs
          </h1>
          <p className="text-gray-600 mb-6">
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
