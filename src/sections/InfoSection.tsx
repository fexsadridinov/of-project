import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { myServices } from "@/constants/index.ts";

const serviceCount = myServices.length;

const InfoSection: React.FC = () => {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

    const handleNavigation = (direction: "previous" | "next") => {
        setSelectedServiceIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? serviceCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === serviceCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(
            ".animatedText",
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
        );
    }, [selectedServiceIndex]);

    const currentService = myServices[selectedServiceIndex];

    return (
        <section className="min-h-screen flex flex-col custom-scroll-mt" id="info">
            <div className="flex-grow relative flex items-center justify-center">
                {/* Heading positioned absolutely */}
                <h2 className="absolute md:top-50 md:left-25 sm:top-[30px] sm:left-[15px] text-left text-7xl md:text-6xl sm:text-3xl text-red-800">
                    Our Services
                </h2>
                {/* Grid container pushed down so it doesn't overlap the heading */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full max-w-6xl mx-auto p-8 md:p-4 mt-20">
                    {/* Left Side: Text and Navigation */}
                    <div className="flex flex-col gap-5 relative p-10 shadow-2xl bg-red-800 shadow-red-800">
                        <div className="absolute top-0 right-0">
                            <img
                                src={currentService.spotlight}
                                alt="spotlight"
                                className="w-full h-96 object-cover rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col gap-5 text-white relative z-10">
                            <p className="text-3xl font-semibold animatedText">
                                {currentService.title}
                            </p>
                            <p className="animatedText text-lg">{currentService.desc}</p>
                            <p className="animatedText text-lg">{currentService.subdesc}</p>
                        </div>
                        <div className="flex justify-between items-center mt-5 relative z-10">
                            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                                <img src="/assets/left-arrow.png" alt="left arrow" />
                            </button>
                            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    {/* Right Side: Service Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={currentService.image}
                            alt={currentService.title}
                            className="object-cover rounded-xl w-full h-full max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
