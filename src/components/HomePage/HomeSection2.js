import React from "react";
import HomeProgressbar from "./HomeProgressbar";
import HomeProgressbar2 from "./HomeProgressbar2";
import HomeProgressbar3 from "./HomeProgressbar3";
import HomeProgressbar4 from "./HomeProgressbar4";

export default function HomeSection2() {
  return (
    <div className="pt-14 md:pl-16 p-2">
      <div>
        <h2 className="text-[#7a798c]">Développeur full stack</h2>
        <h1
          className="text-3xl
         md:text-7xl text-[#100f3a] font-black"
        >
          Justin Bieber
        </h1>
      </div>
      <div className="pt-10 ">
        <h3 className="text-[#100f3a] font-bold">Description</h3>
        <p className="text-[#8d8b9b] py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum
          dolorum ducimus? Vel, molestias quis! Quasi odit debitis est quaerat
          ratione aliquid maiores, dicta nostrum aspernatur cupiditate ad
          accusamus a, vero hic impedit. Totam atque officiis nemo aliquid,
          repudiandae facilis, nulla expedita incidunt quaerat ut animi quos.
          Ratione maiores molestiae numquam quasi distinctio explicabo
          asperiores, amet quae laboriosam quidem ex accusantium odio dolorum
          quod officia nemo.
        </p>
      </div>
      <div className=" md:flex md:space-x-20 space-y-16 pt-10 pb-5 md:pb-2 md:space-y-0 pl-24 ">
        <HomeProgressbar />
        <HomeProgressbar2 />
        <HomeProgressbar3 />
        <HomeProgressbar4 />
      </div>
    </div>
  );
}
