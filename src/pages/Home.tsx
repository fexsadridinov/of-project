import React from "react";
import InfoSection from "../sections/InfoSection";
import Button from "../components/Button";


const Home: React.FC = () => {
    return (
        <main>
            <section className="min-h-screen w-full flex flex-col realtive">
                <div className="w-full mx-auto flex flex-col sm:pt-45 pt-55 c-space gap-3">
                   <p className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-red-800 text-center">
                      Welcome to Muse
                 </p>
                 <p className="text-center xl:text-4xl md:text-3xl sm:text-xl font-thin text-2xl">
                        your premium content management agency!
                 </p>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-10 c-space">
                        <a href="#info" className="w-fit">
                            <Button name="Why us?" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                        </a>
                    </div>
                 </div>
            </section>
            <InfoSection />
        </main>
    );
}

export default Home;