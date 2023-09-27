import React from "react";
import { FaUser } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Btn from "../components/Btn";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container-fluid text-white text-center flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] font-bold tracking-tighter">
            <span className="sp">CONTACT</span> US
          </h1>
          <div className="w-[95%] lg:w-[87%] py-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[180px] md:h-[450px] ">
                
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://123movies-to.org"></a>
              </div>
              <div className="bgcolor grig gap-5 h-[450px] py-[50px] flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl font-bold">GET IN TOUCH</h1>
                <div className="border bg-black w-[90%] p-[15px]  ">
                  <div className="flex items-center text-white justify-between">
                    <FaUser className="text-[22px]" />
                    <input
                      className="w-[540px] bg-black list-none "
                      placeholder="name"
                    />
                  </div>
                </div>
                <div className="border bg-black w-[90%] p-[15px]  ">
                  <div className="flex items-center text-white justify-between">
                    <MdEmail className="text-[22px]" />
                    <input className="w-[540px] bg-black" placeholder="email" />
                  </div>
                </div>
                <div className="border bg-black w-[90%] p-[15px]  ">
                  <div className="flex items-center text-white justify-between">
                    <AiFillPhone className="text-[22px]" />
                    <input
                      className="w-[540px] bg-black"
                      placeholder="number"
                      type="number"
                    />
                  </div>
                </div>
                <Btn data={{ className: "", text: "Contact Now" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
