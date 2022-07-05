import React from "react";
import ServicesCard1 from "./ServicesCard1";

export default function ServicesSection2() {
  return (
    <div className="pt-14 pl-16">
      <h2 className="text-[#7a798c]">Ce que je vous offre</h2>
      <h1 className="text-7xl text-[#100f3a] font-bold">Mes Services</h1>
      <div className="flex items-center text-sm space-x-3">
        <ServicesCard1/>
        <div className="w-96 flex space-x-5">
          <div className="">
            <img src="alarme.webp" alt="" className="w-[200px]" />
          </div>
          <div className="">
            <h3 className="text-xl text-[#100f3a] font-semibold pb-2">
              Développement de site web
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto voluptate expedita voluptatem minus omnis adipisci sint
              molestias corporis, repudiandae deserunt impedit a in facilis
              quibusdam, consequatur recusandae, sunt magni natus.
            </p>
          </div>
        </div>
        <div className="w-96 flex space-x-5">
          <div className="">
            <img src="alarme.webp" alt="" className="w-[200px]" />
          </div>
          <div className="">
            <h3 className="text-xl text-[#100f3a] font-semibold pb-2">
              Développement de site web
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto voluptate expedita voluptatem minus omnis adipisci sint
              molestias corporis, repudiandae deserunt impedit a in facilis
              quibusdam, consequatur recusandae, sunt magni natus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
