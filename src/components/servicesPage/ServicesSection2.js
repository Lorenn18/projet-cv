import React from "react";
import ServicesCard1 from "./ServicesCard1";

export default function ServicesSection2() {
  return (
    <div className="pt-14 pl-16">
      <h2 className="text-[#7a798c] leading-3">Ce que je vous offre</h2>
      <h1 className="text-7xl text-[#100f3a] font-black">Mes Services</h1>
      <div className="flex items-centerl text-sm space-x-3 w-[90%] pt-36">
        <ServicesCard1
          img="alarme.webp"
          title="Développement de site web"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione tempore mollitia accusantium cumque dolorem, nostrum dolore ex maxime ea, voluptatibus cum aut? Nemo, quod!"
        />
        <ServicesCard1
          img="maintenance.webp"
          title=" Maintenance"
          description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          voluptate expedita voluptatem minus omnis adipisci sint molestias
          corporis, repudiandae deserunt impedit a in facilis quibusdam,
          consequatur recusandae, sunt magni natus."
        />
        <ServicesCard1
          img="seo.webp"
          title=" Référencement (SEO)"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione tempore mollitia accusantium cumque!"
        />
      </div>
      <div className="pt-16">
        <button className="bg-[#8583e1] px-3 py-1 text-[#ffffff]">
          Contactez-moi
        </button>
      </div>
    </div>
  );
}
