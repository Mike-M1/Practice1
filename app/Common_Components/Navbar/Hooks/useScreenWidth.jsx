import {useState, useLayoutEffect} from "react"

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    useLayoutEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)

        handleResize()
        
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return screenWidth;
}

export default useScreenWidth;
