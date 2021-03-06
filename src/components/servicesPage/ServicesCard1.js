import React from "react";

export default function ServicesCard1({ img, title, description }) {
  return (
    <div className="max-w-sm flex space-x-5 py-5 ">
      <div className="w-32">
        <img src={img} alt="" className="pt-2 md:w-[150px]" />
      </div>
      <div className="">
        <h3 className="text-lg md:text-xl text-[#100f3a] font-semibold pb-2">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
