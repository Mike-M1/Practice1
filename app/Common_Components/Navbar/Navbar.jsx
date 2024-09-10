"use client"

import "./Navbar.css"
import Link from "next/link"
import Image from "next/image"
import { useLayoutEffect, useState } from "react"
import useScreenWidth from "./Hooks/useScreenWidth"
import MobileNavbar from "./Sizes/Mobile/MobileNavbar"
import TabletNavbar from "./Sizes/Tablet/TabletNavbar"
import DesktopNavbar from "./Sizes/DesktopLaptop/DesktopNavbar"

export default function Navbar () {

    const screenWidth = useScreenWidth()

    const MOBILE_BREAKPOINT = 768;
    const TABLET_BREAKPOINT = 1024;
    const isMobile = screenWidth <= MOBILE_BREAKPOINT;
    const isTablet = screenWidth > MOBILE_BREAKPOINT+1 && screenWidth <= TABLET_BREAKPOINT;
    const isDesktop = screenWidth > TABLET_BREAKPOINT;




    // if (isMobile) {
    //     return <MobileNavbar />;
    // } else if (isTablet) {
    //     return <TabletNavbar />;
    // } else {
    //     return <DesktopNavbar />;
    // }

    return (
        <>
        {screenWidth <= 480 ? <MobileNavbar /> : screenWidth >= 481 && screenWidth <= 768 ? <TabletNavbar /> : <DesktopNavbar />}
        </>
    )

    }