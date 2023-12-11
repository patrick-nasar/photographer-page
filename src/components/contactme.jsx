import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Contactme() {
  return (
    <div id="ContactMe" className="">
      <h1 className="text-3xl font-bold uppercase text-orange-600 mb-4">
        Contact me
      </h1>

      {/* footer  */}
      <div className="md:flex md:space-y-0 space-y-4 justify-evenly gap-5 dark:text-white mx-4">
        {/*social networks */}
        <div className="block mx-auto w-full p-6 max-w-sm bg-slate-50 rounded-lg border border-gray-200 shadow-md transition-all duration-700 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl uppercase font-bold mb-4">social networks</h3>
          <div className="text-left flex flex-col space-y-3">
            <div>
              <a href="https://instagram.com/naramsin_photography?igshid=YmMyMTA2M2Y=">
                <InstagramIcon className="text-pink-600 mr-1" />
                <span>naramsin_photography </span>
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100006650748065">
                <FacebookIcon className="text-blue-600 mr-1" />
                <span>Naramsin M Swaid</span>
              </a>
            </div>
            <div>
              <a href="">
                <TwitterIcon className="text-blue-600 mr-1" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        {/*Phone */}
        <div className="block mx-auto w-full p-6 max-w-sm bg-slate-50 rounded-lg border border-gray-200 shadow-md transition-all duration-700 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold uppercase mb-4">Phone Number</h3>
          <div className="text-left flex flex-col space-y-3">
            <div>
              <a href="tel:+963991025652">
                <CallIcon className="text-indigo-400 mr-1" />
                +963991025652
              </a>
            </div>
            <div>
              <a href="tel:+963991025652">
                <WhatsAppIcon className="text-green-500 mr-1" />
                +963991025652
              </a>
            </div>
            {/* <a href="tel:+0123456789">Click to call</a>
            <a href="tel:+0123456789">Click to call</a> */}
          </div>
        </div>
        
        {/*E-mail*/}
        <div className="block mx-auto uppercase w-full p-6 max-w-sm bg-slate-50 rounded-lg border border-gray-200 shadow-md transition-all duration-700 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold uppercase mb-4">E-mail</h3>
          <div className="text-left flex flex-col space-y-3">
            <div>
              <a href="mailto:xyz@abc.com">
                {" "}
                <EmailIcon className="text-yellow-300 mr-1" />{" "}
              </a>
            </div>
          </div>
        </div>

        {/*Location */}{" "}
        <div className="block mx-auto uppercase w-full p-6 max-w-sm bg-slate-50 rounded-lg border border-gray-200 shadow-md transition-all duration-700 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold uppercase mb-4">Locations</h3>
          <div className="text-left flex flex-col space-y-3">
            <div>
              <LocationOnIcon className="text-red-600 " />{" "}
              <span>Latakia / Syria</span>
            </div>
            <div>
              <LocationOnIcon className="text-red-600 " />{" "}
              <span>Damascus / Syria</span>
            </div>
            <div>
              <LocationOnIcon className="text-red-600 " />{" "}
              <span>Homs / Syria</span>
            </div>

            {/* <p>asdasd</p>
          <p>asdasd</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
