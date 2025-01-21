import React from "react";
import SynapseLogo from "./logo.png"; 
import heartImage from "./Vector.png"; 
const Footer = () => {
  return (
    <footer className="bg-[#FFFF00] text-black p-8" style={{ fontFamily: 'Space Mono, monospace, Jost, sans-serif' }}>
      <div className="max-w-7xl mx-auto flex flex-row justify-center md:justify-between items-center mt-8 border-t-2 border-black">
        {/* Left Section: Content */}
        <div className="flex flex-row md:border-l-2 border-black md:flex-row md:divide-x-2 md:divide-black space-y-8 mt-8 md:space-y-0 md:space-x-16">
          {/* Synapse Section */}
          <div className="px-4 hidden md:block">
            <h1 className="text-xs mb-4">SYNAPSE</h1>
            <ul className="space-y-2">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>TRACKS</li>
              <li>TIMELINE</li>
              <li>PRIZES</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* ISTE Section */}
          <div className="px-4 text-center md:text-left">
            <h1 className="text-xs mb-4 hidden sm:block">ISTE</h1>
            <img src="/iste_logo.png" alt="iste-logo" className="w-10 h-10 mb-4 mx-auto sm:hidden" />
            <ul className="space-y-2">
              <li>WEBSITE</li>
              <li>INSTAGRAM</li>
              <li>LINKEDIN</li>
              <li>YOUTUBE</li>
              <li>X</li>
            </ul>
          </div>

          {/* IEEE Section */}
          <div className="px-4 text-center md:text-left" >
            <h1 className="text-xs mb-4 hidden sm:block">IEEE</h1>
            <img src="/ieee_logo.png" alt="ieee-logo" className="w-10 h-10 mb-4 mx-auto sm:hidden" />
            <ul className="space-y-2">
              <li>WEBSITE</li>
              <li>INSTAGRAM</li>
              <li>LINKEDIN</li>
              <li>YOUTUBE</li>
              <li>X</li>
            </ul>
          </div>
        </div>
        

        {/* Right Section: Picture */}
        <div className="mt-8 md:mt-0 hidden md:block">
          <img
            src={SynapseLogo}
            alt="Synapse Logo"
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>

      <div className="mt-8 pt-4 flex justify-center md:justify-start items-center space-x-2">
        <p className="flex items-center text-xs" style={{ fontFamily: 'Jost, sans-serif' }}>
          MADE WITH
          <img src={heartImage} alt="Heart" className="ml-1 mr-1 w-3 h-3" /> {/* Use the image here */}
          BY ISTE & IEEE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
