import React from 'react'
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Header = () => {
  return (

<div className="flex bg-black h-[46px] w-[1438] items-center px-[16px] relative">
    <div className='absolute flex items-center left-4 sm:static sm:w-auto space-x-[16px] h-[46px] w-[415] text-white text-[14px]'>
      <div className="h-[44px] w-[145] flex items-center">(225) 555-0118</div><div className="flex items-center h-[46px] w-[260]">michelle.rivera@example.com</div>
    </div>
      <div className="absolute left-1/2  transform -translate-x-1/2 flex items-center text-sm text-center px-2 sm:px-4 space-x-[8px] text-white text-[14px]">
        <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</div>
        <button className="underline hover:no-underline ">Shop Now</button>
      </div>

     
      <div className="flex items-center w-[233px] h-[46px] ml-auto  text-sm space-x-2 sm:static text-white">
        <div className="w-[83px] h-[24px]">Follow Us  </div>
        <Instagram size={20} className="cursor-pointer hover:text-gray-400" />
        <Facebook size={20} className="cursor-pointer hover:text-gray-400" />
        <Twitter size={20} className="cursor-pointer hover:text-gray-400" />
        <Youtube size={20} className="cursor-pointer hover:text-gray-400" /></div>
    </div>
  );
};

export default Header