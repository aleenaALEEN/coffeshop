import React from "react";
import { FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import img1 from "../images/product-1.png"
import img2 from "../images/product-2.png"
import img3 from "../images/product-3.png"


export default function Products() {
  return (
    <>
      <section id="products">
        <div className="container-fluid text-white text-center flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] font-bold tracking-tighter">
            OUR <span className="sp">PRODUCTS</span>
          </h1>
          <div className="flex flex-wrap lg:flex justify-between w-[95%] lg:w-[87%] py-8">
            <div className="cardproducts border mt-[15px] w-full sm:w-[49%] lg:w-[32.5%] flex flex-col items-center justify-center py-[20px] px-[80px]">
              <div className="flex justify-between text-white w-[144px] md:w-[166px] text-[19px] md:text-2xl">
                <span className="icons border p-2 md:p-3">
                  <FaShoppingCart />
                </span>
                <span className="icons border p-2 md:p-3">
                  <AiFillHeart />
                </span>
                <span className="icons border p-2 md:p-3">
                  <AiFillEye />
                </span>
              </div>
              <img
                className="mt-7 w-[100px] h-[140px] sm:w-[160px] sm:h-[250px]"
                src={img1}
              />
              <h1 className="text-lg md:text-2xl font-bold mt-6">
                Fresh Coffee
              </h1>
              <div className="flex text-[19.5px] w-[107px] mt-3 justify-between">
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStarHalfAlt className="sp" />
              </div>
              <span className="flex items-center justify-between w-[138px] mt-[13px]">
                <p className="text-[22px] md:text-[26px] font-medium">$15.99</p>
                <p>
                  <del>$20.99</del>
                </p>
              </span>
            </div>

            <div className="cardproducts border mt-[15px] w-full sm:w-[49%] lg:w-[32.5%] flex flex-col items-center justify-center py-[20px] px-[80px]">
              <div className="flex justify-between text-white w-[144px] md:w-[166px] text-[19px] md:text-2xl">
                <span className="icons border p-2 md:p-3">
                  <FaShoppingCart />
                </span>
                <span className="icons border p-2 md:p-3">
                  <AiFillHeart />
                </span>
                <span className="icons border p-2 md:p-3">
                  <AiFillEye />
                </span>
              </div>
              <img
                className="mt-7 w-[100px] h-[140px] sm:w-[160px] sm:h-[250px]"
                src={[img2]}
              />
              <h1 className="text-lg md:text-2xl font-bold mt-6">
                Fresh Coffee
              </h1>
              <div className="flex text-[19.5px] w-[107px] mt-3 justify-between">
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStarHalfAlt className="sp" />
              </div>
              <span className="flex items-center justify-between w-[138px] mt-[13px]">
                <p className="text-[22px] md:text-[26px] font-medium">$15.99</p>
                <p>
                  <del>$20.99</del>
                </p>
              </span>
            </div>

            <div className="cardproducts border mt-[15px] w-full sm:w-[49%] lg:w-[32.5%] flex flex-col items-center justify-center py-[20px] px-[80px]">
              <div className="flex justify-between text-white w-[144px] md:w-[166px] text-[19px] md:text-2xl">
                <span className="icons border p-2 md:p-3">
                  <FaShoppingCart />
                </span>
                <span className="icons border p-2 md:p-3">
                  <AiFillHeart />
                </span>
                <span className="icons border p-2 md:p-3">
                  <AiFillEye />
                </span>
              </div>
              <img
                className="mt-7 w-[100px] h-[140px] sm:w-[160px] sm:h-[250px]"
                src={img3}
              />
              <h1 className="text-lg md:text-2xl font-bold mt-6">
                Fresh Coffee
              </h1>
              <div className="flex text-[19.5px] w-[107px] mt-3 justify-between">
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStarHalfAlt className="sp" />
              </div>
              <span className="flex items-center justify-between w-[138px] mt-[13px]">
                <p className="text-[22px] md:text-[26px] font-medium">$15.99</p>
                <p>
                  <del>$20.99</del>
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
