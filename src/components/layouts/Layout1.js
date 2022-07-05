import React from "react";

export default function Layout1() {
  return (
    <div className="mx-14 text-sm leading-7">
      {/* general information */}
      <div className=" text-[#a5a5a5] p-5 ">
        <h2 className="text-[#ffffff] font-semibold text-xl pb-5">
          General Information
        </h2>
        <div className="flex space-x-5 items-center ">
          <img src="name.webp" alt="" className="w-4 h-4" />
          <p>
            Name: <span className="text-[#ffffff]">Justin Bieber</span>
          </p>
        </div>
        <p className="px-9">
          Location: <span className="text-[#ffffff]">London UK</span>
        </p>
        <div className="flex space-x-5 items-center ">
          <img src="mail.webp" alt="" className="w-4 h-4" />
          <p>contactme@templatename.com</p>
        </div>
        <div className="flex space-x-5 items-center ">
          <img src="telephone.webp" alt="" className="w-4 h-4" />
          <p>+76 6524 567862 763</p>
        </div>
        <div className="flex space-x-5 items-center ">
          <img src="site.webp" alt="" className="w-4 h-4" />
          <p>www.mytemplatename.com</p>
        </div>
        {/* reseaux sociaux */}
        <div className="space-x-6 pl-7 pt-2 text-lg">
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
