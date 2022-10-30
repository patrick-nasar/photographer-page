import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FooterIMGP from "./footerImageP";
import { Slide } from "react-awesome-reveal";

export default function Prosidebar() {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      {!isOpen ? (
        <div className="top-0 left-0 fixed w-fit  h-fit p-4 text-slate-600 dark:text-white ">
          <button
            className=""
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      ) : (
        <Slide>
          <div
            className={`relative md:flex  overflow-auto border-r ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ease-in-out duration-300`}
          >
            <div className=" h-screen sm:w-60 md:w-64 p-4 text-slate-600 dark:text-white ">
              <div className="absolute top-0 right-0 p-2">
                <button
                  className=""
                  onClick={() => {
                    setisOpen(!isOpen);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-center border-b  pb-4">
                <h1>Naram</h1>
              </div>
              <div className="text-left  text-md space-y-3  p-3">
                <Link to="/">
                  <div className=" space-x-1 flex hover:text-orange-300">
                    <HomeIcon className="pb-1" />
                    Home
                  </div>
                </Link>
                <div className=" space-y-3  ">
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Wedding
                    </a>
                  </div>
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Engaged
                    </a>
                  </div>
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Conference
                    </a>
                  </div>
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Graduation
                    </a>
                  </div>
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Birthday
                    </a>
                  </div>
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Models
                    </a>
                  </div>
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Food
                    </a>
                  </div>
                  <div>
                    <a className=" hover:text-orange-300 cursor-pointer">
                      Products
                    </a>
                  </div>
                  {/* <p className=""></p> */}
                  <FooterIMGP />
                </div>
              </div>
            </div>
          </div>
        </Slide>
      )}{" "}
    </>
  );
}
