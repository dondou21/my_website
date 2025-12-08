import Hero from "../components/Hero";
const Homepage = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-[70px] w-full h-[600px] md:h-[800px] bg-center bg-cover bg-fixed"
                 style={ {backgroundImage: "url('/images/self1.jpg')" } }
            >
                <div className=" grid justify-center bg-blue-800/55 w-full  ">
                    <h1 className="text-sm  mt-6 font-bold text-white bg-blue-800 p-4 ">
                        Welcome to my portofolio webside
                    </h1>

                    <p className=" pt-20 pb-20 text-white font-bold text-l">
                        “If you can imagine it, you can engineer it.”
                    </p>
                </div>
            </div>

            <Hero />
        </>
    )
}

export default Homepage;