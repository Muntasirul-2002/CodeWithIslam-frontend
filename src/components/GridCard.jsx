import React from 'react'
import codeImg from '../images/code.jpg'
import dltImg from '../images/delete-img.png'
const GridCard = () => {
  return (
    <div className='gridCard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50'>
        <img src={codeImg} className='w-[90px]' alt="" />
        <h3 className='text-[20px] w-[90%] line-clamp-1'>My first project</h3>
        <div className="flex items-center justify-between">
            <p className="text-[14px] text-[gray]">Created in 9 mon 2024</p>
            <img src={dltImg} className='w-[30px] cursor-pointer' alt="" />
        </div>
    </div>
  )
}

export default GridCard