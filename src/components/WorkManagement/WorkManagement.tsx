import Button from "../Button/Button";
import image from "../../assets/Work Together Image.png"



function WorkManagement() {
    return (
        <section className="bg-white h-[1588px] w-full ">
            <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-evenly px-55 py-35">

                <div className="text-black ">
                    <h1 className="text-[72px] font-bold w-2xl h-43.5 mb-20">
                        Project Management
                    </h1>

                    <p className="text-[18px] font-light w-2xl h-22.5 tracking-tight ">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos from the app and save them to a note.
                    </p>

                    <Button />

                </div>

                <div className="bg-[#C4DEFD] w-187 h-136.75">

                </div>

                {/* <div className="text-black ">

                    <div className=" w-177.5 h-165.25">
                        <img src={image} alt="" />
                    </div>

                    <h1 className="text-[72px] font-bold w-2xl h-43.5 mb-20">
                        Project Management
                    </h1>

                    <p className="text-[18px] font-light w-2xl h-22.5 tracking-tight ">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos from the app and save them to a note.
                    </p>

                    <Button />

                </div> */}


            </div>

        </section>
    )
}

export default WorkManagement 