import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsHeadset } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div  style={{backgroundColor:"black", color:"white"}} className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/footerlogo.svg" alt="footer lgo" />
          <p className="text-center lg:text-start"><h1>We collaborate with ambitious brands and people: <br/> lets build something great together.</h1></p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-xl">Start Conversation:</p>
          <p className="text-base">Podcast@example.com</p>
          <p className="text-base">+2 969 866 7033</p>
          <p className="text-base">Terms & Condition</p>
         
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Find us here:</p>
          <p className="text-base">Broklyn, NY 11201</p>
          <p className="text-base">United States</p>
          <p className="text-base">Privacy Policy</p>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-gray-500"/>
                <BsTwitter className="text-3xl text-gray-500"/>
                <BsInstagram className="text-3xl text-gray-500"/>
                <BsYoutube className="text-3xl text-gray-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
