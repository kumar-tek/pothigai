import React from "react";
import { FaChevronDown } from "react-icons/fa";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
    >
      {/** Only include the VideoBackground once in the main App.js, NOT here! **/}
      <h1 className="text-5xl font-bold p-5">LEADERS IN SUPPLYING</h1>
      <h1 className="text-5xl font-bold p-5">CONSTRUCTION TMT AND CEMENT</h1>
      <FaChevronDown className="h-20 w-20 mt-10" />
    </section>
  );
}
