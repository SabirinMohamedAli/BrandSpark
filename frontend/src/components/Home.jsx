import React from "react";
import learningImage from "../images/1.png"; 

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4 sm:px-6 lg:px-8 xl:px-16 pt-32">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-md text-blue-600 font-semibold">Innovating the Future with BrandSpark Tech</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-900 leading-tight">
            Empowering
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-blue-900 leading-tight">
          Your Digital Future
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            At BrandSpark Technology, we provide top-notch digital solutions to help businesses thrive in the modern world.
            Our expert team specializes in software development, AI solutions, and cutting-edge web technologies, 
            ensuring our clients stay ahead in the digital space.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition duration-300">
              Get Started
            </button>
            <a href="#about" className="border border-blue-400 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-blue-700 hover:bg-blue-100 transition duration-300">
              Learn More
            </a>
          </div>
        </div>
        
        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src={learningImage} 
            alt="Heegan Technology Solutions"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
