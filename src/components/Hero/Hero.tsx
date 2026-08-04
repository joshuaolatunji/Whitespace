import image from "../../assets/Element 2.png"
import Button from "../Button/Button";


function Hero() {
  return (
    <section className="bg-nav-bg py-8 h-auto lg:h-207.25 w-full bg-cover" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',  backgroundPosition: "center",}}>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:justify-evenly px-6 sm:px-10 md:px-20 lg:px-55 py-16 md:py-24 lg:py-35">

        <div className="text-white gap-5 w-full max-w-164 justify-center text-center lg:text-left mb-10 lg:mb-25">

          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] w-full lg:w-164 h-auto font-bold mb-6 lg:mb-12">Get More Done with whitepace</h1>

          <p className="text-base sm:text-[18px] w-full lg:w-164 h-auto font-light mb-5">
            Project management software that enables your team to collaborate, plan, analyze and manage everyday tasks
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button />
          </div>

        </div>

        <div className="bg-blue-200 w-full max-w-206 h-64 sm:h-80 md:h-96 lg:w-206 lg:h-137.25 rounded-md mt-10 lg:mt-0" />

      </div>

    </section>
  );
}

export default Hero;

