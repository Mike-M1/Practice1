"use client"

import Image from "next/image"


export default function ContextSection () {
    return (
        
        <section id="Context"  className="bg-white h-[80vh] text-white">Context
        <div id="container" className="flex flex-col justify-center items-center ">
            <h1 className="text-black mb-[20px] font-heading">You Will Be the Best</h1>
            <div className="w-fit h-fit flex flex-row justify-center items-center relative">
                <div id="benefits" className="w-[125px] h-[450px] border-black border-2 mr-[5px]">
                    <div className="h-full w-full relative">
                        <Image src="/sprinter.webp" layout="intrinsic" sizes="100vw" width={500} height={500} />
                        <h1 className="text-black font-body">These images will be more vertical and of you holding a watch during exercise. Or even a video</h1>
                        <div id="bottomimg" className="absolute bottom-[0px] bg-green-400 h-[25%] w-full flex items-center justify-center" >
                            
                                <h1>Clock blurb</h1>
                                
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    <Image width={48} height={48} src="/icons/clock_icon.png" className="object-contain"/>
                                </div>
                            
                        </div>
                    </div>
                </div>

                <div id="benefits" className="w-[125px] h-[450px] border-black border-2 mr-[5px]">
                    <div className="h-full w-full relative">
                        <Image src="/kettlebell.webp" layout="intrinsic" sizes="100vw" width={500} height={500} />
                        <h1 className="text-black font-body">A picture of someone lifting </h1> 
                        <div id="bottomimg" className="absolute bottom-[0px] bg-green-400 h-[25%] w-full flex items-center justify-center" >
                            
                                <h1>Lifting blurb</h1>
                                
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    <Image width={36} height={36} src="/icons/lifting_icon.png" className="object-contain"/>
                                </div>
                            
                        </div>
                    </div>
                </div>

                <div id="benefits" className="w-[125px] h-[450px] border-black border-2 mr-[5px]">
                    <div className="h-full w-full relative">
                        <Image src="/runner1.jpg" layout="intrinsic" sizes="100vw" width={500} height={500} />
                        <h1 className="text-black font-body">A picture of someone out of breath </h1> 
                        <div id="bottomimg" className="absolute bottom-[0px] bg-green-400 h-[25%] w-full flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <Image width={48} height={48} src="/icons/breathing_icon.png" className="object-contain"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="benefits" className="w-[125px] h-[450px] border-black border-2 mr-[5px]">
                    <div className="h-full w-full relative">
                        <Image src="/squat-1.webp" layout="intrinsic" sizes="100vw" width={500} height={500} />
                        <h1 className="text-black font-body">A picture looking like someone concentrating </h1> 
                        <div id="bottomimg" className="absolute bottom-[0px] bg-green-400 h-[25%] w-full flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <Image width={48} height={48} src="/icons/concentration_icon.png" className="object-contain"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="benefits" className="w-[125px] h-[450px] border-black border-2">
                    <div className="h-full w-full relative">
                        <Image src="/lifter1.jpg" layout="intrinsic" sizes="100vw" width={500} height={500} />
                        <h1 className="text-black font-body"> A picture conveying confidence </h1> 
                        <div id="bottomimg" className="absolute bottom-[0px] bg-green-400 h-[25%] w-full flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <Image width={48} height={48} src="/icons/confident_icon.png" className="object-contain"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}