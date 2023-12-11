import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FooterIMGP from "./footerImageP";
import { Slide } from "react-awesome-reveal";
import useDarkMode from "../hook/useDarkMode";

export default function Prosidebar() {
  const [isOpen, setisOpen] = useState(true);
  const [colorTheme, setTheme] = useDarkMode();

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
        <div
          className={`relative md:flex border-r  ${isOpen ? "translate-x-0 " : "translate-x-full "
            }`}
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
                  <Link
                    to='/Gallery/Wedding'
                    className=" hover:text-orange-300 cursor-pointer">
                    Wedding
                  </Link>
                </div>
                <div>
                  <Link
                    to='/Gallery/Engaged'
                    className=" hover:text-orange-300 cursor-pointer">
                    Engaged
                  </Link>
                </div>
                <div>
                  <Link
                    to='/Gallery/Conference'
                    className=" hover:text-orange-300 cursor-pointer">
                    Conference
                  </Link>
                </div>
                <div>
                  <Link
                    to='/Gallery/Graduation'
                    className=" hover:text-orange-300 cursor-pointer">
                    Graduation
                  </Link>
                </div>
                <div>
                  <Link
                    to='/Gallery/Birthday'
                    className=" hover:text-orange-300 cursor-pointer">
                    Birthday
                  </Link>
                </div>
                <div>
                  <Link
                    to='/Gallery/Models'
                    className=" hover:text-orange-300 cursor-pointer">
                    Models
                  </Link>
                </div>
                <div>
                  <Link
                    to='/Gallery/Food'
                    className=" hover:text-orange-300 cursor-pointer">
                    Food
                  </Link>
                </div>
                <div>
                  <Link
                    to='/Gallery/Products'
                    className=" hover:text-orange-300 cursor-pointer">
                    Products
                  </Link>
                </div>

                <div>
                  {colorTheme == "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => {
                        setTheme(colorTheme);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer text-white"
                      onClick={() => {
                        setTheme(colorTheme);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  )}
                </div>

                {/* <p className=""></p> */}
                <FooterIMGP />
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
