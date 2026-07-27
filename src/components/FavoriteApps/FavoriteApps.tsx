import image from "../../assets/Apps.png"

function FavoriteApps() {
  return (
    <section className="bg-[#043873] py-20 px-6">
      <div className="mx-auto flex items-center justify-between gap-10">

        <img src={image} alt="" className="h-80 ml-45" />
        {/* <div className="bg-blue-900 w-[260px] h-[220px] rounded-full" /> */}

        <div className="text-white max-w-md">
          <h2 className="text-3xl font-bold mb-4">Work with Your Favorite Apps Using whitepace</h2>
          <p className="text-blue-100 mb-6">
            whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <button className="bg-blue-500 px-5 py-3 rounded-md font-medium">Read more</button>
        </div>
      </div>
    </section>
  );
}

export default FavoriteApps;