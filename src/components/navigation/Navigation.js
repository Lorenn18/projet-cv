import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const items = [
    {
      name: "Home",
      slug: "/",
      id: 1,
    },
    {
      name: "Skills",
      slug: "/skills",
      id: 2,
    },
    {
      name: "Services",
      slug: "/services",
      id: 3,
    },
    {
      name: "Portfolio",
      slug: "/portfolio",
      id: 4,
    },
    {
      name: "Testimonials",
      slug: "/testimonials",
      id: 5,
    },
    {
      name: "Contact",
      slug: "/contact",
      id: 6,
    },
  ];

  return (
    <nav>
      <div className="flex">
        <div className="">
          <h2 className="text-3xl font-bold p-3">
            Smith<span className="text-indigo-400">.</span>CV
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="bg-[#100f3a] flex space-x-5 text-white  divide-x  leading-[2.6] m-3 px-4">
            {items.map((item) => (
              <Link to={item.slug} key={item.id}>
                <li className="pl-3">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
