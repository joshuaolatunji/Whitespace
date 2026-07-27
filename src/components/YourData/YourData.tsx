import data from "../../assets/Element2.png"

function YourData() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto flex items-center justify-between gap-10">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-4 ml-39">100% your data</h2>
          <p className="text-gray-600 mb-6 ml-39">
            The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes.
          </p>

          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium ml-39">
            Read more
          </button>
        </div>

         <div />
            <img src={data} alt="" className="h-80" />
        </div>

       
    </section>
  );
}

export default YourData;