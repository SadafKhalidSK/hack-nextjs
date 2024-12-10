import React from 'react'
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';


const Footer = () => {
  return (
    <div className='w-full h-[488px] '>
    <div className='flex w-full h-[142px]  bg-[#FAFAFA]
'>
    <div className=' mx-auto w-[1050px] h-[138px] '>
    <div className='flex justify-between mt-[60px] w-[1050px] h-[58px] '>
    <div className=' w-[236px] h-[58px]  text-[24px] font-bold'>Bandage</div>
    <div className=' flex justify-between w-[236px] h-[24px]'>
    <Instagram size={20} className="cursor-pointer hover:text-gray-400" />
        <Facebook size={20} className="cursor-pointer hover:text-gray-400" />
        <Twitter size={20} className="cursor-pointer hover:text-gray-400" />
    </div>

    </div>

    </div>

</div>
    <div className='w-full h-[272px] '>
    <div className='mx-auto w-[1050px] h-[270px] '>
    <div className='flex mx-auto w-[1041px] h-[170px] '>
    <div className='w-[148px] h-[170px] '>
    <div className='w-[115px] h-[24px] text-[16px] font-bold'>Company Info</div>
    <div className=' w-[97px] h-[126px] mt-[10px] '>
        <ul className='flex flex-col space-y-2'><li className='text-[14px]'>About Us</li>
        <li className='text-[14px]'>Carrier</li>
        <li className='text-[14px]'>We are hiring</li>
        <li className='text-[14px]'>Blog</li></ul>
    </div>
    
    </div>
    <div className='w-[148px] h-[170px] '>
    <div className='w-[115px] h-[24px] text-[16px] font-bold'>Legal</div>
    <div className=' w-[97px] h-[126px] mt-[10px] '>
        <ul className='flex flex-col space-y-2'><li className='text-[14px]'>About Us</li>
        <li className='text-[14px]'>Carrier</li>
        <li className='text-[14px]'>We are hiring</li>
        <li className='text-[14px]'>Blog</li></ul>
    </div>
    
    </div>

    <div className='w-[148px] h-[170px]'>
    <div className='w-[115px] h-[24px] text-[16px] font-bold'>Features</div>
    <div className=' w-[97px] h-[126px] mt-[10px] '>
        <ul className='flex flex-col space-y-2'><li className='text-[14px]'>About Us</li>
        <li className='text-[14px]'>Carrier</li>
        <li className='text-[14px]'>We are hiring</li>
        <li className='text-[14px]'>Blog</li></ul>
    </div>
    
    </div>

    <div className='w-[148px] h-[170px]'>
    <div className='w-[115px] h-[24px] text-[16px] font-bold'>Resources</div>
    <div className=' w-[97px] h-[126px] mt-[10px] '>
        <ul className='flex flex-col space-y-2'><li className='text-[14px]'>About Us</li>
        <li className='text-[14px]'>Carrier</li>
        <li className='text-[14px]'>We are hiring</li>
        <li className='text-[14px]'>Blog</li></ul>
    </div>
    </div>
    

    <div className='w-[321px] h-[131px] '>
    <div className='w-[103px] h-[24px] text-[16px] font-bold'>Get In Touch</div>
    <div className='w-[321px] h-[87px]  '>
    <div className="w-[321px] h-[58px]  flex items-center px-4 bg-gray-100 rounded-md">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-grow text-sm bg-transparent outline-none"
  />
  <button className="px-4 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700">
    Subscribe
  </button>
</div></div>
<div className='w-[155px] h-[28px] text-[12px]'>Lore imp sum dolor Amit</div>

    </div>

</div>

    
<div className='flex items-center justify-center w-full h-[74px] bg-[#FAFAFA]'>
  <div className='w-[1050px] h-[74px] text-[14px] mt-[30px] text-center'>
    Made With Love By Finland All Right Reserved
  </div>
      
    </div></div></div>
    </div>);
}

export default Footer
