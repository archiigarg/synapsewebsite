import React, { useState } from "react";

const Tracks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tracks = [
    { title: "Defence and Security", image: "/path-to-image1.jpg" },
    { title: "Fintech", image: "/path-to-image2.jpg" },
    { title: "Healthcare", image: "/path-to-image3.jpg" },
    { title: "Open Innovation", image: "/path-to-image4.jpg" },
    { title: "Energy and Agriculture", image: "/path-to-image5.jpg" },
    { title: "Social Good and SDGs", image: "/path-to-image6.jpg" },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center py-8 relative">
      {/* Background Grid Pattern - Only for Desktop */}
      <div
        className="absolute inset-0 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-6 w-full max-w-5xl px-4 relative">
        {/* First Row */}
        <div className="bg-yellow-300 border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-cyan-300">
          <h2 className="absolute top-2 left-2 text-2xl font-bold text-black">
            Defence and Security
          </h2>
          <img
            src="/path-to-image1.jpg"
            alt="Defence and Security"
            className="absolute bottom-2 right-2 h-16 w-16 object-contain"
          />
        </div>

        <div className="bg-yellow-300 border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-cyan-300">
          <h2 className="absolute top-2 left-2 text-2xl font-bold text-black">
            Fintech
          </h2>
          <img
            src="/path-to-image2.jpg"
            alt="Fintech"
            className="absolute bottom-2 right-2 h-16 w-16 object-contain"
          />
        </div>

        <div className="bg-yellow-300 border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-cyan-300">
          <h2 className="absolute top-2 left-2 text-2xl font-bold text-black">
            Healthcare
          </h2>
          <img
            src="/path-to-image3.jpg"
            alt="Healthcare"
            className="absolute bottom-2 right-2 h-16 w-16 object-contain"
          />
        </div>

        {/* Sponsored Track Box */}
        <div className="bg-black text-yellow-300 border-2 border-black rounded-lg relative flex items-center justify-center row-span-2">
          <h2 className="text-2xl font-bold text-center">Sponsored Track</h2>
        </div>

        {/* Second Row */}
        <div className="bg-yellow-300 border-2 border-black rounded-lg relative h-40 flex col-start-1 transition-colors duration-300 hover:bg-cyan-300">
          <h2 className="absolute top-2 left-2 text-2xl font-bold text-black">
            Open Innovation
          </h2>
          <img
            src="/path-to-image4.jpg"
            alt="Open Innovation"
            className="absolute bottom-2 right-2 h-16 w-16 object-contain"
          />
        </div>

        {/* Tracks Text */}
        <div className="bg-transparent col-span-2 col-start-2 flex items-center justify-center">
          <h2 className="text-8xl font-black text-black">TRACKS</h2>
        </div>

        {/* Third Row */}
        <div className="col-span-2 col-start-1">
          <div className="bg-yellow-300 border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-cyan-300">
            <h2 className="absolute top-2 left-2 text-2xl font-bold text-black">
              Energy and Agriculture
            </h2>
            <img
              src="/path-to-image5.jpg"
              alt="Energy and Agriculture"
              className="absolute bottom-2 right-2 h-16 w-16 object-contain"
            />
          </div>
        </div>

        <div className="col-span-2 col-start-3">
          <div className="bg-yellow-300 border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-cyan-300">
            <h2 className="absolute top-2 left-2 text-2xl font-bold text-black">
              Social Good and SDGs
            </h2>
            <img
              src="/path-to-image6.jpg"
              alt="Social Good and SDGs"
              className="absolute bottom-2 right-2 h-16 w-16 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center w-full">
        <h2 className="text-5xl font-black text-black mb-20">TRACKS</h2>

        {/* Track Box*/}
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-[-40px] sm:left-[-60px] text-black text-4xl font-bold px-0 py-2 z-10 top-1/2 transform -translate-y-1/2"
          >
            &lt;
          </button>

          <div
            className="bg-yellow-300 border-2 border-black rounded-lg flex flex-col  items-center justify-center transition-colors duration-300 hover:bg-cyan-300"
            style={{
              width: "310px",  
              height: "295px", 
              position: "relative",
            }}
          >
      
            <h2 className="text-3xl sm:text-xl px-1 font-bold text-center absolute top-4 w-full">
              {tracks[currentIndex].title}
            </h2>
            <img
              src={tracks[currentIndex].image}
              alt={tracks[currentIndex].title}
              className="h-30 w-30 object-contain mt-12"
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
