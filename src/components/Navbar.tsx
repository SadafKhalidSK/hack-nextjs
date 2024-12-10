

import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart } from 'lucide-react';

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
        <Link href="/About" className="text-gray-600">About</Link>
        <Link href="/Blog" className="text-gray-600">Blog</Link>
        <Link href="/Contact" className="text-gray-600">Contact</Link>
        <Link href="/Pages" className="text-gray-600">Pages</Link>
      </div>

      {/* Login/Register Section (Right Corner) */}
      <div className="text-blue-200 text-[14px] text-sm hover:text-blue-600 cursor-pointer ml-auto mr-4">
        Login / Register
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        {/* Search Icon */}
        <Search size={20} color="blue" className="cursor-pointer hover:text-blue-500" />
        
        {/* Cart Icon */}
        <ShoppingCart size={20} color="blue" className="cursor-pointer hover:text-blue-500" />
        <Heart size={20} color="blue" className="cursor-pointer hover:text-blue-500" />
        


      </div>
    </div>
  );
}

