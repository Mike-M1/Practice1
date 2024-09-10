"use client"

import Image from "next/image"

export default function Chevron () {

    return (
        <div id="director" className="h-[10vh] flex flex-row justify-center items-center bg-white">
                <Image 
                    src="/Chevron3.png" 
                    width={50} 
                    height={100} 
                    alt="Chevron" 
                    
                />
            </div>
    )
}

