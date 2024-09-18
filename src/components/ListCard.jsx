import React, { useState } from "react";
import code from "../images/code.jpg";
import deleteImg from "../images/delete-img.png";
import { api_base_url } from "../helper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ListCard = ({item}) => {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);
  const navigate = useNavigate()
  const deleteProject = (id) =>{
    fetch(`${api_base_url}/deleteProject`,{
      mode:"cors",
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        projId: id,
        userId: localStorage.getItem("userId")
      })
    }).then(res=>res.json()).then(data=>{
      if(data.success){
        setIsDeleteModelShow(false)
        toast.success("Project deleted successfully")
      }else{
        toast.error(data.message)
        setIsDeleteModelShow(false)
      }
    });

  }
 

  return (
    <div>
      <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer hover:bg-[#202020] rounded-lg">
        <div onClick={()=> {navigate(`/editor/${item._id}`)}} className="flex items-center gap-2">
          <img src={code} className="w-[80px]" alt="" />
          <div>
            <h3 className="text-[20px]">{item.title}</h3>
            <p className="text-[gray] text-[14px]">Created on {new Date(item.date).toDateString()}</p>
          </div>
        </div>
        <div>
          <img
            src={deleteImg}
            onClick={() => {
              setIsDeleteModelShow(true);
            }}
            className="w-[30px] cursor-pointer mr-4"
            alt=""
          />
        </div>
      </div>

      {isDeleteModelShow ? (
        <>
          <div className="model fixed top-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col">
            <div className="mainModel w-[30vw] h-[30vh] bg-[#141414] rounded-lg p-[10px]">
              <h3 className="text-3xl">
                Do you want to delete <br /> this project{" "}
              </h3>
              <div className="flex w-full mt-5 items-center gap-[10px]">
                <button onClick={()=> {deleteProject(item._id)}} className="p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]">
                  Delete
                </button>
                <button
                  onClick={() => {
                    setIsDeleteModelShow(false);
                  }}
                  className="p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ListCard;
