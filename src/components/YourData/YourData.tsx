import data from "../../assets/Element2.png"

function YourData() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-35 px-6 sm:px-10 md:px-20 lg:px-55 h-auto lg:max-h-[661.13px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:max-w-200 text-center lg:text-left">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[74px] font-bold mb-4 w-full lg:w-200">100% your data</h2>
          <p className="text-base sm:text-[18px] w-full lg:w-200 h-auto font-light mb-6">
            The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no one but yourself can access it.
          </p>

          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium">
            Read more
          </button>
        </div>

         <div />
            <img src={data} alt="" className="h-auto sm:w-65 md:w-144 lg:h-[381.13px] lg:w-170.25" />
        </div>


    </section>
  );
}

export default YourData;