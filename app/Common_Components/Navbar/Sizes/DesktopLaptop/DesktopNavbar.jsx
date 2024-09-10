"use client"

import Link from "next/link"
import Image from "next/image"

export default function DesktopNavbar() {
    return (
        <nav id="navbar" className="items-center justify-between px-[20px] py-[10px] bg-white h-fit">
            
            <div className="text-black">
                
                <Link href="/Routes/Home">
                <Image width={100} height={100} className="rounded-[50%] border-black border-[2px] p-[5px]" src="/24Life.jpeg"/>
                </Link>
                
                
            </div>

            <div className="flex flex-row mt-[5px]">

                <div className="btn mr-[20px]">
                    <Link href="/Routes/Credentials" className="font-heading">
                        Sign Up or Log In
                    </Link>
                   
                </div>

                <div className="btn mr-[20px] ">
                    <Link href="/Routes/Services" className="font-heading">
                        Services
                    </Link>
                </div>

                <div className="btn">
                    <Link href="/Routes/Trainers" className="font-heading">
                        Trainers
                    </Link>
                </div>

            </div>

        </nav>
    )  
}
    