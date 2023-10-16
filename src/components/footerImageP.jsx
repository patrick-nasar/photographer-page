import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from '@mui/material/Tooltip';

export default function FooterIMGP() {
  return (
    <div className="text-left pt-16 bottom-0">
      <h1 className=" dark:text-white">
        Design and Developed by Patrick Nassar
      </h1>
      <div className="space-x-3 text-md">
        {/* <a href="https://www.facebook.com/patrick.nassar.7/">
          <FacebookIcon className="text-blue-600 " />
        </a>
        <a href="https://www.instagram.com/patrik_nassar/">
          <InstagramIcon className="text-pink-600" />
        </a> */}
         <a href="https://www.linkedin.com/in/patrick-nassar-4a9116201/">
          <Tooltip title="LinkedIn">
            <LinkedInIcon className="text-blue-600 " />
          </Tooltip>
        </a>
        <a href="mailto:patriknasar@gmail.com">
          <Tooltip title="Email">
            <EmailIcon className="text-yellow-300" />
          </Tooltip>
        </a>
        <a href="https://github.com/patrick-nasar">
          <Tooltip title="GitHub">
            <GitHubIcon className="dark:text-white" />
          </Tooltip>
        </a>
      </div>
    </div>
  );
}
