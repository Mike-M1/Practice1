"use client"

import Navbar from "@/app/Common_Components/Navbar/Navbar"
import { useState } from "react"
import Link from "next/link"
import "./Credentials.css"

const Credentials = () => {

    let [sign_in, useSign_In] = useState(false)

    const formcheck = (e) => {
       if(e.target.innerText == "Sign Up"){
        useSign_In(true)
       }else if (e.target.innerText == "Log In") {
        useSign_In(false)
       }
       
        
    }

    const css_stuff = "bg-gray-500"

    return (
        < div className="h-screen">
            <Navbar/>
            <div className="h-full w-full text-white bg-black flex flex-col items-center justify-center" id="container1">
                
                <div id="register_card" className="h-fit w-fit p-[30px] bg-white">

                    <div className="flex flex row items-center justify-center mb-[20px]" id="optionbtns">
                         
                                <button className={`rounded-[20%] mr-[20px] text-white p-[10px] font-body ${sign_in == false ? css_stuff : 'bg-black'}`} onClick={formcheck}>
                               
                                Log In

                            </button>
                                
                            

                            <button className={`rounded-[20%]  text-white p-[10px]  ${sign_in == true ? 'bg-gray-500' : 'bg-black'}`} onClick={formcheck}>
                                Sign Up
                            </button>
                        
                    </div>

                    <div id="options" className="w-[50vw] h-fit">

                        {sign_in ?
                            <div id="sign_up" className=" bg-black text-white">

                                <div id="inputs" className="">

                                    <div>
                                        <label htmlFor="">Name</label>
                                        <input type="text" />
                                    </div>

                                    <div>
                                        <label htmlFor="">Email</label>
                                        <input type="text" />
                                    </div>

                                    <div>
                                        <label htmlFor="">Password</label>
                                        <input type="text" />
                                    </div>

                                    <div>
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="text" />
                                    </div>

                                </div>

                                <div id="btns" className="mt-[20px] flex flex-col items-center">

                                    <div>
                                        <Link href="/Routes/User">
                                            <button>
                                                Sign Up
                                            </button>
                                        </Link>
                                        

                                        <h5> Forgot Password</h5>


                                    </div>

                                    <button>
                                        Sign Up With Google
                                    </button>


                                </div>


                               


                            </div>
                        :
                            <div id="log_in" className="bg-black text-white ">
                                 <div id="inputs" className="">

                                    <div>
                                        <label htmlFor="">Email</label>
                                        <input type="text" />
                                    </div>

                                    <div>
                                        <label htmlFor="">Password</label>
                                        <input type="text" />
                                    </div>

                                    </div>

                                    <div id="btns" className="mt-[20px] flex flex-col items-center">

                                    <div>

                                        <Link href="/Routes/User">
                                            <button>
                                                Log In
                                            </button>
                                        </Link>
                                       

                                        <h5> Forgot Password</h5>


                                    </div>

                                    <button>
                                        Log In With Google
                                    </button>


                                    </div>



                            </div>
                        }
                          
                    </div>
                    
                </div>

            </div>

        </div>
        
    )
}

export default Credentials