import { useState, useEffect } from "react";

function MyComponent2() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () =>{
            window.removeEventListener("resize", handleResize)
            console.log("Event listener removed")
        }

    });

    useEffect(() =>{
        document.title = `Size : ${width} x ${height}`
    }, [width, height])

    window.addEventListener("resize", handleResize)
    console.log("Event listener added")

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (

        <>
            <p>window width : {width}</p>
            <p>window height : {height}</p>
        </>
    )
}

export default MyComponent2