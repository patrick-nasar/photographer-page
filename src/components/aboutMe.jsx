import React from "react";
import aboutIMG from "../img/aboutme.jpg";

export default function AboutMe() {
  return (
    <div className=" md:flex" id="AboutMe">
      <img src={aboutIMG} className="h-80 w-80 md:h-96 md:w-96 rounded-full py-10 px-10 md:pl-20" />
      <div className="w-full px-5 py-3 text-left justify-center space-y-5">
        <h1 className="text-3xl font-bold uppercase text-orange-600 ">About me</h1>
        <h3 className="text-xl font-bold uppercase dark:text-white">photo and video grapher</h3>
        <p className="dark:text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          eligendi sunt nobis deleniti aspernatur quod in omnis tempora tempore
          animi reiciendis ut molestiae, voluptatem unde mollitia laboriosam
          adipisci facere? Maxime.
        </p>
      </div>
    </div>
  );
}
