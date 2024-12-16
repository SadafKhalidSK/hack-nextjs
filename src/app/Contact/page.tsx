

import React from "react";
import Navbar2 from "@/components/Navbar2";
import { Instagram,  Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />

      {/* Header Section */}
      <div className="mx-auto flex flex-col md:flex-row items-center w-full max-w-[1050px] min-h-[742px] gap-8 px-4 py-8">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-2/3 gap-6 p-4 text-center md:text-left">
          <h1 className="text-sm md:text-base font-bold text-[#252B42]">CONTACT US</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[#252B42]">Get in touch today!</h2>
          <p className="text-base md:text-lg font-medium text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </p>
          <p className="text-lg">Phone: +451 215 215</p>
          <p className="text-lg">Fax: +451 215 215</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Twitter className="cursor-pointer hover:text-gray-400" />
            <Facebook className="cursor-pointer hover:text-gray-400" />
            <Instagram className="cursor-pointer hover:text-gray-400" />
            <Linkedin className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3">
          <Image
            src="/images/last.png"
            alt="Contact Us"
            width={571}
            height={826}
            className="object-cover w-full rounded-lg"
          />
        </div>
      </div>

      {/* Office Section */}
      <div className="w-full bg-gray-100 py-10">
        <div className="mx-auto max-w-[1050px] flex flex-col items-center space-y-10 px-4">
          <div className="text-center">
            <h3 className="text-sm text-[#252B42]">VISIT OUR OFFICE</h3>
            <h4 className="text-2xl md:text-4xl font-bold">
              We help small businesses with big ideas
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[985px]">
            {/* Contact Card */}
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <Phone size={32} className="text-blue-500 mb-4" />
              <p className="text-center text-sm">georgia.young@example.com</p>
              <p className="text-center text-sm">georgia.young@ple.com</p>
              <h5 className="text-center text-lg font-bold mt-2">Get Support</h5>
              <button className="w-[189px] h-[54px] border-2 border-[#23A6F0] bg-white text-[#23A6F0] font-bold rounded mt-4">
                Submit Request
              </button>
            </div>

            {/* Map Pin Card */}
            <div className="flex flex-col items-center bg-[#252B42] text-white p-6 shadow-lg rounded-lg">
              <MapPin size={32} className="text-blue-500 mb-4" />
              <p className="text-center text-sm">123 Business St, City</p>
              <p className="text-center text-sm">State, 56789</p>
              <h5 className="text-center text-lg font-bold mt-2">Visit Us</h5>
              <button className="w-[189px] h-[54px] border-2 border-white bg-white text-[#252B42] font-bold rounded mt-4">
                Get Directions
              </button>
            </div>

            {/* Email Card */}
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <Mail size={32} className="text-blue-500 mb-4" />
              <p className="text-center text-sm">georgia.young@example.com</p>
              <p className="text-center text-sm">georgia.young@ple.com</p>
              <h5 className="text-center text-lg font-bold mt-2">Email Us</h5>
              <button className="w-[189px] h-[54px] border-2 border-[#23A6F0] bg-white text-[#23A6F0] font-bold rounded mt-4">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full py-10 bg-gray-50">
        <div className="max-w-[1050px] mx-auto text-center px-4">
          <h5 className="text-lg font-bold">WE CANT WAIT TO MEET YOU</h5>
          <h2 className="text-3xl md:text-5xl text-[#252B42] mt-4">Let’s Talk</h2>
          <button className="w-[189px] h-[54px] mt-6 border-4 border-[#23A6F0] bg-[#23A6F0] text-white font-bold rounded">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
