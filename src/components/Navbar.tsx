import React from 'react'


        
export default function Navbar() {
  return (
    <div>
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between item-center">
        <div className="text-red-700 text-xl font-semibold">

            NEXT_JS
            </div>
            <div className="flex space-x-12 font-bold text-lg">
<a href="/" className="text-white">Home</a>
<a href="/" className="text-white">About Us</a>

<a href="/product" className="text-white">product</a>

<a href="/" className="text-white">Service</a>
</div>
<div><button
  type="submit"
  className= "bg-white text-black px-4 py-1 rounded-lg font-bold">submit</button>
</div>

            </div>
      </nav>
    </div>
  );
}
 


