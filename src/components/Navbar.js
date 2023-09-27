import React, { useState } from "react";
import { Link } from "react-scroll";
import img from "../images/logo.png"

export default function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" w-full fixed top-0 left-0 bg-black border-1 border-b border-gray-600 z-[90]">
        <div className="md:flex items-center justify-between bg-black  py-4 md:px-10 px-7">
          <img
            src={img}
            className="cursor-pointer h-[50px] w-[65px] lg:h-[60px] lg:w-[75px]"
            alt="Logo"
          />

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden bg-white "
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center cursor-pointer bg-black text-white text-center  md:pb-0 pb-12 absolute md:static md:z-[auto] z-[-1]
  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  duration-500 ease-in ${
    open ? "top-20 text-start" : "top-[-490px] "
  } ` }
          >
            <li className="text-xl  md:ml-8 md:my-0 my-7 hover:text-[#d3ad7f] md:hover:border-b-2 border-[#d3ad7f] duration-[.5s] transition-[.2s linear]">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="text-xl  md:ml-8  md:my-0 my-7 hover:text-[#d3ad7f] md:hover:border-b-2 border-[#d3ad7f] duration-[.5s] transition-[.2s linear] ">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="text-xl md:ml-8  md:my-0 my-7 hover:text-[#d3ad7f] md:hover:border-b-2 border-[#d3ad7f] duration-[.5s] transition-[.2s linear]">
              <Link to="menu" smooth={true} duration={500}>
                Menu
              </Link>
            </li>
            <li className="text-xl  md:ml-8 md:my-0 my-7 hover:text-[#d3ad7f] md:hover:border-b-2 border-[#d3ad7f] duration-[.5s] transition-[.2s linear]">
              <Link to="products" smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li className="text-xl  md:ml-8  md:my-0 my-7 hover:text-[#d3ad7f] md:hover:border-b-2 border-[#d3ad7f] duration-[.5s] transition-[.2s linear]">
              <Link to="review" smooth={true} duration={500}>
                Review
              </Link>
            </li>
            <li className="text-xl  md:ml-8  md:my-0 my-7 hover:text-[#d3ad7f] md:hover:border-b-2 border-[#d3ad7f] duration-[.5s] transition-[.2s linear]">
              <Link to="contact" className="  " smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li className="text-xl md:ml-8  md:my-0 my-7 hover:text-[#d3ad7f] md:hover:border-b-2 border-[#d3ad7f] duration-[.5s] transition-[.2s linear] ">
              <Link to="blog" smooth={true} duration={500}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
