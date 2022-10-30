import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import FooterIMGP from "./footerImageP";
import { useState } from "react";

export default function SideBar() {
  const [sideBaropen, setSideBarOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(!sideBaropen);
  };
  return (
    <div>
      <div className=" md:flex  overflow-auto">
        <div className=" h-screen sm:w-60 md:w-64 p-4 text text-slate-600 bg-white dark:text-white dark:bg-slate-700">
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
                <a className=" hover:text-orange-300 cursor-pointer">Wedding</a>
              </div>
              <div>
                <a className=" hover:text-orange-300 cursor-pointer">Engaged</a>
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
                <a className=" hover:text-orange-300 cursor-pointer">Models</a>
              </div>
              <div>
                <a className=" hover:text-orange-300 cursor-pointer">Food</a>
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
    </div>
  );
}
