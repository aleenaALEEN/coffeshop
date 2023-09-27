import React from "react";
import Btn from "../components/Btn";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="container-fluid h-[70vh] lg:h-[90vh] w-full">
          <div
            className="h-full w-full text-white"
            style={{
              backgroundImage: `url(/images/home.jpeg)`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="text-center md:text-left md:ml-[20px] lg:ml-[120px] mt-[152px]">
              <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[48px] lg:text-[55px] leading-tight">
                FRESH COFFEE IN<br></br> THE MORNING
              </h1>
              <p className="text-[9.5px] sm:text-[14px] md:text-lg lg:text-xl leading-[30px] mt-4 lg:leading-[38px]">
                Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                Placeat<br></br> Labore, Sint Cupiditate Distinctio Tempora
                Reiciendis.
              </p>
              <Btn data={{ className: "", text: "Get Yours Now" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
