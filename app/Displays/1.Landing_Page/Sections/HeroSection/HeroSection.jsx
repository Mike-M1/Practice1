"use client"

import Image from "next/image"
import "./HeroSection.css"

export default function Hero_Section_Comp () {
    
    return (
        <section id="hero">
                
                <div id="left">

                    <div id="img" >
                        <Image src="/24Life.jpeg" id="NextImg" layout="responsive" width={1} height={1}/>
                    </div>
                    

                    <div id="text" className="">

                       <h1 className=" font-heading whitespace-nowrap text-ellipsis w-full">Where You Become</h1>
                       <h1 className=" font-heading whitespace-nowrap text-ellipsis w-full">The Best</h1> 
                       <h1 className="font-heading whitespace-nowrap overflow-hidden text-ellipsis w-full">"YOU"</h1>

                    </div>

                </div>

                <div id="right" >

                    <video id="vid" controls>
                            
                            <source src="/Gym_Video.mp4" type="video/mp4" />

                    </video>

                </div>
                
            </section>
    )
    
}
