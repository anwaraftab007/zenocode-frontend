import React from 'react';
import '../App.css'
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#161714]">
          <div className="
          ">
        <div className="h-[1px] flex items-start justify-start bg-[#ffffffde] animated-border mb-4"></div>
        <span className="text-center calibre text-3xl md:text-5xl animate-pulse">K'Please wait...</span></div>
      </div>
    );
};

export default Loader;