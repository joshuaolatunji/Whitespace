import workTogetherImg from "../../assets/Work Together Image.png";

function WorkTogether() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        <img src={workTogetherImg} alt="Work together diagram" className="w-[300px] h-auto ml-25" />
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Work together</h2>
          <p className="text-gray-600 mb-6">
            With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium">
            Try It now
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkTogether;
