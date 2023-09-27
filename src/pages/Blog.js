import React from "react";
import Btn from "../components/Btn";
import img1 from "../images/blog-1.jpeg"
import img2 from "../images/blog-2.jpeg"
import img3 from "../images/blog-3.jpeg"


export default function Blog() {

  return (
    <>
      <section id="blog">
        <div className="container-fluid text-white  flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] font-bold tracking-tighter">
            OUR <span className="sp">BLOGS</span>
          </h1>
          <div className="flex flex-wrap justify-between w-[95%] lg:w-[87%] py-8">
          
                <div className="card border w-full md:w-[49%] lg:w-[32.5%] h-auto mt-[15px]">
                  <div className="hide h-[250px] duration-1000">
                    <img
                      className="h-full w-full  hover:scale-110 duration-500"
                      src={img1}
                    />
                  </div>
                  <div className="mt-5 ml-5 pb-[20px]">
                    <h1 className="text-[21px] lg:text-[25px] font-medium">
                    Tasty And Refreshing Coffee
                    </h1>
                    <span className="sp">
                      <p className="text-[16px] lg:text-[19px] font-medium mt-2">
                      By Admin / 21st May, 2021
                      </p>
                    </span>
                    <p className="text-gray-300 mt-2 text-[15px] lg:text-[17px]">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta
                    </p>
                    <Btn data={{ className: "", text: "Read More" }} />
                  </div>
                </div>
                <div className="card border w-full md:w-[49%] lg:w-[32.5%] h-auto mt-[15px]">
                  <div className="hide h-[250px] duration-1000">
                    <img
                      className="h-full w-full  hover:scale-110 duration-500"
                      src={img2}
                    />
                  </div>
                  <div className="mt-5 ml-5 pb-[20px]">
                    <h1 className="text-[21px] lg:text-[25px] font-medium">
                    Tasty And Refreshing Coffee
                    </h1>
                    <span className="sp">
                      <p className="text-[16px] lg:text-[19px] font-medium mt-2">
                      By Admin / 21st May, 2021
                      </p>
                    </span>
                    <p className="text-gray-300 mt-2 text-[15px] lg:text-[17px]">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta
                    </p>
                    <Btn data={{ className: "", text: "Read More" }} />
                  </div>
                </div>
                <div className="card border w-full md:w-[49%] lg:w-[32.5%] h-auto mt-[15px]">
                  <div className="hide h-[250px] duration-1000">
                    <img
                      className="h-full w-full  hover:scale-110 duration-500"
                      src={img3}
                    />
                  </div>
                  <div className="mt-5 ml-5 pb-[20px]">
                    <h1 className="text-[21px] lg:text-[25px] font-medium">
                    Tasty And Refreshing Coffee
                    </h1>
                    <span className="sp">
                      <p className="text-[16px] lg:text-[19px] font-medium mt-2">
                      By Admin / 21st May, 2021
                      </p>
                    </span>
                    <p className="text-gray-300 mt-2 text-[15px] lg:text-[17px]">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta
                    </p>
                    <Btn data={{ className: "", text: "Read More" }} />
                  </div>
                </div>
        
          </div>
        </div>
      </section>
    </>
  );
}
