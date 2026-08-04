import Button, { Butt } from "../Button/Button";
import image from "../../assets/Work Together Image.png"



function WorkManagement() {
    return (
        <section className="bg-white h-auto lg:h-[1588px] w-full px-6 sm:px-10 md:px-20 lg:px-0">
            <div className="flex flex-col items-center mt-16 lg:mt-50">

                <div className="flex flex-col lg:flex-row md:flex-row items-center gap-10 lg:gap-0">
                    <div className="text-black text-center lg:text-left mt-0 lg:mt-20">
                    <h1 className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold w-full lg:w-2xl h-auto mb-6 lg:mb-20">
                        Project Management
                    </h1>

                    <p className="text-base sm:text-[18px] font-light w-full lg:w-2xl h-auto tracking-tight">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos from the app and save them to a note.
                    </p>

                    <div className="flex justify-center lg:justify-start mt-6 lg:mt-8">
                        <Button />
                    </div>

                    </div>

                    <div className="bg-[#C4DEFD] w-full max-w-187 h-56 sm:h-72 md:h-96 lg:w-187 lg:h-136.75" />

                </div>


                <div className="flex flex-col lg:flex-row md:flex-row items-center gap-10 lg:gap-0 mt-16 lg:mt-50">

                    <div className="w-full max-w-177.5 lg:w-177.5 lg:h-165.25 p-0 lg:p-8">
                        <img src={image} alt="" className="w-full h-auto" />
                    </div>

                    <div className="text-black text-center lg:text-left mt-0 lg:mt-55">
                    <h1 className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold w-full lg:w-167.5 h-auto mb-6 lg:mb-10">
                        Work together
                    </h1>

                    <p className="text-base sm:text-[18px] font-light w-full lg:w-167.5 h-auto tracking-tight mb-6 lg:mb-10">
                        With Whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>

                    <div className="flex justify-center lg:justify-start mb-10">
                        <Butt />
                    </div>

                    </div>


                </div>


            </div>

        </section>
    )
}

export default WorkManagement 