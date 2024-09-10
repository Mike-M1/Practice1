"use client"

import Link from "next/link"
import Image from "next/image"
import "./Mobile.css"
import { useState } from "react"

export default function MobileNavbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        console.log("Menu Toggled")
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
        <div id="logo" className="text-black" onClick={toggleMenu}>
                
                <Link href="/Routes/Home">
                <Image width={50} height={50} className="rounded-[50%] border-black border-[2px] p-[5px]" src="/24Life.jpeg"/>
                </Link>
                
                
            </div>

        <nav onClick={toggleMenu} className={`${menuOpen ? 'open'  : ''} ${!menuOpen ? 'navbar'  : ''}` } >
            
            

            <div id="btnrow" className="flex flex-row">

                <div id="btn" className="btn mr-[20px]">
                    <Link href="/Routes/Credentials" className="font-heading">
                        Sign Up or Log In
                    </Link>
                   
                </div>

                <div id="btn" className="btn mr-[20px] ">
                    <Link href="/Routes/Services" className="font-heading">
                        Services
                    </Link>
                </div>

                <div id="btn" className="btn">
                    <Link href="/Routes/Trainers" className="font-heading">
                        Trainers
                    </Link>
                </div>

            </div>

        </nav>
        </div>
        
    )  
}
    