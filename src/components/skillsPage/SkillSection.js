import React from "react";
import SkillProgress from "./SkillProgress";

export default function SkillSection() {
  return (
    <div className="pt-14 pl-16">
      <h2 className="text-[#7a798c] leading-3">Ce que je fais bien</h2>
      <h1 className="text-7xl text-[#100f3a] font-black">Mes Compétences</h1>
      <div className="text-[#7a798c] text-sm pt-60 w-4/5 ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ducimus
          adipisci inventore asperiores illum iusto nihil ex quaerat cupiditate
          molestiae aliquam sint alias perspiciatis animi quae eaque amet
          dolorem magnam veniam officiis, iure debitis? Quam.
        </p>
      </div>
      <SkillProgress/>
    </div>
  );
}
