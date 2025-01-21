import React from "react";

const Tracks = () => {
  const tracks = [
    { title: "Defence and Security", img: "/path-to-image1.jpg" },
    { title: "Fintech", img: "/path-to-image2.jpg" },
    { title: "Healthcare", img: "/path-to-image3.jpg" },
    { title: "Open Innovation", img: "/path-to-image4.jpg" },
    { title: "Energy and Agriculture", img: "/path-to-image5.jpg" },
    { title: "Social Good and SDGs", img: "/path-to-image6.jpg" },
  ];

  return (
    <div className="bg-[#FFFF00] min-h-screen flex flex-col items-center py-8 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, black 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Main Grid Container */}
      <div className="grid grid-cols-4 grid-rows-3 gap-6 w-full max-w-5xl px-4 relative">
        {/* First Row (Defence, Fintech, Healthcare) */}
        {tracks.slice(0, 3).map((track, index) => (
          <div
            key={index}
            className="bg-[#FFFF00] border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-[#02FFFF]"
          >
            <h2 className="absolute top-2 left-2 text-lg font-bold text-black">
              {track.title}
            </h2>
            <img
              src={track.img}
              alt={track.title}
              className="absolute bottom-2 right-2 h-16 w-16 object-contain"
            />
          </div>
        ))}        
        {/* Sponsored Track Box (Spanning two rows) */}
        <div className="bg-black text-[#FFFF00] border-2 border-black rounded-lg relative flex items-center justify-center row-span-2">
          <h2 className="text-lg font-bold text-center">Sponsored Track</h2>
        </div>

        {/* Open Innovation Track (In second row) */}
        <div className="bg-[#FFFF00] border-2 border-black rounded-lg relative h-40 flex col-start-1 transition-colors duration-300 hover:bg-[#02FFFF]">
          <h2 className="absolute top-2 left-2 text-md font-bold text-black">
            Open Innovation
          </h2>
          <img
            src="/path-to-image4.jpg"
            alt="Open Innovation"
            className="absolute bottom-2 right-2 h-10 w-10 object-contain"
          />
        </div>
        {/* Tracks Text Box */}
        <div className="bg-transparent col-span-2 col-start-2 flex items-center justify-center">
          <h2 className="text-8xl font-black text-black">TRACKS</h2>
        </div>
        {/* Third Row (Energy and SDGs) */}
        <div className="col-span-2 col-start-1">
          <div className="bg-[#FFFF00] border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-[#02FFFF]">
            <h2 className="absolute top-2 left-2 text-lg font-bold text-black">
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
          <div className="bg-[#FFFF00] border-2 border-black rounded-lg relative h-40 flex transition-colors duration-300 hover:bg-[#02FFFF]">
            <h2 className="absolute top-2 left-2 text-lg font-bold text-black">
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
    </div>
  );
};

export default Tracks;