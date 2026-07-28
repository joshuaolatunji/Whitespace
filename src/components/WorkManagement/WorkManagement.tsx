import Button from "../Button/Button";
import image from "../../assets/Work Together Image.png"



function WorkManagement() {
    return (
        <section className="bg-white h-[1588px] w-full ">
            <div className="flex flex-col items-center mt-50">

                <div className="flex flex-col lg:flex-row md:flex-row">
                    <div className="text-black mt-20 ">
                    <h1 className="text-[72px] font-bold w-2xl h-43.5 mb-20">
                        Project Management
                    </h1>

                    <p className="text-[18px] font-light w-2xl h-22.5 tracking-tight">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos from the app and save them to a note.
                    </p>

                    <Button />

                    </div>

                    <div className="bg-[#C4DEFD] w-187 h-136.75" />

                </div>
                

                <div className="flex flex-col lg:flex-row md:flex-row mt-50">

                    <div className=" w-177.5 h-165.25 p-8">
                        <img src={image} alt="" />
                    </div>

                    <div className="text-black mt-55 ">
                    <h1 className="text-[72px] font-bold w-167.5 h-21.75 mb-10">
                        Work together
                    </h1>

                    <p className="text-[18px] font-light w-167.5 h-15 tracking-tight mb-10">
                        With Whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>

                    <Button />

                    </div>


                </div>
                


            </div>

        </section>
    )
}

export default WorkManagement 