import React from "react";
import { Link } from "react-router-dom";
import Gallery1 from "../components/gallery1";
import Prosidebar from "../components/prosidebar";
import SideBar from "../components/sideBar";

export default function Gallery() {
  return (
    <div className=" flex bg-white dark:bg-slate-800">
      <Prosidebar className="absolute"/>
      {/* <SideBar  className="absolute"/> */}
      <Gallery1 className="absolute" />
    </div>
  );
}
