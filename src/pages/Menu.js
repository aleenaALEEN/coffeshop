import React from "react";
import Btn from "../components/Btn";
import img1 from "../images/menu-1.png"
import img2 from "../images/menu-2.png"
import img3 from "../images/menu-3.png"
import img4 from "../images/menu-4.png"
import img5 from "../images/menu-5.png"
import img6 from "../images/menu-6.png"

export default function Menu() {
  return (
    <>
      <section className="menu">
        <div className="container-fliud text-white text-center flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] font-bold tracking-tighter">
            OUR <span className="sp">MENU</span>
          </h1>
          <div className="flex flex-wrap w-[98%] lg:w-[89%] py-7">
            <div className="cardmenu border flex flex-col  items-center justify-center sm:ml-[15px] mt-[15px] w-full sm:w-[46%] md:w-[47.5%] lg:w-[22.5%] py-[35px] md:py-[50px] px-[70px] lg:px-[60px] hover:bg-white hover:text-black">
              <img
                className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                src={img1}
              />
              <h1 className="text-lg md:text-xl font-bold mt-3">
                Tasty and Healthy
              </h1>
              <span className="flex items-center justify-between w-32 mt-[8px] md:mt-[13px]">
                <p className="text-[25px] font-medium">$15.99</p>
                <p>
                  <del>20.99</del>
                </p>
              </span>
              <Btn data={{ className: "", text: "Add To Cart" }} />
            </div>
            <div className="cardmenu border flex flex-col  items-center justify-center sm:ml-[15px] mt-[15px] w-full sm:w-[46%] md:w-[47.5%] lg:w-[22.5%] py-[35px] md:py-[50px] px-[70px] lg:px-[60px] hover:bg-white hover:text-black">
              <img
                className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                src={img2}
              />
              <h1 className="text-lg md:text-xl font-bold mt-3">
                Tasty and Healthy
              </h1>
              <span className="flex items-center justify-between w-32 mt-[8px] md:mt-[13px]">
                <p className="text-[25px] font-medium">$15.99</p>
                <p>
                  <del>20.99</del>
                </p>
              </span>
              <Btn data={{ className: "", text: "Add To Cart" }} />
            </div>
            <div className="cardmenu border flex flex-col  items-center justify-center sm:ml-[15px] mt-[15px] w-full sm:w-[46%] md:w-[47.5%] lg:w-[22.5%] py-[35px] md:py-[50px] px-[70px] lg:px-[60px] hover:bg-white hover:text-black">
              <img
                className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                src={img3}
              />
              <h1 className="text-lg md:text-xl font-bold mt-3">
                Tasty and Healthy
              </h1>
              <span className="flex items-center justify-between w-32 mt-[8px] md:mt-[13px]">
                <p className="text-[25px] font-medium">$15.99</p>
                <p>
                  <del>20.99</del>
                </p>
              </span>
              <Btn data={{ className: "", text: "Add To Cart" }} />
            </div>
            <div className="cardmenu border flex flex-col  items-center justify-center sm:ml-[15px] mt-[15px] w-full sm:w-[46%] md:w-[47.5%] lg:w-[22.5%] py-[35px] md:py-[50px] px-[70px] lg:px-[60px] hover:bg-white hover:text-black">
              <img
                className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                src={img4}
              />
              <h1 className="text-lg md:text-xl font-bold mt-3">
                Tasty and Healthy
              </h1>
              <span className="flex items-center justify-between w-32 mt-[8px] md:mt-[13px]">
                <p className="text-[25px] font-medium">$15.99</p>
                <p>
                  <del>20.99</del>
                </p>
              </span>
              <Btn data={{ className: "", text: "Add To Cart" }} />
            </div>
            <div className="cardmenu border flex flex-col  items-center justify-center sm:ml-[15px] mt-[15px] w-full sm:w-[46%] md:w-[47.5%] lg:w-[22.5%] py-[35px] md:py-[50px] px-[70px] lg:px-[60px] hover:bg-white hover:text-black">
              <img
                className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                src={img5}
              />
              <h1 className="text-lg md:text-xl font-bold mt-3">
                Tasty and Healthy
              </h1>
              <span className="flex items-center justify-between w-32 mt-[8px] md:mt-[13px]">
                <p className="text-[25px] font-medium">$15.99</p>
                <p>
                  <del>20.99</del>
                </p>
              </span>
              <Btn data={{ className: "", text: "Add To Cart" }} />
            </div>
            <div className="cardmenu border flex flex-col  items-center justify-center sm:ml-[15px] mt-[15px] w-full sm:w-[46%] md:w-[47.5%] lg:w-[22.5%] py-[35px] md:py-[50px] px-[70px] lg:px-[60px] hover:bg-white hover:text-black">
              <img
                className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                src={img6}
              />
              <h1 className="text-lg md:text-xl font-bold mt-3">
                Tasty and Healthy
              </h1>
              <span className="flex items-center justify-between w-32 mt-[8px] md:mt-[13px]">
                <p className="text-[25px] font-medium">$15.99</p>
                <p>
                  <del>20.99</del>
                </p>
              </span>
              <Btn data={{ className: "", text: "Add To Cart" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
