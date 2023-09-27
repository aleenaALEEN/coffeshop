import React from "react";
import {  FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className="container-fluid text-white bg-gray-900 py-[30px] flex flex-col items-center justify-center">
        <div className="flex w-[235px] lg:w-[280px] text-[20px] lg:text-[22px] justify-between">
          <span className="icons rounded-full border p-2 lg:p-3">
            <ImFacebook />
          </span>
          <span className="icons rounded-full border p-2 lg:p-3">
            <FaTwitter />
          </span>
          <span className="icons rounded-full border p-2 lg:p-3">
            <FaInstagram />
          </span>
          <span className="icons rounded-full border p-2 lg:p-3">
            <FaLinkedin />
          </span>
          <span className="icons rounded-full border p-2 lg:p-3">
            <BsPinterest />
          </span>
        </div>
        <div className="w-[718px] lg:w-[830px] font-medium flex md:flex-row flex-col   items-center justify-between text-xl mt-[30px]">
          <Link to="home" smooth={true} duration={500}>
            <button className="ftrbtn border py-1 px-4 lg:px-6 md:mt-0 mt-5">
              Home
            </button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <button className="ftrbtn border py-1 px-4 lg:px-6 md:mt-0 mt-5">
              About
            </button>
          </Link>
          <Link to="menu" smooth={true} duration={500}>
            <button className="ftrbtn border py-1 px-4 lg:px-6 md:mt-0 mt-5">
              Menu
            </button>
          </Link>
          <Link to="products" smooth={true} duration={500}>
            <button className="ftrbtn border py-1 px-4 lg:px-6 md:mt-0 mt-5">
              Products
            </button>
          </Link>
          <Link to="review" smooth={true} duration={500}>
            <button className="ftrbtn border py-1 px-4 lg:px-6 md:mt-0 mt-5">
              Review
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button className="ftrbtn border py-1 px-4 lg:px-6 md:mt-0 mt-5">
              Contact
            </button>
          </Link>
          <Link to="blog" smooth={true} duration={500}>
            <button className="ftrbtn border py-1 px-4 lg:px-6 md:mt-0 mt-5">
              Blogs
            </button>
          </Link>
        </div>
        <p className="mt-[30px] text-lg lg:text-xl">
          Created By <span className="sp">Aleena Faisal</span> | All Rights
          Reserved
        </p>
      </div>
     
    </>
  );
}
