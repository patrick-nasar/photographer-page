import React from "react";
import man from "../img/man.jpg";

export default function Banner() {
  return (
    <>
      <div className="">
        <img src={man} />
        <div
          className="hidden md:flex flex-col absolute text-black
            bg-slate-100 md:top-28  md:right-10 lg:top-40 lg:right-16  p-4 rounded-md gap-2 w-1/3
            dark:bg-slate-800"
        >
          <h1 className="text-left text-orange-600  font-bold text-xl ">
            Hi I am Naram
          </h1>
          <p className="text-left md:text-sm lg:text-base dark:text-white">
            with over 5 years experience on photograph and videoghraph, Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Aperiam iste
            neque temporibus hic eaque! A repellat laborum ipsa eos, qua
          </p>
          <a
            href="#ContactMe"
            className="text-left md:text-sm lg:text-base border-orange-600 border-2 rounded-full w-fit p-2 hover:bg-orange-600  dark:text-white transition-all duration-500"
          >
           Hire me
          </a>
        </div>
        <div
          className="md:hidden sm:flex sm:flex-col sm:absolute 
              sm:top-7 sm:right-8 p-4 rounded-md gap-2 w-1/3
             text-black bg-slate-50 dark:bg-slate-800 "
        >
          <span className="text-left text-orange-600 font-bold text-sm ">
            Hi I am Naram
          </span>
          <p className="text-left sm:text-xs dark:text-white">
            With over 5 years experience on photograph and videoghraph
          </p>
        </div>
      </div>
    </>
  );
}
