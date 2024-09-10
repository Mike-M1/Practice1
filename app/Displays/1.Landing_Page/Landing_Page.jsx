"use client"

import Navbar from "@/app/Common_Components/Navbar/Navbar"
import Image from "next/image"
import {useRef, useState, useEffect} from "react"
import "./Landing_Page.css"
import Hero_Section from "./Sections/HeroSection/HeroSection"
import ConvinceSection from "./Sections/ConvinceSection/ConvinceSection"
import ContextSection from "./Sections/ContextSection/ContextSection"
import CallToAction from "./Sections/CallToActionSection/CallToAction"
import Chevron from "./Components/Chevron"

export default function Landing_Page () {
    const Context1 = useRef(null)
    const Convince1 = useRef(null)
    const CTA1 = useRef(null)

    const [hover, useHover] = useState(false)

    const HoverFunction = () => {
        useHover(true)
    }

    const LeaveFunction = () => {
        useHover(false) 
    }

    const Chevron1 = () => {
        if (Context1.current) {
            Context1.current.scrollIntoView({behavior: 'smooth', block: "center"});
        }
    }

    const Chevron2 = () => {
        if (Convince1.current) {
            Convince1.current.scrollIntoView({behavior: 'smooth', block: "center"});
        }
    }

    const Chevron3 = () => {
        if (CTA1.current) {
            CTA1.current.scrollIntoView({behavior: "smooth", block: "center"});
        }
    }

    const testimonials = [
        { id: 1, image: "/context/brain.png", name: "John Doe", text: "This program changed my life! I've never felt stronger or more confident." },
        { id: 2, image: "/context/clock.jpg", name: "Jane Smith", text: "I've never felt better! The personalized approach really made a difference." },
        { id: 3, image: "/context/confident.jpg", name: "Mike Johnson", text: "Incredible results in just weeks! The coaches here are truly exceptional." },
        // Add more testimonials as needed
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const changeTestimonial = (direction) => {
        if (direction === "next") {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        } else {
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    return (
        <div className="h-full w-full">



        
        <div className="h-full max-w-[1200px] mx-auto ">
            <Navbar/>
            
            <Hero_Section/>

            <Chevron/>

            {/* <ContextSection/> */}

            <div id="director" className="h-[10vh] flex flex-row justify-center items-center bg-white">
                <Image 
                    onClick={Chevron2} 
                    src="/Chevron3.png" 
                    width={50} 
                    height={100} 
                    alt="Chevron" 
                    className="h-[10vh] w-auto bg-white border-black border-2 rounded-[50%] p-[7px]"
                />
            </div>
            
            <section id="Convince" ref={Convince1} className="bg-white h-[80vh] text-white flex">
                <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center relative p-8">
                    <div className="text-black text-center">
                        <div className="mb-4 relative w-48 h-48 mx-auto">
                            <Image 
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{testimonials[currentTestimonial].name}</h3>
                        <p className="text-lg">{testimonials[currentTestimonial].text}</p>
                    </div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <button onClick={() => changeTestimonial("prev")} className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors">
                            &lt;
                        </button>
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <button onClick={() => changeTestimonial("next")} className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors">
                            &gt;
                        </button>
                    </div>
                </div>
                <div className="w-1/2 bg-white flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us?</h2>
                    <ul className="text-black list-disc pl-6">
                        <li>Personalized training programs</li>
                        <li>Expert coaches</li>
                        <li>State-of-the-art facilities</li>
                        <li>Proven results</li>
                    </ul>
                </div>
            </section>
            <div id="director"  className="h-[10vh] flex flex-row justify-center items-center bg-white">
                <Image 
                    onClick={Chevron3} 
                    src="/Chevron3.png" 
                    width={50} 
                    height={100} 
                    alt="Chevron" 
                    className="h-[10vh] w-auto bg-white border-black border-2 rounded-[50%] p-[7px]"
                />
            </div>
            
            <section id="Sell"  ref={CTA1} className="bg-white h-[90vh] text-white w-full">
                <div id="container" className="flex flex-row h-full w-full items-center justify-around">
                    <div className="bg-white w-[40%] h-fit p-[30px] text-black flex flex-col items-center justify-around rounded-[20px] border-black border-2">
                        
                            <h1>Join The Team</h1>
                            <div className="flex flex-col items-center justify-around">
                                <div>
                                    <label htmlFor="">Name</label>
                                    <input type="text" className="border-black border-[2px]" />
                                </div> 
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="border-black border-[2px]" />
                                </div>
                                <div className="mt-[20px]">
                                    <button className="border-black border-2 p-[10px] rounded-2xl">
                                        Let's Get it!
                                    </button>
                                </div>
                            </div>
                            
                            
                    </div>
                </div>
            </section>
        </div>

        </div>
        
    )
}