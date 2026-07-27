import image from "../../assets/Element 2.png"

function Hero() {
  return (
    <section className="bg-nav-bg p-8 h-207.25 w-full" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',  backgroundPosition: "center",}}>
      <div className="flex mx-auto justify-evenly px-55 py-35 ">

        <div className="text-white gap-5 max-w-164 max-h-59.5 justify-center mt-20">

          <h1 className="text-[64px] w-164 h-38.5 font-bold mb-12">Get More Done with whitepace</h1>

          <p className="text-[18px] w-164 h-15 font-light mb-16">
            Project management software that enables your team to collaborate, plan, analyze and manage everyday tasks
          </p>

          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium">
            Try Whitepace Free
          </button>

        </div>

        <div className="bg-blue-200 w-206 h-137.25 rounded-md" />

      </div>
      
    </section>
  );
}

export default Hero;

