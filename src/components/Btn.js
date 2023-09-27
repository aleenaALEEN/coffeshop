import React from "react";

export default function Btn(props) {
  return (
    <>
      {props.data.className ? (
        <button className={props.data.className} style={props.data.style}>
          {props.data.text}
        </button>
      ) : (
        <button className="btn py-2 px-7 text-white font-medium text-base mt-5 hover:px-10 hover:tracking-widest duration-500">
          {props.data.text}
        </button>
      )}
    </>
  );
}
