import React from "react";
import logo from "../images/codewithislam.png";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { MdLightMode } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { toggleClass } from "../helper";
const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
      <div className="logo">
        <img src={logo} className="w-[150px] cursor-pointer" alt="" />
      </div>
      <div className="links flex items-center gap-4">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Developer Portfolio</Link>
        <Link>Service</Link>
        <Avatar
        onClick={()=> {toggleClass(".dropDownNavbar", "hidden")}}
          name="Muntasirul"
          size="30"
          round="50%"
          className="cursor-pointer ml-2"
        />
      </div>

      <div className="dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#1A1919] w-[150px] h-[160px]">
        <div className="py-[10px] border-b-[1px] border-b-[#fff]">
          <h3 className="text-[17px]" style={{ lineHeight: 1 }}>
            Muntasirul Islam
          </h3>
        </div>
        <i
          className="flex items-center gap-3 mt-2 mb-2"
          style={{ fontStyle: "normal" }}
        >
          <MdLightMode className="text-[20px]" /> Light Mode
        </i>
        <i
          className="flex items-center gap-3 mt-2 mb-2"
          style={{ fontStyle: "normal" }}
        >
          <BsGridFill className="text-[20px]" /> Grid Mode
        </i>
      </div>
    </div>
  );
};

export default Navbar;
