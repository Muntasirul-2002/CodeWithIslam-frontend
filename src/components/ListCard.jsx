import React from "react";
import code from "../images/code.jpg";
import deleteImg from '../images/delete-img.png'
const ListCard = () => {
  return (
    <div>
      <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer hover:bg-[#202020] rounded-lg">
        <div className="flex items-center gap-2">
          <img src={code} className="w-[80px]" alt="" />
          <div>
            <h3 className="text-[20px]">My first project</h3>
            <p className="text-[gray] text-[14px]">Created in 9 mon 2024</p>
          </div>
        </div>
        <div>
            <img src={deleteImg} className="w-[30px] cursor-pointer mr-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
