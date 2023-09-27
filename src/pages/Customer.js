import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import img from "../images/quote.png"
import img1 from "../images/pic-1.png"
import img2 from "../images/pic-2.png"
import img3 from "../images/pic-3.png"


export default function Customer() {
  return (
    <>
      <section id="review">
        <div className="container-fluid text-white text-center flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] font-bold tracking-tighter">
            CUSTOMER'S <span className="sp">REVIEW</span>
          </h1>
          <div className="flex flex-wrap justify-between w-[95%] lg:w-[87%] py-8">
            <div className="cardcustomer border flex flex-col items-center justify-center mt-[15px] w-full sm:w-[49%] lg:w-[32.5%] py-[30px] px-[20px]">
              <img src={img} />
              <p className="text-[11px] sm:text-[13px] leading-loose md:text-[15px] text-gray-300 mt-6">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi
                Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut
                Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam
                Minus Vel? Nemo.
              </p>
              <img
                className="rounded-full h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] mt-5"
                src={img1}
              />
              <h1 className="text-base sm:text-lg md:text-xl font-bold mt-3">
                John Deo
              </h1>
              <div className="flex text-[16px] sm:text-[18px] md:text-[19.5px] w-[92px] md:w-[93px] mt-2 justify-between">
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStarHalfAlt className="sp" />
              </div>
            </div>
            <div className="cardcustomer border flex flex-col items-center justify-center mt-[15px] w-full sm:w-[49%] lg:w-[32.5%] py-[30px] px-[20px]">
              <img src={img}/>
              <p className="text-[11px] sm:text-[13px] leading-loose md:text-[15px] text-gray-300 mt-6">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi
                Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut
                Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam
                Minus Vel? Nemo.
              </p>
              <img
                className="rounded-full h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] mt-5"
                src={img2}
              />
              <h1 className="text-base sm:text-lg md:text-xl font-bold mt-3">
                John Deo
              </h1>
              <div className="flex text-[16px] sm:text-[18px] md:text-[19.5px] w-[92px] md:w-[93px] mt-2 justify-between">
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStarHalfAlt className="sp" />
              </div>
            </div>
            <div className="cardcustomer border flex flex-col items-center justify-center mt-[15px] w-full sm:w-[49%] lg:w-[32.5%] py-[30px] px-[20px]">
              <img src={img} />
              <p className="text-[11px] sm:text-[13px] leading-loose md:text-[15px] text-gray-300 mt-6">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi
                Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut
                Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam
                Minus Vel? Nemo.
              </p>
              <img
                className="rounded-full h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] mt-5"
                src={img3}
              />
              <h1 className="text-base sm:text-lg md:text-xl font-bold mt-3">
                John Deo
              </h1>
              <div className="flex text-[16px] sm:text-[18px] md:text-[19.5px] w-[92px] md:w-[93px] mt-2 justify-between">
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStar className="sp" />
                <FaStarHalfAlt className="sp" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
