"use client"

import Navbar from "@/app/Common_Components/Navbar/Navbar"
import { useEffect } from "react"
import "./User_Account.css"

const User_Account = () => {


    useEffect (() => {
        console.log("Made it")

    }, [])


    return (

        <div id="container" className="">
            <Navbar/>


            <div className="flex flex-col h-screen bg-black text-white">

                <div className="flex flex-col flex-grow justify-center items-center" >
                    Would You Like to Buy More Sessions?

                    <div className="w-[90vw] h-[40vh] bg-white m-auto relative flex flex-col items-start justify-start">
                        <div className="w-[400px] h-[100px] bg-black m-[20px]">

                        </div>
                        
                        <h1 className="text-black w-[600px] h-[50vh] bg-black m-[20px] ">Chart</h1>
                        <div  className="pulsing border-2 rounded-[50%] w-[100px] h-[100px] border-black text-black flex flex-col items-center justify-center absolute top-[0px] right-0"> 
                            <h1>
                                Click
                            </h1>

                            <h1>
                                To
                            </h1>

                            <h1>
                                Sign Up
                            </h1>
                        </div>

                    </div>

                    <div className="flex flex-col justify-around items-center  thisone w-[90vw] bg-white m-[30px] text-black">
                        This section will be their best improvements. Just showing that this experience was worth something
                    </div>

                </div>

            </div>
            

        </div>
        
    )
}

export default User_Account