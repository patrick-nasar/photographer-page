import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function FooterIMGP() {
  return (
    <div className="text-left pt-16 bottom-0">
      <h1 className=" dark:text-white">
        Design and Developed by Patrick Nassar
      </h1>
      <div className="space-x-3 text-md">
        <a href="https://www.facebook.com/patrick.nassar.7/">
          <FacebookIcon className="text-blue-600 " />
        </a>
        <a href="https://www.instagram.com/patrik_nassar/">
          <InstagramIcon className="text-pink-600" />
        </a>
        <a href="https://www.linkedin.com/in/patrick-nassar-4a9116201/">
          <LinkedInIcon className="text-blue-600 " />
        </a>
        <a href="mailto:patriknasar@gmail.com">
          <EmailIcon className="text-yellow-300" />
        </a>
        <a href="https://github.com/patrick-nasar">
          <GitHubIcon className="dark:text-white" />
        </a>
        {/* <a href="tel:+963934415772">
          <WhatsAppIcon className="text-green-500" />
        </a>
        <a href="tel:+963934415772">
          <CallIcon className="text-indigo-400" />
        </a> */}
      </div>
    </div>
  );
}
