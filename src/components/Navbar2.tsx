

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex bg-white px-4 h-[46px] items-center w-full max-w-screen-xl mx-auto relative">

      {/* Brand Name */}
      <div className="text-red-700 text-xl font-semibold">
        Bandage
      </div>

      {/* Navigation Links (Centered) */}
      <div className="flex flex-grow justify-center items-center space-x-8 font-bold text-[14px]">
        <Link href="/Home" className="text-gray-600 ">Home</Link>
        <Link href="/About" className="text-gray-600">Product</Link>
        <Link href="/Blog" className="text-gray-600">Pricing</Link>
        <Link href="/Contact" className="text-gray-600">Contact</Link>
      </div>

      {/* Login/Register Section (Right Corner) */}
      <div className=' flex items-center justify-center w-[300px] h-[52px]'>
      <div className="mx-auto text-blue-400 font-bold text-[14px] text-[14px]  w-[41px] h-[22px] hover:text-blue-600 cursor-pointer ">
        Login
      </div>
      <div className="flex items-center w-[214px] h-[52px] space-x-6 ml-auto "><button className=' w-[214px] h-[52px] bg-[#23A6F0]
 text-white'>Become a member      </button>
   
        </div>


      </div>
    </div>
  );
}

