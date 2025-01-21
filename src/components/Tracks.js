import React, { useState } from 'react';

import healthcareVideo from './gif/healthcare.mp4';
import DefenceAndSecurityVideo from './gif/defence&security.mp4';
import FintechVideo from './gif/fintech.mp4';
import OpenInnovationVideo from './gif/openinnovation.mp4';
import EnergyAndAgricultureVideo from './gif/energyandagriculture.mp4';
import SocialGoodsAndSdgsVideo from './gif/socialgoods.mp4';

import healthcareHoverVideo from './gif_while_hover/heathcare.mp4';
import DefenceAndSecurityHoverVideo from './gif_while_hover/defence&security.mp4';
import FintechHoverVideo from './gif_while_hover/fintech.mp4';
import OpenInnovationHoverVideo from './gif_while_hover/openinnovation.mp4';
import EnergyAndAgricultureHoverVideo from './gif_while_hover/energyandagriculture.mp4';
import SocialGoodsAndSdgsHoverVideo from './gif_while_hover/socialgoods.mp4';

const TrackBox = ({ title, titleSecondLine, defaultVideo, hoverVideo, className, customTitleStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-customYellow border-4 border-black rounded-xl relative flex transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: isHovered ? '#02FFFF' : ''
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 left-4">
        <span className="font-bold font-mono text-black block" style={customTitleStyle}>
          {title}
        </span>
        {titleSecondLine && (
          <span className="font-bold font-mono text-black block mt-1" style={customTitleStyle}>
            {titleSecondLine}
          </span>
        )}
      </div>
      <video 
        src={isHovered ? hoverVideo : defaultVideo} 
        className="absolute bottom-3 right-3 h-24 w-24 object-contain" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
    </div>
  );
};

const Tracks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const tracks = [
    { 
      title: "Defence and Security", 
      video: DefenceAndSecurityVideo,
      hoverVideo: DefenceAndSecurityHoverVideo 
    },
    { 
      title: "Fintech", 
      video: FintechVideo,
      hoverVideo: FintechHoverVideo 
    },
    { 
      title: "Healthcare", 
      video: healthcareVideo,
      hoverVideo: healthcareHoverVideo 
    },
    { 
      title: "Open Innovation", 
      video: OpenInnovationVideo,
      hoverVideo: OpenInnovationHoverVideo 
    },
    { 
      title: "Energy and Agriculture", 
      video: EnergyAndAgricultureVideo,
      hoverVideo: EnergyAndAgricultureHoverVideo 
    },
    { 
      title: "Social Good and SDGs", 
      video: SocialGoodsAndSdgsVideo,
      hoverVideo: SocialGoodsAndSdgsHoverVideo 
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
    setIsClicked(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsClicked(false);
  };

  const handleBoxClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-customYellow min-h-screen flex flex-col items-center py-12 relative">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 2px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Desktop View (large screens) */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-2 w-full max-w-7xl px-8 relative">
        {/* First Row */}
        <TrackBox 
          title="Defence and"
          titleSecondLine="Security"
          defaultVideo={DefenceAndSecurityVideo}
          hoverVideo={DefenceAndSecurityHoverVideo}
          className="h-48"
          customTitleStyle={{ fontSize: '2rem' }}
        />

        <TrackBox 
          title="Fintech"
          defaultVideo={FintechVideo}
          hoverVideo={FintechHoverVideo}
          className="h-48"
          customTitleStyle={{ fontSize: '2rem' }}
        />

        <TrackBox 
          title="Healthcare"
          defaultVideo={healthcareVideo}
          hoverVideo={healthcareHoverVideo}
          className="h-48"
          customTitleStyle={{ fontSize: '2rem' }}
        />

        {/* Sponsored Track Box */}
        <div className="bg-black text-customYellow border-4 border-black rounded-xl relative flex row-span-2">
          <span className="absolute top-4 left-4 text-4xl font-bold font-mono">Sponsored Track</span>
        </div>

        {/* Second Row */}
        <TrackBox 
          title="Open"
          titleSecondLine="Innovation"
          defaultVideo={OpenInnovationVideo}
          hoverVideo={OpenInnovationHoverVideo}
          className="h-48 col-start-1"
          customTitleStyle={{ fontSize: '1.87rem' }}
        />

        {/* Tracks Text Box */}
        <div className="bg-transparent col-span-2 col-start-2 flex items-center justify-center">
          <div className="text-9xl font-black text-black">TRACKS</div>
        </div>

        {/* Third Row */}
        <div className="col-span-2 col-start-1">
          <TrackBox 
            title="Energy and"
            titleSecondLine="Agriculture"
            defaultVideo={EnergyAndAgricultureVideo}
            hoverVideo={EnergyAndAgricultureHoverVideo}
            className="h-48"
            customTitleStyle={{ fontSize: '2rem' }}
          />
        </div>

        <div className="col-span-2 col-start-3">
          <TrackBox 
            title="Social Good"
            titleSecondLine="and SDGs"
            defaultVideo={SocialGoodsAndSdgsVideo}
            hoverVideo={SocialGoodsAndSdgsHoverVideo}
            className="h-48"
            customTitleStyle={{ fontSize: '2rem' }}
          />
        </div>
      </div>

      {/* Mobile and Tablet View (small and medium screens) */}
      <div className="md:flex lg:hidden flex flex-col items-center w-full">
        <h2 className="text-6xl font-black text-black mb-20">TRACKS</h2>

        {/* Track Box */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-[-40px] sm:left-[-60px] text-black text-4xl font-bold px-0 py-2 z-10 top-1/2 transform -translate-y-1/2"
          >
            &lt;
          </button>

          <div
            onClick={handleBoxClick}
            className="bg-customYellow border-4 border-black rounded-xl flex flex-col items-center justify-center transition-colors duration-300"
            style={{
              width: "250px",
              height: "350px",
              position: "relative",
              backgroundColor: isClicked ? '#02FFFF' : ''
            }}
          >
            <h2 className="text-3xl sm:text-xl px-1 font-bold text-center absolute top-4 w-full">
              {tracks[currentIndex].title}
            </h2>
            <video
              src={isClicked ? tracks[currentIndex].hoverVideo : tracks[currentIndex].video}
              className="h-25 w-25 object-contain mt-12"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-[-40px] sm:right-[-60px] text-black text-4xl font-bold px-0 py-2 z-10 top-1/2 transform -translate-y-1/2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
