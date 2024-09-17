import React from "react";
import logo from "../images/logo-ide.png";
import {FiDownload} from 'react-icons/fi'

const EditorNavbar = () => {
  return (
    <div className="EditorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
    <div className="logo">
      <img src={logo} className="w-[150px] cursor-pointer" alt="" />
    </div>
   <p>File / <span className="text-[gray]">My first project</span></p>
   <i className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]"><FiDownload/></i>
  </div>
  )
}

export default EditorNavbar