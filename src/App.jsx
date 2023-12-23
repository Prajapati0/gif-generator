import React from "react";
import Tag from "./components/Tag"
import Random from "./components/Random"

export default function App() {
  return (
    <div className="relative w-full  flex flex-col background items-center ">
     <h1 className="bg-white rounded-md w-11/12 text-center mt-[40px]
     ml-[15px] px-10 py-2 text-2xl font-bold">
      Random Gif's</h1>
     <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] mb-[30px]">
      <Random/>
      <Tag/>
      </div> 
    </div> 
  );
}
