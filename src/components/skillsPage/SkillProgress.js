import React from "react";

export default function SkillProgress() {
  return (
    <div className="md:flex md:space-x-10 pt-16 pb-5">
      <div>
        {/* progress html */}

        <div className="w-[250px] pt-10 ">
          <div className="flex justify-between ">
            <p>HTMLS</p>
            <p>70%</p>
          </div>
          <div className="w-full bg-white h-2 rounded-xl">
            <div className=" h-2 w-[70%] rounded-xl bg-gradient-to-r from-cyan-400 to-blue-700"></div>
          </div>
        </div>
        {/* progress react */}

        <div className="w-[250px] pt-10 ">
          <div className="flex justify-between ">
            <p>React</p>
            <p>100%</p>
          </div>
          <div className="w-full bg-white h-2 rounded-xl">
            <div className=" h-2 w-[100%] rounded-xl bg-gradient-to-r from-green-300 to-orange-500"></div>
          </div>
        </div>
      </div>
      <div>
        {/* progress CSS */}

        <div className="w-[250px] pt-10 ">
          <div className="flex justify-between ">
            <p>CSS</p>
            <p>60%</p>
          </div>
          <div className="w-full bg-white h-2 rounded-xl">
            <div className=" h-2 w-[60%] rounded-xl bg-gradient-to-r from-red-600 to-secondary"></div>
          </div>
        </div>
        {/* progress WordPress */}

        <div className="w-[250px] pt-10 ">
          <div className="flex justify-between ">
            <p>WordPress</p>
            <p>90%</p>
          </div>
          <div className="w-full bg-white h-2 rounded-xl">
            <div className=" h-2 w-[70%] rounded-xl bg-gradient-to-r from-lime-400 to-blue-700"></div>
          </div>
        </div>
      </div>
      <div>
        {/* progress JS */}

        <div className="w-[250px] pt-10 ">
          <div className="flex justify-between ">
            <p>JavaScript</p>
            <p>75%</p>
          </div>
          <div className="w-full bg-white h-2 rounded-xl">
            <div className=" h-2 w-[75%] rounded-xl bg-gradient-to-r from-blue-800 to-secondary"></div>
          </div>
        </div>
        {/* progress PHP/Laravel */}

        <div className="w-[250px] pt-10 ">
          <div className="flex justify-between ">
            <p>PHP/Laravel</p>
            <p>100%</p>
          </div>
          <div className="w-full bg-white h-2 rounded-xl">
            <div className=" h-2 w-[100%] rounded-xl bg-gradient-to-r from-pink-600 to-orange-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
