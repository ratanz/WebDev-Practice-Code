"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";


export default function Home() {

  const [count, setCount] = useState(0)
  console.log("this is home page")
  return (
    <div>
      <Navbar/>
      this is a component 
      {/* {count} */}
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
