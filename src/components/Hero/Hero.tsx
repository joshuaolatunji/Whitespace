function Hero() {
  return (
    <section className="bg-[#043873] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        <div className="text-white max-w-md">

          <h1 className="text-4xl font-bold mb-4 ml-25">Get More Done with whitepace</h1>

          <p className="text-blue-100 mb-6 ml-25">
            Project management software that enables your team to collaborate, plan, analyze and manage everyday tasks
          </p>

          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium ml-25">
            Try Whitepace Free
          </button>

        </div>
        <div className="bg-blue-200 w-[420px] h-[280px] rounded-md" />
      </div>
      
    </section>
  );
}

export default Hero;