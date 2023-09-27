import React from "react";
import Btn from "../components/Btn";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container-fluid text-white flex flex-col items-center justify-center">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] font-bold tracking-tighter">
            <span className="sp">ABOUT</span> US
          </h1>
          <div className="w-[95%] lg:w-[87%] py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[320px] sm:h-[491px] md:h-[491px] lg:h-[491px] w-full">
                <img className="h-full w-full" src="/images/about.jpeg"></img>
              </div>
              <div className="bgcolor h-[400px] sm:h-[320px] lg:h-[491px] text-white flex items-center justify-center">
                <div className="w-[94%]">
                  <h1 className="text-2xl lg:text-3xl font-bold">
                    What Makes Our Coffee Special?
                  </h1>
                  <p className="mt-4 text-sm lg:text-lg text-gray-300">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias
                    Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo
                    <br></br> Facilis Cupiditate. Ex, Vel?<br></br>
                    <br></br>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.
                    Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque
                    Consectetur Obcaecati Sapiente?
                  </p>
                  <Btn data={{ className: "", text: "Learn More" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
