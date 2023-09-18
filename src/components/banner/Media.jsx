import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

import { HiArchive } from "react-icons/hi";
import { cv } from '../../assets';
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/brightboateng/" target="_"><span className="bannerIcon">
              <FaLinkedinIn />
            </span></a>
          


          
{/* 
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span> */}
          
          </div>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            SIDE HUSTLE
          </h2>
          <div className="flex gap-4">            
          <a href="https://www.instagram.com/gadgetzonegh" target="_"><span className="bannerIcon">
              <BsInstagram />
            </span></a>
          </div>
        </div>




            
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            DOWNLOAD MY CV
          </h2>
          <div className="flex gap-4">            
          <a href={cv} target="_"><span className="bannerIcon">
              <HiArchive />
            </span></a>
          </div>
        </div>



      </div>
  )
}

export default Media