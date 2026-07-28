import image from "../../assets/Element 2.png"
import Button from "../Button/Button";


function Hero() {
  return (
    <section className="bg-nav-bg p-8 h-207.25 w-full" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',  backgroundPosition: "center",}}>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:justify-evenly px-55 py-35">

        <div className="text-white gap-5 max-w-164 max-h-59.5 justify-center mb-25">

          <h1 className="text-[64px] w-164 h-38.5 font-bold mb-12">Get More Done with whitepace</h1>
          <p className="text-[18px] w-164 h-15 font-light mb-5">
            Project management software that enables your team to collaborate, plan, analyze and manage everyday tasks
          </p>

          <Button />

        </div>

        <div className="bg-blue-200 w-206 h-137.25 rounded-md" />

      </div>
      
    </section>
  );
}

export default Hero;

