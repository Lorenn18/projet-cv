import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioSection2() {
  return (
    <div className="pt-14 pl-16">
      <h1 className="text-7xl text-[#100f3a] font-bold">Mon Portfolio</h1>
      <div className="py-10 pl-2">
        <Link to="/portfolio">
          <ul className="flex space-x-10 font-semibold">
            <li className=" text-[#100f3a]">Tous</li>
            <li className="text-[#8d8b9b]">React</li>
            <li className="text-[#8d8b9b]">Php / Laravel</li>
          </ul>
        </Link>
      </div>
      <div className="w-2/6 flex space-x-20">
        <img
          src="https://images.unsplash.com/photo-1651054558996-03455fe2702f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1654787193446-434ac0108426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
