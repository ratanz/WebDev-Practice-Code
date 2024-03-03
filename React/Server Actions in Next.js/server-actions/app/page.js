"use client"
import Image from "next/image";
import { submitAction } from "@/actions/form";
import { useRef } from "react";


export default function Home() {
 let ref = useRef();

  return (
    <div className=" w-2/3 mx-auto text-center my-12">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name : </label>
          <input name="name" id="name" type="text" className="text-white m-3" />
        </div>

        <div>
          <label htmlFor="add">Address : </label>
          <input name="add" id="add" type="text" className="text-white m-3" />
        </div>
        <div>
          <button className=" bg-gray-600 font-bold rounded-lg p-2 border-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
